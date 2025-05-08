import BimbinganKPRepository from "../repositories/bimbingan-kp.repository";
import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";

export default class BimbinganKPService {
  public static async postBimbingan(
    email: string,
    catatan_bimbingan: string,
    nim: string
  ) {
    const dosen = await DailyReportRepository.findDosenPembimbing(email);

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

  public static async getBimbinganSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan nih! 😭`, 404);
    }
    const { nim } = mahasiswa;
    const bimbingan = await BimbinganKPRepository.findBimbingan(nim);

    return {
      response: true,
      message: "Data bimbingan berhasil diambil! 😁",
      data: bimbingan,
    };
  }

  public static async putBimbingan(
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

  public static async getDetailMahasiswaBimbinganSaya(
    email: string,
    nim: string
  ) {
    const dosen = await DailyReportRepository.findDosenPembimbing(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await BimbinganKPRepository.findDetailMahasiswaBimbingan(
      dosen.nip,
      nim
    );

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }
}
