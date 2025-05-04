import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import { jenis_dokumen } from "../generated/prisma";
import AuthMiddleware from "../middlewares/auth.middleware";
import DokumenSeminarKpHandler from "../handlers/dokumen-seminar-kp.handler";
import JadwalSeminarKpHandler from "../handlers/jadwal-seminar-kp.handler";
import * as nilaiSeminarKpHandler from "../handlers/nilai-seminar-kp.handler"

const dokumenSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const jadwalSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const nilaiSeminarKpRoute = new Hono({ router: new RegExpRouter() });

const jadwalSeminarKpHandler = new JadwalSeminarKpHandler();

dokumenSeminarKpRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

dokumenSeminarKpRoute.post(
  "/dokumen/surat-keterangan-selesai-kp", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.SURAT_KETERANGAN_SELESAI_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/laporan-tambahan-kp", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.LAPORAN_TAMBAHAN_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/form-kehadiran-seminar", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.FORM_KEHADIRAN_SEMINAR)
)
dokumenSeminarKpRoute.post(
  "/dokumen/id-surat-undangan", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.ID_SURAT_UNDANGAN)
)
dokumenSeminarKpRoute.post(
  "/dokumen/surat-undangan-seminar-kp", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.SURAT_UNDANGAN_SEMINAR_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/berita-acara-seminar", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.BERITA_ACARA_SEMINAR)
)
dokumenSeminarKpRoute.post(
  "/dokumen/daftar-hadir-seminar", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.DAFTAR_HADIR_SEMINAR)
)
dokumenSeminarKpRoute.post(
  "/dokumen/lembar-pengesahan-kp", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.LEMBAR_PENGESAHAN_KP)
)
dokumenSeminarKpRoute.post(
  "/dokumen/revisi-daily-report", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.REVISI_DAILY_REPORT)
)
dokumenSeminarKpRoute.post(
  "/dokumen/revisi-laporan-tambahan", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.REVISI_LAPORAN_TAMBAHAN)
)
dokumenSeminarKpRoute.post(
  "/dokumen/sistem-kp-final", (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen.SISTEM_KP_FINAL)
)

dokumenSeminarKpRoute.get("/dokumen/:nim", DokumenSeminarKpHandler.getDokumenSeminarKP);
dokumenSeminarKpRoute.post("/dokumen/:id/validate", DokumenSeminarKpHandler.validateDokumenSeminarKP);
dokumenSeminarKpRoute.post("/dokumen/:id/reject", DokumenSeminarKpHandler.rejectDokumenSeminarKP);

// endpoint jadwal seminar kp
jadwalSeminarKpRoute.post("/jadwal", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.createJadwal);
jadwalSeminarKpRoute.get("/jadwal", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.getAllJadwal);
jadwalSeminarKpRoute.get("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.getJadwalById);
jadwalSeminarKpRoute.put("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.updateJadwal);
jadwalSeminarKpRoute.delete("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.deleteJadwal);
jadwalSeminarKpRoute.post("/jadwal/:id/selesai", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.completeJadwal);
jadwalSeminarKpRoute.post("/jadwal/:id/jadwal-ulang", AuthMiddleware.JWTBearerTokenExtraction, jadwalSeminarKpHandler.rescheduleJadwal);

// endpoint nilai seminar kp
nilaiSeminarKpRoute.post("/nilai/dosen-pembimbing", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiPembimbing);
nilaiSeminarKpRoute.post("/nilai/dosen-penguji", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiPenguji);
nilaiSeminarKpRoute.get("/nilai/mahasiswa/:nim", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.getNilaiMahasiswa);
nilaiSeminarKpRoute.get("/nilai", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.getAllNilai);

export default dokumenSeminarKpRoute;
