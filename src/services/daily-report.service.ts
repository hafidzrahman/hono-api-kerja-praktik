import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";

export default class DailyReportService {
  public static async checkAccessLevel(email: string) {
    const accessLevel = await DailyReportRepository.getAccessLevel(email);

    return accessLevel >= 5;
  }

  public static async getDailyReport(email: string) {
    const dailyReport = await DailyReportRepository.findDailyReport(email);

    if (!dailyReport) {
      throw new APIError("Daily report tidak ditemukan! 😭", 404);
    }

    return {
      response: true,
      message: "Daily report berhasil diambil! 😁",
      data: dailyReport,
    };
  }

  public static async checkPresence(email: string): Promise<boolean> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const report = await DailyReportRepository.findDailyReportByDate(
      email,
      today
    );
    return !!report;
  }

  public static async getInstansiLocation(email: string) {
    const instansi = await DailyReportRepository.getInstansiLocation(email);
    if (!instansi) {
      throw new APIError("Lokasi instansi tidak ditemukan! 😭", 404);
    }
    return {
      latitude: instansi.latitude,
      longitude: instansi.longitude,
    };
  }

  public static async createDailyReport(
    email: string,
    latitude: number,
    longitude: number
  ) {
    const dailyReport = await DailyReportRepository.createDailyReport(
      email,
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
    idDailyReport: string,
    judulAgenda: string,
    deskripsiAgenda: string
  ) {
    const detailDailyReport =
      await DailyReportRepository.createDetailDailyReport(
        idDailyReport,
        judulAgenda,
        deskripsiAgenda
      );

    return {
      response: true,
      message: "Detail daily report berhasil dibuat! 😁",
      data: detailDailyReport,
    };
  }

  public static async evaluateDailyReport(
    idDailyReport: string,
    catatanEvaluasi: string,
    status: string
  ) {
    const evaluateDailyReport = await DailyReportRepository.evaluateDailyReport(
      idDailyReport,
      catatanEvaluasi,
      status
    );

    return {
      response: true,
      message: "Evaluasi daily report berhasil disimpan! 😁",
      data: evaluateDailyReport,
    };
  }

  public static async updateDetailDailyReport(
    email: string,
    idDetailDailyReport: number,
    judulAgenda: string,
    deskripsiAgenda: string
  ) {
    // Validasi apakah detail daily report milik mahasiswa
    const isOwnedByMahasiswa =
      await DailyReportRepository.validateDetailDailyReportOwnership(
        email,
        idDetailDailyReport
      );
    if (!isOwnedByMahasiswa) {
      throw new APIError(
        "Kamu tidak memiliki akses untuk mengedit detail daily report ini! 😡",
        403
      );
    }
    // Update detail daily report
    const updatedDetailDailyReport =
      await DailyReportRepository.updateDetailDailyReport(
        idDetailDailyReport,
        judulAgenda,
        deskripsiAgenda
      );

    return {
      response: true,
      message: "Detail daily report berhasil diperbarui! 😁",
      data: updatedDetailDailyReport,
    };
  }

  public static async getMahasiswaAndDailyReportForPembimbing(
    emailPembimbing: string
  ) {
    // Validasi apakah pembimbing instansi ada
    const pembimbing = await DailyReportRepository.findPembimbingByEmail(
      emailPembimbing
    );
    if (!pembimbing) {
      throw new APIError("Pembimbing instansi tidak ditemukan! 😭", 404);
    }

    // Ambil daftar mahasiswa bimbingan dan daily report mereka
    const mahasiswaAndDailyReport =
      await DailyReportRepository.findMahasiswaAndDailyReportForPembimbing(
        emailPembimbing
      );

    return {
      response: true,
      message: "Data mahasiswa bimbingan dan daily report berhasil diambil! 😁",
      data: mahasiswaAndDailyReport,
    };
  }

  public static async getMahasiswaAndDailyReportForDosen(emailDosen: string) {
    // Validasi apakah dosen pembimbing ada
    const dosen = await DailyReportRepository.findDosenByEmail(emailDosen);
    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    // Ambil daftar mahasiswa bimbingan dan daily report mereka
    const mahasiswaAndReports =
      await DailyReportRepository.findMahasiswaAndDailyReportForDosen(
        emailDosen
      );

    return {
      response: true,
      message: "Data mahasiswa bimbingan dan daily report berhasil diambil! 😁",
      data: mahasiswaAndReports,
    };
  }

  public static async createNilaiForMahasiswa(
    emailPembimbing: string,
    nim: string,
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
    // Validasi apakah mahasiswa memiliki lebih dari 22 daily report
    const dailyReportCount = await DailyReportRepository.countDailyReportsByNIM(
      nim
    );
    if (dailyReportCount <= 22) {
      throw new APIError(
        "Mahasiswa belum memenuhi syarat jumlah daily report (lebih dari 22)! 😡",
        400
      );
    }
    // Hitung nilai akhir berdasarkan bobot
    const nilaiAkhir =
      komponenPenilaian.deliverables * 0.15 +
      komponenPenilaian.ketepatanWaktu * 0.1 +
      komponenPenilaian.kedisiplinan * 0.15 +
      komponenPenilaian.attitude * 0.15 +
      komponenPenilaian.kerjasamaTim * 0.25 +
      komponenPenilaian.inisiatif * 0.2;

    // Simpan nilai ke database
    const result = await DailyReportRepository.createNilai(
      emailPembimbing,
      nim,
      nilaiAkhir,
      komponenPenilaian
    );

    return {
      response: true,
      message: "Nilai berhasil disimpan! 😁",
      data: result,
    };
  }

  public static async getNilaiForMahasiswa(email: string) {
    const nilai = await DailyReportRepository.getNilaiByMahasiswa(email);

    if (!nilai) {
      throw new APIError("Nilai belum tersedia untuk mahasiswa ini! 😭", 404);
    }

    return {
      response: true,
      message: "Nilai berhasil diambil! 😁",
      data: nilai,
    };
  }
}
