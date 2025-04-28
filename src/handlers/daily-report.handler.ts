import { Context } from "hono";
import DailyReportService from "../services/daily-report.service";
import { APIError } from "../utils/api-error.util";
import { haversineDistance } from "../utils/geo.util";

export default class DailyReportHandler {
  public static async checkAccessLevel(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.checkAccessLevel(email));
  }

  public static async getDailyReport(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getDailyReport(email));
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

    const instansi = await DailyReportService.getInstansiLocation(email);

    if (instansi.latitude == null || instansi.longitude == null) {
      throw new APIError("Koordinat lokasi instansi tidak ada! 😭", 400);
    }

    const distance = haversineDistance(
      latitude,
      longitude,
      instansi.latitude,
      instansi.longitude
    );

    if (distance > 100) {
      throw new APIError(
        `Kamu berada di luar radius 100 meter dari lokasi instansi! 😡 (Jarak: ${distance.toFixed(
          2
        )} meter)`,
        400
      );
    }

    return c.json(
      await DailyReportService.createDailyReport(email, latitude, longitude),
      201
    );
  }

  public static async createDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const { id_daily_report, judul_agenda, deskripsi_agenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!id_daily_report || !judul_agenda || !deskripsi_agenda) {
      throw new APIError("Data detail daily report tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.createDetailDailyReport(
        id_daily_report,
        judul_agenda,
        deskripsi_agenda
      ),
      201
    );
  }

  public static async updateDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const { id_detail_daily_report, judul_agenda, deskripsi_agenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!id_detail_daily_report || !judul_agenda || !deskripsi_agenda) {
      throw new APIError("Data detail daily report tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.updateDetailDailyReport(
        id_detail_daily_report,
        judul_agenda,
        deskripsi_agenda
      ),
      200
    );
  }

  public static async evaluateDailyReport(c: Context) {
    const { email } = c.get("user");
    const { id_daily_report, catatan_evaluasi, status } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!id_daily_report || !catatan_evaluasi || !status) {
      throw new APIError("Data evaluasi daily report tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.evaluateDailyReport(
        id_daily_report,
        catatan_evaluasi,
        status
      ),
      200
    );
  }

  public static async getMahasiswaForPembimbingInstansi(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(
      await DailyReportService.getMahasiswaForPembimbingInstansi(email)
    );
  }

  public static async getMahasiswaForDosenPembimbing(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(
      await DailyReportService.getMahasiswaForDosenPembimbing(email)
    );
  }

  public static async createNilai(c: Context) {
    const { email } = c.get("user");
    const {
      nim,
      deliverables,
      ketepatan_waktu,
      kedisiplinan,
      attitude,
      kerjasama_tim,
      inisiatif,
      masukan,
    } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (
      !nim ||
      deliverables == null ||
      ketepatan_waktu == null ||
      kedisiplinan == null ||
      attitude == null ||
      kerjasama_tim == null ||
      inisiatif == null ||
      !masukan
    ) {
      throw new APIError("Data penilaian tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.createNilai(email, nim, {
        deliverables,
        ketepatan_waktu,
        kedisiplinan,
        attitude,
        kerjasama_tim,
        inisiatif,
        masukan,
      }),
      201
    );
  }

  public static async getNilai(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getNilai(email));
  }
}
