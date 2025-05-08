import prisma from "../infrastructures/db.infrastructure";

export default class BimbinganKPRepository {
  public static async createBimbingan(
    nim: string,
    nip: string,
    catatan_bimbingan: string
  ) {
    return prisma.bimbingan.create({
      data: {
        nim: nim,
        nip: nip,
        catatan_bimbingan: catatan_bimbingan,
        tanggal_bimbingan: new Date(),
      },
    });
  }

  public static async findBimbingan(nim: string) {
    return prisma.bimbingan.findMany({
      where: {
        nim: nim,
      },
      select: {
        id: true,
        tanggal_bimbingan: true,
        catatan_bimbingan: true,
      },
      orderBy: {
        tanggal_bimbingan: "desc",
      },
    });
  }

  public static async updateBimbingan(
    id_bimbingan: string,
    catatan_bimbingan: string
  ) {
    return prisma.bimbingan.update({
      where: {
        id: id_bimbingan,
      },
      data: {
        catatan_bimbingan: catatan_bimbingan,
      },
    });
  }

  public static async findDetailMahasiswaBimbingan(nip: string, nim: string) {
    return prisma.pendaftaran_kp.findMany({
      where: {
        nip_pembimbing: nip,
        nim: nim,
      },
      select: {
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            bimbingan: {
              select: {
                id: true,
                catatan_bimbingan: true,
                tanggal_bimbingan: true,
              },
            },
          },
        },
      },
    });
  }
}
