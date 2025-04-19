import prisma from "../infrastructures/db.infrastructure";
import { CreatePermohonanParamsInterface } from "../types/daftar-kp/repository.type";

export default class DaftarKPRepository {
    
    public static async createPermohonan({nim, semester}: CreatePermohonanParamsInterface): Promise<void> {
        await prisma.pendaftaran_kp.create({
            data: {
                nim: nim,
                tanggal_pengajuan: new Date(),
                id_instansi: "xxx",
                id_tahun_ajaran: 2,
                tujuan_surat_instansi: "xxx",
                tanggal_mulai: "xxxxxx",
            }
        })
    }

}