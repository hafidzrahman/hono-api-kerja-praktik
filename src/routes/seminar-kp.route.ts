import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import { jenis_dokumen } from "../generated/prisma";
import AuthMiddleware from "../middlewares/auth.middleware";
import DokumenSeminarKpHandler from "../handlers/dokumen-seminar-kp.handler";
import JadwalSeminarKpHandler from "../handlers/jadwal-seminar-kp.handler";
import * as nilaiSeminarKpHandler from "../handlers/nilai-seminar-kp.handler"
import prisma from "../infrastructures/db.infrastructure";
import DokumenSeminarKpService from "../services/dokumen-seminar-kp.service";
import DokumenSeminarKpRepository from "../repositories/dokumen-seminar-kp.repository";

const seminarKPRoute = new Hono({ router: new RegExpRouter() });
const dokumenSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const jadwalSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const nilaiSeminarKpRoute = new Hono({ router: new RegExpRouter() });

const dokumenSeminarKpRepository = new DokumenSeminarKpRepository(prisma)
const dokumenSeminarKpService = new DokumenSeminarKpService(dokumenSeminarKpRepository)
const dokumenSeminarKpHandler = new DokumenSeminarKpHandler(dokumenSeminarKpService);
const jadwalSeminarKpHandler = new JadwalSeminarKpHandler();

dokumenSeminarKpRoute.post(
  "/dokumen/surat-keterangan-selesai-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.SURAT_KETERANGAN_SELESAI_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/laporan-tambahan-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.LAPORAN_TAMBAHAN_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/form-kehadiran-seminar",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.FORM_KEHADIRAN_SEMINAR)
)
dokumenSeminarKpRoute.post(
  "/dokumen/id-surat-undangan",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.ID_SURAT_UNDANGAN)
)
dokumenSeminarKpRoute.post(
  "/dokumen/surat-undangan-seminar-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.SURAT_UNDANGAN_SEMINAR_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/berita-acara-seminar",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.BERITA_ACARA_SEMINAR)
)
dokumenSeminarKpRoute.post(
  "/dokumen/daftar-hadir-seminar",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.DAFTAR_HADIR_SEMINAR)
)
dokumenSeminarKpRoute.post(
  "/dokumen/lembar-pengesahan-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.LEMBAR_PENGESAHAN_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/revisi-daily-report",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.REVISI_DAILY_REPORT)
)
dokumenSeminarKpRoute.post(
  "/dokumen/revisi-laporan-tambahan",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.REVISI_LAPORAN_TAMBAHAN)
)
dokumenSeminarKpRoute.post(
  "/dokumen/sistem-kp-final",
  AuthMiddleware.JWTBearerTokenExtraction,
  (c) => dokumenSeminarKpHandler.uploadDokumen(c, jenis_dokumen.SISTEM_KP_FINAL)
)
// endpoint dokumen seminar kp
dokumenSeminarKpRoute.get("/dokumen/:id", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.getDokumenById);
dokumenSeminarKpRoute.put("/dokumen/:id", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.updateDokumen);
dokumenSeminarKpRoute.post("/dokumen/:id/validate", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.validateDokumen);
dokumenSeminarKpRoute.post("/dokumen/:id/reject", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.rejectDokumen);

// endpoint jadwal seminar kp
jadwalSeminarKpRoute.post("/jadwal", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.createJadwal);
jadwalSeminarKpRoute.get("/jadwal", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.getAllJadwal);
jadwalSeminarKpRoute.get("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.getJadwalById);
jadwalSeminarKpRoute.put("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.updateJadwal);
jadwalSeminarKpRoute.delete("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.deleteJadwal);
jadwalSeminarKpRoute.post("/jadwal/:id/selesai", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.completeJadwal);
jadwalSeminarKpRoute.post("/jadwal/:id/jadwal-ulang", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.rescheduleJadwal);

// endpoint nilai seminar kp
nilaiSeminarKpRoute.post("/nilai/instansi", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiInstansi);
nilaiSeminarKpRoute.post("/nilai/dosen-pembimbing", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiPembimbing);
nilaiSeminarKpRoute.post("/nilai/dosen-penguji", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiPenguji);
nilaiSeminarKpRoute.get("/nilai/mahasiswa/:nim", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.getNilaiMahasiswa);
nilaiSeminarKpRoute.get("/nilai", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.getAllNilai);

export default seminarKPRoute;
