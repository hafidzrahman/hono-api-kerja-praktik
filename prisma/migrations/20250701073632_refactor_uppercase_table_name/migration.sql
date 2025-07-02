/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kriteria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LOG` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_idKriteria_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_idPendaftaranKP_fkey";

-- DropForeignKey
ALTER TABLE "LOG" DROP CONSTRAINT "LOG_pendaftaran_kp_id_fkey";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "Kriteria";

-- DropTable
DROP TABLE "LOG";

-- CreateTable
CREATE TABLE "log_pendaftaran_kp" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "pendaftaran_kp_id" UUID NOT NULL,

    CONSTRAINT "log_pendaftaran_kp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kriteria_pendaftaran_kp" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "kriteria_pendaftaran_kp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokumen_pendaftaran_kp" (
    "idKriteria" INTEGER NOT NULL,
    "idPendaftaranKP" UUID NOT NULL,
    "data" VARCHAR(255) NOT NULL DEFAULT '',
    "status" "status_dokumen",
    "catatan" VARCHAR(255),
    "tanggal_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dokumen_pendaftaran_kp_pkey" PRIMARY KEY ("idKriteria","idPendaftaranKP")
);

-- AddForeignKey
ALTER TABLE "log_pendaftaran_kp" ADD CONSTRAINT "log_pendaftaran_kp_pendaftaran_kp_id_fkey" FOREIGN KEY ("pendaftaran_kp_id") REFERENCES "pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dokumen_pendaftaran_kp" ADD CONSTRAINT "dokumen_pendaftaran_kp_idKriteria_fkey" FOREIGN KEY ("idKriteria") REFERENCES "kriteria_pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dokumen_pendaftaran_kp" ADD CONSTRAINT "dokumen_pendaftaran_kp_idPendaftaranKP_fkey" FOREIGN KEY ("idPendaftaranKP") REFERENCES "pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
