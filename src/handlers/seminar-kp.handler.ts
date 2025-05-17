import { Context } from "hono";
import { jenis_dokumen } from "../generated/prisma";
import { createDokumenSeminarKpSchema, dokumenIdSchema } from "../validators/dokumen.validator";
import { errorResponse, successResponse } from "../helpers/response.helper";
import StepHelper from "../helpers/dokumen-step.helper";
import { APIError } from "../utils/api-error.util";
import SeminarKpService from "../services/seminar-kp.service";

export default class SeminarKPHandler {
  public static async postDokumenSeminarKP(c: Context, jenis: jenis_dokumen) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const body = await c.req.json();

    const validatedData = createDokumenSeminarKpSchema.parse(body);

    if (jenis === jenis_dokumen.ID_SURAT_UNDANGAN) {
      if (validatedData.link_path.length > 10) {
        throw new APIError("ID Surat Undangan tidak boleh lebih dari 10 karakter", 400);
      }
    } else {
      const gdriveLinkRegex = /^https:\/\/drive\.google\.com\/(file\/d\/|drive\/folders\/|open\?id=)([a-zA-Z0-9_-]+)(\/?|\?usp=sharing|\&authuser=0)/;

      if (!gdriveLinkRegex.test(validatedData.link_path)) {
        throw new APIError("Link harus dari Google Drive dengan format yang valid", 400);
      }
    }

    const dokumen = await SeminarKpService.postDokumenSeminarKp(email, jenis, validatedData);
    return c.json(dokumen);
  }

  public static async getDokumenSeminarKPSaya(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await SeminarKpService.getDataSeminarKpSaya(email));
  }

  public static async getAllDokumenSeminarKP(c: Context) {
    const { email } = c.get("user");

    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    return c.json(await SeminarKpService.getAllDokumenSeminarKP());
  }

  public static async getDokumenSeminarKPByNIM(c: Context) {
    const nim = c.req.param("nim");

    if (!nim) {
      throw new APIError("Waduh, NIM tidak ditemukan! 😭", 400);
    }

    return c.json(await SeminarKpService.getDokumenSeminarKPByNIM(nim));
  }

  public static async postTerimaDokumenSeminarKP(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const body = await c.req.json();
    const { id, komentar } = body;
    const parsed = dokumenIdSchema.parse({ id });

    const dokumen = await SeminarKpService.postTerimaDokumenSeminarKP(parsed.id, komentar);
    const jenisDokumenName = await StepHelper.getNamaDokumen(dokumen.jenis_dokumen);

    return successResponse(c, dokumen, `Dokumen ${jenisDokumenName} berhasil divalidasi`, 201);
  }

  public static async postTolakDokumenSeminarKP(c: Context) {
    const { email } = c.get("user");
    if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

    const body = await c.req.json();
    const { id, komentar } = body;
    if (!komentar) throw new APIError("Komentar penolakan harus diisi", 400);

    const parsed = dokumenIdSchema.parse({ id });

    const dokumen = await SeminarKpService.postTolakDokumenSeminarKP(parsed.id, komentar);
    const jenisDokumenName = await StepHelper.getNamaDokumen(dokumen.jenis_dokumen);

    return successResponse(c, dokumen, `Dokumen ${jenisDokumenName} ditolak`, 201);
  }
}
