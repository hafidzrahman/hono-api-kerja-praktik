import { PrismaClient, jenis_dokumen } from "../generated/prisma";
import { CreateDokumenSeminarKPInput, UpdateDokumenSeminarKPInput } from "../types/seminar-kp/dokumen-seminar-kp.type";

export default class DokumenSeminarKpRepository {
  constructor(private prisma: PrismaClient) {}

  async createDokumen(jenis_dokumen: jenis_dokumen, input: CreateDokumenSeminarKPInput) {
    return await this.prisma.dokumen_seminar_kp.create({
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

  async getDokumenById(id: string) {
    return await this.prisma.dokumen_seminar_kp.findUnique({
      where: {
        id,
      },
    });
  }

  async getDokumenByJenisAndNim(jenis_dokumen: jenis_dokumen, nim: string) {
    return await this.prisma.dokumen_seminar_kp.findFirst({
      where: {
        jenis_dokumen: jenis_dokumen,
        nim,
      },
    });
  }

  async getDokumenByJenisAndPendaftaranId(jenis_dokumen: jenis_dokumen, id_pendaftaran_kp: string) {
    return await this.prisma.dokumen_seminar_kp.findFirst({
      where: {
        jenis_dokumen: jenis_dokumen,
        id_pendaftaran_kp,
      },
    });
  }

  async updateDokumen(id: string, data: UpdateDokumenSeminarKPInput) {
    return await this.prisma.dokumen_seminar_kp.update({
      where: { id },
      data,
    });
  }

  async deleteDokumen(id: string) {
    return this.prisma.dokumen_seminar_kp.delete({
      where: { id },
    });
  }

}
