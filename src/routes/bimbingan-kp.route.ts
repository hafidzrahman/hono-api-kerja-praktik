import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import BimbinganKPHandler from "../handlers/bimbingan-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const bimbinganKPRoute = new Hono({ router: new RegExpRouter() });

bimbinganKPRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

//for Mahasiswa
bimbinganKPRoute.get("/mahasiswa", BimbinganKPHandler.getBimbingan);

// for Dosen Pembimbing
bimbinganKPRoute.post("/mahasiswa", BimbinganKPHandler.createBimbingan);
bimbinganKPRoute.put("/mahasiswa", BimbinganKPHandler.updateBimbingan);
bimbinganKPRoute.get("/dosen-pembimbing/mahasiswa", BimbinganKPHandler.getMahasiswa);

export default bimbinganKPRoute;
