import { jenis_dokumen, status_dokumen } from "../../generated/prisma";

export interface DokumenSeminarKp {
  id: string;
  jenis_dokumen: jenis_dokumen;
  link_path: string;
  tanggal_upload: Date | null;
  status: status_dokumen | null;
  komentar: string | null;
  nim: string | null;
  id_pendaftaran_kp: string | null;
}

export interface CreateDokumenSeminarKPInput {
  link_path: string;
  nim: string;
  id_pendaftaran_kp: string;
}

export interface UpdateDokumenSeminarKPInput {
  link_path?: string;
  status?: status_dokumen;
  komentar?: string;
}