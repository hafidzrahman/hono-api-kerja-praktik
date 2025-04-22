import { jenis_dokumen, status_dokumen } from '../generated/prisma';

export interface DokumenUploadDTO {
  jenis_dokumen: jenis_dokumen;
  link_path: string;
  nim: string;
  id_pendaftaran_kp: string;
}

export interface DokumenResponse {
  id: string;
  jenis_dokumen: jenis_dokumen;
  link_path: string;
  tanggal_upload: Date | null;
  status: status_dokumen | null;
  komentar: string | null;
  nim: string | null;
  id_pendaftaran_kp: string | null;
}

export interface GenerateSuratUndanganDTO {
  id_pendaftaran_kp: string;
  nim: string;
}

export interface UpdateDokumenStatusDTO {
  id: string;
  status: status_dokumen;
  komentar?: string;
}