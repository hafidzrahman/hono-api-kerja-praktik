import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";
import NilaiService from "./nilai.service";

export default class DailyReportService {
  public static async getDailyReportSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, kamu siapa sih? 😭`, 404);
    }

    const data = await DailyReportRepository.findPendaftaranKPByNIM(
      mahasiswa.nim
    );
    if (!data) {
      throw new APIError(
        `Waduh, kamu belum mendaftar KP nih, wajib daftar dulu yak! 😉`,
        404
      );
    }
    if (data.level_akses < 5) {
      throw new APIError(
        `Waduh, kamu belum bisa mengakses daily report nih, tunggu pendaftaran kamu divalidasi yak! 😉`,
        403
      );
    }

    return {
      response: true,
      message: "Data daily report kamu berhasil diambil! 😁",
      data: data,
    };
  }

  public static async getDetailDailyReportSaya(email: string, id: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, kamu siapa sih? 😭`, 404);
    }

    const daily_report = await DailyReportRepository.findIdDailyReport(id);
    if (!daily_report) {
      throw new APIError(
        `Waduh, daily report kamu tidak ditemukan nih! 😭`,
        404
      );
    }

    const pendaftaran = await DailyReportRepository.findIdPendaftaranKP(
      mahasiswa.nim
    );

    const detail = await DailyReportRepository.findDailyReportById(
      daily_report.id,
      mahasiswa.nim,
      pendaftaran!.id
    );

    return {
      response: true,
      message: "Data detail daily report kamu berhasil diambil! 😁",
      data: detail,
    };
  }

  public static async checkPresensiSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, kamu siapa sih? 😭`, 404);
    }

    const pendaftaran = await DailyReportRepository.findIdPendaftaranKP(
      mahasiswa.nim
    );
    if (!pendaftaran) {
      throw new APIError(
        `Waduh, kamu belum melakukan pendaftaran KP nih! 😭`,
        404
      );
    }
    if (pendaftaran.level_akses < 5) {
      throw new APIError(
        `Waduh, kamu belum bisa membuat daily report nih, pastikan setiap tahapan pendaftaran KP kamu sudah divalidasi! 😉`,
        403
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkPresensi = await DailyReportRepository.findDailyReportByDate(
      today,
      mahasiswa.nim,
      pendaftaran.id
    );

    return !!checkPresensi;
  }

  public static async getInstansiSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, kamu siapa sih?`, 404);
    }

    const pendaftaran = await DailyReportRepository.findIdPendaftaranKP(
      mahasiswa.nim
    );
    if (!pendaftaran) {
      throw new APIError(
        `Waduh, kamu belum melakukan pendaftaran KP nih 😭`,
        404
      );
    }
    if (!pendaftaran.instansi) {
      throw new APIError(`Waduh, instansi tidak ditenukan nih! 😭`, 404);
    }

    return pendaftaran.instansi;
  }

  public static async postDailyReport(
    email: string,
    latitude: number,
    longitude: number
  ) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, kamu siapa sih? 😭`, 404);
    }

    const pendaftaran = await DailyReportRepository.findIdPendaftaranKP(
      mahasiswa.nim
    );
    if (!pendaftaran) {
      throw new APIError(
        `Waduh, kamu belum melakukan pendaftaran KP nih 😭`,
        404
      );
    }
    if (pendaftaran.level_akses < 5) {
      throw new APIError(
        `Waduh, kamu belum bisa membuat daily report nih, pastikan setiap tahapan pendaftaran KP kamu sudah divalidasi! 😉`,
        403
      );
    }

    const daily_report = await DailyReportRepository.createDailyReport(
      mahasiswa.nim,
      pendaftaran.id,
      latitude,
      longitude
    );

    return {
      response: true,
      message: "Presensi kamu hari ini berhasil! 😁",
      data: daily_report,
    };
  }

  public static async postDetailDailyReport(
    waktu_mulai: string,
    waktu_selesai: string,
    judul_agenda: string,
    deskripsi_agenda: string,
    id_daily_report: string
  ) {
    const detail_daily_report =
      await DailyReportRepository.createDetailDailyReport(
        waktu_mulai,
        waktu_selesai,
        judul_agenda,
        deskripsi_agenda,
        id_daily_report
      );

    return {
      response: true,
      message: "Detail daily report kamu berhasil dibuat! 😁",
      data: detail_daily_report,
    };
  }

  public static async putDetailDailyReport(
    waktu_mulai: string,
    waktu_selesai: string,
    judul_agenda: string,
    deskripsi_agenda: string,
    id_detail_daily_report: number
  ) {
    const updated_detail_daily_report =
      await DailyReportRepository.updateDetailDailyReport(
        waktu_mulai,
        waktu_selesai,
        judul_agenda,
        deskripsi_agenda,
        id_detail_daily_report
      );

    return {
      response: true,
      message: "Detail daily report kamu berhasil diperbarui! 😁",
      data: updated_detail_daily_report,
    };
  }

  public static async putDailyReport(
    id_daily_report: string,
    catatan_evaluasi: string,
    status: string
  ) {
    const evaluated_daily_report =
      await DailyReportRepository.updateDailyReport(
        id_daily_report,
        catatan_evaluasi,
        status
      );

    return {
      response: true,
      message: "Evaluasi daily report berhasil disimpan! 😁",
      data: evaluated_daily_report,
    };
  }

  public static async getMahasiswaInstansiSaya(
    email_pembimbing_instansi: string
  ) {
    const pembimbing_instansi =
      await DailyReportRepository.findPembimbingInstansi(
        email_pembimbing_instansi
      );

    if (!pembimbing_instansi) {
      throw new APIError("Pembimbing instansi tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findMahasiswaInstansi(
      email_pembimbing_instansi
    );

    return {
      response: true,
      message: "Mahasiswa bimbingan instansi berhasil diambil! 😁",
      data: {
        pembimbing_instansi,
        mahasiswa,
      },
    };
  }

  public static async getDetailMahasiswaInstansiSaya(id: string) {
    const mahasiswa = await DailyReportRepository.findDetailMahasiswaInstansi(
      id
    );

    if (!mahasiswa) {
      throw new APIError(`Mahasiswa tidak ditemukan! 😭`, 404);
    }

    return {
      response: true,
      message: "Detail mahasiswa berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getDetailDailyReportMahasiswaInstansiSaya(id: string) {
    const mahasiswa =
      await DailyReportRepository.findDetailDailyReportMahasiswaInstansi(id);

    if (!mahasiswa) {
      throw new APIError(`Mahasiswa tidak ditemukan! 😭`, 404);
    }

    return {
      response: true,
      message: "Detail mahasiswa berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async postNilai(
    id: string,
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
    const mahasiswa = await DailyReportRepository.findNIMById(id);
    if (!mahasiswa || !mahasiswa.nim) {
      throw new APIError("Mahasiswa tidak ditemukan nih! 😭", 404);
    }

    const nilai_instansi =
      komponen_penilaian.deliverables * 0.15 +
      komponen_penilaian.ketepatan_waktu * 0.1 +
      komponen_penilaian.kedisiplinan * 0.15 +
      komponen_penilaian.attitude * 0.15 +
      komponen_penilaian.kerjasama_tim * 0.25 +
      komponen_penilaian.inisiatif * 0.2;

    const nilai_akhir = nilai_instansi * 0.4;

    const data = await DailyReportRepository.createNilai(
      id,
      nilai_instansi,
      nilai_akhir,
      komponen_penilaian,
      mahasiswa.nim
    );

    return {
      response: true,
      message: "Nilai berhasil disimpan! 😁",
      data: data,
    };
  }

  public static async putNilai(
    id: string,
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
    const komponen =
      await DailyReportRepository.findIdKomponenPenilaianInstansi(id);

    if (!komponen) {
      throw new APIError(
        "Komponen penilaian instansi tidak ditemukan! 😭",
        404
      );
    }
    const nilai_instansi =
      komponen_penilaian.deliverables * 0.15 +
      komponen_penilaian.ketepatan_waktu * 0.1 +
      komponen_penilaian.kedisiplinan * 0.15 +
      komponen_penilaian.attitude * 0.15 +
      komponen_penilaian.kerjasama_tim * 0.25 +
      komponen_penilaian.inisiatif * 0.2;

    const data = await DailyReportRepository.updateNilai(
      id,
      nilai_instansi,
      komponen_penilaian,
      komponen.id
    );

    await NilaiService.updateNilaiAkhir(id);

    return {
      response: true,
      message: "Nilai berhasil disimpan! 😁",
      data: data,
    };
  }

  public static async getAllMahasiswa(email: string) {
    const dosen = await DailyReportRepository.findKoordinator(email);
    if (!dosen) {
      throw new APIError("Waduh, kamu siapa sih? 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findAllMahasiswa();

    return {
      response: true,
      message: "Data mahasiswa berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getAllDetailMahasiswa(email: string, id: string) {
    const dosen = await DailyReportRepository.findKoordinator(email);
    if (!dosen) {
      throw new APIError("Waduh, kamu siapa sih? 😭", 404);
    }

    const mahasiswa = await DailyReportRepository.findAllDetailMahasiswa(id);

    return {
      response: true,
      message: "Data detail mahasiswa berhasil diambil! 😁",
      data: mahasiswa,
    };
  }
}
