import { jenis_dokumen } from "../generated/prisma";
import prisma from "../infrastructures/db.infrastructure";
import { CreateDokumenSeminarKPInput, UpdateDokumenSeminarKPInput, MahasiswaWithDokumen } from "../types/seminar-kp/dokumen-seminar-kp.type";

export default class DokumenSeminarKpRepository {
  public static async createDokumen(jenis_dokumen: jenis_dokumen, input: CreateDokumenSeminarKPInput) {
    return await prisma.dokumen_seminar_kp.create({
      data: {
        jenis_dokumen: jenis_dokumen,
        link_path: input.link_path,
        nim: input.nim,
        id_pendaftaran_kp: input.id_pendaftaran_kp,
        tanggal_upload: new Date(),
        status: "Terkirim",
      },
    });
  }

  public static async getAllDokumenSeminarKP(): Promise<MahasiswaWithDokumen[]> {
    return await prisma.mahasiswa.findMany({
      where: {
        dokumen_seminar_kp:{
          some: {}
        }
      },
      select:{
        nim: true,
        nama: true,
        email: true,
        dokumen_seminar_kp: {
          select: {
            id: true,
            jenis_dokumen: true,
            link_path: true,
            tanggal_upload: true,
            status: true,
            komentar: true,
            id_pendaftaran_kp: true
          }
        }
      }
    });
  }

  public static async getDokumenSeminarKPByNIM(nim: string): Promise<MahasiswaWithDokumen | null> {
    return await prisma.mahasiswa.findUnique({
      where: {
        nim: nim,
      },
      select: {
        nim: true,
        nama: true,
        email: true,
        dokumen_seminar_kp: {
          select: {
            id: true,
            jenis_dokumen: true,
            link_path: true,
            tanggal_upload: true,
            status: true,
            komentar: true,
            id_pendaftaran_kp: true,
          },
        },
      },
    });
  }

  public static async getDokumenSeminarKPById(id: string) {
    return await prisma.dokumen_seminar_kp.findUnique({
      where: {
        id,
      },
    });
  }

  async getDokumenSeminarKPByJenisAndNim(jenis_dokumen: jenis_dokumen, nim: string) {
    return await prisma.dokumen_seminar_kp.findFirst({
      where: {
        jenis_dokumen: jenis_dokumen,
        nim,
      },
    });
  }

  public static async getDokumenSeminarKPByJenisAndPendaftaranId(jenis_dokumen: jenis_dokumen, id_pendaftaran_kp: string) {
    return await prisma.dokumen_seminar_kp.findFirst({
      where: {
        jenis_dokumen: jenis_dokumen,
        id_pendaftaran_kp,
      },
    });
  }

  public static async updateDokumenSeminarKP(id: string, data: UpdateDokumenSeminarKPInput) {
    return await prisma.dokumen_seminar_kp.update({
      where: { id },
      data,
    });
  }

  public static async deleteDokumenSeminarKP(id: string) {
    return prisma.dokumen_seminar_kp.delete({
      where: { id },
    });
  }
}
