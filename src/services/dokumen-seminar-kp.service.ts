import { jenis_dokumen, status_dokumen } from "../generated/prisma";
import DokumenRepository from "../repositories/dokumen-seminar-kp.repository";
import { DokumenInput, DokumenResponse, StepResponse } from "../types/dokumen-seminar-kp.type";
import { APIError } from "../utils/api-error.util";

export default class DokumenSeminarKpService {
  private dokumenRepository: DokumenRepository;

  constructor() {
    this.dokumenRepository = new DokumenRepository();
  }

  async uploadDokumen(data: DokumenInput): Promise<DokumenResponse> {
    const pendaftaranStatus = await this.dokumenRepository.getPendaftaranKPStatus(data.id_pendaftaran_kp);
    
    if (!pendaftaranStatus) {
      throw new APIError("Pendaftaran KP tidak ditemukan");
    }

    const step = pendaftaranStatus.level_akses || 0;
    const allowedDocuments = this.getAllowedDocumentsByStep(step);

    if (!allowedDocuments.includes(data.jenis_dokumen)) {
      throw new APIError(`Dokumen ${data.jenis_dokumen} tidak diperbolehkan pada step ${step}`);
    }

    const existingDoc = await this.dokumenRepository.getDokumenByIdPendaftaranAndJenis(
      data.id_pendaftaran_kp,
      data.jenis_dokumen
    );

    if (existingDoc) {
      throw new APIError(`Dokumen ${data.jenis_dokumen} sudah ada`);
    }

    const uploadedDokumen = await this.dokumenRepository.createDokumen(data);
    
    await this.checkAndUpdateStep(data.id_pendaftaran_kp);
    
    return uploadedDokumen;
  }

  async updateDokumenStatus(
    id: string,
    status: status_dokumen,
    komentar?: string
  ): Promise<DokumenResponse> {
    return this.dokumenRepository.updateDokumenStatus(id, status, komentar);
  }

  async getCurrentStep(id_pendaftaran_kp: string): Promise<StepResponse> {
    const pendaftaranStatus = await this.dokumenRepository.getPendaftaranKPStatus(id_pendaftaran_kp);
    
    if (!pendaftaranStatus) {
      throw new APIError("Pendaftaran KP tidak ditemukan");
    }

    const step = pendaftaranStatus.level_akses || 0;
    const requiredDocuments = this.getAllowedDocumentsByStep(step);
    const uploadedDocuments = await this.dokumenRepository.getAllDokumenByIdPendaftaran(id_pendaftaran_kp);
    
    const uploadedDocumentTypes = uploadedDocuments.map(doc => doc.jenis_dokumen);
    const missingDocuments = requiredDocuments.filter(
      doc => !uploadedDocumentTypes.includes(doc)
    );

    let nilai = undefined;
    if (step === 5) {
      nilai = await this.dokumenRepository.getNilaiByNim(pendaftaranStatus.nim);
    }

    return {
      step,
      requiredDocuments,
      uploadedDocuments,
      missingDocuments,
      canProceedToNextStep: missingDocuments.length === 0,
      nilai: step === 5 ? nilai : undefined
    };
  }

  async checkAndUpdateStep(id_pendaftaran_kp: string): Promise<void> {
    const currentStatus = await this.getCurrentStep(id_pendaftaran_kp);
    
    if (currentStatus.canProceedToNextStep) {
      const nextStep = currentStatus.step + 1;
      
      if (currentStatus.step === 2) {
        const jadwal = await this.dokumenRepository.getJadwalSeminarByIdPendaftaran(id_pendaftaran_kp);
        if (jadwal) {
          await this.dokumenRepository.updatePendaftaranLevelAkses(id_pendaftaran_kp, nextStep);
        }
      } else {
        await this.dokumenRepository.updatePendaftaranLevelAkses(id_pendaftaran_kp, nextStep);
      }
    }
  }

  private getAllowedDocumentsByStep(step: number): jenis_dokumen[] {
    switch (step) {
      case 0:
        return [
          "SURAT_KETERANGAN_SELESAI_KP",
          "FORM_KEHADIRAN_SEMINAR",
          "LAPORAN_TAMBAHAN_KP"
        ];
      case 1:
        return ["ID_SURAT_UNDANGAN"];
      case 2:
        return ["SURAT_UNDANGAN_SEMINAR_HASIL"];
      case 3:
        return [];
      case 4:
        return [
          "BERITA_ACARA_SEMINAR",
          "LEMBAR_PENGESAHAN_KP",
          "DAFTAR_HADIR_SEMINAR",
          "REVISI_DAILY_REPORT",
          "REVISI_LAPORAN_TAMBAHAN",
          "SISTEM_KP_FINAL"
        ];
      case 5:
        return [];
      default:
        return [];
    }
  }
}