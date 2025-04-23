import BimbinganKPRepository from "../repositories/bimbingan-kp.repository";
import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";

export default class BimbinganKPService {
  public static async createBimbingan(
    email: string,
    catatan_bimbingan: string,
    nim: string
  ) {
    const dosen = await DailyReportRepository.getDosenPembimbing(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const bimbingan = await BimbinganKPRepository.createBimbingan(
      dosen.nip,
      catatan_bimbingan,
      nim
    );

    return {
      response: true,
      message: "Catatan bimbingan berhasil dibuat! 😁",
      data: bimbingan,
    };
  }

  public static async getBimbingan(email: string) {
    const { nim } = await DailyReportRepository.getNIM(email);
    const bimbingan = await BimbinganKPRepository.getBimbingan(nim);

    return {
      response: true,
      message: "Data bimbingan berhasil diambil! 😁",
      data: bimbingan,
    };
  }

  public static async updateBimbingan(
    id_bimbingan: string,
    catatan_bimbingan: string
  ) {
    const updateBimbingan = await BimbinganKPRepository.updateBimbingan(
      id_bimbingan,
      catatan_bimbingan
    );

    return {
      response: true,
      message: "Catatan bimbingan berhasil diperbarui! 😁",
      data: updateBimbingan,
    };
  }

  public static async getMahasiswa(email: string) {
    const dosen = await DailyReportRepository.getDosenPembimbing(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await BimbinganKPRepository.getMahasiswa(dosen.nip);

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }
}
