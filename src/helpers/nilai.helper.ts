export const validateNilaiInput = (nilai: number, fieldName: string) => {
  if (nilai < 0 || nilai > 100) {
    throw new Error(`${fieldName} harus bernilai antara 0 dan 100`);
  }
  return true;
};

export const calculateNilaiPenguji = (
  penguasaanKeilmuan: number,
  kemampuanPresentasi: number,
  kesesuaianUrgensi: number
) => {
  validateNilaiInput(penguasaanKeilmuan, "Penguasaan Keilmuan");
  validateNilaiInput(kemampuanPresentasi, "Kemampuan Presentasi");
  validateNilaiInput(kesesuaianUrgensi, "Kesesuaian Urgensi");

  return (
    penguasaanKeilmuan * 0.4 + 
    kemampuanPresentasi * 0.2 + 
    kesesuaianUrgensi * 0.4
  );
};

export const calculateNilaiPembimbing = (
  penyelesaianMasalah: number,
  bimbinganSikap: number,
  kualitasLaporan: number
) => {
  validateNilaiInput(penyelesaianMasalah, "Penyelesaian Masalah");
  validateNilaiInput(bimbinganSikap, "Bimbingan Sikap");
  validateNilaiInput(kualitasLaporan, "Kualitas Laporan");

  return (
    penyelesaianMasalah * 0.4 + 
    bimbinganSikap * 0.35 + 
    kualitasLaporan * 0.25
  );
};

export const calculateNilaiAkhir = (
  nilaiPenguji: number | null = 0,
  nilaiPembimbing: number | null = 0,
  nilaiInstansi: number | null = 0
) => {
  if (nilaiPenguji === null || nilaiPembimbing === null || nilaiInstansi === null) {
    return null;
  }

  // Penguji: 20%, Pembimbing: 40%, Instansi: 40%
  return nilaiPenguji * 0.2 + nilaiPembimbing * 0.4 + nilaiInstansi * 0.4;
};