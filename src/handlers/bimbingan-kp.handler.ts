import { Context } from "hono";
import BimbinganKPService from "../services/bimbingan-kp.service";
import { APIError } from "../utils/api-error.util";

export default class BimbinganKPHandler {
  public static async getBimbinganSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await BimbinganKPService.getBimbinganSaya(email));
  }

  public static async getMahasiswaBimbinganSaya(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await BimbinganKPService.getMahasiswaBimbinganSaya(email));
  }

  public static async getDetailMahasiswaBimbinganSaya(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);

    return c.json(
      await BimbinganKPService.getDetailMahasiswaBimbinganSaya(email, id)
    );
  }

  public static async postBimbingan(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");
    const { catatan_bimbingan, nim } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);
    if (!catatan_bimbingan || !nim) {
      throw new APIError("Data bimbingan tidak lengkap! 😭", 400);
    }

    return c.json(
      await BimbinganKPService.postBimbingan(email, nim, catatan_bimbingan, id),
      201
    );
  }

  public static async postNilai(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");
    const { penyelesaian_masalah, bimbingan_sikap, kualitas_laporan, catatan } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);
    if (
      penyelesaian_masalah == null ||
      bimbingan_sikap == null ||
      kualitas_laporan == null ||
      !catatan
    ) {
      throw new APIError("Data penilaian tidak lengkap! 😭", 400);
    }

    return c.json(
      await BimbinganKPService.postNilai(email, id, {
        penyelesaian_masalah,
        bimbingan_sikap,
        kualitas_laporan,
        catatan,
      }),
      201
    );
  }

  public static async putNilai(c: Context) {
    const { email } = c.get("user");
    const id = c.req.param("id");
    const { penyelesaian_masalah, bimbingan_sikap, kualitas_laporan, catatan } =
      await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id) throw new APIError("Waduh, butuh param id cuy! 😭", 400);
    if (
      !penyelesaian_masalah ||
      !bimbingan_sikap ||
      !kualitas_laporan ||
      !catatan
    ) {
      throw new APIError("Data penilaian tidak lengkap! 😭", 400);
    }

    return c.json(
      await BimbinganKPService.putNilai(email, id, {
        penyelesaian_masalah,
        bimbingan_sikap,
        kualitas_laporan,
        catatan,
      }),
      201
    );
  }
}
