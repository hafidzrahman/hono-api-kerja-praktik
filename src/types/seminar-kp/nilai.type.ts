export interface NilaiPengujiInput {
  penguasaanKeilmuan: number;
  kemampuanPresentasi: number;
  kesesuaianUrgensi: number;
  catatan?: string;
  nim: string;
  nip: string;
  idJadwalSeminar?: string;
}

export interface NilaiPembimbingInput {
  penyelesaianMasalah: number;
  bimbinganSikap: number;
  kualitasLaporan: number;
  catatan?: string;
  nim: string;
  nip: string;
  idJadwalSeminar?: string;
}