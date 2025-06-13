import BimbinganKPRepository from "../repositories/bimbingan-kp.repository";
import DailyReportRepository from "../repositories/daily-report.repository";
import { APIError } from "../utils/api-error.util";
import NilaiService from "./nilai.service";

export default class BimbinganKPService {
  public static async getBimbinganSaya(email: string) {
    const mahasiswa = await DailyReportRepository.findMahasiswa(email);
    if (!mahasiswa) {
      throw new APIError(`Waduh, kamu siapa sih? 😭`, 404);
    }

    const data = await BimbinganKPRepository.findBimbingan(mahasiswa.nim);
    if (!data) {
      throw new APIError(
        `Waduh, kamu belum mendaftar KP nih, wajib daftar dulu yak! 😉`,
        404
      );
    }
    if (data.level_akses < 5) {
      throw new APIError(
        `Waduh, kamu belum bisa mengakses bimbingan nih, tunggu pendaftaran kamu divalidasi yak! 😉`,
        403
      );
    }

    return {
      response: true,
      message: "Data bimbingan kamu berhasil diambil! 😁",
      data: data,
    };
  }

  public static async getMahasiswaBimbinganSaya(email: string) {
    const dosen = await BimbinganKPRepository.findDosen(email);

    if (!dosen) {
      throw new APIError("Waduh, kamu siapa sih? 😭", 404);
    }

    const mahasiswa = await BimbinganKPRepository.findMahasiswaBimbingan(
      dosen.nip
    );

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async getDetailMahasiswaBimbinganSaya(
    email: string,
    id: string
  ) {
    const dosen = await BimbinganKPRepository.findDosen(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const mahasiswa = await BimbinganKPRepository.findDetailMahasiswaBimbingan(
      dosen.nip,
      id
    );

    return {
      response: true,
      message: "Data mahasiswa bimbingan berhasil diambil! 😁",
      data: mahasiswa,
    };
  }

  public static async postBimbingan(
    email: string,
    nim: string,
    catatan_bimbingan: string,
    id: string
  ) {
    const dosen = await BimbinganKPRepository.findDosen(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const bimbingan = await BimbinganKPRepository.createBimbingan(
      nim,
      dosen.nip,
      id,
      catatan_bimbingan
    );

    return {
      response: true,
      message: "Catatan bimbingan berhasil dibuat! 😁",
      data: bimbingan,
    };
  }

  public static async postNilai(
    email: string,
    id: string,
    komponen_penilaian: {
      penyelesaian_masalah: number;
      bimbingan_sikap: number;
      kualitas_laporan: number;
      catatan: string;
    }
  ) {
    const dosen = await BimbinganKPRepository.findDosen(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const nilai_pembimbing = Math.round(
      (komponen_penilaian.penyelesaian_masalah * 0.4 +
        komponen_penilaian.bimbingan_sikap * 0.35 +
        komponen_penilaian.kualitas_laporan * 0.25) *
        100
    ) / 100;

    const data = await BimbinganKPRepository.createNilai(
      id,
      dosen.nip,
      nilai_pembimbing,
      komponen_penilaian
    );

    await NilaiService.updateNilaiAkhir(id);

    return {
      response: true,
      message: "Nilai berhasil disimpan! 😁",
      data: data,
    };
  }

  public static async putNilai(
    email: string,
    id: string,
    komponen_penilaian: {
      penyelesaian_masalah: number;
      bimbingan_sikap: number;
      kualitas_laporan: number;
      catatan: string;
    }
  ) {
    const dosen = await BimbinganKPRepository.findDosen(email);

    if (!dosen) {
      throw new APIError("Dosen pembimbing tidak ditemukan! 😭", 404);
    }

    const komponen =
      await BimbinganKPRepository.findIdKomponenPenilaianPembimbing(id);

    if (!komponen) {
      throw new APIError(
        "Komponen penilaian pembimbing tidak ditemukan! 😭",
        404
      );
    }

    const nilai_pembimbing = Math.round(
      (komponen_penilaian.penyelesaian_masalah * 0.4 +
        komponen_penilaian.bimbingan_sikap * 0.35 +
        komponen_penilaian.kualitas_laporan * 0.25) *
        100
    ) / 100;

    const data = await BimbinganKPRepository.updateNilai(
      id,
      nilai_pembimbing,
      komponen_penilaian,
      komponen.id
    );

    await NilaiService.updateNilaiAkhir(id);

    return {
      response: true,
      message: "Nilai berhasil diperbarui! 😁",
      data: data,
    };
  }
}
