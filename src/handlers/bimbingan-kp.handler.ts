import { Context } from "hono";
import BimbinganKPService from "../services/bimbingan-kp.service";
import { APIError } from "../utils/api-error.util";

export default class BimbinganKPHandler {
  public static async createBimbingan(c: Context) {
    const { email } = c.get("user");
    const { nim, catatanBimbingan } = await c.req.json();

    if (!email) throw new APIError("Waduh, email dosen kosong cuy! 😭", 404);
    if (!nim || !catatanBimbingan) {
      throw new APIError("Data bimbingan tidak lengkap! 😭", 400);
    }

    const result = await BimbinganKPService.createBimbingan(
      email,
      nim,
      catatanBimbingan
    );

    return c.json(result, 201);
  }

  public static async getBimbinganByMahasiswa(c: Context) {
    const { email } = c.get("user");

    if (!email)
      throw new APIError("Waduh, email mahasiswa kosong cuy! 😭", 404);

    const bimbingan = await BimbinganKPService.getBimbinganByMahasiswa(email);

    return c.json(bimbingan, 200);
  }

  public static async updateBimbingan(c: Context) {
    const { email } = c.get("user");
    const { idBimbingan, catatanBimbingan } = await c.req.json();

    if (!email) throw new APIError("Waduh, email dosen kosong cuy! 😭", 404);
    if (!idBimbingan || !catatanBimbingan) {
      throw new APIError("Data bimbingan tidak lengkap! 😭", 400);
    }

    const result = await BimbinganKPService.updateBimbingan(
      email,
      idBimbingan,
      catatanBimbingan
    );

    return c.json(result, 200);
  }

  public static async getMahasiswaAndBimbingan(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email dosen kosong cuy! 😭", 404);

    const mahasiswaAndBimbingan =
      await BimbinganKPService.getMahasiswaAndBimbingan(email);

    return c.json(mahasiswaAndBimbingan, 200);
  }
}
