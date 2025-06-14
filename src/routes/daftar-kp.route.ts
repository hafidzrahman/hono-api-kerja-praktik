import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DaftarKPHandler from "../handlers/daftar-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const daftarKPRoute = new Hono({ router: new RegExpRouter() });

// mahasiswa route

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/pendaftaran-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.createPermohonanPendaftaranKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/pendaftaran-instansi",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.createPermohonanPendaftaranInstansi
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-pengantar-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postSuratPengantarKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-balasan-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postSuratBalasanKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-id-pengajuan-dosen-pembimbing-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postIdPengajuanDosenPembimbingKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-penunjukkan-dosen-pembimbing-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postSuratPenunjukkanDosenPembimbingKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-perpanjangan-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postSuratPerpanjanganKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-penolakan-instansi",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postSuratPenolakanInstansi
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/riwayat-pendaftaran-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getRiwayatPendaftaranKP
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/data-instansi",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getDataInstansi
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/kp-saya",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getKPTerbaruMahasiswa
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/log/:idKP",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getLOGKPendaftaranKPById
);

// koordinator route

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/berkas-mahasiswa",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getBerkasMahasiswa
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/acc-berkas-mahasiswa",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.accBerkasMahasiswa
);

daftarKPRoute.put(
  "/koordinator-kp/daftar-kp/berkas-mahasiswa",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.putBerkasMahasiswa
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/tolak-berkas-mahasiswa",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postTolakBerkasMahasiswa
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/instansi",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getAllDataInstansi
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/instansi/:id",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getDataDetailInstansi
);

daftarKPRoute.put(
  "/koordinator-kp/daftar-kp/instansi",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.editDataInstansi
);

daftarKPRoute.delete(
  "/koordinator-kp/daftar-kp/instansi/:id",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.deleteDataInstansi
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-data-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getDataKPMahasiswa
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-data-kp/:id",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getDataKPDetailMahasiswa
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/post-tanggal-daftar-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postTanggalDaftarKP
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/post-tanggal-daftar-kp-lanjut",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.postTanggalDaftarKPLanjut
);

// all

daftarKPRoute.get(
  "/daftar-kp/get-tanggal-daftar-kp",
  AuthMiddleware.JWTBearerTokenExtraction,
  DaftarKPHandler.getTanggalDaftarKP
);

export default daftarKPRoute;
