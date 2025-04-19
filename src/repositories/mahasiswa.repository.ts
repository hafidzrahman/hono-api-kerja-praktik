import prisma from "../infrastructures/db.infrastructure";
import { FindByEmailParamsInterface, FindByEmailReturnInterface } from "../types/mahasiswa/repository.type";

export default class MahasiswaRepository {
    
    public static async findByEmail({email}: FindByEmailParamsInterface): Promise<FindByEmailReturnInterface | null> {
        return await prisma.mahasiswa.findUnique({
            where: {
                email: email
            }
        })
    }

}