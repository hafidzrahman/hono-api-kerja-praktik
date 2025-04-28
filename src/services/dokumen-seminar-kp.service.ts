import { jenis_dokumen } from "../generated/prisma";
import DokumenSeminarKpRepository from "../repositories/dokumen-seminar-kp.repository";
import { CreateDokumenSeminarKPInput } from "../types/seminar-kp/dokumen-seminar-kp.type";
import { APIError } from "../utils/api-error.util";

export default class DokumenSeminarKpService {
  constructor(private dokumenSeminarKpRepository: DokumenSeminarKpRepository) {}

  async uploadDokumenSeminarKp(jenis_dokumen: jenis_dokumen, input: CreateDokumenSeminarKPInput) {
    const existingDokumen = await this.dokumenSeminarKpRepository.getDokumenByJenisAndPendaftaranId(
      jenis_dokumen,
      input.id_pendaftaran_kp
    )

    if (existingDokumen) {
      return await this.dokumenSeminarKpRepository.updateDokumen(existingDokumen.id, {
        link_path: input.link_path,
        status: "Terkirim"
      })
    }

    return await this.dokumenSeminarKpRepository.createDokumen(jenis_dokumen, input)
  }

  async getDokumenSeminarKpById(id: string){
    const dokumen = await this.dokumenSeminarKpRepository.getDokumenById(id)
    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan!', 404)
    }
    return dokumen
  }

  async updateDokumenSeminarKp(id: string, data: Partial<CreateDokumenSeminarKPInput>) {
    const dokumen = await this.dokumenSeminarKpRepository.getDokumenById(id)
    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan!', 404)
    }
    return await this.dokumenSeminarKpRepository.updateDokumen(id, data)
  }

  async validateDokumen(id: string, komentar?: string) {
    const dokumen = await this.dokumenSeminarKpRepository.getDokumenById(id);
    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan!', 404)
    }
    return await this.dokumenSeminarKpRepository.updateDokumen(id, {
      status: "Divalidasi",
      komentar,
    })
  }

  async rejectDokumen(id: string, komentar: string) {
    const dokumen = await this.dokumenSeminarKpRepository.getDokumenById(id);
    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan!', 404)
    }
    return await this.dokumenSeminarKpRepository.updateDokumen(id, {
      status: "Ditolak",
      komentar,
    })
  }

}