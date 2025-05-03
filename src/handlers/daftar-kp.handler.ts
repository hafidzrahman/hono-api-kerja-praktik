import { Context } from "hono";
import DaftarKPService from "../services/daftar-kp.service";
import { APIError } from "../utils/api-error.util";

export default class DaftarKPHandler {

    public static async createPermohonanPendaftaranKP(c : Context) {
        // const {email} = c.get('user');
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

    public static async createPermohonanPendaftaranInstansi(c : Context) {
        const {email} = c.get('user');
        const {namaInstansi, alamatInstansi, namaPenanggungJawabInstansi, telpPenanggungJawabInstansi, jenisInstansi, longitude, latitude, profilSingkat} = await c.req.json();

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        } else if (!namaInstansi || !alamatInstansi || !namaPenanggungJawabInstansi || !telpPenanggungJawabInstansi || !jenisInstansi) {
            throw new APIError("Data yang anda masukkan tidak lengkap", 405)
        }

        return c.json(await DaftarKPService.createPermohonanPendaftaranInstansi({email, namaInstansi, alamatInstansi, namaPenanggungJawabInstansi, telpPenanggungJawabInstansi, jenisInstansi, longitude, latitude, profilSingkat}))
    }

    public static async postSuratPengantarKP(c : Context) {
        const {email} = c.get('user')
        const {linkSuratPengantarKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postSuratPengantarKP(email, linkSuratPengantarKP))
    }

    public static async postSuratBalasanKP(c : Context) {
        const {email} = c.get('user')
        const {linkSuratBalasanKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postSuratBalasanKP(email, linkSuratBalasanKP))
    }

    public static async postIdPengajuanDosenPembimbingKP(c : Context) {
        const {email} = c.get('user')
        const {IdPengajuanDosenPembimbingKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postIdPengajuanDosenPembimbingKP(email, IdPengajuanDosenPembimbingKP))
    }

    public static async postSuratPenunjukkanDosenPembimbingKP(c : Context) {
        const {email} = c.get('user')
        const {linkSuratPenunjukkanDosenPembimbingKP} = await c.req.json()

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.postSuratPenunjukkanDosenPembimbingKP(email, linkSuratPenunjukkanDosenPembimbingKP))
    }

    public static async postSuratPerpanjanganKP(c : Context) {
        const {email} = c.get('user')
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
        const {id} = c.req.param('id') as any;

        if (!id) {
            throw new APIError("ID pendaftaran KP tidak ditemukan")
        }

        return c.json(await DaftarKPService.postBerkasMahasiswa(id))
    }

    public static async getRiwayatPendaftaranKP(c : Context) {
        const {email} = c.get('user');

        if (!email) {
            throw new APIError("Data email tidak ditemukan", 404)
        }

        return c.json(await DaftarKPService.getRiwayatPendaftaranKP(email))
    }

    // public static async createPermohonan(c: Context) {
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