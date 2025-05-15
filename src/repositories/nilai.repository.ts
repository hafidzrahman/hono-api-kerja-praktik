import prisma from "../infrastructures/db.infrastructure";
import { APIError } from "../utils/api-error.util";

export default class NilaiRepository {
  public static async createNilaiPenguji(id: string, penguasaanKeilmuan: number, kemampuanPresentasi: number, kesesuaianUrgensi: number, catatan: string | null, nilaiPenguji: number, nim: string, nip: string, idJadwalSeminar?: string) {
    const nilai = await prisma.nilai.upsert({
      where: { id },
      update: {
        nilai_penguji: nilaiPenguji,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
      create: {
        nilai_penguji: nilaiPenguji,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
    });

    await prisma.komponen_penilaian_penguji.create({
      data: {
        penguasaan_keilmuan: penguasaanKeilmuan,
        kemampuan_presentasi: kemampuanPresentasi,
        kesesuaian_urgensi: kesesuaianUrgensi,
        catatan,
        id_nilai: nilai.id,
      },
    });

    return nilai;
  }

  public static async createNilaiPembimbing(id: string, penyelesaianMasalah: number, bimbinganSikap: number, kualitasLaporan: number, catatan: string | null, nilaiPembimbing: number, nim: string, nip: string, idJadwalSeminar?: string) {
    const nilai = await prisma.nilai.upsert({
      where: { id },
      update: {
        nilai_pembimbing: nilaiPembimbing,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
      create: {
        nilai_pembimbing: nilaiPembimbing,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
    });

    await prisma.komponen_penilaian_pembimbing.create({
      data: {
        penyelesaian_masalah: penyelesaianMasalah,
        bimbingan_sikap: bimbinganSikap,
        kualitas_laporan: kualitasLaporan,
        catatan,
        id_nilai: nilai.id,
      },
    });

    return nilai;
  }

  public static async getNilaiById(id: string) {
    return prisma.nilai.findUnique({
      where: { id },
      include: {
        komponen_penilaian_penguji: true,
        komponen_penilaian_pembimbing: true,
        komponen_penilaian_instansi: true,
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            email: true,
          },
        },
      },
    });
  }

  public static async updateNilaiAkhir(id: string, nilaiAkhir: number) {
    return prisma.nilai.update({
      where: { id },
      data: {
        nilai_akhir: nilaiAkhir,
      },
    });
  }

  public static async getTahunAjaranSekarang() {
    return prisma.tahun_ajaran.findFirst({
      orderBy: {
        id: "desc",
      },
    });
  }

  public static async getAllMahasiswaNilai(tahunAjaranId: number = 1) {
    let tahunAjaranSekarang;

    if (tahunAjaranId > 0) {
      tahunAjaranSekarang = await prisma.tahun_ajaran.findUnique({
        where: {
          id: tahunAjaranId,
        },
      });

      if (!tahunAjaranSekarang) {
        throw new APIError(`Waduh, Tahun ajaran tidak ditemukan, 😭`, 404);
      }
    } else {
      tahunAjaranSekarang = await this.getTahunAjaranSekarang();
      if (!tahunAjaranSekarang) {
        throw new APIError(`Waduh, Tahun ajaran tidak ditemukan, 😭`, 404);
      }
    }

    const mahasiswaData = await prisma.mahasiswa.findMany({
      select: {
        nim: true,
        nama: true,
        pendaftaran_kp: {
          where: {
            id_tahun_ajaran: tahunAjaranSekarang.id,
          },
          select: {
            id: true,
            status: true,
            kelas_kp: true,
            instansi: {
              select: {
                nama: true,
              },
            },
            pembimbing_instansi: {
              select: {
                nama: true,
              },
            },
            dosen_pembimbing: {
              select: {
                nama: true,
              },
            },
            dosen_penguji: {
              select: {
                nama: true,
              },
            },
            dokumen_seminar_kp: {
              select: {
                status: true,
              },
            },
          },
        },
        nilai: {
          select: {
            id: true,
            nilai_instansi: true,
            nilai_pembimbing: true,
            nilai_penguji: true,
            nilai_akhir: true,
            komponen_penilaian_instansi: {
              select: {
                deliverables: true,
                ketepatan_waktu: true,
                kedisiplinan: true,
                attitude: true,
                kerjasama_tim: true,
                inisiatif: true,
                masukan: true,
              },
            },
            komponen_penilaian_pembimbing: {
              select: {
                penyelesaian_masalah: true,
                bimbingan_sikap: true,
                kualitas_laporan: true,
                catatan: true,
              },
            },
            komponen_penilaian_penguji: {
              select: {
                penguasaan_keilmuan: true,
                kemampuan_presentasi: true,
                kesesuaian_urgensi: true,
                catatan: true,
              },
            },
          },
        },
      },
    });

    return {
      mahasiswaData,
      tahunAjaran: tahunAjaranSekarang,
    };
  }
}
