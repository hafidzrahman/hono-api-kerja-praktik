import { Context } from "hono";
import DailyReportService from "../services/daily-report.service";
import { APIError } from "../utils/api-error.util";
import { haversineDistance } from "../utils/geo.util";

export default class DailyReportHandler {
  public static async getAccessSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getAccessSaya(email));
  }

  public static async getDailyReportSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getDailyReportSaya(email));
  }

  public static async postDailyReport(c: Context) {
    const { email } = c.get("user");
    const { latitude, longitude } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!latitude || !longitude)
      throw new APIError("Data yang kamu isi tidak lengkap! 😭", 400);

    const isPresent = await DailyReportService.checkPresensiSaya(email);

    if (isPresent) {
      throw new APIError("Kamu sudah presensi untuk hari ini! 😡", 400);
    }

    const instansi = await DailyReportService.getInstansiSaya(email);

    if (instansi.latitude == null || instansi.longitude == null) {
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

    if (distance > 100) {
      throw new APIError(
        `Kamu berada di luar radius 100 meter dari lokasi instansi! 😡 (Jarak: ${distance.toFixed(
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
    const { id_daily_report, judul_agenda, deskripsi_agenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id_daily_report || !judul_agenda || !deskripsi_agenda) {
      throw new APIError("Data yang kamu isi tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.postDetailDailyReport(
        id_daily_report,
        judul_agenda,
        deskripsi_agenda
      ),
      201
    );
  }

  public static async putDetailDailyReport(c: Context) {
    const { email } = c.get("user");
    const { id_detail_daily_report, judul_agenda, deskripsi_agenda } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id_detail_daily_report || !judul_agenda || !deskripsi_agenda) {
      throw new APIError("Data yang kamu isi tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.putDetailDailyReport(
        id_detail_daily_report,
        judul_agenda,
        deskripsi_agenda
      ),
      200
    );
  }

  public static async putDailyReport(c: Context) {
    const { email } = c.get("user");
    const { id_daily_report, catatan_evaluasi, status } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id_daily_report || !catatan_evaluasi || !status) {
      throw new APIError("Data yang kamu isi tidak lengkap! 😭", 400);
    }

    return c.json(
      await DailyReportService.putDailyReport(
        id_daily_report,
        catatan_evaluasi,
        status
      ),
      200
    );
  }

  public static async getMahasiswaInstansiSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getMahasiswaInstansiSaya(email));
  }

  public static async getDetailMahasiswaInstansiSaya(c: Context) {
    const { email } = c.get("user");
    const nim = c.req.query("nim");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!nim) throw new APIError("Waduh, butuh param nim cuy! 😭", 400);

    return c.json(
      await DailyReportService.getDetailMahasiswaInstansiSaya(email, nim)
    );
  }

  public static async getMahasiswaBimbinganSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getMahasiswaBimbinganSaya(email));
  }

  public static async getDetailMahasiswaBimbinganSaya(c: Context) {
    const { email } = c.get("user");
    const nim = c.req.query("nim");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!nim) throw new APIError("Waduh, butuh param nim cuy! 😭", 400);

    return c.json(
      await DailyReportService.getDetailMahasiswaBimbinganSaya(email, nim)
    );
  }

  public static async postNilai(c: Context) {
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
      await DailyReportService.postNilai(email, nim, {
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

  public static async getNilaiSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DailyReportService.getNilaiSaya(email));
  }
}
