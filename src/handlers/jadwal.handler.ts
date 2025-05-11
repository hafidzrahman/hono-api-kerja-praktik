import { Context } from "hono";
import JadwalService from "../services/jadwal.service";
import { createJadwalSchema, updateJadwalSchema } from "../validators/jadwal.validator";
import { APIError } from "../utils/api-error.util";

export default class JadwalHandler {
  public static async postJadwal(c: Context): Promise<Response> {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const body = await c.req.json();
    const data = createJadwalSchema.parse(body);
    const jadwal = await JadwalService.postJadwal(data);

    return c.json(jadwal);
  }

  public static async putJadwal(c: Context): Promise<Response> {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const id = c.req.param("id");
    if (!id) {
      return c.json({
        success: false,
        message: "ID jadwal diperlukan",
      },400);
    }

    const body = await c.req.json()
    const data = updateJadwalSchema.parse({
      body,
      id
    })

    const jadwal = await JadwalService.putJadwal(data)

    if (!jadwal) {
      return c.json({ success: false, message: "Jadwal tidak ditemukan" }, 404);
    }

    return c.json(jadwal);
  }

  public static async getRuanganOptions(c: Context): Promise<Response> {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json( await JadwalService.getRuanganOptions)
  }

  public static async getDosenOptions(c: Context): Promise<Response> {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await JadwalService.getDosensOptions)
  }
}
