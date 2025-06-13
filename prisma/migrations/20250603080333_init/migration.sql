/*
  Warnings:

  - The `status` column on the `Document` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "status_dokumen_kp" AS ENUM ('Terkirim', 'Divalidasi', 'Ditolak', 'Kosong');

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "status",
ADD COLUMN     "status" "status_dokumen_kp" NOT NULL DEFAULT 'Kosong',
ALTER COLUMN "data" SET DEFAULT '';
