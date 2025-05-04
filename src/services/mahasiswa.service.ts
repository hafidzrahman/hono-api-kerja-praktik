import MahasiswaRepository from "../repositories/mahasiswa.repository"

export default class MahasiswaService {
  public static async checkLevelAccess(email: string) {
    const {nim} = await MahasiswaRepository.findNIMByEmail(email)
    const {id, level_akses} = await MahasiswaRepository.getPendaftaranKP(nim)

    return {
      response: true,
      message:
        level_akses >= 5 ? "Sudah bisa diakses! 😁" : "Belum bisa diakses! 😡",
      data: {
        id: id,
        nim: nim,
        accessLevel: level_akses,
        hasAccess: level_akses >= 5,
      },
    }
  }

}