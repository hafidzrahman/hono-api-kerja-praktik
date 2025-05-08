import { Context } from "hono";
import BimbinganKPService from "../services/bimbingan-kp.service";
import { APIError } from "../utils/api-error.util";

export default class BimbinganKPHandler {
  public static async postBimbingan(c: Context) {
    const { email } = c.get("user");
    const { catatan_bimbingan, nim } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    if (!catatan_bimbingan || !nim) {
      throw new APIError("Data bimbingan tidak lengkap! 😭", 400);
    }

    return c.json(
      await BimbinganKPService.postBimbingan(email, catatan_bimbingan, nim),
      201
    );
  }

  public static async getBimbinganSaya(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await BimbinganKPService.getBimbinganSaya(email));
  }

  public static async putBimbingan(c: Context) {
    const { email } = c.get("user");
    const { id_bimbingan, catatan_bimbingan } = await c.req.json();

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!id_bimbingan || !catatan_bimbingan) {
      throw new APIError("Data bimbingan tidak lengkap! 😭", 400);
    }

    return c.json(
      await BimbinganKPService.putBimbingan(id_bimbingan, catatan_bimbingan),
      200
    );
  }

  public static async getDetailMahasiswaBimbinganSaya(c: Context) {
    const { email } = c.get("user");
    const nim = c.req.query("nim");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    if (!nim) throw new APIError("Waduh, butuh param nim cuy! 😭", 400);

    return c.json(
      await BimbinganKPService.getDetailMahasiswaBimbinganSaya(email, nim)
    );
  }
}
