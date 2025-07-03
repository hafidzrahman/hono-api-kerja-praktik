-- CreateEnum
CREATE TYPE "status_pembimbing_instansi" AS ENUM ('Pending', 'Aktif', 'Tidak_Aktif');

-- AlterTable
ALTER TABLE "pembimbing_instansi" ADD COLUMN     "status" "status_pembimbing_instansi" NOT NULL DEFAULT 'Pending';
