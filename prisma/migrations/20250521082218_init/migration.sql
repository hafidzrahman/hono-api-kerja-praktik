-- CreateEnum
CREATE TYPE "jenis_dokumen" AS ENUM ('SURAT_KETERANGAN_SELESAI_KP', 'LAPORAN_TAMBAHAN_KP', 'FORM_KEHADIRAN_SEMINAR', 'ID_SURAT_UNDANGAN', 'SURAT_UNDANGAN_SEMINAR_KP', 'BERITA_ACARA_SEMINAR', 'DAFTAR_HADIR_SEMINAR', 'LEMBAR_PENGESAHAN_KP', 'REVISI_LAPORAN_TAMBAHAN', 'SISTEM_KP_FINAL');

-- CreateEnum
CREATE TYPE "jenis_instansi" AS ENUM ('Swasta', 'Pemerintahan', 'Pendidikan', 'UMKM');

-- CreateEnum
CREATE TYPE "status_dokumen" AS ENUM ('Terkirim', 'Divalidasi', 'Ditolak');

-- CreateEnum
CREATE TYPE "status_instansi" AS ENUM ('Pending', 'Aktif', 'Tidak_Aktif');

-- CreateEnum
CREATE TYPE "status_jadwal" AS ENUM ('Menunggu', 'Selesai', 'Jadwal_Ulang');

-- CreateEnum
CREATE TYPE "status_pendaftaran" AS ENUM ('Baru', 'Lanjut', 'Gagal', 'Ditolak');

-- CreateEnum
CREATE TYPE "status_presensi" AS ENUM ('Menunggu', 'Disetujui', 'Revisi', 'Ditolak');

-- CreateTable
CREATE TABLE "bimbingan" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tanggal_bimbingan" DATE NOT NULL DEFAULT CURRENT_DATE,
    "catatan_bimbingan" VARCHAR(255) NOT NULL,
    "status" VARCHAR(7) NOT NULL DEFAULT 'Selesai',
    "nim" VARCHAR(11),
    "nip" VARCHAR(20),
    "id_pendaftaran_kp" UUID,

    CONSTRAINT "bimbingan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_report" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tanggal_presensi" DATE NOT NULL DEFAULT CURRENT_DATE,
    "status" "status_presensi" NOT NULL DEFAULT 'Menunggu',
    "catatan_evaluasi" VARCHAR(255),
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "nim" VARCHAR(11),
    "id_pendaftaran_kp" UUID,

    CONSTRAINT "daily_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detail_daily_report" (
    "id" SERIAL NOT NULL,
    "waktu_mulai" VARCHAR(5) NOT NULL,
    "waktu_selesai" VARCHAR(5) NOT NULL,
    "judul_agenda" VARCHAR(255) NOT NULL,
    "deskripsi_agenda" VARCHAR(255) NOT NULL,
    "id_daily_report" UUID,

    CONSTRAINT "detail_daily_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dosen" (
    "nip" VARCHAR(20) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "no_hp" VARCHAR(14),
    "email" VARCHAR(255) NOT NULL,
    "id_telegram" VARCHAR(10),

    CONSTRAINT "dosen_pkey" PRIMARY KEY ("nip")
);

-- CreateTable
CREATE TABLE "instansi" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama" VARCHAR(255) NOT NULL,
    "alamat" VARCHAR(255) NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "jenis" "jenis_instansi" NOT NULL,
    "profil_singkat" VARCHAR(255),
    "status" "status_instansi" DEFAULT 'Pending',
    "nama_pj" VARCHAR(255) NOT NULL,
    "no_hp_pj" VARCHAR(14) NOT NULL,

    CONSTRAINT "instansi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tanggal" DATE DEFAULT CURRENT_DATE,
    "waktu_mulai" TIMESTAMP(6),
    "waktu_selesai" TIMESTAMP(6),
    "status" "status_jadwal",
    "nim" VARCHAR(11),
    "nama_ruangan" VARCHAR(10),
    "id_pendaftaran_kp" UUID,

    CONSTRAINT "jadwal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_jadwal" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "log_type" TEXT,
    "tanggal_lama" DATE,
    "tanggal_baru" DATE NOT NULL,
    "ruangan_lama" TEXT,
    "ruangan_baru" TEXT NOT NULL,
    "keterangan" VARCHAR(255),
    "created_at" DATE DEFAULT CURRENT_DATE,
    "id_jadwal" UUID,
    "nip" VARCHAR(20),

    CONSTRAINT "log_jadwal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mahasiswa" (
    "nim" VARCHAR(11) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "no_hp" VARCHAR(14),
    "email" VARCHAR(255) NOT NULL,
    "nip" VARCHAR(20) NOT NULL,

    CONSTRAINT "mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "nilai" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tanggal" DATE NOT NULL DEFAULT CURRENT_DATE,
    "nilai_penguji" DOUBLE PRECISION,
    "nilai_pembimbing" DOUBLE PRECISION,
    "nilai_instansi" DOUBLE PRECISION,
    "nilai_akhir" DOUBLE PRECISION,
    "nim" VARCHAR(11),
    "nip" VARCHAR(20),
    "email_pembimbing_instansi" VARCHAR(255),
    "id_jadwal_seminar" UUID,
    "id_validasi_nilai" UUID,
    "id_pendaftaran_kp" UUID,

    CONSTRAINT "nilai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pembimbing_instansi" (
    "email" VARCHAR(255) NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "no_hp" VARCHAR(16),
    "jabatan" VARCHAR(40),
    "id_instansi" UUID,

    CONSTRAINT "pembimbing_instansi_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "pendaftaran_kp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" "status_pendaftaran" DEFAULT 'Baru',
    "tanggal_pengajuan" DATE DEFAULT CURRENT_DATE,
    "tanggal_mulai" DATE NOT NULL,
    "tanggal_selesai" DATE,
    "kelas_kp" CHAR(1),
    "tujuan_surat_instansi" VARCHAR(255) NOT NULL,
    "link_surat_pengantar" VARCHAR(255),
    "link_surat_balasan" VARCHAR(255),
    "link_surat_penunjukan_dospem" VARCHAR(255),
    "link_surat_perpanjangan_kp" VARCHAR(255),
    "id_surat_pengajuan_dospem" VARCHAR(25),
    "catatan_penolakan" VARCHAR(255),
    "level_akses" INTEGER NOT NULL DEFAULT 1,
    "judul_kp" VARCHAR(255),
    "alasan_lanjut_kp" VARCHAR(255),
    "email_pembimbing_instansi" VARCHAR(255),
    "id_tahun_ajaran" INTEGER,
    "id_instansi" UUID,
    "nim" VARCHAR(11),
    "nip_pembimbing" VARCHAR(20),
    "nip_penguji" VARCHAR(20),

    CONSTRAINT "pendaftaran_kp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ruangan" (
    "nama" VARCHAR(10) NOT NULL,

    CONSTRAINT "ruangan_pkey" PRIMARY KEY ("nama")
);

-- CreateTable
CREATE TABLE "dokumen_seminar_kp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "jenis_dokumen" "jenis_dokumen" NOT NULL,
    "link_path" VARCHAR(255) NOT NULL,
    "tanggal_upload" DATE DEFAULT CURRENT_DATE,
    "status" "status_dokumen" DEFAULT 'Terkirim',
    "komentar" VARCHAR(255),
    "nim" VARCHAR(11),
    "id_pendaftaran_kp" UUID,

    CONSTRAINT "dokumen_seminar_kp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "komponen_penilaian_instansi" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "deliverables" DOUBLE PRECISION,
    "ketepatan_waktu" DOUBLE PRECISION,
    "kedisiplinan" DOUBLE PRECISION,
    "attitude" DOUBLE PRECISION,
    "kerjasama_tim" DOUBLE PRECISION,
    "inisiatif" DOUBLE PRECISION,
    "masukan" TEXT,
    "id_nilai" UUID,

    CONSTRAINT "komponen_penilaian_instansi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "komponen_penilaian_pembimbing" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "penyelesaian_masalah" DOUBLE PRECISION,
    "bimbingan_sikap" DOUBLE PRECISION,
    "kualitas_laporan" DOUBLE PRECISION,
    "catatan" TEXT,
    "created_at" DATE DEFAULT CURRENT_DATE,
    "id_nilai" UUID,

    CONSTRAINT "komponen_penilaian_pembimbing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "komponen_penilaian_penguji" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "penguasaan_keilmuan" DOUBLE PRECISION,
    "kemampuan_presentasi" DOUBLE PRECISION,
    "kesesuaian_urgensi" DOUBLE PRECISION,
    "catatan" TEXT,
    "created_at" DATE DEFAULT CURRENT_DATE,
    "id_nilai" UUID,

    CONSTRAINT "komponen_penilaian_penguji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tahun_ajaran" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255),
    "created_at" VARCHAR(255),

    CONSTRAINT "tahun_ajaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validasi_nilai" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "is_approve" BOOLEAN DEFAULT false,
    "created_at" DATE DEFAULT CURRENT_DATE,
    "id_nilai" UUID,

    CONSTRAINT "validasi_nilai_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dosen_no_hp_key" ON "dosen"("no_hp");

-- CreateIndex
CREATE UNIQUE INDEX "dosen_email_key" ON "dosen"("email");

-- CreateIndex
CREATE UNIQUE INDEX "dosen_id_telegram_key" ON "dosen"("id_telegram");

-- CreateIndex
CREATE UNIQUE INDEX "jadwal_id_pendaftaran_kp_key" ON "jadwal"("id_pendaftaran_kp");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_email_key" ON "mahasiswa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "nilai_id_jadwal_seminar_key" ON "nilai"("id_jadwal_seminar");

-- CreateIndex
CREATE UNIQUE INDEX "nilai_id_validasi_nilai_key" ON "nilai"("id_validasi_nilai");

-- CreateIndex
CREATE UNIQUE INDEX "pembimbing_instansi_id_key" ON "pembimbing_instansi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "komponen_penilaian_instansi_id_nilai_key" ON "komponen_penilaian_instansi"("id_nilai");

-- CreateIndex
CREATE UNIQUE INDEX "komponen_penilaian_pembimbing_id_nilai_key" ON "komponen_penilaian_pembimbing"("id_nilai");

-- CreateIndex
CREATE UNIQUE INDEX "komponen_penilaian_penguji_id_nilai_key" ON "komponen_penilaian_penguji"("id_nilai");

-- CreateIndex
CREATE UNIQUE INDEX "validasi_nilai_id_nilai_key" ON "validasi_nilai"("id_nilai");

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "daily_report" ADD CONSTRAINT "daily_report_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "daily_report" ADD CONSTRAINT "daily_report_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detail_daily_report" ADD CONSTRAINT "detail_daily_report_id_daily_report_fkey" FOREIGN KEY ("id_daily_report") REFERENCES "daily_report"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_nama_ruangan_fkey" FOREIGN KEY ("nama_ruangan") REFERENCES "ruangan"("nama") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "mahasiswa_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_email_pembimbing_instansi_fkey" FOREIGN KEY ("email_pembimbing_instansi") REFERENCES "pembimbing_instansi"("email") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_nip_fkey" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_id_jadwal_seminar_fkey" FOREIGN KEY ("id_jadwal_seminar") REFERENCES "jadwal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pembimbing_instansi" ADD CONSTRAINT "pembimbing_instansi_id_instansi_fkey" FOREIGN KEY ("id_instansi") REFERENCES "instansi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_id_instansi_fkey" FOREIGN KEY ("id_instansi") REFERENCES "instansi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_id_tahun_ajaran_fkey" FOREIGN KEY ("id_tahun_ajaran") REFERENCES "tahun_ajaran"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_nip_pembimbing_fkey" FOREIGN KEY ("nip_pembimbing") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_nip_penguji_fkey" FOREIGN KEY ("nip_penguji") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pendaftaran_kp" ADD CONSTRAINT "pendaftaran_kp_email_pembimbing_instansi_fkey" FOREIGN KEY ("email_pembimbing_instansi") REFERENCES "pembimbing_instansi"("email") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokumen_seminar_kp" ADD CONSTRAINT "dokumen_seminar_kp_id_pendaftaran_kp_fkey" FOREIGN KEY ("id_pendaftaran_kp") REFERENCES "pendaftaran_kp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokumen_seminar_kp" ADD CONSTRAINT "dokumen_seminar_kp_nim_fkey" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "komponen_penilaian_instansi" ADD CONSTRAINT "komponen_penilaian_instansi_id_nilai_fkey" FOREIGN KEY ("id_nilai") REFERENCES "nilai"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "komponen_penilaian_pembimbing" ADD CONSTRAINT "komponen_penilaian_pembimbing_id_nilai_fkey" FOREIGN KEY ("id_nilai") REFERENCES "nilai"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "komponen_penilaian_penguji" ADD CONSTRAINT "komponen_penilaian_penguji_id_nilai_fkey" FOREIGN KEY ("id_nilai") REFERENCES "nilai"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "validasi_nilai" ADD CONSTRAINT "validasi_nilai_id_nilai_fkey" FOREIGN KEY ("id_nilai") REFERENCES "nilai"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
