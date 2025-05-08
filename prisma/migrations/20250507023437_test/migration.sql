/*
  Warnings:

  - The values [SURAT_UNDANGAN_SEMINAR_HASIL] on the enum `jenis_dokumen` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "jenis_dokumen_new" AS ENUM ('SURAT_KETERANGAN_SELESAI_KP', 'LAPORAN_TAMBAHAN_KP', 'FORM_KEHADIRAN_SEMINAR', 'ID_SURAT_UNDANGAN', 'SURAT_UNDANGAN_SEMINAR_KP', 'BERITA_ACARA_SEMINAR', 'DAFTAR_HADIR_SEMINAR', 'LEMBAR_PENGESAHAN_KP', 'REVISI_DAILY_REPORT', 'REVISI_LAPORAN_TAMBAHAN', 'SISTEM_KP_FINAL');
ALTER TABLE "dokumen_seminar_kp" ALTER COLUMN "jenis_dokumen" TYPE "jenis_dokumen_new" USING ("jenis_dokumen"::text::"jenis_dokumen_new");
ALTER TYPE "jenis_dokumen" RENAME TO "jenis_dokumen_old";
ALTER TYPE "jenis_dokumen_new" RENAME TO "jenis_dokumen";
DROP TYPE "jenis_dokumen_old";
COMMIT;

-- AlterTable
ALTER TABLE "nilai" ADD COLUMN     "nilai_akhir" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "pendaftaran_kp" ALTER COLUMN "level_akses" SET DEFAULT 1;
