import { Context } from "hono";
import DaftarKPService from "../services/daftar-kp.service";
import { APIError } from "../utils/api-error.util";

export default class DaftarKPHandler {

    public static async createPermohonan(c: Context) {
        const { email } = c.get("user");
        const { tanggalMulaiStr, idInstansiStr, tujuanSuratInstansiStr } = await c.req.parseBody();

        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
        if (!tanggalMulaiStr || !idInstansiStr || !tujuanSuratInstansiStr) throw new APIError("Waduh, data yang kamu ajukan belum lengkap cuy! 😭", 404);
        
        const tanggalMulai = new Date(String(tanggalMulaiStr));
        const idInstansi = String(idInstansiStr);
        const tujuanSuratInstansi = String(tujuanSuratInstansiStr);

        if (isNaN(tanggalMulai.getTime())) throw new APIError("Waduh, tanggal terdaftar harus berupa tanggal yang valid cuy! 😭", 400);

        return c.json(await DaftarKPService.createPermohonan(email, tanggalMulai, idInstansi, tujuanSuratInstansi), 200);
    }
    
}