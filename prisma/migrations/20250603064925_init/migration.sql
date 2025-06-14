/*
  Warnings:

  - You are about to drop the column `link` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `id_surat_pengajuan_dospem` on the `pendaftaran_kp` table. All the data in the column will be lost.
  - Added the required column `data` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "link",
ADD COLUMN     "data" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "pendaftaran_kp" DROP COLUMN "id_surat_pengajuan_dospem";
