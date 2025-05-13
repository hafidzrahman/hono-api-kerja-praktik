import prisma from "../infrastructures/db.infrastructure";
import { jadwal, log_jadwal, status_jadwal } from "../generated/prisma";
import { CreateJadwalInput, UpdateJadwalInput, LogJadwalInput, JadwalWithRelations, JadwalSayaParams } from "../types/seminar-kp/jadwal.type";

export default class JadwalRepository {
  public static async postJadwal(data: CreateJadwalInput): Promise<jadwal> {
    const waktu_mulai = new Date(data.waktu_mulai);
    const waktu_selesai = new Date(waktu_mulai);
    waktu_selesai.setHours(waktu_selesai.getHours() + 1);

    const jadwal = await prisma.jadwal.create({
      data: {
        tanggal: data.tanggal,
        waktu_mulai,
        waktu_selesai,
        status: "Menunggu" as status_jadwal,
        nim: data.nim,
        nama_ruangan: data.nama_ruangan,
        id_pendaftaran_kp: data.id_pendaftaran_kp,
      },
    });

    if (data.nip_penguji) {
      await prisma.pendaftaran_kp.update({
        where: { id: data.id_pendaftaran_kp },
        data: {
          nip_penguji: data.nip_penguji,
        },
      });
    }

    return jadwal;
  }

  public static async putJadwal(data: UpdateJadwalInput): Promise<jadwal> {
    let waktu_selesai = data.waktu_selesai;
    if (data.waktu_mulai && !data.waktu_selesai) {
      const waktu_mulai = new Date(data.waktu_mulai);
      waktu_selesai = new Date(waktu_mulai);
      waktu_selesai.setHours(waktu_selesai.getHours() + 1);
    }

    const jadwal = await prisma.jadwal.update({
      where: { id: data.id },
      data: {
        tanggal: data.tanggal,
        waktu_mulai: data.waktu_mulai,
        waktu_selesai,
        status: data.status,
        nama_ruangan: data.nama_ruangan,
      },
    });

    if (data.nip_penguji) {
      const jadwal = await prisma.jadwal.findUnique({
        where: { id: data.id },
        select: { id_pendaftaran_kp: true },
      });

      if (jadwal?.id_pendaftaran_kp) {
        await prisma.pendaftaran_kp.update({
          where: { id: jadwal.id_pendaftaran_kp },
          data: {
            nip_penguji: data.nip_penguji,
          },
        });
      }
    }

    return jadwal;
  }

  public static async getJadwalById(id: string): Promise<JadwalWithRelations | null> {
    return prisma.jadwal.findUnique({
      where: { id },
      include: {
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            email: true,
          },
        },
        pendaftaran_kp: {
          include: {
            dosen_pembimbing: {
              select: {
                nip: true,
                nama: true,
              },
            },
            dosen_penguji: {
              select: {
                nip: true,
                nama: true,
              },
            },
          },
        },
        ruangan: true,
      },
    });
  }

  public static async getJadwalByPendaftaranKpId(id_pendaftaran_kp: string): Promise<jadwal | null> {
    return prisma.jadwal.findFirst({
      where: { id_pendaftaran_kp },
    });
  }

  public static async logJadwalChanges(data: LogJadwalInput): Promise<log_jadwal> {
    return prisma.log_jadwal.create({
      data: {
        log_type: data.log_type,
        tanggal_lama: data.tanggal_lama || null,
        tanggal_baru: data.tanggal_baru,
        ruangan_lama: data.ruangan_lama || null,
        ruangan_baru: data.ruangan_baru,
        keterangan: data.keterangan,
        id_jadwal: data.id_jadwal,
        nip: data.nip || null,
        created_at: new Date(),
      },
    });
  }

  public static async getRuangans(): Promise<{ nama: string }[]> {
    return prisma.ruangan.findMany({
      select: {
        nama: true,
      },
    });
  }

  public static getDosens(): Promise<{ nip: string; nama: string }[]> {
    return prisma.dosen.findMany({
      select: {
        nip: true,
        nama: true,
      },
    });
  }

  public static async checkRuanganAvailability(nama_ruangan: string, tanggal: Date, waktu_mulai: Date, waktu_selesai: Date, excludeJadwalId?: string): Promise<boolean> {
    const conflicts = await prisma.jadwal.findMany({
      where: {
        nama_ruangan,
        tanggal,
        AND: [
          {
            waktu_mulai: {
              lt: waktu_selesai,
            },
          },
          {
            waktu_selesai: {
              gt: waktu_mulai,
            },
          },
          ...(excludeJadwalId ? [{ id: { not: excludeJadwalId } }] : []),
        ],
      },
    });

    return conflicts.length === 0;
  }

  public static async getJadwalByPendaftaranId(id_pendaftaran_kp: string) {
    return await prisma.jadwal.findFirst({
      where: {
        id_pendaftaran_kp: id_pendaftaran_kp,
      },
      include: {
        ruangan: true,
      },
    });
  }

  public static async getPendaftaranKpById(id_pendaftaran_kp: string) {
    return await prisma.pendaftaran_kp.findFirst({
      where: {
        id: id_pendaftaran_kp,
      },
    });
  }

  public static async getJadwalMahasiswaSaya(nip: string) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const jadwal = {
      where: {
        pendaftaran_kp: {
          nip_penguji: nip,
        },
      },
      include: {
        pendaftaran_kp: {
          include: {
            mahasiswa: true,
            dosen_pembimbing: {
              select: {
                nama: true,
                nip: true,
              },
            },
            pembimbing_instansi: {
              select: {
                nama: true,
                email: true,
              },
            },
            instansi: {
              select: {
                nama: true,
                alamat: true,
              },
            },
            tahun_ajaran: {
              select: {
                nama: true,
              },
            },
          },
        },
        ruangan: true,
      },
    };

    const allJadwal = await prisma.jadwal.findMany(jadwal);

    const todayJadwal = await prisma.jadwal.findMany({
      ...jadwal,
      where: {
        ...jadwal.where,
        tanggal: currentDate,
      },
    });

    const mahasiswaNimList = allJadwal.map(jadwal => jadwal.pendaftaran_kp?.mahasiswa?.nim).filter(Boolean) as string[];

    const nilai = await prisma.nilai.findMany({
      where: {
        nim: {
          in: mahasiswaNimList,
        },
        nip,
      },
      select: {
        nim: true,
        nilai_penguji: true,
      },
    });

    const mahasiswaDinilaiMap = new Map();
    nilai.forEach(nilai => {
      if (nilai.nilai_penguji !== null && nilai.nim) {
        mahasiswaDinilaiMap.set(nilai.nim, true);
      }
    });

    const totalMahasiswa = allJadwal.length;
    const mahasiswaDinilai = mahasiswaDinilaiMap.size;
    const mahasiswaBelumDinilai = totalMahasiswa - mahasiswaDinilai;
    const persentaseDinilai = totalMahasiswa ? Math.round((mahasiswaDinilai / totalMahasiswa) * 100) : 0;

    return {
      statistics: {
        totalMahasiswa,
        mahasiswaDinilai,
        mahasiswaBelumDinilai,
        persentaseDinilai,
      },
      jadwalHariIni: todayJadwal,
      semuaJadwal: allJadwal,
      mahasiswaDinilaiMap: Object.fromEntries(mahasiswaDinilaiMap),
    };
  }

  public static async getTahunAjaran() {
    return prisma.tahun_ajaran.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  public static async getAllJadwal() {
    const jadwal = await prisma.jadwal.findMany({
      include: {
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            email: true
          }
        }
      },
    })
  }
}
