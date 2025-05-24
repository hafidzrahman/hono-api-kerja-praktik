/*
  Warnings:

  - You are about to drop the column `id_tahun_ajaran` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the `tahun_ajaran` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pendaftaran_kp" DROP CONSTRAINT "pendaftaran_kp_id_tahun_ajaran_fkey";

-- AlterTable
ALTER TABLE "pendaftaran_kp" DROP COLUMN "id_tahun_ajaran";

-- DropTable
DROP TABLE "tahun_ajaran";
