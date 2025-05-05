import { Context } from "hono";
import { jenis_dokumen } from "../generated/prisma";
import { createDokumenSeminarKpSchema, dokumenIdSchema, updateDokumenSeminarKpSchema } from "../validators/dokumen-seminar-kp.validator";
import { errorResponse, handleZodError, successResponse } from "../helpers/response.helper";
import { getNamaJenisDokumen } from "../helpers/dokumen-seminar-kp";
import { ZodError } from "zod";
import { APIError } from "../utils/api-error.util";
import DokumenSeminarKpService from "../services/dokumen-seminar-kp.service";

export default class DokumenSeminarKPHandler {
  public static async postDokumenSeminarKP(c: Context, jenis: jenis_dokumen) {
    try {
      const { email } = c.get("user");
      if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

      const body = await c.req.json();
      
      const validatedData = createDokumenSeminarKpSchema.parse(body);
      
      if (jenis === jenis_dokumen.ID_SURAT_UNDANGAN) {
        if (validatedData.link_path.length > 10) {
          return errorResponse(c, "ID Surat Undangan tidak boleh lebih dari 10 karakter", null, 400);
        }
      } else {
        const gdriveLinkRegex = /^https:\/\/drive\.google\.com\/(file\/d\/|drive\/folders\/|open\?id=)([a-zA-Z0-9_-]+)(\/?|\?usp=sharing|\&authuser=0)/;
        
        if (!gdriveLinkRegex.test(validatedData.link_path)) {
          return errorResponse(c, "Link harus dari Google Drive dengan format yang valid", null, 400);
        }
        
        if (validatedData.link_path.includes('file/d/')) {
          const allowedExtensions = ['.pdf', '.doc', '.docx'];
          const hasValidExtension = allowedExtensions.some(ext => validatedData.link_path.toLowerCase().includes(ext));
          
          if (!hasValidExtension) {
            return errorResponse(c, "File harus berformat PDF, DOC, DOCX, XLS, XLSX, PPT, atau PPTX", null, 400);
          }
        }
      }

      const dokumen = await DokumenSeminarKpService.postDokumenSeminarKp(email, jenis, validatedData);
      return c.json(dokumen);
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(c, error);
      }
      return errorResponse(c, error instanceof Error ? error.message : "Terjadi kesalahan saat membuat dokumen", null, 400);
    }
  }

  public static async getDokumenSeminarKPByNIM(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DokumenSeminarKpService.getDokumenSeminarKpByNIM(email));
  }

  public static async getAllDokumenSeminarKP(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await DokumenSeminarKpService.getAllDokumenSeminarKP())
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