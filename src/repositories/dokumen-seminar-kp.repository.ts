import { PrismaClient, dokumen_seminar_kp, jenis_dokumen, status_dokumen } from "../generated/prisma";
import { DokumenInput, PendaftaranKPStatus } from "../types/dokumen-seminar-kp.type";

export default class DokumenSeminarKpRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createDokumen(data: DokumenInput): Promise<dokumen_seminar_kp> {
    return this.prisma.dokumen_seminar_kp.create({
      data: {
        jenis_dokumen: data.jenis_dokumen,
        link_path: data.link_path,
        nim: data.nim,
        id_pendaftaran_kp: data.id_pendaftaran_kp,
        status: "Terkirim",
        tanggal_upload: new Date(),
      },
    });
  }

  async updateDokumenStatus(
    id: string,
    status: status_dokumen,
    komentar?: string
  ): Promise<dokumen_seminar_kp> {
    return this.prisma.dokumen_seminar_kp.update({
      where: { id },
      data: {
        status,
        komentar,
      },
    });
  }

  async getDokumenByIdPendaftaranAndJenis(
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

  async getAllDokumenByIdPendaftaran(
    id_pendaftaran_kp: string
  ): Promise<dokumen_seminar_kp[]> {
    return this.prisma.dokumen_seminar_kp.findMany({
      where: {
        id_pendaftaran_kp,
      },
    });
  }

  async getPendaftaranKPStatus(id_pendaftaran_kp: string): Promise<PendaftaranKPStatus | null> {
    const pendaftaran = await this.prisma.pendaftaran_kp.findUnique({
      where: { id: id_pendaftaran_kp },
      select: {
        id: true,
        status: true,
        level_akses: true,
        nim: true,
      },
    });
    
    return pendaftaran as PendaftaranKPStatus;
  }

  async updatePendaftaranLevelAkses(id_pendaftaran_kp: string, level_akses: number): Promise<void> {
    await this.prisma.pendaftaran_kp.update({
      where: { id: id_pendaftaran_kp },
      data: { level_akses },
    });
  }

  async getJadwalSeminarByIdPendaftaran(id_pendaftaran_kp: string) {
    return this.prisma.jadwal.findFirst({
      where: { id_pendaftaran_kp },
      include: {
        ruangan: true,
      },
    });
  }

  async getNilaiByNim(nim: string) {
    return this.prisma.nilai.findFirst({
      where: { nim },
      include: {
        komponen_penilaian_instansi: true,
        komponen_penilaian_pembimbing: true,
        komponen_penilaian_penguji: true,
      },
    });
  }
}