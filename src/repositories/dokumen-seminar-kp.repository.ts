import { PrismaClient, dokumen_seminar_kp, jenis_dokumen, status_dokumen } from '../generated/prisma';
import { DokumenUploadDTO, UpdateDokumenStatusDTO } from '../types/dokumen-seminar-kp.type';

export default class DokumenRepository {
  constructor(private prisma: PrismaClient) {}

  async createDokumen(data: DokumenUploadDTO): Promise<dokumen_seminar_kp> {
    return this.prisma.dokumen_seminar_kp.create({
      data: {
        jenis_dokumen: data.jenis_dokumen,
        link_path: data.link_path,
        nim: data.nim,
        id_pendaftaran_kp: data.id_pendaftaran_kp,
        status: 'Terkirim',
        tanggal_upload: new Date(),
      },
    });
  }

  async getDokumenById(id: string): Promise<dokumen_seminar_kp | null> {
    return this.prisma.dokumen_seminar_kp.findUnique({
      where: { id },
    });
  }

  async getDokumenByPendaftaranKp(id_pendaftaran_kp: string): Promise<dokumen_seminar_kp[]> {
    return this.prisma.dokumen_seminar_kp.findMany({
      where: { id_pendaftaran_kp },
    });
  }

  async getDokumenByNim(nim: string): Promise<dokumen_seminar_kp[]> {
    return this.prisma.dokumen_seminar_kp.findMany({
      where: { nim },
    });
  }

  async getDokumenByJenis(
    id_pendaftaran_kp: string,
    jenis_dokumen: jenis_dokumen
  ): Promise<dokumen_seminar_kp | null> {
    return this.prisma.dokumen_seminar_kp.findFirst({
      where: {
        id_pendaftaran_kp,
        jenis_dokumen,
      },
    });
  }

  async updateDokumenStatus({ id, status, komentar }: UpdateDokumenStatusDTO): Promise<dokumen_seminar_kp> {
    return this.prisma.dokumen_seminar_kp.update({
      where: { id },
      data: {
        status,
        komentar,
      },
    });
  }

  async deleteDokumen(id: string): Promise<dokumen_seminar_kp> {
    return this.prisma.dokumen_seminar_kp.delete({
      where: { id },
    });
  }

  async updateDokumen(id: string, data:any): Promise<dokumen_seminar_kp> {
    return this.prisma.dokumen_seminar_kp.update({
      where: { id },
      data,
    });
  }
}