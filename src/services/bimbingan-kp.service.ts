import BimbinganKPRepository from "../repositories/bimbingan-kp.repository";
import { APIError } from "../utils/api-error.util";

export default class BimbinganKPService {
  public static async createBimbingan(
    emailDosen: string,
    nim: string,
    catatanBimbingan: string
  ) {
    // Validasi apakah dosen adalah pembimbing mahasiswa
    const isPembimbing = await BimbinganKPRepository.validateDosenForMahasiswa(
      emailDosen,
      nim
    );
    if (!isPembimbing) {
      throw new APIError(
        "Dosen tidak memiliki akses untuk membimbing mahasiswa ini! 😡",
        403
      );
    }

    // Simpan catatan bimbingan
    const bimbingan = await BimbinganKPRepository.createBimbingan(
      nim,
      emailDosen,
      catatanBimbingan
    );

    return {
      response: true,
      message: "Catatan bimbingan berhasil dibuat! 😁",
      data: bimbingan,
    };
  }

  public static async getBimbinganByMahasiswa(emailMahasiswa: string) {
    // Ambil hasil bimbingan berdasarkan email mahasiswa
    const bimbingan = await BimbinganKPRepository.findBimbinganByMahasiswa(
      emailMahasiswa
    );

    if (!bimbingan || bimbingan.length === 0) {
      throw new APIError(
        "Belum ada catatan bimbingan untuk mahasiswa ini! 😭",
        404
      );
    }

    return {
      response: true,
      message: "Data bimbingan berhasil diambil! 😁",
      data: bimbingan,
    };
  }

  public static async updateBimbingan(
    emailDosen: string,
    idBimbingan: string,
    catatanBimbingan: string
  ) {
    // Validasi apakah bimbingan milik dosen
    const isOwnedByDosen =
      await BimbinganKPRepository.validateBimbinganOwnership(
        emailDosen,
        idBimbingan
      );
    if (!isOwnedByDosen) {
      throw new APIError(
        "Dosen tidak memiliki akses untuk mengedit bimbingan ini! 😡",
        403
      );
    }

    // Update catatan bimbingan
    const updatedBimbingan = await BimbinganKPRepository.updateBimbingan(
      idBimbingan,
      catatanBimbingan
    );

    return {
      response: true,
      message: "Catatan bimbingan berhasil diperbarui! 😁",
      data: updatedBimbingan,
    };
  }

  public static async getMahasiswaAndBimbingan(emailDosen: string) {
    // Validasi apakah dosen memiliki mahasiswa bimbingan
    const mahasiswaAndBimbingan =
      await BimbinganKPRepository.findMahasiswaAndBimbingan(emailDosen);

    if (!mahasiswaAndBimbingan || mahasiswaAndBimbingan.length === 0) {
      throw new APIError(
        "Belum ada mahasiswa bimbingan untuk dosen ini! 😭",
        404
      );
    }

    return {
      response: true,
      message: "Data mahasiswa bimbingan dan bimbingan berhasil diambil! 😁",
      data: mahasiswaAndBimbingan,
    };
  }
}
