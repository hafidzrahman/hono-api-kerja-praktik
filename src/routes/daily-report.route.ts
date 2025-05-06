import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DailyReportHandler from "../handlers/daily-report.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dailyReportRoute = new Hono({ router: new RegExpRouter() });

dailyReportRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

// for Mahasiswa
dailyReportRoute.get("/mahasiswa/check-access-saya", DailyReportHandler.checkAccessLevel);
dailyReportRoute.get("/mahasiswa/daily-report-saya", DailyReportHandler.getDailyReport);
dailyReportRoute.post("/mahasiswa/daily-report", DailyReportHandler.createDailyReport);
dailyReportRoute.post("/mahasiswa/detail-daily-report", DailyReportHandler.createDetailDailyReport);
dailyReportRoute.put("/mahasiswa/detail-daily-report", DailyReportHandler.updateDetailDailyReport);
dailyReportRoute.get("/mahasiswa/nilai-saya", DailyReportHandler.getNilai);

// for Pembimbing Instansi
dailyReportRoute.get("/pembimbing-instansi/mahasiswa-saya", DailyReportHandler.getMahasiswaForPembimbingInstansi);
dailyReportRoute.get("/pembimbing-instansi/mahasiswa/:nim", DailyReportHandler.getMahasiswaForPembimbingInstansi);
dailyReportRoute.put("/pembimbing-instansi/daily-report-mahasiswa", DailyReportHandler.evaluateDailyReport);
dailyReportRoute.post("/pembimbing-instansi/nilai-mahasiswa", DailyReportHandler.createNilai);

// for Dosen Pembimbing
dailyReportRoute.get("/dosen-pembimbing/mahasiswa-saya", DailyReportHandler.getMahasiswaForDosenPembimbing);
dailyReportRoute.get("/dosen-pembimbing/daily-report/mahasiswa/:nim", DailyReportHandler.getMahasiswaForDosenPembimbing);

export default dailyReportRoute;
