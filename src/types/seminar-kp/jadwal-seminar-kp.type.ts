import { status_jadwal } from "../../generated/prisma";

export interface CreateJadwalDto {
  tanggal: Date;
  waktu_mulai: Date;
  waktu_selesai: Date;
  nim: string;
  nama_ruangan: string;
  id_pendaftaran_kp: string;
}

export interface UpdateJadwalDto {
  nim: string;
  tanggal?: Date;
  waktu_mulai?: Date;
  waktu_selesai?: Date;
  status?: status_jadwal;
  nama_ruangan?: string;
}

export interface JadwalLogDto {
  log_type: string;
  tanggal_lama?: Date | null;
  tanggal_baru: Date;
  ruangan_lama?: Date | null;
  ruangan_baru: Date;
  keterangan?: string;
  id_jadwal_seminar?: number | null;
  nip?: string | null;
}

export interface JadwalFilter {
  tanggal?: Date;
  status?: status_jadwal;
  nim?: string;
  nama_ruangan?: string;
}

export interface ScheduleConflict {
  hasDosenConflict: boolean;
  hasRuanganConflict: boolean;
  hasMahasiswaConflict: boolean,
  conflictDetails?: {
    dosenConflicts?: Array<any>;
    ruanganConflicts?: Array<any>;
    mahasiswaConflicts?: Array<any>;
  };
}
