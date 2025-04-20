import prisma from "../infrastructures/db.infrastructure";
import { status_presensi } from "../generated/prisma";

export default class DailyReportRepository {
  public static async getAccessLevel(email: string) {
    const result = await prisma.pendaftaran_kp.findFirst({
      where: {
        mahasiswa: {
          email: email,
        },
      },
      select: {
        level_akses: true,
      },
    });

    return result?.level_akses ?? 0;
  }

  public static async findDailyReport(email: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        mahasiswa: {
          email: email,
        },
      },
      select: {
        tanggal_mulai: true,
        tanggal_selesai: true,
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
        mahasiswa: {
          select: {
            nama: true,
            nim: true,
            daily_report: {
              select: {
                id: true,
                tanggal_presensi: true,
                status: true,
                catatan_evaluasi: true,
                detail_daily_report: {
                  select: {
                    id: true,
                    waktu: true,
                    judul_agenda: true,
                    deskripsi_agenda: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  public static async findDailyReportByDate(email: string, date: Date) {
    return prisma.daily_report.findFirst({
      where: {
        mahasiswa: {
          email: email,
        },
        tanggal_presensi: date,
      },
    });
  }

  public static async getInstansiLocation(email: string) {
    return prisma.instansi.findFirst({
      select: {
        latitude: true,
        longitude: true,
      },
    });
  }

  public static async createDailyReport(
    email: string,
    latitude: number,
    longitude: number
  ) {
    return prisma.daily_report.create({
      data: {
        mahasiswa: {
          connect: {
            email: email,
          },
        },
        tanggal_presensi: new Date(),
        status: "Menunggu",
        latitude: latitude,
        longitude: longitude,
      },
    });
  }

  public static async createDetailDailyReport(
    idDailyReport: string,
    judulAgenda: string,
    deskripsiAgenda: string
  ) {
    return prisma.detail_daily_report.create({
      data: {
        daily_report: {
          connect: {
            id: idDailyReport,
          },
        },
        waktu: new Date(),
        judul_agenda: judulAgenda,
        deskripsi_agenda: deskripsiAgenda,
      },
    });
  }

  public static async evaluateDailyReport(
    idDailyReport: string,
    catatanEvaluasi: string,
    status: string
  ) {
    return prisma.daily_report.update({
      where: {
        id: idDailyReport,
      },
      data: {
        catatan_evaluasi: catatanEvaluasi,
        status: status as status_presensi,
      },
    });
  }

  public static async validateDetailDailyReportOwnership(
    email: string,
    idDetailDailyReport: number
  ): Promise<boolean> {
    const result = await prisma.detail_daily_report.findFirst({
      where: {
        id: idDetailDailyReport,
        daily_report: {
          mahasiswa: {
            email: email,
          },
        },
      },
    });

    return !!result; // Return true jika detail daily report dimiliki oleh mahasiswa
  }

  public static async updateDetailDailyReport(
    idDetailDailyReport: number,
    judulAgenda: string,
    deskripsiAgenda: string
  ) {
    return prisma.detail_daily_report.update({
      where: {
        id: idDetailDailyReport,
      },
      data: {
        judul_agenda: judulAgenda,
        deskripsi_agenda: deskripsiAgenda,
      },
    });
  }

  public static async findPembimbingByEmail(email: string) {
    return prisma.pembimbing_instansi.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async findMahasiswaAndDailyReportForPembimbing(
    emailPembimbing: string
  ) {
    return prisma.mahasiswa.findMany({
      where: {
        pendaftaran_kp: {
          some: {
            email_pembimbing_instansi: emailPembimbing,
          },
        },
      },
      select: {
        nama: true,
        nim: true,
        daily_report: {
          select: {
            id: true,
            tanggal_presensi: true,
            status: true,
            catatan_evaluasi: true,
            detail_daily_report: {
              select: {
                id: true,
                judul_agenda: true,
                deskripsi_agenda: true,
                waktu: true,
              },
            },
          },
        },
      },
    });
  }

  public static async findDosenByEmail(email: string) {
    return prisma.dosen.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async findMahasiswaAndDailyReportForDosen(emailDosen: string) {
    return prisma.mahasiswa.findMany({
      where: {
        bimbingan: {
          some: {
            dosen_pembimbing: {
              email: emailDosen,
            },
          },
        },
      },
      select: {
        nama: true,
        nim: true,
        daily_report: {
          select: {
            id: true,
            tanggal_presensi: true,
            status: true,
            catatan_evaluasi: true,
            detail_daily_report: {
              select: {
                id: true,
                waktu: true,
                judul_agenda: true,
                deskripsi_agenda: true,
              },
            },
          },
        },
      },
    });
  }

  public static async countDailyReportsByNIM(nim: string): Promise<number> {
    return prisma.daily_report.count({
      where: {
        mahasiswa: {
          nim: nim,
        },
      },
    });
  }

  public static async createNilai(
    emailPembimbing: string,
    nim: string,
    nilaiInstansi: number,
    komponenPenilaian: {
      deliverables: number;
      ketepatanWaktu: number;
      kedisiplinan: number;
      attitude: number;
      kerjasamaTim: number;
      inisiatif: number;
      masukan: string;
    }
  ) {
    return prisma.nilai.create({
      data: {
        nim: nim,
        nilai_instansi: nilaiInstansi,
        email_pembimbing_instansi: emailPembimbing, // Pastikan kolom ini sesuai dengan relasi
        komponen_penilaian_instansi: {
          create: {
            deliverables: komponenPenilaian.deliverables,
            ketepatan_waktu: komponenPenilaian.ketepatanWaktu,
            kedisiplinan: komponenPenilaian.kedisiplinan,
            attitude: komponenPenilaian.attitude,
            kerjasama_tim: komponenPenilaian.kerjasamaTim,
            inisiatif: komponenPenilaian.inisiatif,
            masukan: komponenPenilaian.masukan,
          },
        },
      },
    });
  }

  public static async getNilaiByMahasiswa(email: string) {
    return prisma.nilai.findFirst({
      where: {
        mahasiswa: {
          email: email,
        },
      },
      select: {
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
    });
  }
}
