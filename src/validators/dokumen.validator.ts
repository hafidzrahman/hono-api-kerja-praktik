import { z } from "zod";
import { jenis_dokumen, status_dokumen } from "../generated/prisma";

const validateLinkPath = (value: string, ctx: z.RefinementCtx, jenisDokumen: jenis_dokumen) => {
  if (jenisDokumen === jenis_dokumen.ID_SURAT_UNDANGAN) {
    if (value.length > 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "ID Surat Undangan tidak boleh lebih dari 10 karakter",
      });
      return false;
    }
    return true;
  }

  const gdriveLinkRegex = /^https:\/\/drive\.google\.com\/(file\/d\/|drive\/folders\/|open\?id=)([a-zA-Z0-9_-]+)(\/?|\?usp=sharing|\&authuser=0)/;

  if (!gdriveLinkRegex.test(value)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Link harus dari Google Drive dengan format yang valid",
    });
    return false;
  }

  if (value.includes('file/d/')) {
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const hasValidExtension = allowedExtensions.some(ext => value.toLowerCase().includes(ext));

    if (!hasValidExtension) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File harus berformat PDF, DOC, DOCX, XLS, XLSX, PPT, atau PPTX",
      });
      return false;
    }
  }
  return true;
};

export const createDokumenSeminarKpSchema = z.object({
  link_path: z
    .string()
    .superRefine((val, ctx) => {
      return true;
    }),
  nim: z.string().min(1, "NIM tidak boleh kosong"),
  id_pendaftaran_kp: z.string().uuid("ID pendaftaran KP harus berupa UUID")
});

export const updateDokumenSeminarKpSchema = z.object({
  link_path: z
    .string()
    .optional(),
  status: z.nativeEnum(status_dokumen).optional(),
  komentar: z.string().max(255).optional(),
});

export const dokumenIdSchema = z.object({
  id: z.string().uuid("ID dokumen harus berupa UUID")
});