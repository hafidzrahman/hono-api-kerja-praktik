import { Prisma, PrismaClient } from "../generated/prisma";
import { DefaultArgs } from "../generated/prisma/runtime/library";
import { MahasiswaRepositoryFindByEmailInterface } from "../types/mahasiswa.type";

const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient();

export default class MahasiswaRepository {
    
    public static async findByEmail(email: string): Promise<MahasiswaRepositoryFindByEmailInterface | null> {
        return await prisma.mahasiswa.findUnique({
            where: {
                email: email
            }
        })
    }

}