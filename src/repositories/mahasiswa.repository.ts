import prisma from "../infrastructures/db.infrastructure";
import { FindByEmailParamsInterface, FindByEmailReturnInterface, FindByNIMParamsInterface } from "../types/mahasiswa/repository.type";
import { APIError } from "../utils/api-error.util";

export default class MahasiswaRepository {
    
    public static async findByEmail({email}: FindByEmailParamsInterface): Promise<FindByEmailReturnInterface | null> {
        return await prisma.mahasiswa.findUnique({
            where: {
                email: email
            }
        })
    }

    public static async findByNIM({nim}: FindByNIMParamsInterface): Promise<FindByEmailReturnInterface | null> {
        return await prisma.mahasiswa.findUnique({
            where: {
                nim: nim
            }
        })
    }

    public static async findNIMByEmail(email: string) {
        const result = await prisma.mahasiswa.findUnique({
            where: {
                email: email,
            },
                select: {
                    nim: true,
            },
        });
    
        if (!result) {
            throw new APIError(`Waduh, mahasiswa tidak ditemukan! 😭`, 404);
        }
    
        return result;
    }

    public static async getPendaftaranKP(nim: string) {
        const result = await prisma.pendaftaran_kp.findFirst({
            where: {
                nim: nim,
            },
                select: {
                id: true,
                id_instansi: true,
                email_pembimbing_instansi: true,
                nip_pembimbing: true,
                level_akses: true,
            },
        });
    
        if (!result) {
            throw new APIError(`Waduh, mahasiswa belum mendaftar KP nih! 😭`, 404);
        }
    
        return result;
    }

    public static async countBimbinganByNIM(nim: string): Promise<number> {
        const count = await prisma.bimbingan.count({
            where: {
                nim: nim
            }
        })
        return count
    }

}