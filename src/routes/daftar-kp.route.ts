import { Context, Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DaftarKPHandler from "../handlers/daftar-kp.handler";
import AuthMiddleware from "../middlewares/auth.middleware";
import prisma from "../infrastructures/db.infrastructure";

const daftarKPRoute = new Hono({router : new RegExpRouter()});

// daftarKPRoute.get("/", AuthMiddleware.JWTBearerTokenExtraction, DaftarKPHandler.createPermohonan);

// mahasiswa route

daftarKPRoute.get("/show", async function (c : Context) {
    const mahasiswa = await prisma.mahasiswa.findMany({})
    const instansi = await prisma.instansi.findMany({})
    const pendaftaranKP = await prisma.pendaftaran_kp.findMany({})
    
    return c.json({mahasiswa, instansi, pendaftaranKP})
})

daftarKPRoute.get("/test", async function (c : Context) {

    await prisma.pendaftaran_kp.deleteMany({})
    await prisma.instansi.deleteMany({})
    await prisma.mahasiswa.deleteMany({})
    await prisma.dosen.deleteMany({})
    await prisma.pembimbing_instansi.deleteMany({})
    await prisma.tahun_ajaran.deleteMany({})
    await prisma.ruangan.deleteMany({})


    await prisma.mahasiswa.create({
        data : {
            nim : "123",
            nama : "Olav",
            email : "a@gmail.com",
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
            id : 20260251
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

daftarKPRoute.get("/pending-data-instansi", DaftarKPHandler.getPendingDataInstansi)

daftarKPRoute.post("/pending-data-instansi", DaftarKPHandler.postPendingDataInstansi)

daftarKPRoute.post("/delete-data-instansi", DaftarKPHandler.deleteDataInstansi)

export default daftarKPRoute;