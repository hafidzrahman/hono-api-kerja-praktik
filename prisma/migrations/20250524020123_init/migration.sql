-- AlterTable
ALTER TABLE "pendaftaran_kp" ADD COLUMN     "id_tahun_ajaran" INTEGER;

-- CreateTable
CREATE TABLE "tahun_ajaran" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255),
    "created_at" VARCHAR(255),

    CONSTRAINT "tahun_ajaran_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_id_tahun_ajaran_fkey" FOREIGN KEY ("id_tahun_ajaran") REFERENCES "tahun_ajaran"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
