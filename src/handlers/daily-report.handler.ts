import { Context } from "hono";
import DailyReportService from "../services/daily-report.service";
import { APIError } from "../utils/api-error.util";
import { haversineDistance } from "../utils/geo.util";

export default class DailyReportHandler {
  public static async checkAccessLevel(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const hasAccess = await DailyReportService.checkAccessLevel(email);
    return c.json(hasAccess, 200);
  }

  public static async getDailyReport(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const dailyReport = await DailyReportService.getDailyReport(email);
    return c.json(dailyReport, 200);
  }

  public static async createDailyReport(c: Context) {
    const { email } = c.get("user");
    const { latitude, longitude } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!latitude || !longitude)
      throw new APIError("Data koordinat tidak lengkap! 😭", 400);

    const isPresent = await DailyReportService.checkPresence(email);

    if (isPresent) {
      throw new APIError("Kamu sudah presensi untuk hari ini! 😡", 400);
    }

    // Ambil koordinat instansi mahasiswa
    const instansiLocation = await DailyReportService.getInstansiLocation(
      email
    );
    if (!instansiLocation) {
      throw new APIError("Lokasi instansi tidak ditemukan! 😭", 404);
    }

    if (
      instansiLocation.latitude == null ||
      instansiLocation.longitude == null
    ) {
      throw new APIError("Koordinat lokasi instansi tidak valid! 😭", 400);
    }

    const distance = haversineDistance(
      latitude,
      longitude,
      instansiLocation.latitude,
      instansiLocation.longitude
    );
    if (distance > 100) {
      throw new APIError(
        `Kamu berada di luar radius 100 meter dari lokasi instansi! 😡 (Jarak: ${distance.toFixed(
          2
        )} meter)`,
        400
      );
    }

    const dailyReport = await DailyReportService.createDailyReport(
      email,
      latitude,
      longitude
    );

    return c.json(dailyReport, 201);
  }

  public static async createDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const { idDailyReport, judulAgenda, deskripsiAgenda } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!idDailyReport || !judulAgenda || !deskripsiAgenda) {
      throw new APIError("Data detail daily report tidak lengkap! 😭", 400);
    }

    const detailDailyReport = await DailyReportService.createDetailDailyReport(
      idDailyReport,
      judulAgenda,
      deskripsiAgenda
    );

    return c.json(detailDailyReport, 201);
  }

  public static async evaluateDailyReport(c: Context) {
    const { idDailyReport, catatanEvaluasi, status } = await c.req.json();

    if (!idDailyReport || !catatanEvaluasi || !status) {
      throw new APIError("Data evaluasi daily report tidak lengkap! 😭", 400);
    }

    const evaluateDailyReport = await DailyReportService.evaluateDailyReport(
      idDailyReport,
      catatanEvaluasi,
      status
    );

    return c.json(evaluateDailyReport, 200);
  }

  public static async updateDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const { idDetailDailyReport, judulAgenda, deskripsiAgenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!idDetailDailyReport || !judulAgenda || !deskripsiAgenda) {
      throw new APIError("Data detail daily report tidak lengkap! 😭", 400);
    }

    const updateDetailDailyReport =
      await DailyReportService.updateDetailDailyReport(
        email,
        idDetailDailyReport,
        judulAgenda,
        deskripsiAgenda
      );

    return c.json(updateDetailDailyReport, 200);
  }

  public static async getMahasiswaAndDailyReportForPembimbing(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const mahasiswaAndDailyReport =
      await DailyReportService.getMahasiswaAndDailyReportForPembimbing(email);

    return c.json(mahasiswaAndDailyReport, 200);
  }

  public static async getMahasiswaAndDailyReportForDosen(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const mahasiswaAndDailyReport =
      await DailyReportService.getMahasiswaAndDailyReportForDosen(email);

    return c.json(mahasiswaAndDailyReport, 200);
  }

  public static async createNilaiForMahasiswa(c: Context) {
    const { email } = c.get("user");
    const {
      nim,
      deliverables,
      ketepatanWaktu,
      kedisiplinan,
      attitude,
      kerjasamaTim,
      inisiatif,
      masukan,
    } = await c.req.json();

    if (!email)
      throw new APIError(
        "Waduh, email pembimbing instansi kosong cuy! 😭",
        404
      );

    if (
      !nim ||
      deliverables == null ||
      ketepatanWaktu == null ||
      kedisiplinan == null ||
      attitude == null ||
      kerjasamaTim == null ||
      inisiatif == null ||
      !masukan
    ) {
      throw new APIError("Data penilaian tidak lengkap! 😭", 400);
    }

    const result = await DailyReportService.createNilaiForMahasiswa(
      email,
      nim,
      {
        deliverables,
        ketepatanWaktu,
        kedisiplinan,
        attitude,
        kerjasamaTim,
        inisiatif,
        masukan,
      }
    );

    return c.json(result, 201);
  }

  public static async getNilaiForMahasiswa(c: Context) {
    const { email } = c.get("user");

    if (!email)
      throw new APIError("Waduh, email mahasiswa kosong cuy! 😭", 404);

    const nilai = await DailyReportService.getNilaiForMahasiswa(email);

    return c.json(nilai, 200);
  }
}
