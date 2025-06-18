import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DailyReportHandler from "../handlers/daily-report.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dailyReportRoute = new Hono({ router: new RegExpRouter() });

// for Mahasiswa
dailyReportRoute.get("/mahasiswa/daily-report-saya", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.getDailyReportSaya);
dailyReportRoute.get("/mahasiswa/daily-report-saya/:id", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.getDetailDailyReportSaya);
dailyReportRoute.post("/mahasiswa/presensi", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.postDailyReport);
dailyReportRoute.post("/mahasiswa/detail-daily-report/:id", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.postDetailDailyReport);
dailyReportRoute.put("/mahasiswa/detail-daily-report/:id", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.putDetailDailyReport);

// for Pembimbing Instansi
dailyReportRoute.get("/pembimbing-instansi/mahasiswa-saya/:id", DailyReportHandler.getMahasiswaInstansiSaya);
dailyReportRoute.get("/pembimbing-instansi/mahasiswa/:id", DailyReportHandler.getDetailMahasiswaInstansiSaya);
dailyReportRoute.get("/pembimbing-instansi/detail-daily-report-mahasiswa/:id", DailyReportHandler.getDetailDailyReportMahasiswaInstansiSaya);
dailyReportRoute.put("/pembimbing-instansi/daily-report-mahasiswa/:id", DailyReportHandler.putDailyReport);
dailyReportRoute.post("/pembimbing-instansi/nilai-mahasiswa/:id", DailyReportHandler.postNilai);
dailyReportRoute.put("/pembimbing-instansi/nilai-mahasiswa/:id", DailyReportHandler.putNilai);

// for Koordinator KP
dailyReportRoute.get("/koordinator-kp/semua-mahasiswa", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.getAllMahasiswa);
dailyReportRoute.get("/koordinator-kp/mahasiswa/:id", AuthMiddleware.JWTBearerTokenExtraction, DailyReportHandler.getAllDetailMahasiswa);

export default dailyReportRoute;
