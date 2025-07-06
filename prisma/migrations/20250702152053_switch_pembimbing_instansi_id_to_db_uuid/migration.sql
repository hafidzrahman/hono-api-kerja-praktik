/*
  Warnings:

  - The `id` column on the `pembimbing_instansi` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "pembimbing_instansi_id_key";

-- AlterTable
ALTER TABLE "pembimbing_instansi" DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid();
