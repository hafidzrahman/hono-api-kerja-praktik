-- CreateEnum
CREATE TYPE "DokumenStatus" AS ENUM ('submitted', 'verified', 'rejected');

-- CreateEnum
CREATE TYPE "JenisDokumen" AS ENUM ('SURAT_KETERANGAN_SELESAI_KP', 'LAPORAN_TAMBAHAN_KP', 'ID_SURAT_UNDANGAN', 'FORM_KEHADIRAN_SEMINAR', 'SURAT_UNDANGAN_SEMINAR_HASIL', 'BERITA_ACARA_SEMINAR', 'DAFTAR_HADIR_SEMINAR', 'LEMBAR_PENGESAHAN_KP', 'REVISI_DAILY_REPORT', 'REVISI_LAPORAN_TAMBAHAN', 'SISTEM_KP_FINAL');

-- CreateEnum
CREATE TYPE "JenisInstansi" AS ENUM ('SWASTA', 'PEMERINTAHAN', 'PENDIDIKAN', 'UMKM');

-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('created', 'updated', 'cancelled', 'rescheduled');

-- CreateEnum
CREATE TYPE "StatusInstansi" AS ENUM ('PENDING', 'AKTIF', 'TIDAK_AKTIF');

-- CreateEnum
CREATE TYPE "StatusSeminar" AS ENUM ('pending', 'scheduled', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "StatusValidasi" AS ENUM ('MENUNGGU', 'VALID', 'REVISI');

-- CreateTable
CREATE TABLE "bimbingan" (
    "id" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "catatan" TEXT NOT NULL,
    "status" "StatusValidasi" NOT NULL,
    "nim" TEXT NOT NULL,
    "nip" TEXT NOT NULL,

    CONSTRAINT "bimbingan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_report" (
    "id" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "status" "StatusValidasi" NOT NULL,
    "catatan" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "nim" TEXT NOT NULL,

    CONSTRAINT "daily_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detail_daily_report" (
    "id" SERIAL NOT NULL,
    "judul_kegiatan" TEXT NOT NULL,
    "deskripsi_kegiatan" TEXT NOT NULL,
    "waktu" TIMESTAMP(3) NOT NULL,
    "id_daily_report" TEXT NOT NULL,

    CONSTRAINT "detail_daily_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokumen" (
    "id" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "jenis_dokumen" "JenisDokumen" NOT NULL,
    "file_path" TEXT NOT NULL,
    "tanggal_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "DokumenStatus" NOT NULL DEFAULT 'submitted',
    "komentar" TEXT,

    CONSTRAINT "dokumen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dosen" (
    "nip" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "no_hp" TEXT NOT NULL,
    "id_telegram" TEXT NOT NULL,

    CONSTRAINT "dosen_pkey" PRIMARY KEY ("nip")
);

-- CreateTable
CREATE TABLE "instansi" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenis" "JenisInstansi" NOT NULL,
    "profil_singkat" TEXT NOT NULL,
    "status" "StatusInstansi" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "instansi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal" (
    "id" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "waktu_mulai" TIMESTAMP(3) NOT NULL,
    "waktu_selesai" TIMESTAMP(3) NOT NULL,
    "ruangan_nama" TEXT NOT NULL,
    "status" "StatusSeminar" NOT NULL DEFAULT 'pending',

    CONSTRAINT "jadwal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_jadwal" (
    "id" TEXT NOT NULL,
    "jadwal_seminar_id" TEXT NOT NULL,
    "log_type" "LogType" NOT NULL,
    "nip" TEXT NOT NULL,
    "tanggal_lama" TIMESTAMP(3),
    "tanggal_baru" TIMESTAMP(3),
    "ruangan_lama" TEXT,
    "ruangan_baru" TEXT,
    "keterangan" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "log_jadwal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mahasiswa" (
    "nim" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "nilai" (
    "id" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "jadwal_seminar_id" TEXT NOT NULL,
    "nip_penguji" TEXT NOT NULL,
    "nip_pembimbing" TEXT NOT NULL,
    "nilai_pembimbing" DOUBLE PRECISION NOT NULL,
    "nilai_penguji" DOUBLE PRECISION NOT NULL,
    "note_pembimbing" TEXT,
    "note_penguji" TEXT,

    CONSTRAINT "nilai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nilai_instansi" (
    "id" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "nilai_angka" DOUBLE PRECISION NOT NULL,
    "nilai_huruf" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "id_pembimbing_instansi" TEXT NOT NULL,

    CONSTRAINT "nilai_instansi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pembimbing_instansi" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "no_hp" TEXT NOT NULL,
    "id_instansi" INTEGER NOT NULL,

    CONSTRAINT "pembimbing_instansi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendaftaran_kp" (
    "nim" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "tanggalTerdaftar" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggalMulai" TIMESTAMP(3),
    "tenggatWaktu" TIMESTAMP(3) NOT NULL,
    "gagal" BOOLEAN NOT NULL DEFAULT false,
    "tanggalSelesai" TIMESTAMP(3),
    "linkSuratPengantar" TEXT,
    "linkSuratBalasan" TEXT,
    "linkSuratPenunjukkanDospem" TEXT,
    "alasanLanjutKP" TEXT,
    "linkSuratPerpanjanganKP" TEXT,
    "id_pembimbing_instansi" TEXT NOT NULL,
    "nip" TEXT,

    CONSTRAINT "pendaftaran_kp_pkey" PRIMARY KEY ("nim","semester")
);

-- CreateTable
CREATE TABLE "ruangan" (
    "nama" TEXT NOT NULL,

    CONSTRAINT "ruangan_pkey" PRIMARY KEY ("nama")
);

-- CreateTable
CREATE TABLE "_mahasiswaTonilai" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_mahasiswaTonilai_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "bimbingan_id_idx" ON "bimbingan"("id");

-- CreateIndex
CREATE INDEX "daily_report_id_idx" ON "daily_report"("id");

-- CreateIndex
CREATE INDEX "detail_daily_report_id_idx" ON "detail_daily_report"("id");

-- CreateIndex
CREATE INDEX "dokumen_nim_idx" ON "dokumen"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "dosen_email_key" ON "dosen"("email");

-- CreateIndex
CREATE UNIQUE INDEX "dosen_id_telegram_key" ON "dosen"("id_telegram");

-- CreateIndex
CREATE INDEX "dosen_nip_idx" ON "dosen"("nip");

-- CreateIndex
CREATE INDEX "instansi_id_idx" ON "instansi"("id");

-- CreateIndex
CREATE INDEX "jadwal_nim_idx" ON "jadwal"("nim");

-- CreateIndex
CREATE INDEX "jadwal_nip_idx" ON "jadwal"("nip");

-- CreateIndex
CREATE INDEX "jadwal_ruangan_nama_idx" ON "jadwal"("ruangan_nama");

-- CreateIndex
CREATE INDEX "log_jadwal_jadwal_seminar_id_idx" ON "log_jadwal"("jadwal_seminar_id");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_email_key" ON "mahasiswa"("email");

-- CreateIndex
CREATE INDEX "mahasiswa_nim_idx" ON "mahasiswa"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "nilai_jadwal_seminar_id_key" ON "nilai"("jadwal_seminar_id");

-- CreateIndex
CREATE INDEX "nilai_jadwal_seminar_id_idx" ON "nilai"("jadwal_seminar_id");

-- CreateIndex
CREATE UNIQUE INDEX "nilai_instansi_nim_key" ON "nilai_instansi"("nim");

-- CreateIndex
CREATE INDEX "nilai_instansi_id_idx" ON "nilai_instansi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pembimbing_instansi_email_key" ON "pembimbing_instansi"("email");

-- CreateIndex
CREATE INDEX "pembimbing_instansi_id_idx" ON "pembimbing_instansi"("id");

-- CreateIndex
CREATE INDEX "pendaftaran_kp_nim_semester_idx" ON "pendaftaran_kp"("nim", "semester");

-- CreateIndex
CREATE UNIQUE INDEX "ruangan_nama_key" ON "ruangan"("nama");

-- CreateIndex
CREATE INDEX "_mahasiswaTonilai_B_index" ON "_mahasiswaTonilai"("B");

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_report" ADD CONSTRAINT "daily_report_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_daily_report" ADD CONSTRAINT "detail_daily_report_id_daily_report_fkey" FOREIGN KEY ("id_daily_report") REFERENCES "daily_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dokumen" ADD CONSTRAINT "dokumen_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_ruangan_nama_fkey" FOREIGN KEY ("ruangan_nama") REFERENCES "ruangan"("nama") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_jadwal_seminar_id_fkey" FOREIGN KEY ("jadwal_seminar_id") REFERENCES "jadwal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_nip_penguji_fkey" FOREIGN KEY ("nip_penguji") REFERENCES "dosen"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_nip_pembimbing_fkey" FOREIGN KEY ("nip_pembimbing") REFERENCES "dosen"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai_instansi" ADD CONSTRAINT "nilai_instansi_id_pembimbing_instansi_fkey" FOREIGN KEY ("id_pembimbing_instansi") REFERENCES "pembimbing_instansi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai_instansi" ADD CONSTRAINT "nilai_instansi_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pembimbing_instansi" ADD CONSTRAINT "pembimbing_instansi_id_instansi_fkey" FOREIGN KEY ("id_instansi") REFERENCES "instansi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_id_pembimbing_instansi_fkey" FOREIGN KEY ("id_pembimbing_instansi") REFERENCES "pembimbing_instansi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mahasiswaTonilai" ADD CONSTRAINT "_mahasiswaTonilai_A_fkey" FOREIGN KEY ("A") REFERENCES "mahasiswa"("nim") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mahasiswaTonilai" ADD CONSTRAINT "_mahasiswaTonilai_B_fkey" FOREIGN KEY ("B") REFERENCES "nilai"("id") ON DELETE CASCADE ON UPDATE CASCADE;
