import { Prisma, PrismaClient } from "../generated/prisma";
import { DefaultArgs } from "../generated/prisma/runtime/library";
const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient();

export default class DaftarKPRepository {
    
    public static async create(nim: string, semester: number): Promise<void> {
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