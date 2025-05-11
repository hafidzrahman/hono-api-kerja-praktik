import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import BimbinganKPHandler from "../handlers/bimbingan-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const bimbinganKPRoute = new Hono({ router: new RegExpRouter() });

bimbinganKPRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

// for Mahasiswa
bimbinganKPRoute.get("/mahasiswa/bimbingan-saya", BimbinganKPHandler.getBimbinganSaya);

// for Dosen Pembimbing
bimbinganKPRoute.post("/dosen-pembimbing/bimbingan-mahasiswa", BimbinganKPHandler.postBimbingan);
bimbinganKPRoute.put("/dosen-pembimbing/bimbingan-mahasiswa", BimbinganKPHandler.putBimbingan);
bimbinganKPRoute.get("/dosen-pembimbing/bimbingan/mahasiswa/:nim", BimbinganKPHandler.getDetailMahasiswaBimbinganSaya);

export default bimbinganKPRoute;
