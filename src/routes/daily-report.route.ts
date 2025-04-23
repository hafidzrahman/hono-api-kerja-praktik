import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DailyReportHandler from "../handlers/daily-report.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dailyReportRoute = new Hono({ router: new RegExpRouter() });

dailyReportRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

// for Mahasiswa
dailyReportRoute.get("/check-access", DailyReportHandler.checkAccessLevel);
dailyReportRoute.get("/mahasiswa", DailyReportHandler.getDailyReport);
dailyReportRoute.post("/mahasiswa", DailyReportHandler.createDailyReport);
dailyReportRoute.post("/mahasiswa/detail", DailyReportHandler.createDetailDailyReport);
dailyReportRoute.put("/mahasiswa/detail", DailyReportHandler.updateDetailDailyReport);
dailyReportRoute.get("/mahasiswa/nilai", DailyReportHandler.getNilai);

// for Pembimbing Instansi
dailyReportRoute.get("/pembimbing-instansi", DailyReportHandler.getMahasiswaForPembimbingInstansi);
dailyReportRoute.put("/mahasiswa", DailyReportHandler.evaluateDailyReport);
dailyReportRoute.post("/mahasiswa/nilai", DailyReportHandler.createNilai);

// for Dosen Pembimbing
dailyReportRoute.get("/dosen-pembimbing", DailyReportHandler.getMahasiswaForDosenPembimbing);

export default dailyReportRoute;
