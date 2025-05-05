import { Context } from "hono";
import { jenis_dokumen } from "../generated/prisma";
import { createDokumenSeminarKpSchema, dokumenIdSchema, updateDokumenSeminarKpSchema } from "../validators/dokumen-seminar-kp.validator";
import { errorResponse, handleZodError, successResponse } from "../helpers/response.helper";
import { getNamaJenisDokumen } from "../helpers/dokumen-seminar-kp";
import { ZodError } from "zod";
import { APIError } from "../utils/api-error.util";
import DokumenSeminarKpService from "../services/dokumen-seminar-kp.service";

export default class DokumenHandler {
  public static async postDokumenSeminarKP(c: Context, jenis: jenis_dokumen) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const body = await c.req.json();
    const validatedData = createDokumenSeminarKpSchema.parse(body);

    const dokumen = await DokumenSeminarKpService.postDokumenSeminarKp(email, jenis, validatedData);

    return c.json(dokumen);
  }

  public static async getDokumenSeminarKPByNIM(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DokumenSeminarKpService.getDokumenSeminarKpByNIM(email));
  }

  public static async getAllDokumenSeminarKP(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DokumenSeminarKpService.getAllDokumenSeminarKP)
  }

  public static async postTerimaDokumenSeminarKP(ctx: Context) {
    try {
      const { email } = ctx.get("user");
      if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

      const { id } = dokumenIdSchema.parse(ctx.req.param());
      const body = await ctx.req.json();
      const { komentar } = body;

      const dokumen = await DokumenSeminarKpService.postTerimaDokumenSeminarKP(id, komentar);
      const jenisDokumenName = getNamaJenisDokumen(dokumen.jenis_dokumen);

      return successResponse(ctx, dokumen, `Dokumen ${jenisDokumenName} berhasil divalidasi`, 201);
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(ctx, error instanceof Error ? error.message : "Terjadi kesalahan saat memvalidasi dokumen", null, 400);
    }
  }

  public static async postTolakDokumenSeminarKP(ctx: Context) {
    try {
      const { email } = ctx.get("user");
      if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

      const { id } = dokumenIdSchema.parse(ctx.req.param());
      const body = await ctx.req.json();

      if (!body.komentar) {
        return errorResponse(ctx, "Komentar penolakan harus diisi", null, 400);
      }

      const dokumen = await DokumenSeminarKpService.postTolakDokumenSeminarKP(id, body.komentar);
      const jenisDokumenName = getNamaJenisDokumen(dokumen.jenis_dokumen);

      return successResponse(ctx, dokumen, `Dokumen ${jenisDokumenName} ditolak`, 201);
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(ctx, error instanceof Error ? error.message : "Terjadi kesalahan saat menolak dokumen", null, 400);
    }
  }
}
