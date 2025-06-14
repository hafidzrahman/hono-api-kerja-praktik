import { status_dokumen } from "../generated/prisma";
import { StatusNilai } from "../types/seminar-kp/nilai.type";
import { APIError } from "../utils/api-error.util";

export default class NilaiHelper {
  public static async validateNilaiInput(nilai: number, fieldName: string) {
    if (nilai < 0 || nilai > 100) {
      throw new APIError(`Waduh, ${fieldName} harus bernilai antara 0 dan 100! 😭`, 400);
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

    return parseFloat((nilaiPenguji * 0.2 + nilaiPembimbing * 0.4 + nilaiInstansi * 0.4).toFixed(2));
  }

  public static formatStatusNilai(status: StatusNilai): string {
    switch (status) {
      case StatusNilai.NILAI_BELUM_VALID:
        return "Nilai Belum Valid";
      case StatusNilai.NILAI_VALID:
        return "Nilai Valid";
      case StatusNilai.NILAI_APPROVE:
        return "Nilai Approve";
      default:
        return "Unknown";
    }
  }

  public static getNilaiHuruf(nilai: number | null | undefined): string {
    if (nilai === null || nilai === undefined) return "-";

    if (nilai >= 85) return "A";
    if (nilai >= 80) return "A-";
    if (nilai >= 75) return "B+";
    if (nilai >= 70) return "B";
    if (nilai >= 65) return "B-";
    if (nilai >= 60) return "C+";
    if (nilai >= 55) return "C";
    if (nilai >= 50) return "D";
    return "E";
  }

  public static canInputNilai(waktuMulai: Date | null): boolean {
    if (!waktuMulai) return false;

    const now = new Date();
    return now > waktuMulai;
  }

  public static canValidateNilai(nilaiPenguji: number | null, nilaiPembimbing: number | null, nilaiInstansi: number | null, dokumenSeminarKp: { status: status_dokumen }[]) {
    if (nilaiPenguji === null) {
      return {
        valid: false,
        message: "Nilai dari penguji belum diinput",
      };
    }

    if (nilaiPembimbing === null) {
      return {
        valid: false,
        message: "Nilai dari pembimbing belum diinput",
      };
    }

    if (nilaiInstansi === null) {
      return {
        valid: false,
        message: "Nilai dari instansi belum diinput",
      };
    }

    const unvalidatedDocuments = dokumenSeminarKp.filter((doc) => doc.status !== status_dokumen.Divalidasi);
    if (unvalidatedDocuments.length > 0) {
      return {
        valid: false,
        message: `${unvalidatedDocuments.length} dokumen seminar belum divalidasi`,
      };
    }

    return {
      valid: true,
      message: "Semua persyaratan validasi terpenuhi",
    };
  }
}
