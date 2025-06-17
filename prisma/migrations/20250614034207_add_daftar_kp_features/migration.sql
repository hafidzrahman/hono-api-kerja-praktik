/*
  Warnings:

  - You are about to drop the column `nip` on the `log_jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `id_surat_pengajuan_dospem` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_balasan` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_pengantar` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_penunjukan_dospem` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_perpanjangan_kp` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - The `created_at` column on the `tahun_ajaran` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "dokumen_seminar_kp" ALTER COLUMN "tanggal_upload" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "tanggal_upload" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "instansi" ADD COLUMN     "radius" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "jadwal" ALTER COLUMN "tanggal" DROP DEFAULT;

-- AlterTable
ALTER TABLE "komponen_penilaian_pembimbing" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "komponen_penilaian_penguji" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "log_jadwal" DROP COLUMN "nip",
ADD COLUMN     "nip_penguji_baru" VARCHAR(20),
ADD COLUMN     "nip_penguji_lama" VARCHAR(20),
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "nilai" ALTER COLUMN "tanggal" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "tanggal" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "option" ALTER COLUMN "tanggal_mulai_pendaftaran_kp" DROP NOT NULL,
ALTER COLUMN "tanggal_akhir_pendaftaran_kp" DROP NOT NULL,
ALTER COLUMN "tanggal_mulai_pendaftaran_kp_lanjut" DROP NOT NULL,
ALTER COLUMN "tanggal_akhir_pendaftaran_kp_lanjut" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pendaftaran_kp" DROP COLUMN "id_surat_pengajuan_dospem",
DROP COLUMN "link_surat_balasan",
DROP COLUMN "link_surat_pengantar",
DROP COLUMN "link_surat_penunjukan_dospem",
DROP COLUMN "link_surat_perpanjangan_kp";

-- AlterTable
ALTER TABLE "tahun_ajaran" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "validasi_nilai" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6);

-- CreateTable
CREATE TABLE "LOG" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "pendaftaran_kp_id" UUID NOT NULL,

    CONSTRAINT "LOG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kriteria" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "idKriteria" INTEGER NOT NULL,
    "idPendaftaranKP" UUID NOT NULL,
    "data" VARCHAR(255) NOT NULL DEFAULT '',
    "status" "status_dokumen",
    "catatan" VARCHAR(255),
    "tanggal_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("idKriteria","idPendaftaranKP")
);

-- AddForeignKey
ALTER TABLE "LOG" ADD CONSTRAINT "LOG_pendaftaran_kp_id_fkey" FOREIGN KEY ("pendaftaran_kp_id") REFERENCES "pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_idKriteria_fkey" FOREIGN KEY ("idKriteria") REFERENCES "Kriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_idPendaftaranKP_fkey" FOREIGN KEY ("idPendaftaranKP") REFERENCES "pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
