-- CreateTable
CREATE TABLE "LOG" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "pendaftaran_kp_id" UUID NOT NULL,

    CONSTRAINT "LOG_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LOG" ADD CONSTRAINT "LOG_pendaftaran_kp_id_fkey" FOREIGN KEY ("pendaftaran_kp_id") REFERENCES "pendaftaran_kp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
