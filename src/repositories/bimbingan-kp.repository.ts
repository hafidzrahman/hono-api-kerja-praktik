import prisma from "../infrastructures/db.infrastructure";

export default class BimbinganKPRepository {
  public static async findBimbingan(nim: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
      },
      select: {
        id: true,
        judul_kp: true,
        mahasiswa: {
          select: {
            nama: true,
            nim: true,
          },
        },
        dosen_pembimbing: {
          select: {
            nip: true,
            nama: true,
          },
        },
        bimbingan: {
          select: {
            id: true,
            tanggal_bimbingan: true,
            catatan_bimbingan: true,
            status: true,
          },
        },
        level_akses: true,
      },
      orderBy: {
        tanggal_pengajuan: "desc",
      },
    });
  }

  public static async findDosen(email: string) {
    return prisma.dosen.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async findMahasiswaBimbingan(nip: string) {
    return prisma.mahasiswa.findMany({
      where: {
        pendaftaran_kp: {
          some: {
            nip_pembimbing: nip,
          },
        },
      },
      select: {
        nim: true,
        nama: true,
        pendaftaran_kp: {
          select: {
            id: true,
            status: true,
            tahun_ajaran: {
              select: {
                nama: true,
              },
            },
          },
        },
        bimbingan: {
          select: {
            id: true,
            tanggal_bimbingan: true,
          },
          orderBy: {
            tanggal_bimbingan: "desc",
          },
        },
      },
    });
  }

  public static async findDetailMahasiswaBimbingan(nip: string, id: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        nip_pembimbing: nip,
        id: id,
      },
      select: {
        id: true,
        status: true,
        tanggal_mulai: true,
        tanggal_selesai: true,
        judul_kp: true,
        kelas_kp: true,
        tahun_ajaran: {
          select: {
            nama: true,
          },
        },
        mahasiswa: {
          select: {
            nama: true,
            nim: true,
          },
        },
        instansi: {
          select: {
            nama: true,
            alamat: true,
            profil_singkat: true,
          },
        },
        pembimbing_instansi: {
          select: {
            id: true,
            nama: true,
            jabatan: true,
          },
        },
        dosen_pembimbing: {
          select: {
            nip: true,
            nama: true,
          },
        },
        daily_report: {
          select: {
            id: true,
            tanggal_presensi: true,
            status: true,
            catatan_evaluasi: true,
            detail_daily_report: {
              select: {
                id: true,
                waktu_mulai: true,
                waktu_selesai: true,
                judul_agenda: true,
                deskripsi_agenda: true,
              },
            },
          },
        },
        bimbingan: {
          select: {
            id: true,
            tanggal_bimbingan: true,
            catatan_bimbingan: true,
            status: true,
          },
        },
        nilai: {
          select: {
            id: true,
            tanggal: true,
            nilai_pembimbing: true,
            komponen_penilaian_pembimbing: {
              select: {
                penyelesaian_masalah: true,
                bimbingan_sikap: true,
                kualitas_laporan: true,
                catatan: true,
              },
            },
          },
        },
      },
    });
  }

  public static async createBimbingan(
    nim: string,
    nip: string,
    id: string,
    catatan_bimbingan: string
  ) {
    return prisma.bimbingan.create({
      data: {
        mahasiswa: {
          connect: {
            nim: nim,
          },
        },
        pendaftaran_kp: {
          connect: {
            id: id,
          },
        },
        dosen_pembimbing: {
          connect: {
            nip: nip,
          },
        },
        tanggal_bimbingan: new Date(),
        catatan_bimbingan: catatan_bimbingan,
        status: "Selesai",
      },
    });
  }

  public static async createNilai(
    id: string,
    nip: string,
    nilai_pembimbing: number,
    komponen_penilaian: {
      penyelesaian_masalah: number;
      bimbingan_sikap: number;
      kualitas_laporan: number;
      catatan: string;
    }
  ) {
    return prisma.nilai.update({
      where: {
        id: id,
      },
      data: {
        nip: nip,
        nilai_pembimbing: nilai_pembimbing,
        komponen_penilaian_pembimbing: {
          create: {
            penyelesaian_masalah: komponen_penilaian.penyelesaian_masalah,
            bimbingan_sikap: komponen_penilaian.bimbingan_sikap,
            kualitas_laporan: komponen_penilaian.kualitas_laporan,
            catatan: komponen_penilaian.catatan,
          },
        },
      },
    });
  }

  public static async findIdKomponenPenilaianPembimbing(id: string) {
    return prisma.komponen_penilaian_pembimbing.findFirst({
      where: {
        id_nilai: id,
      },
      select: {
        id: true,
      },
    });
  }

  public static async updateNilai(
    id: string,
    nilai_pembimbing: number,
    komponen_penilaian: {
      penyelesaian_masalah: number;
      bimbingan_sikap: number;
      kualitas_laporan: number;
      catatan: string;
    },
    id_komponen: string
  ) {
    return prisma.nilai.update({
      where: {
        id: id,
      },
      data: {
        nilai_pembimbing: nilai_pembimbing,
        komponen_penilaian_pembimbing: {
          update: {
            where: {
              id: id_komponen,
            },
            data: {
              penyelesaian_masalah: komponen_penilaian.penyelesaian_masalah,
              bimbingan_sikap: komponen_penilaian.bimbingan_sikap,
              kualitas_laporan: komponen_penilaian.kualitas_laporan,
              catatan: komponen_penilaian.catatan,
            },
          },
        },
      },
    });
  }
}
