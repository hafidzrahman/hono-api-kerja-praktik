import prisma from "../infrastructures/db.infrastructure";
import { status_presensi } from "../generated/prisma";

export default class DailyReportRepository {
  public static async findMahasiswa(email: string) {
    return await prisma.mahasiswa.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async findPendaftaranKP(nim: string) {
    return await prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
      },
    });
  }

  public static async findDailyReport(
    nim: string,
    email_pembimbing_instansi: string,
    nip_pembimbing: string
  ) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        nim: nim,
      },
      select: {
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
        status: true,
        tanggal_mulai: true,
        tanggal_selesai: true,
        instansi: {
          select: {
            nama: true,
          },
        },
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
      },
    });
  }

  public static async findDailyReportByDate(nim: string, date: Date) {
    return prisma.daily_report.findFirst({
      where: {
        nim: nim,
        tanggal_presensi: date,
      },
    });
  }

  public static async findInstansi(id_instansi: string) {
    return prisma.instansi.findFirst({
      where: {
        id: id_instansi,
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
        nama: true,
        nim: true,
        pendaftaran_kp: {
          select: {
            tanggal_mulai: true,
            tanggal_selesai: true,
          },
        },
      },
    });
  }

  public static async findDosenPembimbing(email: string) {
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
        nama: true,
        nim: true,
        pendaftaran_kp: {
          select: {
            tanggal_mulai: true,
            tanggal_selesai: true,
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
    email: string,
    nim: string,
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
        nim: nim,
        nilai_instansi: nilai_instansi,
        email_pembimbing_instansi: email,
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

  public static async findNilai(nim: string) {
    return prisma.nilai.findFirst({
      where: {
        nim: nim,
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

  public static async findDetailMahasiswaInstansi(email: string, nim: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        email_pembimbing_instansi: email,
        nim: nim,
      },
      select: {
        mahasiswa: {
          select: {
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
        },
        instansi: {
          select: {
            nama: true,
            alamat: true,
          },
        },
        tanggal_mulai: true,
        tanggal_selesai: true,
      },
    });
  }

  public static async findDetailMahasiswaBimbingan(nip: string, nim: string) {
    return prisma.pendaftaran_kp.findFirst({
      where: {
        nip_pembimbing: nip,
        nim: nim,
      },
      select: {
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
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
        },
        instansi: {
          select: {
            nama: true,
            alamat: true,
          },
        },
        tanggal_mulai: true,
        tanggal_selesai: true,
      },
    });
  }
}
