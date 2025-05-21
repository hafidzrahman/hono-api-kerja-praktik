import { Context, Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DaftarKPHandler from "../handlers/daftar-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";
import prisma from "../infrastructures/db.infrastructure";

const daftarKPRoute = new Hono({router : new RegExpRouter()});

// daftarKPRoute.get("/", AuthMiddleware.JWTBearerTokenExtraction, DaftarKPHandler.createPermohonan);

// mahasiswa route

daftarKPRoute.get("/show", async function (c : Context) {
    const mahasiswa = await prisma.mahasiswa.findMany({});
    const instansi = await prisma.instansi.findMany({});
    const pendaftaranKP = await prisma.pendaftaran_kp.findMany({});
    
    return c.json({mahasiswa, instansi, pendaftaranKP})
})

daftarKPRoute.get("/test", async function (c : Context) {
    await prisma.option.deleteMany({})
    await prisma.pendaftaran_kp.deleteMany({})
    await prisma.instansi.deleteMany({})
    await prisma.mahasiswa.deleteMany({})
    await prisma.ruangan.deleteMany({})
    await prisma.dosen.deleteMany({})
    await prisma.pembimbing_instansi.deleteMany({})
    await prisma.tahun_ajaran.deleteMany({})

    await prisma.dosen.create({
        data : {
            nip : "123321",
            nama : "Olav",
            email : "a@gmail.com",
        }
    })

    await prisma.mahasiswa.create({
        data : {
            nim : "123",
            nama : "Olav",
            email : "a@gmail.com",
            nip: "123321"
        }
    })

    await prisma.instansi.create({
        data : {
            id : "12432432-2222-2233-3333-333222222223",
            nama : "Test",
            alamat : "jl123",
            jenis : "Pemerintahan",
            nama_pj : "Olavlagi",
            no_hp_pj : "480243",
            status : "Aktif"
        }
    })

    await prisma.tahun_ajaran.create({
        data : {
            id : 202420251
        }
    })

    await prisma.option.create({
        data : {
            id : 999,
            tanggal_mulai_pendaftaran_kp : "2025-05-02T08:18:36.528Z",
            tanggal_akhir_pendaftaran_kp : "2025-05-30T08:18:36.528Z",
            tanggal_mulai_pendaftaran_kp_lanjut : "2025-05-02T08:18:36.528Z",
            tanggal_akhir_pendaftaran_kp_lanjut : "2025-05-30T08:18:36.528Z"
        }
    })

    const mahasiswa = await prisma.mahasiswa.findMany({})
    const instansi = await prisma.instansi.findMany({})
    
    return c.json({mahasiswa, instansi})
})

daftarKPRoute.post("/pendaftaran-kp", DaftarKPHandler.createPermohonanPendaftaranKP);

daftarKPRoute.post("/pendaftaran-instansi", DaftarKPHandler.createPermohonanPendaftaranInstansi);

daftarKPRoute.post("/unggah-surat-pengantar-kp", DaftarKPHandler.postSuratPengantarKP);

daftarKPRoute.post("/unggah-surat-balasan-kp", DaftarKPHandler.postSuratBalasanKP);

daftarKPRoute.post("/unggah-id-pengajuan-dosen-pembimbing-kp", DaftarKPHandler.postIdPengajuanDosenPembimbingKP);

daftarKPRoute.post("/unggah-surat-penunjukkan-dosen-pembimbing-kp", DaftarKPHandler.postSuratPenunjukkanDosenPembimbingKP);

daftarKPRoute.post("/unggah-surat-perpanjangan-kp", DaftarKPHandler.postSuratPerpanjanganKP);

daftarKPRoute.get("/riwayat-pendaftaran-kp", DaftarKPHandler.getRiwayatPendaftaranKP);

daftarKPRoute.get("/data-instansi", DaftarKPHandler.getDataInstansi)

daftarKPRoute.get("/kp-aktif-mahasiswa", DaftarKPHandler.getKPTerbaruMahasiswa)

// koordinator route

daftarKPRoute.get("/berkas-mahasiswa", DaftarKPHandler.getBerkasMahasiswa);

daftarKPRoute.post("/berkas-mahasiswa", DaftarKPHandler.postBerkasMahasiswa);

daftarKPRoute.post("/tolak-berkas-mahasiswa", DaftarKPHandler.postTolakBerkasMahasiswa)

daftarKPRoute.get("/get-all-data-instansi", DaftarKPHandler.getAllDataInstansi)

daftarKPRoute.get("/get-data-instansi/:id", DaftarKPHandler.getDataDetailInstansi)

daftarKPRoute.post("/edit-data-instansi", DaftarKPHandler.postEditDataInstansi)

daftarKPRoute.post("/delete-data-instansi", DaftarKPHandler.deleteDataInstansi)

daftarKPRoute.get("/get-data-kp", DaftarKPHandler.getDataKPMahasiswa)

daftarKPRoute.get("/get-data-kp/:id", DaftarKPHandler.getDataKPDetailMahasiswa)

daftarKPRoute.get("/get-tanggal-daftar-kp", DaftarKPHandler.getTanggalDaftarKP)

daftarKPRoute.post("/post-tanggal-daftar-kp", DaftarKPHandler.postTanggalDaftarKP)

daftarKPRoute.post("/post-tanggal-daftar-kp-lanjut", DaftarKPHandler.postTanggalDaftarKPLanjut)

export default daftarKPRoute;