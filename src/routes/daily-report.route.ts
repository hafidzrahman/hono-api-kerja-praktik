import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DaftarKPHandler from "../handlers/daftar-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dailyReportRoute = new Hono({ router: new RegExpRouter() });

dailyReportRoute.get("/", AuthMiddleware.JWTBearerTokenExtraction, DaftarKPHandler.createPermohonan);

export default dailyReportRoute;