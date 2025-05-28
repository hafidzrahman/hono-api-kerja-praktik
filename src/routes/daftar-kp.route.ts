import { Context, Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DaftarKPHandler from "../handlers/daftar-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";
import prisma from "../infrastructures/db.infrastructure";

const daftarKPRoute = new Hono({ router: new RegExpRouter() });

// daftarKPRoute.use("/", AuthMiddleware.JWTBearerTokenExtraction);

// mahasiswa route

daftarKPRoute.get("/show", async function (c: Context) {
  const mahasiswa = await prisma.mahasiswa.findMany({});
  const instansi = await prisma.instansi.findMany({});
  const pendaftaranKP = await prisma.pendaftaran_kp.findMany({});

  return c.json({ mahasiswa, instansi, pendaftaranKP });
});

daftarKPRoute.get("/test", async function (c: Context) {
  await prisma.lOG.deleteMany({});
  await prisma.option.deleteMany({});
  await prisma.pendaftaran_kp.deleteMany({});
  await prisma.instansi.deleteMany({});
  await prisma.mahasiswa.deleteMany({});
  await prisma.ruangan.deleteMany({});
  await prisma.dosen.deleteMany({});
  await prisma.pembimbing_instansi.deleteMany({});
  await prisma.tahun_ajaran.deleteMany({});

  await prisma.dosen.create({
    data: {
      nip: "123321",
      nama: "Olav",
      email: "a@gmail.com",
    },
  });

  await prisma.mahasiswa.create({
    data: {
      nim: "123",
      nama: "Olav",
      email: "a@gmail.com",
      nip: "123321",
    },
  });

  await prisma.instansi.create({
    data: {
      id: "12432432-2222-2233-3333-333222222223",
      nama: "Test",
      alamat: "jl123",
      jenis: "Pemerintahan",
      nama_pj: "Olavlagi",
      no_hp_pj: "480243",
      status: "Aktif",
      longitude: 4324.432432,
      latitude: 432.432423432,
      radius: 500,
    },
  });

  await prisma.tahun_ajaran.create({
    data: {
      id: 202420251,
    },
  });

  await prisma.option.create({
    data: {
      id: 999,
      tanggal_mulai_pendaftaran_kp: "2025-05-02T08:18:36.528Z",
      tanggal_akhir_pendaftaran_kp: "2025-05-30T08:18:36.528Z",
      tanggal_mulai_pendaftaran_kp_lanjut: "2025-05-02T08:18:36.528Z",
      tanggal_akhir_pendaftaran_kp_lanjut: "2025-05-30T08:18:36.528Z",
    },
  });

  const mahasiswa = await prisma.mahasiswa.findMany({});
  const instansi = await prisma.instansi.findMany({});

  return c.json({ mahasiswa, instansi });
});

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/pendaftaran-kp",
  DaftarKPHandler.createPermohonanPendaftaranKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/pendaftaran-instansi",
  DaftarKPHandler.createPermohonanPendaftaranInstansi
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-pengantar-kp",
  DaftarKPHandler.postSuratPengantarKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-balasan-kp",
  DaftarKPHandler.postSuratBalasanKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-id-pengajuan-dosen-pembimbing-kp",
  DaftarKPHandler.postIdPengajuanDosenPembimbingKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-penunjukkan-dosen-pembimbing-kp",
  DaftarKPHandler.postSuratPenunjukkanDosenPembimbingKP
);

daftarKPRoute.post(
  "/mahasiswa/daftar-kp/unggah-surat-perpanjangan-kp",
  DaftarKPHandler.postSuratPerpanjanganKP
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/riwayat-pendaftaran-kp",
  DaftarKPHandler.getRiwayatPendaftaranKP
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/data-instansi",
  DaftarKPHandler.getDataInstansi
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/kp-aktif-mahasiswa",
  DaftarKPHandler.getKPTerbaruMahasiswa
);

daftarKPRoute.get(
  "/mahasiswa/daftar-kp/log/:idKP",
  DaftarKPHandler.getLOGKPendaftaranKPById
);

// koordinator route

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/berkas-mahasiswa",
  DaftarKPHandler.getBerkasMahasiswa
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/berkas-mahasiswa",
  DaftarKPHandler.postBerkasMahasiswa
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/tolak-berkas-mahasiswa",
  DaftarKPHandler.postTolakBerkasMahasiswa
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-all-data-instansi",
  DaftarKPHandler.getAllDataInstansi
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-data-instansi/:id",
  DaftarKPHandler.getDataDetailInstansi
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/edit-data-instansi",
  DaftarKPHandler.postEditDataInstansi
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/delete-data-instansi",
  DaftarKPHandler.deleteDataInstansi
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-data-kp",
  DaftarKPHandler.getDataKPMahasiswa
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-data-kp/:id",
  DaftarKPHandler.getDataKPDetailMahasiswa
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/edit-daftar-kp-mahasiswa",
  DaftarKPHandler.editMahasiswa
);

daftarKPRoute.get(
  "/koordinator-kp/daftar-kp/get-tanggal-daftar-kp",
  DaftarKPHandler.getTanggalDaftarKP
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/post-tanggal-daftar-kp",
  DaftarKPHandler.postTanggalDaftarKP
);

daftarKPRoute.post(
  "/koordinator-kp/daftar-kp/post-tanggal-daftar-kp-lanjut",
  DaftarKPHandler.postTanggalDaftarKPLanjut
);

export default daftarKPRoute;
