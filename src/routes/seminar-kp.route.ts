import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import AuthMiddleware from "../middlewares/auth.middleware";
import DokumenSeminarKpHandler from "../handlers/dokumen-seminar-kp.handler";
import JadwalSeminarKpHandler from "../handlers/jadwal-seminar-kp.handler";
import * as nilaiSeminarKpHandler from "../handlers/nilai-seminar-kp.handler"

const seminarKPRoute = new Hono({ router: new RegExpRouter() });
const dokumenSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const jadwalSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const nilaiSeminarKpRoute = new Hono({ router: new RegExpRouter() });

const dokumenSeminarKpHandler = new DokumenSeminarKpHandler();
const jadwalSeminarKpHandler = new JadwalSeminarKpHandler();

// endpoint dokumen seminar kp
dokumenSeminarKpRoute.post("/dokumen/upload", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.uploadDokumen);
dokumenSeminarKpRoute.patch("/dokumen/:id/status", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.updateDokumenStatus);
dokumenSeminarKpRoute.get("/dokumen/step/:id_pendaftaran_kp", AuthMiddleware.JWTBearerTokenExtraction, dokumenSeminarKpHandler.getCurrentStep);

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
