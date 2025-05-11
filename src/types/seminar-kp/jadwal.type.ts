import { status_jadwal } from "../../generated/prisma";

export interface CreateJadwalInput {
  tanggal: Date;
  waktu_mulai: Date;
  nim: string;
  nama_ruangan: string;
  id_pendaftaran_kp: string;
  nip_penguji: string;
}

export interface UpdateJadwalInput {
  id: string;
  tanggal?: Date;
  waktu_mulai?: Date;
  waktu_selesai?: Date;
  status?: status_jadwal;
  nama_ruangan?: string;
  nip_penguji?: string
}

export interface JadwalWithRelations {
  id: string;
  tanggal: Date | null;
  waktu_mulai: Date | null;
  waktu_selesai: Date | null;
  status: status_jadwal | null;
  nim: string | null;
  nama_ruangan: string | null;
  id_pendaftaran_kp: string | null;
  mahasiswa?: {
    nim: string;
    nama: string;
    email: string;
  } | null;
  pendaftaran_kp?: {
    id: string;
    nip_pembimbing: string | null;
    nip_penguji: string | null;
    dosen_pembimbing?: {
      nip: string;
      nama: string;
    } | null;
    dosen_penguji?: {
      nip: string;
      nama: string;
    } | null;
  } | null;
  ruangan?: {
    nama: string;
  } | null;
}

export interface LogJadwalInput {
  log_type: string;
  tanggal_lama?: Date | null;
  tanggal_baru: Date;
  ruangan_lama?: Date | null;
  ruangan_baru: Date;
  keterangan?: string;
  id_jadwal_seminar?: number | null;
  nip?: string | null;
}