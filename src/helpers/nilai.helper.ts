import { 
  KomponenPenilaianInstansi, 
  KomponenPenilaianPembimbing, 
  KomponenPenilaianPenguji 
} from '../types/nilai-seminar-kp.type';

export const hitungNilaiInstansi = (komponenPenilaian: KomponenPenilaianInstansi): number => {
  const { 
    deliverables, 
    ketepatan_waktu, 
    kedisiplinan, 
    attitude, 
    kerjasama_tim, 
    inisiatif 
  } = komponenPenilaian;

  // Bobot komponen penilaian instansi
  const nilai = (
    (deliverables * 0.15) + 
    (ketepatan_waktu * 0.10) + 
    (kedisiplinan * 0.15) + 
    (attitude * 0.15) + 
    (kerjasama_tim * 0.25) + 
    (inisiatif * 0.20)
  );

  return Number(nilai.toFixed(2));
};

export const hitungNilaiPembimbing = (komponenPenilaian: KomponenPenilaianPembimbing): number => {
  const { 
    penyelesaian_masalah, 
    bimbingan_sikap, 
    kualitas_laporan 
  } = komponenPenilaian;

  // Bobot komponen penilaian pembimbing
  const nilai = (
    (penyelesaian_masalah * 0.40) + 
    (bimbingan_sikap * 0.35) + 
    (kualitas_laporan * 0.25)
  );

  return Number(nilai.toFixed(2));
};

export const hitungNilaiPenguji = (komponenPenilaian: KomponenPenilaianPenguji): number => {
  const { 
    penguasaan_keilmuan, 
    kemampuan_presentasi, 
    kesesuaian_urgensi 
  } = komponenPenilaian;

  // Bobot komponen penilaian penguji
  const nilai = (
    (penguasaan_keilmuan * 0.40) + 
    (kemampuan_presentasi * 0.20) + 
    (kesesuaian_urgensi * 0.40)
  );

  return Number(nilai.toFixed(2));
};

export const hitungNilaiAkhir = (
  nilaiPembimbing?: number, 
  nilaiPenguji?: number, 
  nilaiInstansi?: number
): number | null => {
  // Pastikan semua nilai tersedia untuk menghitung nilai akhir
  if (!nilaiPembimbing && !nilaiPenguji && !nilaiInstansi) {
    return null;
  }
  
  // Nilai awal
  let nilaiAkhir = 0;
  let pembagi = 0;
  
  // Menambahkan komponen nilai yang tersedia dengan bobotnya
  if (nilaiPembimbing !== undefined && nilaiPembimbing !== null) {
    nilaiAkhir += nilaiPembimbing * 0.40;
    pembagi += 0.40;
  }
  
  if (nilaiPenguji !== undefined && nilaiPenguji !== null) {
    nilaiAkhir += nilaiPenguji * 0.20;
    pembagi += 0.20;
  }
  
  if (nilaiInstansi !== undefined && nilaiInstansi !== null) {
    nilaiAkhir += nilaiInstansi * 0.40;
    pembagi += 0.40;
  }
  
  // Jika tidak ada nilai yang tersedia, kembalikan null
  if (pembagi === 0) {
    return null;
  }
  
  // Menyesuaikan nilai berdasarkan komponen yang tersedia
  nilaiAkhir = nilaiAkhir / pembagi;
  
  return Number(nilaiAkhir.toFixed(2));
};

export const validateKomponenPenilaianInstansi = (
  komponenPenilaian: KomponenPenilaianInstansi
): boolean => {
  const { 
    deliverables, 
    ketepatan_waktu, 
    kedisiplinan, 
    attitude, 
    kerjasama_tim, 
    inisiatif 
  } = komponenPenilaian;
  
  // Validasi rentang nilai (0-100)
  return (
    isValidNilai(deliverables) &&
    isValidNilai(ketepatan_waktu) &&
    isValidNilai(kedisiplinan) &&
    isValidNilai(attitude) &&
    isValidNilai(kerjasama_tim) &&
    isValidNilai(inisiatif)
  );
};

export const validateKomponenPenilaianPembimbing = (
  komponenPenilaian: KomponenPenilaianPembimbing
): boolean => {
  const { 
    penyelesaian_masalah, 
    bimbingan_sikap, 
    kualitas_laporan 
  } = komponenPenilaian;
  
  // Validasi rentang nilai (0-100)
  return (
    isValidNilai(penyelesaian_masalah) &&
    isValidNilai(bimbingan_sikap) &&
    isValidNilai(kualitas_laporan)
  );
};

export const validateKomponenPenilaianPenguji = (
  komponenPenilaian: KomponenPenilaianPenguji
): boolean => {
  const { 
    penguasaan_keilmuan, 
    kemampuan_presentasi, 
    kesesuaian_urgensi 
  } = komponenPenilaian;
  
  // Validasi rentang nilai (0-100)
  return (
    isValidNilai(penguasaan_keilmuan) &&
    isValidNilai(kemampuan_presentasi) &&
    isValidNilai(kesesuaian_urgensi)
  );
};

// Helper untuk validasi nilai (0-100)
const isValidNilai = (nilai: number): boolean => {
  return nilai >= 0 && nilai <= 100;
};