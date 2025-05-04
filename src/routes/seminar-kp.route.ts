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

const dokumenTypes = Object.keys(jenis_dokumen).map(key => ({
  route: key.toLowerCase().replace(/_/g, '-'),
  type: key as keyof typeof jenis_dokumen
}))

dokumenTypes.forEach(({route, type}) => {
  dokumenSeminarKpRoute.post(
    `/dokumen/${route}`,
    (c) => DokumenSeminarKpHandler.postDokumenSeminarKP(c, jenis_dokumen[type])
  )
})

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
