import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import BimbinganKPHandler from "../handlers/bimbingan-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const bimbinganKPRoute = new Hono({ router: new RegExpRouter() });

bimbinganKPRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

bimbinganKPRoute.get("/", BimbinganKPHandler.getBimbinganByMahasiswa);

bimbinganKPRoute.post("/", BimbinganKPHandler.createBimbingan);
bimbinganKPRoute.put("/", BimbinganKPHandler.updateBimbingan);
bimbinganKPRoute.get("/mahasiswa", BimbinganKPHandler.getMahasiswaAndBimbingan);

export default bimbinganKPRoute;
