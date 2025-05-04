import { jenis_dokumen } from "../generated/prisma";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import DokumenSeminarKpRepository from "../repositories/dokumen-seminar-kp.repository";
import { CreateDokumenSeminarKPInput } from "../types/seminar-kp/dokumen-seminar-kp.type";
import { APIError } from "../utils/api-error.util";

export default class DokumenSeminarKpService {
  public static async postDokumenSeminarKp(email: string, jenis_dokumen: jenis_dokumen, input: CreateDokumenSeminarKPInput) {
    const { nim } = await MahasiswaRepository.findNIMByEmail(email);
    if (!nim) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan! 😭`, 404);
    }

    const { level_akses } = await MahasiswaRepository.getPendaftaranKP(nim);
    if (level_akses < 5) {
      throw new APIError(`Waduh, anda belum memiliki akses untuk mengupload dokumen seminar KP! 😭`, 403);
    }

    const jumlahBimbingan = await MahasiswaRepository.countBimbinganByNIM(nim);

    if (jumlahBimbingan < 5) {
      throw new APIError(`Waduh, anda perlu bimbingan kp 5 kali ni! 😭`);
    }

    const existingDokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPByJenisAndPendaftaranId(jenis_dokumen, input.id_pendaftaran_kp);

    if (existingDokumen) {
      return await DokumenSeminarKpRepository.updateDokumenSeminarKP(existingDokumen.id, {
        link_path: input.link_path,
        status: "Terkirim",
      });
    }

    return await DokumenSeminarKpRepository.createDokumen(jenis_dokumen, input);
  }

  public static async getDokumenSeminarKpByNIM(email: string) {
    const { nim } = await MahasiswaRepository.findNIMByEmail(email);
    if (!nim) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan! 😭`, 404);
    }

    const dokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPByNIM(nim);

    if (!dokumen) {
      throw new APIError(`Waduh, Dokumen tidak ditemukan! 😭`, 404);
    }

    return {
      response: true,
      message: "Berhasil mendapatkan dokumen seminar KP!, 😁",
      data: dokumen,
    };
  }

  public static async getAllDokumenSeminarKP() {
    const allDokumen = await DokumenSeminarKpRepository.getAllDokumenSeminarKP();

    if (!allDokumen) {
      throw new APIError(`Waduh, Dokumen tidak ditemukan! 😭`, 404);
    }

    return {
      response: true,
      message: "Berhasil mendapatkan seluruh dokumen mahasiswa! 😁",
      data: allDokumen,
    };
  }

  public static async getDokumenSeminarKpById(id: string) {
    const dokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPById(id);
    if (!dokumen) {
      throw new APIError("Dokumen tidak ditemukan!", 404);
    }
    return dokumen;
  }

  public static async postTerimaDokumenSeminarKP(id: string, komentar?: string) {
    const dokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPById(id);
    if (!dokumen) {
      throw new APIError("Waduh, Dokumen tidak ditemukan! 😭", 404);
    }
    return await DokumenSeminarKpRepository.updateDokumenSeminarKP(id, {
      status: "Divalidasi",
      komentar,
    });
  }

  public static async postTolakDokumenSeminarKP(id: string, komentar: string) {
    const dokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPById(id);
    if (!dokumen) {
      throw new APIError("Waduh, Dokumen tidak ditemukan! 😭", 404);
    }
    return await DokumenSeminarKpRepository.updateDokumenSeminarKP(id, {
      status: "Ditolak",
      komentar,
    });
  }
}
