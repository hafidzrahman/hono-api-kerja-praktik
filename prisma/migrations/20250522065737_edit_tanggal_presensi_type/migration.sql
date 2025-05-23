/*
  Warnings:

  - Made the column `tanggal_bimbingan` on table `bimbingan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `catatan_bimbingan` on table `bimbingan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tanggal_presensi` on table `daily_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `daily_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `daily_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `daily_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `instansi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `instansi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tanggal` on table `nilai` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nama` on table `pembimbing_instansi` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bimbingan" ALTER COLUMN "tanggal_bimbingan" SET NOT NULL,
ALTER COLUMN "catatan_bimbingan" SET NOT NULL;

-- AlterTable
ALTER TABLE "daily_report" ALTER COLUMN "tanggal_presensi" SET NOT NULL,
ALTER COLUMN "tanggal_presensi" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "tanggal_presensi" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;

-- AlterTable
ALTER TABLE "instansi" ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL;

-- AlterTable
ALTER TABLE "nilai" ALTER COLUMN "tanggal" SET NOT NULL;

-- AlterTable
ALTER TABLE "pembimbing_instansi" ALTER COLUMN "nama" SET NOT NULL;
