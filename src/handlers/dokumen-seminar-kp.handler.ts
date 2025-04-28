import { Context } from "hono";
import { jenis_dokumen } from "../generated/prisma";
import DokumenService from "../services/dokumen-seminar-kp.service";
import { createDokumenSeminarKpSchema, dokumenIdSchema, updateDokumenSeminarKpSchema } from "../validators/dokumen-seminar-kp.validator";
import { errorResponse, handleZodError, successResponse } from "../helpers/response.helper";
import { getNamaJenisDokumen } from "../helpers/dokumen-seminar-kp";
import { ZodError } from "zod";

export default class DokumenHandler {
  constructor(private dokumenService: DokumenService) {}

  uploadDokumen = async (ctx: Context, jenis: jenis_dokumen) => {
    try {
      const body = await ctx.req.json();
      const validatedData = createDokumenSeminarKpSchema.parse(body);
      
      const dokumen = await this.dokumenService.uploadDokumenSeminarKp(jenis, validatedData);
      const jenisDokumenName = getNamaJenisDokumen(jenis);
      
      return successResponse(
        ctx,
        dokumen,
        `Berhasil mengupload dokumen ${jenisDokumenName}`,
        201
      );
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(
        ctx, 
        error instanceof Error ? error.message : "Terjadi kesalahan saat mengupload dokumen",
        null,
        400
      );
    }
  };

  getDokumenById = async (ctx: Context) => {
    try {
      const { id } = dokumenIdSchema.parse(ctx.req.param());
      const dokumen = await this.dokumenService.getDokumenSeminarKpById(id);
      
      return successResponse(ctx, dokumen, "Berhasil mendapatkan dokumen", 201);
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(
        ctx, 
        error instanceof Error ? error.message : "Dokumen tidak ditemukan", 
        null, 
        404
      );
    }
  };

  validateDokumen = async (ctx: Context) => {
    try {
      const { id } = dokumenIdSchema.parse(ctx.req.param());
      const body = await ctx.req.json();
      const { komentar } = body;
      
      const dokumen = await this.dokumenService.validateDokumen(id, komentar);
      const jenisDokumenName = getNamaJenisDokumen(dokumen.jenis_dokumen);
      
      return successResponse(
        ctx,
        dokumen,
        `Dokumen ${jenisDokumenName} berhasil divalidasi`,
        201
      );
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(
        ctx, 
        error instanceof Error ? error.message : "Terjadi kesalahan saat memvalidasi dokumen", 
        null, 
        400
      );
    }
  };

  rejectDokumen = async (ctx: Context) => {
    try {
      const { id } = dokumenIdSchema.parse(ctx.req.param());
      const body = await ctx.req.json();
      
      if (!body.komentar) {
        return errorResponse(ctx, "Komentar penolakan harus diisi", null, 400);
      }
      
      const dokumen = await this.dokumenService.rejectDokumen(id, body.komentar);
      const jenisDokumenName = getNamaJenisDokumen(dokumen.jenis_dokumen);
      
      return successResponse(
        ctx,
        dokumen,
        `Dokumen ${jenisDokumenName} ditolak`,
        201
      );
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(
        ctx, 
        error instanceof Error ? error.message : "Terjadi kesalahan saat menolak dokumen", 
        null, 
        400
      );
    }
  };

  updateDokumen = async (ctx: Context) => {
    try {
      const { id } = dokumenIdSchema.parse(ctx.req.param());
      const body = await ctx.req.json();
      const validatedData = updateDokumenSeminarKpSchema.parse(body);
      
      const dokumen = await this.dokumenService.updateDokumenSeminarKp(id, validatedData);
      const jenisDokumenName = getNamaJenisDokumen(dokumen.jenis_dokumen);
      
      return successResponse(
        ctx,
        dokumen,
        `Dokumen ${jenisDokumenName} berhasil diperbarui`,
        201
      );
    } catch (error) {
      if (error instanceof ZodError) {
        return handleZodError(ctx, error);
      }
      return errorResponse(
        ctx, 
        error instanceof Error ? error.message : "Terjadi kesalahan saat memperbarui dokumen", 
        null, 
        400
      );
    }
  };
}