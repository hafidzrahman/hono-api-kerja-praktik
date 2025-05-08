import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DailyReportHandler from "../handlers/daily-report.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dailyReportRoute = new Hono({ router: new RegExpRouter() });

dailyReportRoute.use(AuthMiddleware.JWTBearerTokenExtraction);

// for Mahasiswa
dailyReportRoute.get("/mahasiswa/access-saya", DailyReportHandler.getAccessSaya);
dailyReportRoute.get("/mahasiswa/daily-report-saya", DailyReportHandler.getDailyReportSaya);
dailyReportRoute.post("/mahasiswa/daily-report", DailyReportHandler.postDailyReport);
dailyReportRoute.post("/mahasiswa/detail-daily-report", DailyReportHandler.postDetailDailyReport);
dailyReportRoute.put("/mahasiswa/detail-daily-report", DailyReportHandler.putDetailDailyReport);
dailyReportRoute.get("/mahasiswa/nilai-saya", DailyReportHandler.getNilaiSaya);

// for Pembimbing Instansi
dailyReportRoute.get("/pembimbing-instansi/mahasiswa-saya", DailyReportHandler.getMahasiswaInstansiSaya);
dailyReportRoute.get("/pembimbing-instansi/mahasiswa/:nim", DailyReportHandler.getDetailMahasiswaInstansiSaya);
dailyReportRoute.put("/pembimbing-instansi/daily-report-mahasiswa", DailyReportHandler.putDailyReport);
dailyReportRoute.post("/pembimbing-instansi/nilai-mahasiswa", DailyReportHandler.postNilai);

// for Dosen Pembimbing
dailyReportRoute.get("/dosen-pembimbing/mahasiswa-saya", DailyReportHandler.getMahasiswaBimbinganSaya);
dailyReportRoute.get("/dosen-pembimbing/daily-report/mahasiswa/:nim", DailyReportHandler.getDetailMahasiswaBimbinganSaya);

export default dailyReportRoute;
