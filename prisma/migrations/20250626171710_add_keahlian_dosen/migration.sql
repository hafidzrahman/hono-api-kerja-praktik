-- CreateTable
CREATE TABLE "keahlian_dosen" (
    "id" SERIAL NOT NULL,
    "nama_keahlian" VARCHAR(255) NOT NULL,
    "nip" VARCHAR(20) NOT NULL,

    CONSTRAINT "keahlian_dosen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "keahlian_dosen_nip_idx" ON "keahlian_dosen"("nip");

-- AddForeignKey
ALTER TABLE "keahlian_dosen" ADD CONSTRAINT "keahlian_dosen_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE NO ACTION;
