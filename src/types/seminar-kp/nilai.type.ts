import { jenis_dokumen, status_dokumen, status_pendaftaran } from "../../generated/prisma";

export enum StatusNilai {
  NILAI_BELUM_VALID = 'Nilai Belum Valid',
  NILAI_VALID = 'Nilai Valid',
  NILAI_APPROVE = 'Nilai Approve'
}

export interface KomponenNilaiInstansi {
  deliverables?: number;
  ketepatan_waktu?: number;
  kedisiplinan?: number;
  attitude?: number;
  kerjasama_tim?: number;
  inisiatif?: number;
  masukan?: string;
}

export interface KomponenNilaiPembimbing {
  penyelesaian_masalah?: number;
  bimbingan_sikap?: number;
  kualitas_laporan?: number;
  catatan?: string;
}

export interface KomponenNilaiPenguji {
  penguasaan_keilmuan?: number;
  kemampuan_presentasi?: number;
  kesesuaian_urgensi?: number;
  catatan?: string;
}

export interface DetailMahasiswaNilai {
  nim: string;
  nama: string;
  kelas: string;
  status_nilai: StatusNilai;
  status_daftar_kp: status_pendaftaran;
  semester: string;
  instansi: string;
  pembimbing_instansi: string;
  dosen_pembimbing: string;
  dosen_penguji: string;
  nilai_instansi: number;
  nilai_pembimbing: number;
  nilai_penguji: number;
  nilai_akhir: number;
  nilai_huruf: string;
  komponen_nilai_instansi: KomponenNilaiInstansi;
  komponen_nilai_pembimbing: KomponenNilaiPembimbing;
  komponen_nilai_penguji: KomponenNilaiPenguji;
}

export interface AllNilaiResponse {
  tahunAjaran: string;
  jumlahNilaiBelumValid: number;
  jumlahNilaiValid: number;
  jumlahNilaiApprove: number;
  detailMahasiswa: DetailMahasiswaNilai[];
}

export interface NilaiPengujiInput {
  penguasaanKeilmuan: number;
  kemampuanPresentasi: number;
  kesesuaianUrgensi: number;
  catatan?: string;
  nim: string;
  idJadwalSeminar?: string;
}

export interface NilaiPembimbingInput {
  penyelesaianMasalah: number;
  bimbinganSikap: number;
  kualitasLaporan: number;
  catatan?: string;
  nim: string;
  idJadwalSeminar?: string;
}