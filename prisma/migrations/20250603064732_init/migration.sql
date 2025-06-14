/*
  Warnings:

  - You are about to drop the column `link_surat_balasan` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_pengantar` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_penolakan_instansi` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_penunjukan_dospem` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - You are about to drop the column `link_surat_perpanjangan_kp` on the `pendaftaran_kp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pendaftaran_kp" DROP COLUMN "link_surat_balasan",
DROP COLUMN "link_surat_pengantar",
DROP COLUMN "link_surat_penolakan_instansi",
DROP COLUMN "link_surat_penunjukan_dospem",
DROP COLUMN "link_surat_perpanjangan_kp";

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
    "link" VARCHAR(255) NOT NULL,
    "status" "status_dokumen" NOT NULL DEFAULT 'Terkirim',
    "catatan" VARCHAR(255),

    CONSTRAINT "Document_pkey" PRIMARY KEY ("idKriteria","idPendaftaranKP")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_idKriteria_fkey" FOREIGN KEY ("idKriteria") REFERENCES "Kriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_idPendaftaranKP_fkey" FOREIGN KEY ("idPendaftaranKP") REFERENCES "pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
