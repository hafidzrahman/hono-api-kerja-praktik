-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "tanggal_mulai_pendaftaran_kp" TIMESTAMP(3) NOT NULL,
    "tanggal_akhir_pendaftaran_kp" TIMESTAMP(3) NOT NULL,
    "tanggal_mulai_pendaftaran_kp_lanjut" TIMESTAMP(3) NOT NULL,
    "tanggal_akhir_pendaftaran_kp_lanjut" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);
