-- AlterTable
ALTER TABLE "nilai" ADD COLUMN     "id_pendaftaran_kp" UUID;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
