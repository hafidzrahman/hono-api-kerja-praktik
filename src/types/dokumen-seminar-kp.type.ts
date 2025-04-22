import { jenis_dokumen, status_dokumen } from "../generated/prisma";

export interface DokumenInput {
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

export interface PendaftaranKPStatus {
  id: string;
  status: string;
  level_akses: number;
  nim: string;
}

export interface StepResponse {
  step: number;
  requiredDocuments: jenis_dokumen[];
  uploadedDocuments: DokumenResponse[];
  missingDocuments: jenis_dokumen[];
  canProceedToNextStep: boolean;
  nilai?: any;
}