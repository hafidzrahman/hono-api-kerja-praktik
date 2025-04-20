import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DailyReportHandler from "../handlers/daily-report.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dailyReportRoute = new Hono({ router: new RegExpRouter() });

dailyReportRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

dailyReportRoute.get("/check-access", DailyReportHandler.checkAccessLevel);
dailyReportRoute.get("/", DailyReportHandler.getDailyReport);
dailyReportRoute.post("/", DailyReportHandler.createDailyReport);
dailyReportRoute.post("/detail", DailyReportHandler.createDetailDailyReport);
dailyReportRoute.put("/detail", DailyReportHandler.updateDetailDailyReport);
dailyReportRoute.get("/nilai", DailyReportHandler.getNilaiForMahasiswa);

dailyReportRoute.put("/", DailyReportHandler.evaluateDailyReport);
dailyReportRoute.get("/mahasiswa-instansi", DailyReportHandler.getMahasiswaAndDailyReportForPembimbing);
dailyReportRoute.post("/nilai", DailyReportHandler.createNilaiForMahasiswa);

dailyReportRoute.get("/mahasiswa-bimbingan", DailyReportHandler.getMahasiswaAndDailyReportForDosen);

export default dailyReportRoute;
