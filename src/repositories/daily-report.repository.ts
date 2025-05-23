import prisma from "../infrastructures/db.infrastructure";
import { status_presensi } from "../generated/prisma";

export default class DailyReportRepository {
  public static async findMahasiswa(email: string) {
    return await prisma.mahasiswa.findUnique({
      where: {
        email: email,
      },
      select: {
        nim: true,
      },
    });
  }

  public static async findIdPendaftaranKP(nim: string) {
    return await prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
      },
      select: {
        id: true,
        level_akses: true,
        instansi: {
          select: {
            id: true,
            nama: true,
            latitude: true,
            longitude: true,
          },
        },
      },
      orderBy: {
        tanggal_pengajuan: "desc",
      },
    });
  }

  public static async findPendaftaranKPByNIM(nim: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
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
            nim: true,
            nama: true,
          },
        },
        instansi: {
          select: {
            id: true,
            nama: true,
            latitude: true,
            longitude: true,
          },
        },
        pembimbing_instansi: {
          select: {
            id: true,
            nama: true,
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
        nilai: {
          select: {
            id: true,
            nilai_instansi: true,
            nilai_pembimbing: true,
            komponen_penilaian_instansi: {
              select: {
                id: true,
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
                id: true,
                penyelesaian_masalah: true,
                bimbingan_sikap: true,
                kualitas_laporan: true,
                catatan: true,
              },
            },
          },
        },
        level_akses: true,
      },
      orderBy: {
        tanggal_pengajuan: "desc",
      },
    });
  }

  public static async findIdDailyReport(id: string) {
    return prisma.daily_report.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });
  }

  public static async findDailyReportById(
    id: string,
    nim: string,
    id_pendaftaran_kp: string
  ) {
    return prisma.daily_report.findFirst({
      where: {
        id: id,
        nim: nim,
        id_pendaftaran_kp: id_pendaftaran_kp,
      },
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
    });
  }

  public static async findDailyReportByDate(
    date: Date,
    nim: string,
    id: string
  ) {
    return prisma.daily_report.findFirst({
      where: {
        tanggal_presensi: date,
        nim: nim,
        id_pendaftaran_kp: id,
      },
    });
  }

  public static async createDailyReport(
    nim: string,
    id: string,
    latitude: number,
    longitude: number
  ) {
    return prisma.daily_report.create({
      data: {
        latitude: latitude,
        longitude: longitude,
        pendaftaran_kp: {
          connect: {
            id: id,
          },
        },
        mahasiswa: {
          connect: {
            nim: nim,
          },
        },
      },
    });
  }

  public static async createDetailDailyReport(
    waktu_mulai: string,
    waktu_selesai: string,
    judul_agenda: string,
    deskripsi_agenda: string,
    id_daily_report: string
  ) {
    return prisma.detail_daily_report.create({
      data: {
        daily_report: {
          connect: {
            id: id_daily_report,
          },
        },
        waktu_mulai: waktu_mulai,
        waktu_selesai: waktu_selesai,
        judul_agenda: judul_agenda,
        deskripsi_agenda: deskripsi_agenda,
      },
    });
  }

  public static async updateDetailDailyReport(
    waktu_mulai: string,
    waktu_selesai: string,
    judul_agenda: string,
    deskripsi_agenda: string,
    id_detail_daily_report: number
  ) {
    return prisma.detail_daily_report.update({
      where: {
        id: id_detail_daily_report,
      },
      data: {
        waktu_mulai: waktu_mulai,
        waktu_selesai: waktu_selesai,
        judul_agenda: judul_agenda,
        deskripsi_agenda: deskripsi_agenda,
      },
    });
  }

  public static async updateDailyReport(
    id_daily_report: string,
    catatan_evaluasi: string,
    status: string
  ) {
    return prisma.daily_report.update({
      where: {
        id: id_daily_report,
      },
      data: {
        catatan_evaluasi: catatan_evaluasi,
        status: status as status_presensi,
      },
    });
  }

  public static async findPembimbingInstansi(email: string) {
    return prisma.pembimbing_instansi.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        nama: true,
        jabatan: true,
        instansi: {
          select: {
            id: true,
            nama: true,
            alamat: true,
            profil_singkat: true,
          },
        },
      },
    });
  }

  public static async findMahasiswaInstansi(email_pembimbing_instansi: string) {
    return prisma.mahasiswa.findMany({
      where: {
        pendaftaran_kp: {
          some: {
            email_pembimbing_instansi: email_pembimbing_instansi,
          },
        },
      },
      select: {
        nim: true,
        nama: true,
        pendaftaran_kp: {
          select: {
            id: true,
            tanggal_mulai: true,
            tanggal_selesai: true,
          },
        },
        daily_report: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  // public static async countDailyReport(nim: string): Promise<number> {
  //   return prisma.daily_report.count({
  //     where: {
  //       mahasiswa: {
  //         nim: nim,
  //       },
  //     },
  //   });
  // }

  public static async createNilai(
    id: string,
    nilai_instansi: number,
    komponen_penilaian: {
      deliverables: number;
      ketepatan_waktu: number;
      kedisiplinan: number;
      attitude: number;
      kerjasama_tim: number;
      inisiatif: number;
      masukan: string;
    }
  ) {
    return prisma.nilai.create({
      data: {
        id_pendaftaran_kp: id,
        nilai_instansi: nilai_instansi,
        komponen_penilaian_instansi: {
          create: {
            deliverables: komponen_penilaian.deliverables,
            ketepatan_waktu: komponen_penilaian.ketepatan_waktu,
            kedisiplinan: komponen_penilaian.kedisiplinan,
            attitude: komponen_penilaian.attitude,
            kerjasama_tim: komponen_penilaian.kerjasama_tim,
            inisiatif: komponen_penilaian.inisiatif,
            masukan: komponen_penilaian.masukan,
          },
        },
      },
    });
  }

  public static async updateNilai(
    id: string,
    nilai_instansi: number,
    komponen_penilaian: {
      deliverables: number;
      ketepatan_waktu: number;
      kedisiplinan: number;
      attitude: number;
      kerjasama_tim: number;
      inisiatif: number;
      masukan: string;
    }
  ) {
    return prisma.nilai.update({
      where: {
        id: id,
      },
      data: {
        id_pendaftaran_kp: id,
        nilai_instansi: nilai_instansi,
        komponen_penilaian_instansi: {
          create: {
            deliverables: komponen_penilaian.deliverables,
            ketepatan_waktu: komponen_penilaian.ketepatan_waktu,
            kedisiplinan: komponen_penilaian.kedisiplinan,
            attitude: komponen_penilaian.attitude,
            kerjasama_tim: komponen_penilaian.kerjasama_tim,
            inisiatif: komponen_penilaian.inisiatif,
            masukan: komponen_penilaian.masukan,
          },
        },
      },
    });
  }

  public static async findDetailMahasiswaInstansi(id: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        status: true,
        tanggal_mulai: true,
        tanggal_selesai: true,
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
          },
        },
        daily_report: {
          select: {
            id: true,
            tanggal_presensi: true,
            status: true,
            catatan_evaluasi: true,
          },
        },
        nilai: {
          select: {
            id: true,
            tanggal: true,
            nilai_instansi: true,
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
          },
        },
      },
    });
  }

  public static async findDetailDailyReportMahasiswaInstansi(id: string) {
    return prisma.daily_report.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            pendaftaran_kp: {
              select: {
                id: true,
                status: true,
                tanggal_mulai: true,
                tanggal_selesai: true,
              },
            },
          },
        },
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
    });
  }

  public static async findKoordinator(email: string) {
    return prisma.dosen.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async findAllMahasiswa() {
    return prisma.pendaftaran_kp.findMany({
      select: {
        id: true,
        status: true,
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
            id: true,
            nama: true,
          },
        },
        daily_report: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });
  }

  public static async findAllDetailMahasiswa(id: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
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
}
