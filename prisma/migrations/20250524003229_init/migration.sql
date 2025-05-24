/*
  Warnings:

  - Added the required column `radius` to the `instansi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "instansi" ADD COLUMN     "radius" DOUBLE PRECISION NOT NULL;
