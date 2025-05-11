import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import { jenis_dokumen } from "../generated/prisma";
import AuthMiddleware from "../middlewares/auth.middleware";
import SeminarKpHandler from "../handlers/seminar-kp.handler";
import JadwalSeminarKpHandler from "../handlers/jadwal.handler";
import * as nilaiSeminarKpHandler from "../handlers/nilai-seminar-kp.handler";

const seminarKpRoute = new Hono({ router: new RegExpRouter() });

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
seminarKpRoute.post("/dokumen/validasi", SeminarKpHandler.postTerimaDokumenSeminarKP);
seminarKpRoute.post("/dokumen/ditolak", SeminarKpHandler.postTolakDokumenSeminarKP);

// endpoint jadwal seminar kp
seminarKpRoute.post("/jadwal", JadwalSeminarKpHandler.postJadwal);
seminarKpRoute.put("/jadwal", JadwalSeminarKpHandler.putJadwal);

// endpoint nilai seminar kp
seminarKpRoute.post("/nilai/dosen-pembimbing", nilaiSeminarKpHandler.createNilaiPembimbing);
seminarKpRoute.post("/nilai/dosen-penguji", nilaiSeminarKpHandler.createNilaiPenguji);
seminarKpRoute.get("/nilai/mahasiswa/:nim", nilaiSeminarKpHandler.getNilaiMahasiswa);
seminarKpRoute.get("/nilai", nilaiSeminarKpHandler.getAllNilai);

export default seminarKpRoute;
