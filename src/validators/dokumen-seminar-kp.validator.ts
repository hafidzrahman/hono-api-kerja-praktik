import { z } from "zod";
import { jenis_dokumen, status_dokumen } from "../generated/prisma";

const validateLinkPath = (value: string, ctx: z.RefinementCtx, jenis_dokumen?: jenis_dokumen) => {
  if (jenis_dokumen === "ID_SURAT_UNDANGAN") {
    if (value.length >= 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "ID Surat Undangan lebih dari 10 karakter",
      });
      return false;
    }
    return true;
  }

  // Check if it's a Google Drive link
  if (!value.startsWith("https://drive.google.com/")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Link harus dari Google Drive",
    });
    return false;
  }

  // Check for public sharing patterns
  const publicSharingPatterns = [
    /\/file\/d\/.*\/view\?usp=sharing/,
    /\/file\/d\/.*\/view\?usp=drive_link/,
    /\/drive\/folders\/.*\?usp=sharing/,
    /\/open\?id=.*&authuser=0/
  ];

  const isPublic = publicSharingPatterns.some(pattern => pattern.test(value));
  
  if (!isPublic) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Link Google Drive harus bersifat publik (gunakan opsi 'Anyone with the link can view')",
    });
    return false;
  }

  return true;
};

export const createDokumenSeminarKpSchema = z.object({
  link_path: z
    .string()
    .url("Link harus berupa URL yang valid")
    .superRefine(
      (val, ctx) => validateLinkPath(val, ctx, undefined)
    ),
  nim: z.string().min(1, "NIM tidak boleh kosong"),
  id_pendaftaran_kp: z.string().uuid("ID pendaftaran KP harus berupa UUID")
});

export const updateDokumenSeminarKpSchema = z.object({
  link_path: z
    .string()
    .url("Link harus berupa URL yang valid")
    .superRefine(
      (val, ctx) => validateLinkPath(val, ctx, undefined)
    )
    .optional(),
  status: z.nativeEnum(status_dokumen).optional(),
  komentar: z.string().max(255).optional(),
});

export const dokumenIdSchema = z.object({
  id: z.string().uuid("ID dokumen harus berupa UUID")
});