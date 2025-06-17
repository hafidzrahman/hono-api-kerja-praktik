import { Context } from "hono";
import DailyReportService from "../services/daily-report.service";
import { APIError } from "../utils/api-error.util";
import { haversineDistance } from "../utils/geo.util";

export default class DailyReportHandler {
  public static async getDailyReportSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getDailyReportSaya(email));
  }

  public static async getDetailDailyReportSaya(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id)
      throw new APIError("Waduh, butuh param id_daily_report cuy! 😭", 400);

    return c.json(await DailyReportService.getDetailDailyReportSaya(email, id));
  }

  public static async postDailyReport(c: Context) {
    const { email } = c.get("user");
    const { latitude, longitude } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!latitude || !longitude)
      throw new APIError("Data koordinat kamu tidak lengkap! 😭", 400);

    const isPresent = await DailyReportService.checkPresensiSaya(email);

    if (isPresent) {
      throw new APIError("Kamu sudah presensi untuk hari ini! 😡", 400);
    }

    const instansi = await DailyReportService.getInstansiSaya(email);

    if (!instansi.latitude || !instansi.longitude) {
      throw new APIError(
        "Waduh, koordinat lokasi instansi kosong cuy! 😭",
        400
      );
    }

    const distance = haversineDistance(
      latitude,
      longitude,
      instansi.latitude,
      instansi.longitude
    );

    if (distance > 500) {
      throw new APIError(
        `Kamu berada di luar radius instansi! 😡 (Jarak: ${distance.toFixed(
          2
        )} meter)`,
        400
      );
    }

    return c.json(
      await DailyReportService.postDailyReport(email, latitude, longitude),
      201
    );
  }

  public static async postDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");
    const { waktu_mulai, waktu_selesai, judul_agenda, deskripsi_agenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id)
      throw new APIError("Waduh, butuh param id_daily_report cuy! 😭", 400);
    if (!waktu_mulai || !waktu_selesai || !judul_agenda || !deskripsi_agenda) {
      throw new APIError("Data yang kamu isi tidak lengkap cuy! 😭", 400);
    }

    return c.json(
      await DailyReportService.postDetailDailyReport(
        waktu_mulai,
        waktu_selesai,
        judul_agenda,
        deskripsi_agenda,
        id
      ),
      201
    );
  }

  public static async putDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const id: number = parseInt(c.req.param("id"), 10);
    const { waktu_mulai, waktu_selesai, judul_agenda, deskripsi_agenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id)
      throw new APIError(
        "Waduh, butuh param id_detail_daily_report cuy! 😭",
        400
      );
    if (!waktu_mulai || !waktu_selesai || !judul_agenda || !deskripsi_agenda) {
      throw new APIError("Data yang kamu isi tidak lengkap cuy! 😭", 400);
    }

    return c.json(
      await DailyReportService.putDetailDailyReport(
        waktu_mulai,
        waktu_selesai,
        judul_agenda,
        deskripsi_agenda,
        id
      ),
      200
    );
  }

  public static async putDailyReport(c: Context) {
    const id = c.req.param("id");
    const { catatan_evaluasi, status } = await c.req.json();

    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);

    if (!catatan_evaluasi || !status) {
      throw new APIError("Data yang kamu isi tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.putDailyReport(id, catatan_evaluasi, status),
      200
    );
  }

  public static async getMahasiswaInstansiSaya(c: Context) {
    const email = c.req.param("email");
    if (!email) throw new APIError("Waduh, butuh param email cuy! 😭", 400);

    return c.json(await DailyReportService.getMahasiswaInstansiSaya(email));
  }

  public static async getDetailMahasiswaInstansiSaya(c: Context) {
    const id = c.req.param("id");
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);

    return c.json(await DailyReportService.getDetailMahasiswaInstansiSaya(id));
  }

  public static async getDetailDailyReportMahasiswaInstansiSaya(c: Context) {
    const id = c.req.param("id");
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);

    return c.json(
      await DailyReportService.getDetailDailyReportMahasiswaInstansiSaya(id)
    );
  }

  public static async postNilai(c: Context) {
    const id = c.req.param("id");
    const {
      deliverables,
      ketepatan_waktu,
      kedisiplinan,
      attitude,
      kerjasama_tim,
      inisiatif,
      masukan,
    } = await c.req.json();

    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);
    if (
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
      await DailyReportService.postNilai(id, {
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

  public static async putNilai(c: Context) {
    const id = c.req.param("id");
    const {
      deliverables,
      ketepatan_waktu,
      kedisiplinan,
      attitude,
      kerjasama_tim,
      inisiatif,
      masukan,
    } = await c.req.json();

    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);
    if (
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
      await DailyReportService.putNilai(id, {
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

  public static async getAllMahasiswa(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getAllMahasiswa(email));
  }

  public static async getAllDetailMahasiswa(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);

    return c.json(await DailyReportService.getAllDetailMahasiswa(email, id));
  }
}
