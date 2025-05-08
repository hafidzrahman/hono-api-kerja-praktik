import { jenis_dokumen, status_dokumen, status_jadwal } from "../../generated/prisma";

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
interface Instansi {
  nama: string;
  alamat: string;
}
interface Dosen {
  nip: string;
  nama: string;
  no_hp: string | null;
}
interface PendaftaranKP {
  id: string;
  judul_kp: string | null;
  id_instansi: string | null;
  tanggal_mulai: Date;
  tanggal_selesai: Date | null;
  instansi: Instansi | null;
  dosen_pembimbing: Dosen | null;
  dosen_penguji: Dosen | null;
}

interface Ruangan {
  nama: string;
}
interface Jadwal {
  id: string | null;
  tanggal: Date | null;
  waktu_mulai: Date | null;
  waktu_selesai: Date | null;
  status: status_jadwal | null;
  ruangan: Ruangan | null;
}

interface Nilai {
  nilai_penguji: number | null;
  nilai_instansi: number | null;
  nilai_pembimbing: number | null;
  nilai_akhir: number | null;
}

export interface DokumenSeminarKP {
  id: string;
  jenis_dokumen: jenis_dokumen;
  link_path: string;
  tanggal_upload: Date | null;
  status: status_dokumen | null;
  komentar: string | null;
  id_pendaftaran_kp: string | null;
}

export interface MahasiswaWithDokumen {
  nim: string;
  nama: string;
  email: string;
  dokumen_seminar_kp: DokumenSeminarKP[];
}

export interface SeminarKPSaya {
  nim: string;
  nama: string;
  email: string;
  pendaftaran_kp: PendaftaranKP[];
  dokumen_seminar_kp: DokumenSeminarKP[];
  jadwal: Jadwal[];
  nilai: Nilai[];
}
