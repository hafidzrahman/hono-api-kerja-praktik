import { StatusNilai } from "../types/seminar-kp/nilai.type";
import { APIError } from "../utils/api-error.util";

export default class NilaiHelper {
  public static async validateNilaiInput(nilai: number, fieldName: string) {
    if (nilai < 0 || nilai > 100) {
      throw new APIError(`${fieldName} harus bernilai antara 0 dan 100`);
    }
    return true;
  }

  public static async calculateNilaiPenguji(penguasaanKeilmuan: number, kemampuanPresentasi: number, kesesuaianUrgensi: number) {
    this.validateNilaiInput(penguasaanKeilmuan, "Penguasaan Keilmuan");
    this.validateNilaiInput(kemampuanPresentasi, "Kemampuan Presentasi");
    this.validateNilaiInput(kesesuaianUrgensi, "Kesesuaian Urgensi");

    return penguasaanKeilmuan * 0.4 + kemampuanPresentasi * 0.2 + kesesuaianUrgensi * 0.4;
  }

  public static async calculateNilaiPembimbing(penyelesaianMasalah: number, bimbinganSikap: number, kualitasLaporan: number) {
    this.validateNilaiInput(penyelesaianMasalah, "Penyelesaian Masalah");
    this.validateNilaiInput(bimbinganSikap, "Bimbingan Sikap");
    this.validateNilaiInput(kualitasLaporan, "Kualitas Laporan");

    return penyelesaianMasalah * 0.4 + bimbinganSikap * 0.35 + kualitasLaporan * 0.25;
  }

  public static async calculateNilaiAkhir(nilaiPenguji: number | null = 0, nilaiPembimbing: number | null = 0, nilaiInstansi: number | null = 0) {
    if (nilaiPenguji === null || nilaiPembimbing === null || nilaiInstansi === null) {
      return null;
    }

    return nilaiPenguji * 0.2 + nilaiPembimbing * 0.4 + nilaiInstansi * 0.4;  
  }

  public static async formatStatusNilai(status: StatusNilai): Promise<string> {
    switch (status) {
      case StatusNilai.NILAI_BELUM_VALID:
        return 'Nilai Belum Valid';
      case StatusNilai.NILAI_VALID:
        return 'Nilai Valid';
      case StatusNilai.NILAI_APPROVE:
        return 'Nilai Approve';
      default:
        return 'Unknown';
    }
  }

  public static async formatNilai(nilai: Number | undefined): Promise<string | undefined> {
    if (nilai === undefined) return undefined
    return nilai.toFixed(2)
  }
}
