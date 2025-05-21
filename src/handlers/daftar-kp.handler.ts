import { Context } from "hono";
import DaftarKPService from "../services/daftar-kp.service";
import { APIError } from "../utils/api-error.util";

export default class DaftarKPHandler {

    public static async postTanggalDaftarKP(c : Context) {
        const {tanggalMulai, tanggalTerakhir} = await c.req.json()
        return c.json(await DaftarKPService.postTanggalDaftarKP(tanggalMulai, tanggalTerakhir))
    }

    public static async postTanggalDaftarKPLanjut(c : Context) {
        const {tanggalMulai, tanggalTerakhir} = await c.req.json()
        return c.json(await DaftarKPService.postTanggalDaftarKPLanjut(tanggalMulai, tanggalTerakhir))
    }

    public static async getTanggalDaftarKP(c : Context) {
        return c.json(await DaftarKPService.getTanggalDaftarKP())
    }

    public static async getDataKPDetailMahasiswa(c : Context) {
        const idKP = c.req.param('id');
        
        if (!idKP) {
            throw new APIError("Gagal mendapatkan data detail kp mahasiswa")
        }

        return c.json(await DaftarKPService.getDataKPDetailMahasiswa(idKP))
    }

    public static async getDataKPMahasiswa(c : Context) {
    return c.json(await DaftarKPService.getDataKPMahasiswa());
}
    

    public static async postTolakBerkasMahasiswa(c : Context) {
        const {id, message} = await c.req.json();

        if (!id) {
            throw new APIError("Id kerja praktek mahasiswa kosong");
        }

        return c.json(await DaftarKPService.postTolakBerkasMahasiswa(id, message))
    }

    public static async deleteDataInstansi(c : Context) {
        const {id} = await c.req.json() as any

        if (!id) {
            throw new APIError("ID data instansi kosong")
        }

        return c.json(await DaftarKPService.deleteDataInstansi(id))
    }

    public static async postEditDataInstansi(c : Context) {
        const {id, status} = await c.req.json() as any;

        if (!id) {
            throw new APIError("ID data instansi kosong");
        } else if (status !== "Aktif" && status !== "Pending" && status !== "Tidak_Aktif") {
            throw new APIError("Status instansi tidak valid");
        }

        return c.json(await DaftarKPService.postEditDataInstansi(id, status));
    }

    public static async getDataDetailInstansi(c : Context) {
        const id = c.req.param('id');

        if (!id) {
            throw new Error("ID instansi kosong")
        }

        return c.json(await DaftarKPService.getDataDetailInstansi(id))

    }

    public static async getAllDataInstansi(c : Context) {
        return c.json(await DaftarKPService.getAllDataInstansi())
    }

    public static async getKPTerbaruMahasiswa(c : Context) {
        //   const {email} = c.get('user');
        const email = "a@gmail.com"
        

        if (!email) {
            throw new APIError("Email tidak ditemukan")
        }

        return c.json(await DaftarKPService.getKPTerbaruMahasiswa(email))

    }

    public static async createPermohonanPendaftaranKP(c : Context) {
        //   const {email} = c.get('user');
        const email = "a@gmail.com"
        
        const {tanggalMulai, tujuanSuratInstansi, idInstansi} = await c.req.json();

        if (!email) {
            throw new APIError("Email tidak ditemukan")
        }

        else if (!tanggalMulai || !Date.parse(tanggalMulai) || !tujuanSuratInstansi || !idInstansi) {
            throw new APIError("Data yang anda masukkan kurang lengkap!")
        }

        return c.json(await DaftarKPService.createPermohonanPendaftaranKP({email, tanggalMulai, tujuanSuratInstansi, idInstansi}))

        
    }

    public static async getDataInstansi(c : Context) {
        return c.json(await DaftarKPService.getDataInstansi())
    }

    public static async createPermohonanPendaftaranInstansi(c : Context) {
        //    const {email} = c.get('user');
        const email = "a@gmail.com"
        
        const {namaInstansi, alamatInstansi, namaPenanggungJawabInstansi, telpPenanggungJawabInstansi, jenisInstansi, longitude, latitude, profilSingkat} = await c.req.json();

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        } else if (!namaInstansi || !alamatInstansi || !namaPenanggungJawabInstansi || !telpPenanggungJawabInstansi || !jenisInstansi) {
            throw new APIError("Data yang anda masukkan tidak lengkap", 405)
        }

        return c.json(await DaftarKPService.createPermohonanPendaftaranInstansi({email, namaInstansi, alamatInstansi, namaPenanggungJawabInstansi, telpPenanggungJawabInstansi, jenisInstansi, longitude, latitude, profilSingkat}))
    }

    public static async postSuratPengantarKP(c : Context) {
        //   const {email} = c.get('user')
        const email = "a@gmail.com"
        
        const {linkSuratPengantarKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        } else if (!linkSuratPengantarKP) {
            throw new APIError("Link surat tidak diisi", 404)
        }

        return c.json(await DaftarKPService.postSuratPengantarKP(email, linkSuratPengantarKP))
    }

    public static async postSuratBalasanKP(c : Context) {
        //   const {email} = c.get('user')
        const email = "a@gmail.com"
        
        const {linkSuratBalasanKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postSuratBalasanKP(email, linkSuratBalasanKP))
    }

    public static async postIdPengajuanDosenPembimbingKP(c : Context) {
        //   const {email} = c.get('user')
        const email = "a@gmail.com"
        
        const {IdPengajuanDosenPembimbingKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postIdPengajuanDosenPembimbingKP(email, IdPengajuanDosenPembimbingKP))
    }

    public static async postSuratPenunjukkanDosenPembimbingKP(c : Context) {
        //   const {email} = c.get('user')
        const email = "a@gmail.com"
        
        const {linkSuratPenunjukkanDosenPembimbingKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postSuratPenunjukkanDosenPembimbingKP(email, linkSuratPenunjukkanDosenPembimbingKP))
    }

    public static async postSuratPerpanjanganKP(c : Context) {
        //   const {email} = c.get('user')
        const email = "a@gmail.com"
        
        const {linkSuratPerpanjanganKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postSuratPerpanjanganKP(email, linkSuratPerpanjanganKP))
    }

    public static async getBerkasMahasiswa(c : Context) {
        return c.json(await DaftarKPService.getBerkasMahasiswa())
    }

    public static async postBerkasMahasiswa(c : Context) {
        const {id} = await c.req.json() as any;

        if (!id) {
            throw new APIError("ID pendaftaran KP tidak ditemukan")
        }

        return c.json(await DaftarKPService.postBerkasMahasiswa(id))
    }

    public static async getRiwayatPendaftaranKP(c : Context) {
        //    const {email} = c.get('user');
        const email = "a@gmail.com"
        

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.getRiwayatPendaftaranKP(email))
    }

    //  public static async createPermohonan(c: Context) {
    //     const { email } = c.get("user");
    //     const { tanggalMulaiStr, idInstansiStr, tujuanSuratInstansiStr } = await c.req.json();

    //     if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
    //     if (!tanggalMulaiStr || !idInstansiStr || !tujuanSuratInstansiStr) throw new APIError("Waduh, data yang kamu ajukan belum lengkap cuy! 😭", 404);
        
    //     const tanggalMulai = new Date(String(tanggalMulaiStr));
    //     const idInstansi = String(idInstansiStr);
    //     const tujuanSuratInstansi = String(tujuanSuratInstansiStr);

    //     if (isNaN(tanggalMulai.getTime())) throw new APIError("Waduh, tanggal terdaftar harus berupa tanggal yang valid cuy! 😭", 400);

    //     return c.json(await DaftarKPService.createPermohonan(
    //         {
    //             email: email, 
    //             tanggalMulai: tanggalMulai, 
    //             idInstansi: idInstansi, 
    //             tujuanSuratInstansi: tujuanSuratInstansi
    //         }
    //     ), 200);
    // }
    
}