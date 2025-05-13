import NilaiRepository from "../repositories/nilai.repository";
import { NilaiPengujiInput, NilaiPembimbingInput } from "../types/seminar-kp/nilai.type";

export default class NilaiService {

  public static async createNilaiPenguji(input: NilaiPengujiInput, id?: string) {
    if (
      input.penguasaanKeilmuan > 100 ||
      input.kemampuanPresentasi > 100 ||
      input.kesesuaianUrgensi > 100
    ) {
      throw new Error("Komponen nilai tidak boleh lebih dari 100");
    }

    const nilaiPenguji =
      input.penguasaanKeilmuan * 0.4 +
      input.kemampuanPresentasi * 0.2 +
      input.kesesuaianUrgensi * 0.4;

    const nilai = await NilaiRepository.createNilaiPenguji(
      id || crypto.randomUUID(),
      input.penguasaanKeilmuan,
      input.kemampuanPresentasi,
      input.kesesuaianUrgensi,
      input.catatan || null,
      nilaiPenguji,
      input.nim,
      input.nip,
      input.idJadwalSeminar
    );

    await this.updateNilaiAkhir(nilai.id);
    return nilai;
  }

  public static async createNilaiPembimbing(input: NilaiPembimbingInput, id?: string) {
    if (
      input.penyelesaianMasalah > 100 ||
      input.bimbinganSikap > 100 ||
      input.kualitasLaporan > 100
    ) {
      throw new Error("Komponen nilai tidak boleh lebih dari 100");
    }

    const nilaiPembimbing =
      input.penyelesaianMasalah * 0.4 +
      input.bimbinganSikap * 0.35 +
      input.kualitasLaporan * 0.25;

    const nilai = await NilaiRepository.createNilaiPembimbing(
      id || crypto.randomUUID(),
      input.penyelesaianMasalah,
      input.bimbinganSikap,
      input.kualitasLaporan,
      input.catatan || null,
      nilaiPembimbing,
      input.nim,
      input.nip,
      input.idJadwalSeminar
    );

    await this.updateNilaiAkhir(nilai.id);
    return nilai;
  }

  public static async updateNilaiAkhir(id: string) {
    const nilai = await NilaiRepository.getNilaiById(id);
    if (!nilai) return null;

    if (nilai.nilai_penguji && nilai.nilai_pembimbing && nilai.nilai_instansi) {
      const nilaiAkhir =
        nilai.nilai_penguji * 0.2 +
        nilai.nilai_pembimbing * 0.4 +
        nilai.nilai_instansi * 0.4;

      await NilaiRepository.updateNilaiAkhir(id, nilaiAkhir);
    }

    return nilai;
  }

  public static async getNilaiById(id: string) {
    return NilaiRepository.getNilaiById(id);
  }
}