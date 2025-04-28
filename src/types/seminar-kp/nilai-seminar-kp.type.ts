export interface KomponenPenilaianInstansi {
  deliverables: number;
  ketepatan_waktu: number;
  kedisiplinan: number;
  attitude: number;
  kerjasama_tim: number;
  inisiatif: number;
  masukan?: string;
}

export interface KomponenPenilaianPembimbing {
  penyelesaian_masalah: number;
  bimbingan_sikap: number;
  kualitas_laporan: number;
  catatan?: string;
}

export interface KomponenPenilaianPenguji {
  penguasaan_keilmuan: number;
  kemampuan_presentasi: number;
  kesesuaian_urgensi: number;
  catatan?: string;
}

export interface CreateNilaiInstansiRequest {
  nim: string;
  id_pembimbing_instansi: string;
  komponenPenilaian: KomponenPenilaianInstansi;
}

export interface CreateNilaiPembimbingRequest {
  nim: string;
  nip: string;
  komponenPenilaian: KomponenPenilaianPembimbing;
}

export interface CreateNilaiPengujiRequest {
  nim: string;
  nip: string;
  komponenPenilaian: KomponenPenilaianPenguji;
}

export interface NilaiResponse {
  id: string;
  tanggal: Date;
  nilai_penguji?: number;
  nilai_pembimbing?: number;
  nilai_instansi?: number;
  nilai_akhir?: number;
  nim?: string;
  nip?: string;
  id_pembimbing_instansi?: string;
  id_jadwal_seminar?: string;
}

export interface NilaiDetailResponse extends NilaiResponse {
  komponen_penilaian_instansi?: KomponenPenilaianInstansi;
  komponen_penilaian_pembimbing?: KomponenPenilaianPembimbing;
  komponen_penilaian_penguji?: KomponenPenilaianPenguji;
}