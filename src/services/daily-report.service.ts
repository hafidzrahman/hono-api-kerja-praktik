import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";

export default class DailyReportService {
  public static async checkAccessLevel(email: string) {
    const { nim } = await DailyReportRepository.getNIM(email);
    const { id, level_akses } = await DailyReportRepository.getPendaftaranKP(
      nim
    );

    return {
      response: true,
      message:
        level_akses >= 5 ? "Sudah bisa diakses! 😁" : "Belum bisa diakses! 😡",
      data: {
        id: id,
        nim: nim,
        accessLevel: level_akses,
        hasAccess: level_akses >= 5,
      },
    };
  }

  public static async getDailyReport(email: string) {
    const { nim } = await DailyReportRepository.getNIM(email);
    const { email_pembimbing_instansi, nip_pembimbing } =
      await DailyReportRepository.getPendaftaranKP(nim);

    if (!email_pembimbing_instansi) {
      throw new APIError(`Email pembimbing instansi tidak ada! 😭`, 404);
    }

    if (!nip_pembimbing) {
      throw new APIError(`NIP dosen pembimbing tidak ada! 😭`, 404);
    }

    const dailyReport = await DailyReportRepository.getDailyReport(
      nim,
      email_pembimbing_instansi,
      nip_pembimbing
    );

    if (!dailyReport) {
      throw new APIError(`Data daily report tidak ditemukan! 😭`, 404);
    }

    return {
      response: true,
      message: "Data daily report berhasil diambil! 😁",
      data: dailyReport,
    };
  }

  public static async checkPresence(email: string) {
    const { nim } = await DailyReportRepository.getNIM(email);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const report = await DailyReportRepository.getDailyReportByDate(nim, today);

    return !!report;
  }

  public static async getInstansiLocation(email: string) {
    const { nim } = await DailyReportRepository.getNIM(email);
    const { id_instansi } = await DailyReportRepository.getPendaftaranKP(nim);

    if (!id_instansi) {
      throw new APIError(`Id instansi tidak ada! 😭`, 404);
    }

    const instansi = await DailyReportRepository.getInstansiLocation(
      id_instansi
    );

    if (!instansi) {
      throw new APIError("Instansi tidak ditemukan! 😭", 404);
    }

    return instansi;
  }

  public static async createDailyReport(
    email: string,
    latitude: number,
    longitude: number
  ) {
    const { nim } = await DailyReportRepository.getNIM(email);

    const dailyReport = await DailyReportRepository.createDailyReport(
      nim,
      latitude,
      longitude
    );

    return {
      response: true,
      message: "Presensi berhasil! 😁",
      data: dailyReport,
    };
  }

  public static async createDetailDailyReport(
    id_daily_report: string,
    judul_agenda: string,
    deskripsi_agenda: string
  ) {
    const detailDailyReport =
      await DailyReportRepository.createDetailDailyReport(
        id_daily_report,
        judul_agenda,
        deskripsi_agenda
      );

    return {
      response: true,
      message: "Detail daily report berhasil dibuat! 😁",
      data: detailDailyReport,
    };
  }

  public static async updateDetailDailyReport(
    id_detail_daily_report: number,
    judul_agenda: string,
    deskripsi_agenda: string
  ) {
    const updateDetailDailyReport =
      await DailyReportRepository.updateDetailDailyReport(
        id_detail_daily_report,
        judul_agenda,
        deskripsi_agenda
      );

    return {
      response: true,
      message: "Detail daily report berhasil diperbarui! 😁",
      data: updateDetailDailyReport,
    };
  }

  public static async evaluateDailyReport(
    id_daily_report: string,
    catatan_evaluasi: string,
    status: string
  ) {
    const evaluateDailyReport = await DailyReportRepository.evaluateDailyReport(
      id_daily_report,
      catatan_evaluasi,
      status
    );

    return {
      response: true,
      message: "Evaluasi daily report berhasil disimpan! 😁",
      data: evaluateDailyReport,
    };
  }

  public static async getMahasiswaForPembimbingInstansi(
    email_pembimbing_instansi: string
  ) {
    const data = await DailyReportRepository.getPembimbingInstansi(
      email_pembimbing_instansi
    );

    if (!data) {
      throw new APIError("Pembimbing instansi tidak ditemukan! 😭", 404);
    }

    const mahasiswa =
      await DailyReportRepository.getMahasiswaForPembimbingInstansi(
        email_pembimbing_instansi
      );

    return {
      response: true,
      message: "Data mahasiswa bimbingan instansi berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getMahasiswaForDosenPembimbing(email: string) {
    const dosen = await DailyReportRepository.getDosenPembimbing(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const mahasiswa =
      await DailyReportRepository.getMahasiswaForDosenPembimbing(dosen.nip);

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async createNilai(
    email: string,
    nim: string,
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
    const dailyReportCount = await DailyReportRepository.countDailyReport(nim);
    if (dailyReportCount <= 22) {
      throw new APIError(
        "Mahasiswa belum memenuhi syarat jumlah daily report (lebih dari 22)! 😡",
        400
      );
    }

    const nilai_akhir =
      komponen_penilaian.deliverables * 0.15 +
      komponen_penilaian.ketepatan_waktu * 0.1 +
      komponen_penilaian.kedisiplinan * 0.15 +
      komponen_penilaian.attitude * 0.15 +
      komponen_penilaian.kerjasama_tim * 0.25 +
      komponen_penilaian.inisiatif * 0.2;

    const result = await DailyReportRepository.createNilai(
      email,
      nim,
      nilai_akhir,
      komponen_penilaian
    );

    return {
      response: true,
      message: "Nilai berhasil disimpan! 😁",
      data: result,
    };
  }

  public static async getNilai(email: string) {
    const { nim } = await DailyReportRepository.getNIM(email);
    const nilai = await DailyReportRepository.getNilai(nim);

    if (!nilai) {
      throw new APIError("Nilai belum diberikan pembimbing instansi! 😭", 404);
    }

    return {
      response: true,
      message: "Nilai berhasil diambil! 😁",
      data: nilai,
    };
  }
}
