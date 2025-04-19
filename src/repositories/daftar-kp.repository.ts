import prisma from "../infrastructures/db.infrastructure";
import { CreatePermohonanParamsInterface } from "../types/daftar-kp/repository.type";

export default class DaftarKPRepository {
    
    public static async createPermohonan({nim, semester}: CreatePermohonanParamsInterface): Promise<void> {
        await prisma.pendaftaran_kp.create({
            data: {
                nim: nim,
                semester: semester,
                tanggalTerdaftar: new Date(),
                tenggatWaktu: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                gagal: false,
                id_pembimbing_instansi: "xxx",
            }
        })
    }

}