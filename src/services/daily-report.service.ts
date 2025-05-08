import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";

export default class DailyReportService {
  public static async getAccessSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }

    const pendaftaran_kp = await DailyReportRepository.findPendaftaranKP(
      mahasiswa.nim
    );
    if (!pendaftaran_kp) {
      throw new APIError(`Waduh, mahasiswa belum mendaftar KP nih! 😭`, 404);
    }

    return {
      response: true,
      message:
        pendaftaran_kp.level_akses >= 5
          ? "Sudah bisa diakses! 😁"
          : "Belum bisa diakses! 😡",
      data: {
        id: pendaftaran_kp.id,
        nama: mahasiswa.nama,
        nim: mahasiswa.nim,
        level_akses: pendaftaran_kp.level_akses,
        access: pendaftaran_kp.level_akses >= 5,
      },
    };
  }

  public static async getDailyReportSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }

    const pendaftaran_kp = await DailyReportRepository.findPendaftaranKP(
      mahasiswa.nim
    );
    if (!pendaftaran_kp) {
      throw new APIError(`Waduh, mahasiswa belum mendaftar KP nih! 😭`, 404);
    }

    if (
      !pendaftaran_kp.email_pembimbing_instansi ||
      !pendaftaran_kp.nip_pembimbing
    ) {
      throw new APIError(`Waduh, pembimbing kamu belum ada nih! 😭`, 404);
    }

    const daily_report = await DailyReportRepository.findDailyReport(
      mahasiswa.nim,
      pendaftaran_kp.email_pembimbing_instansi,
      pendaftaran_kp.nip_pembimbing
    );

    return {
      response: true,
      message: "Data daily report berhasil diambil! 😁",
      data: daily_report,
    };
  }

  public static async checkPresensiSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const report = await DailyReportRepository.findDailyReportByDate(
      mahasiswa.nim,
      today
    );

    return !!report;
  }

  public static async getInstansiSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }

    const pendaftaran_kp = await DailyReportRepository.findPendaftaranKP(
      mahasiswa.nim
    );
    if (!pendaftaran_kp) {
      throw new APIError(`Waduh, mahasiswa belum mendaftar KP nih! 😭`, 404);
    }

    const { id_instansi } = pendaftaran_kp;
    if (!id_instansi) {
      throw new APIError(`Waduh, instansi belum ada nih! 😭`, 404);
    }

    const instansi = await DailyReportRepository.findInstansi(id_instansi);
    if (!instansi) {
      throw new APIError(`Waduh, instansi tidak ditemukan nih! 😭`, 404);
    }

    return instansi;
  }

  public static async postDailyReport(
    email: string,
    latitude: number,
    longitude: number
  ) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }

    const daily_report = await DailyReportRepository.createDailyReport(
      mahasiswa.nim,
      latitude,
      longitude
    );

    return {
      response: true,
      message: "Presensi berhasil! 😁",
      data: daily_report,
    };
  }

  public static async postDetailDailyReport(
    id_daily_report: string,
    judul_agenda: string,
    deskripsi_agenda: string
  ) {
    const detail_daily_report =
      await DailyReportRepository.createDetailDailyReport(
        id_daily_report,
        judul_agenda,
        deskripsi_agenda
      );

    return {
      response: true,
      message: "Detail daily report berhasil dibuat! 😁",
      data: detail_daily_report,
    };
  }

  public static async putDetailDailyReport(
    id_detail_daily_report: number,
    judul_agenda: string,
    deskripsi_agenda: string
  ) {
    const detail_daily_report =
      await DailyReportRepository.updateDetailDailyReport(
        id_detail_daily_report,
        judul_agenda,
        deskripsi_agenda
      );

    return {
      response: true,
      message: "Detail daily report berhasil diperbarui! 😁",
      data: detail_daily_report,
    };
  }

  public static async putDailyReport(
    id_daily_report: string,
    catatan_evaluasi: string,
    status: string
  ) {
    const daily_report = await DailyReportRepository.updateDailyReport(
      id_daily_report,
      catatan_evaluasi,
      status
    );

    return {
      response: true,
      message: "Evaluasi daily report berhasil disimpan! 😁",
      data: daily_report,
    };
  }

  public static async getMahasiswaInstansiSaya(
    email_pembimbing_instansi: string
  ) {
    const data = await DailyReportRepository.findPembimbingInstansi(
      email_pembimbing_instansi
    );

    if (!data) {
      throw new APIError("Pembimbing instansi tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findMahasiswaInstansi(
      email_pembimbing_instansi
    );

    return {
      response: true,
      message: "Mahasiswa bimbingan instansi berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getDetailMahasiswaInstansiSaya(
    email: string,
    nim: string
  ) {
    const data = await DailyReportRepository.findPembimbingInstansi(email);

    if (!data) {
      throw new APIError("Pembimbing instansi tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findDetailMahasiswaInstansi(
      email,
      nim
    );

    if (!mahasiswa) {
      throw new APIError(`Mahasiswa tidak ditemukan! 😭`, 404);
    }

    return {
      response: true,
      message: "Detail mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getMahasiswaBimbinganSaya(email: string) {
    const dosen = await DailyReportRepository.findDosenPembimbing(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findMahasiswaBimbingan(
      dosen.nip
    );

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getDetailMahasiswaBimbinganSaya(
    email: string,
    nim: string
  ) {
    const dosen = await DailyReportRepository.findDosenPembimbing(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findDetailMahasiswaBimbingan(
      dosen.nip,
      nim
    );

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async postNilai(
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
    const daily_report_count = await DailyReportRepository.countDailyReport(
      nim
    );
    if (daily_report_count <= 22) {
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

  public static async getNilaiSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }

    const nilai = await DailyReportRepository.findNilai(mahasiswa.nim);

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
