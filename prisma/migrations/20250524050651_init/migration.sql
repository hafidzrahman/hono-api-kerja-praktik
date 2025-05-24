-- AlterTable
ALTER TABLE "option" ALTER COLUMN "tanggal_mulai_pendaftaran_kp" DROP NOT NULL,
ALTER COLUMN "tanggal_akhir_pendaftaran_kp" DROP NOT NULL,
ALTER COLUMN "tanggal_mulai_pendaftaran_kp_lanjut" DROP NOT NULL,
ALTER COLUMN "tanggal_akhir_pendaftaran_kp_lanjut" DROP NOT NULL;
