/*
  Warnings:

  - You are about to drop the column `waktu` on the `detail_daily_report` table. All the data in the column will be lost.
  - Added the required column `waktu_mulai` to the `detail_daily_report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waktu_selesai` to the `detail_daily_report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "status_presensi" ADD VALUE 'Ditolak';

-- AlterTable
ALTER TABLE "bimbingan" ADD COLUMN     "id_pendaftaran_kp" UUID;

-- AlterTable
ALTER TABLE "daily_report" ADD COLUMN     "id_pendaftaran_kp" UUID;

-- AlterTable
ALTER TABLE "detail_daily_report" DROP COLUMN "waktu",
ADD COLUMN     "waktu_mulai" VARCHAR(5) NOT NULL,
ADD COLUMN     "waktu_selesai" VARCHAR(5) NOT NULL;

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "daily_report" ADD CONSTRAINT "daily_report_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
