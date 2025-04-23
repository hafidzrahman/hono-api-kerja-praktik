import prisma from "../infrastructures/db.infrastructure";
import { status_presensi } from "../generated/prisma";
import { APIError } from "../utils/api-error.util";

export default class DailyReportRepository {
  public static async getNIM(email: string) {
    const result = await prisma.mahasiswa.findUnique({
      where: {
        email: email,
      },
      select: {
        nim: true,
      },
    });

    if (!result) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan! 😭`, 404);
    }

    return result;
  }

  public static async getPendaftaranKP(nim: string) {
    const result = await prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
      },
      select: {
        id: true,
        id_instansi: true,
        email_pembimbing_instansi: true,
        nip_pembimbing: true,
        level_akses: true,
      },
    });

    if (!result) {
      throw new APIError(`Waduh, mahasiswa belum mendaftar KP nih! 😭`, 404);
    }

    return result;
  }

  public static async getDailyReport(
    nim: string,
    email_pembimbing_instansi: string,
    nip_pembimbing: string
  ) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
      },
      select: {
        instansi: {
          select: {
            nama: true,
          },
        },
        tanggal_mulai: true,
        tanggal_selesai: true,
        pembimbing_instansi: {
          where: {
            email: email_pembimbing_instansi,
          },
          select: {
            nama: true,
          },
        },
        dosen_pembimbing: {
          where: {
            nip: nip_pembimbing,
          },
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

  public static async getDailyReportByDate(nim: string, date: Date) {
    return prisma.daily_report.findFirst({
      where: {
        nim: nim,
        tanggal_presensi: date,
      },
    });
  }

  public static async getInstansiLocation(id_instansi: string) {
    return prisma.instansi.findFirst({
      where: {
        id: id_instansi,
      },
      select: {
        latitude: true,
        longitude: true,
      },
    });
  }

  public static async createDailyReport(
    nim: string,
    latitude: number,
    longitude: number
  ) {
    return prisma.daily_report.create({
      data: {
        mahasiswa: {
          connect: {
            nim: nim,
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
    id_daily_report: string,
    judul_agenda: string,
    deskripsi_agenda: string
  ) {
    return prisma.detail_daily_report.create({
      data: {
        daily_report: {
          connect: {
            id: id_daily_report,
          },
        },
        waktu: new Date(),
        judul_agenda: judul_agenda,
        deskripsi_agenda: deskripsi_agenda,
      },
    });
  }

  public static async updateDetailDailyReport(
    id_detail_daily_report: number,
    judul_agenda: string,
    deskripsi_agenda: string
  ) {
    return prisma.detail_daily_report.update({
      where: {
        id: id_detail_daily_report,
      },
      data: {
        judul_agenda: judul_agenda,
        deskripsi_agenda: deskripsi_agenda,
      },
    });
  }

  public static async evaluateDailyReport(
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

  public static async getPembimbingInstansi(email: string) {
    return prisma.pembimbing_instansi.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async getMahasiswaForPembimbingInstansi(
    email_pembimbing_instansi: string
  ) {
    return prisma.mahasiswa.findMany({
      where: {
        pendaftaran_kp: {
          some: {
            email_pembimbing_instansi: email_pembimbing_instansi,
          },
        },
      },
      select: {
        nama: true,
        nim: true,
        pendaftaran_kp: {
          select: {
            tanggal_mulai: true,
            tanggal_selesai: true,
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

  public static async getDosenPembimbing(email: string) {
    return prisma.dosen.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async getMahasiswaForDosenPembimbing(nip: string) {
    return prisma.mahasiswa.findMany({
      where: {
        pendaftaran_kp: {
          some: {
            nip_pembimbing: nip,
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

  public static async countDailyReport(nim: string): Promise<number> {
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

  public static async getNilai(email: string) {
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
