import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import { jenis_dokumen } from "../generated/prisma";
import AuthMiddleware from "../middlewares/auth.middleware";
import SeminarKpHandler from "../handlers/seminar-kp.handler";
import JadwalSeminarKpHandler from "../handlers/jadwal-seminar-kp.handler";
import * as nilaiSeminarKpHandler from "../handlers/nilai-seminar-kp.handler";

const seminarKpRoute = new Hono({ router: new RegExpRouter() });
const jadwalSeminarKpRoute = new Hono({ router: new RegExpRouter() });
const nilaiSeminarKpRoute = new Hono({ router: new RegExpRouter() });

seminarKpRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

const dokumenTypes = Object.keys(jenis_dokumen).map((key) => ({
  route: key.toLowerCase().replace(/_/g, "-"),
  type: key as keyof typeof jenis_dokumen,
}));

dokumenTypes.forEach(({ route, type }) => {
  seminarKpRoute.post(`/dokumen/${route}`, (c) => SeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen[type]));
});

seminarKpRoute.get("/dokumen", SeminarKpHandler.getAllDokumenSeminarKP);
seminarKpRoute.get("/dokumen/:nim", SeminarKpHandler.getDokumenSeminarKPByNIM);
seminarKpRoute.get("/dokumen-saya", SeminarKpHandler.getDokumenSeminarKPSaya);
seminarKpRoute.post("/dokumen/diterima", SeminarKpHandler.postTerimaDokumenSeminarKP);
seminarKpRoute.post("/dokumen/ditolak", SeminarKpHandler.postTolakDokumenSeminarKP);

// endpoint jadwal seminar kp
jadwalSeminarKpRoute.post("/jadwal", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.createJadwal);
jadwalSeminarKpRoute.get("/jadwal", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.getAllJadwal);
jadwalSeminarKpRoute.get("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.getJadwalById);
jadwalSeminarKpRoute.put("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.updateJadwal);
jadwalSeminarKpRoute.delete("/jadwal/:id", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.deleteJadwal);
jadwalSeminarKpRoute.post("/jadwal/selesai/:id", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.completeJadwal);
jadwalSeminarKpRoute.post("/jadwal/jadwal-baru/:id", AuthMiddleware.JWTBearerTokenExtraction, JadwalSeminarKpHandler.rescheduleJadwal);

// endpoint nilai seminar kp
nilaiSeminarKpRoute.post("/nilai/dosen-pembimbing", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiPembimbing);
nilaiSeminarKpRoute.post("/nilai/dosen-penguji", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.createNilaiPenguji);
nilaiSeminarKpRoute.get("/nilai/mahasiswa/:nim", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.getNilaiMahasiswa);
nilaiSeminarKpRoute.get("/nilai", AuthMiddleware.JWTBearerTokenExtraction, nilaiSeminarKpHandler.getAllNilai);

export default seminarKpRoute;
