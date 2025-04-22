import { PrismaClient, dokumen_seminar_kp, jenis_dokumen, status_dokumen } from '../generated/prisma';
import DokumenRepository from '../repositories/dokumen-seminar-kp.repository';
import { DokumenUploadDTO, GenerateSuratUndanganDTO, UpdateDokumenStatusDTO } from '../types/dokumen-seminar-kp.type';
import { generateSuratUndanganId, hasValidExtension, isValidGoogleDriveLink } from '../helpers/gdrive-validation.helper';
import { APIError } from '../utils/api-error.util';

export default class DokumenSeminarKpService {
  private dokumenRepository: DokumenRepository;

  constructor(prisma: PrismaClient) {
    this.dokumenRepository = new DokumenRepository(prisma);
  }

  async uploadDokumen(data: DokumenUploadDTO): Promise<dokumen_seminar_kp> {
    // Special case for ID_SURAT_UNDANGAN
    if (data.jenis_dokumen === 'ID_SURAT_UNDANGAN') {
      // For ID_SURAT_UNDANGAN, we generate an ID instead of expecting a link
      const nim = data.nim;
      const nimPrefix = nim.substring(0, 5);
      data.link_path = generateSuratUndanganId(nimPrefix);
    } else {
      // Validate Google Drive link for other document types
      if (!isValidGoogleDriveLink(data.link_path)) {
        throw new APIError('Link dokumen harus berupa link Google Drive yang valid');
      }

      // Validate file extension based on document type
      if (!hasValidExtension(data.link_path, data.jenis_dokumen)) {
        throw new APIError('Format file tidak sesuai dengan jenis dokumen');
      }
    }

    // Check if document with same type already exists
    const existingDokumen = await this.dokumenRepository.getDokumenByJenis(
      data.id_pendaftaran_kp,
      data.jenis_dokumen
    );

    if (existingDokumen) {
      throw new APIError(`Dokumen dengan jenis ${data.jenis_dokumen} sudah ada`);
    }

    return this.dokumenRepository.createDokumen(data);
  }

  async generateSuratUndanganId(data: GenerateSuratUndanganDTO): Promise<string> {
    const { nim, id_pendaftaran_kp } = data;
    const nimPrefix = nim.substring(0, 5);
    const suratUndanganId = generateSuratUndanganId(nimPrefix);

    // Save the generated ID to the database
    await this.dokumenRepository.createDokumen({
      jenis_dokumen: 'ID_SURAT_UNDANGAN',
      link_path: suratUndanganId,
      nim,
      id_pendaftaran_kp,
    });

    return suratUndanganId;
  }

  async getDokumenById(id: string): Promise<dokumen_seminar_kp | null> {
    return this.dokumenRepository.getDokumenById(id);
  }

  async getDokumenByPendaftaranKp(id_pendaftaran_kp: string): Promise<dokumen_seminar_kp[]> {
    return this.dokumenRepository.getDokumenByPendaftaranKp(id_pendaftaran_kp);
  }

  async getDokumenByNim(nim: string): Promise<dokumen_seminar_kp[]> {
    return this.dokumenRepository.getDokumenByNim(nim);
  }

  async updateDokumenStatus(data: UpdateDokumenStatusDTO): Promise<dokumen_seminar_kp> {
    const dokumen = await this.dokumenRepository.getDokumenById(data.id);
    
    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan');
    }

    return this.dokumenRepository.updateDokumenStatus(data);
  }

  async deleteDokumen(id: string): Promise<dokumen_seminar_kp> {
    const dokumen = await this.dokumenRepository.getDokumenById(id);
    
    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan');
    }

    return this.dokumenRepository.deleteDokumen(id);
  }

  async resubmitDokumen(id: string, link_path: string): Promise<dokumen_seminar_kp>{
    const dokumen = await this.dokumenRepository.getDokumenById(id);

    if (!dokumen) {
      throw new APIError('Dokumen tidak ditemukan');
    }
    
    if (dokumen.status !== 'Ditolak') {
      throw new APIError('Hanya dokumen yang ditolak yang dapat dikirim ulang');
    }
  
    // Validate Google Drive link
    if (!isValidGoogleDriveLink(link_path)) {
      throw new APIError('Link dokumen harus berupa link Google Drive yang valid');
    }
  
    // Validate file extension based on document type
    if (!hasValidExtension(link_path, dokumen.jenis_dokumen)) {
      throw new APIError('Format file tidak sesuai dengan jenis dokumen');
    }
  
    // Update document with new link and reset status
    return this.dokumenRepository.updateDokumen(id, {
      link_path,
      status: 'Terkirim',
      komentar: null,
      tanggal_upload: new Date()
    });
  }
}