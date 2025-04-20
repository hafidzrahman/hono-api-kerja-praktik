import prisma from "../infrastructures/db.infrastructure";

export default class BimbinganKPRepository {
  public static async validateDosenForMahasiswa(
    emailDosen: string,
    nim: string
  ): Promise<boolean> {
    const result = await prisma.pendaftaran_kp.findFirst({
      where: {
        mahasiswa: {
          nim: nim,
        },
        dosen_pembimbing: {
          bimbingan: {
            some: {
              dosen_pembimbing: {
                email: emailDosen,
              },
            },
          },
        },
      },
    });

    return !!result; // Return true jika dosen adalah pembimbing mahasiswa
  }

  public static async createBimbingan(
    nim: string,
    emailDosen: string,
    catatanBimbingan: string
  ) {
    return prisma.bimbingan.create({
      data: {
        nim: nim,
        nip: emailDosen, // Asumsikan email dosen digunakan sebagai NIP
        catatan_bimbingan: catatanBimbingan,
        tanggal_bimbingan: new Date(), // Default ke tanggal saat ini
      },
    });
  }

  public static async findBimbinganByMahasiswa(emailMahasiswa: string) {
    return prisma.bimbingan.findMany({
      where: {
        mahasiswa: {
          email: emailMahasiswa,
        },
      },
      select: {
        id: true,
        tanggal_bimbingan: true,
        catatan_bimbingan: true,
        dosen_pembimbing: {
          select: {
            nama: true,
            email: true,
          },
        },
      },
      orderBy: {
        tanggal_bimbingan: "desc", // Urutkan berdasarkan tanggal terbaru
      },
    });
  }

  public static async validateBimbinganOwnership(
    emailDosen: string,
    idBimbingan: string
  ): Promise<boolean> {
    const result = await prisma.bimbingan.findFirst({
      where: {
        id: idBimbingan,
        nip: emailDosen, // Asumsikan email dosen digunakan sebagai NIP
      },
    });

    return !!result; // Return true jika bimbingan dimiliki oleh dosen
  }

  public static async updateBimbingan(
    idBimbingan: string,
    catatanBimbingan: string
  ) {
    return prisma.bimbingan.update({
      where: {
        id: idBimbingan,
      },
      data: {
        catatan_bimbingan: catatanBimbingan,
      },
    });
  }

  public static async findMahasiswaAndBimbingan(emailDosen: string) {
    return prisma.mahasiswa.findMany({
      where: {
        bimbingan: {
          some: {
            dosen_pembimbing: {
              email: emailDosen,
            },
          },
        },
      },
      select: {
        nama: true,
        nim: true,
        bimbingan: {
          select: {
            id: true,
            tanggal_bimbingan: true,
            catatan_bimbingan: true,
          },
        },
      },
    });
  }
}
