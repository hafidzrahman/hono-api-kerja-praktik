import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import BimbinganKPHandler from "../handlers/bimbingan-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const bimbinganKPRoute = new Hono({ router: new RegExpRouter() });

bimbinganKPRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

// for Mahasiswa
bimbinganKPRoute.get("/mahasiswa/bimbingan-saya", BimbinganKPHandler.getBimbinganSaya);

// for Dosen Pembimbing
bimbinganKPRoute.get("/dosen-pembimbing/mahasiswa-saya", BimbinganKPHandler.getMahasiswaBimbinganSaya);
bimbinganKPRoute.get("/dosen-pembimbing/mahasiswa/:id", BimbinganKPHandler.getDetailMahasiswaBimbinganSaya);
bimbinganKPRoute.post("/dosen-pembimbing/bimbingan-mahasiswa/:id", BimbinganKPHandler.postBimbingan);
bimbinganKPRoute.post("/dosen-pembimbing/nilai-mahasiswa/:id", BimbinganKPHandler.postNilai);
bimbinganKPRoute.put("/dosen-pembimbing/nilai-mahasiswa/:id", BimbinganKPHandler.putNilai);
// bimbinganKPRoute.put("/dosen-pembimbing/bimbingan-mahasiswa", BimbinganKPHandler.putBimbingan);

export default bimbinganKPRoute;
