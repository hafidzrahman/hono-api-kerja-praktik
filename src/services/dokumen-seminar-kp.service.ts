import { jenis_dokumen } from "../generated/prisma";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import DokumenSeminarKpRepository from "../repositories/dokumen-seminar-kp.repository";
import { CreateDokumenSeminarKPInput } from "../types/seminar-kp/dokumen-seminar-kp.type";
import { APIError } from "../utils/api-error.util";
import { getStepForDokumen, stepAkses, validasiStepAksesDokumen } from "../helpers/dokumen-step.helper";
import { tambahHitungMundurJadwal } from "../helpers/jadwal.helper";

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

    await validasiStepAksesDokumen(jenis_dokumen, input.id_pendaftaran_kp);

    const existingDokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPByJenisAndPendaftaranId(jenis_dokumen, input.id_pendaftaran_kp);

    if (existingDokumen) {
      return await DokumenSeminarKpRepository.updateDokumenSeminarKP(existingDokumen.id, {
        link_path: input.link_path,
        status: "Terkirim",
      });
    }

    return await DokumenSeminarKpRepository.createDokumen(jenis_dokumen, input);
  }

  public static async getDataSeminarKpSaya(email: string) {
    const { nim } = await MahasiswaRepository.findNIMByEmail(email);
    if (!nim) {
      throw new APIError(`Waduh, mahasiswa tidak ditemukan! 😭`, 404);
    }

    const dokumen = await DokumenSeminarKpRepository.getDataSeminarKPSaya(nim);

    if (!dokumen) {
      throw new APIError(`Waduh, Dokumen tidak ditemukan! 😭`, 404);
    }

    let id_pendaftaran_kp = "";
    if (dokumen.pendaftaran_kp && dokumen.pendaftaran_kp.length > 0) {
      id_pendaftaran_kp = dokumen.pendaftaran_kp[0].id;
    } else if (dokumen.dokumen_seminar_kp.length > 0) {
      id_pendaftaran_kp = dokumen.dokumen_seminar_kp[0].id_pendaftaran_kp ?? "";
    }

    const stepInfo = {
      step1_accessible: true,
      step2_accessible: await stepAkses(2, id_pendaftaran_kp),
      step3_accessible: await stepAkses(3, id_pendaftaran_kp),
      step4_accessible: await stepAkses(4, id_pendaftaran_kp),
      step5_accessible: await stepAkses(5, id_pendaftaran_kp),
      step6_accessible: await stepAkses(6, id_pendaftaran_kp),
    };

    const dokumensByStep = {
      step1: dokumen.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 1),
      step2: dokumen.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 2),
      step3: dokumen.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 3),
      step5: dokumen.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 5),
    };

    const dokumenDenganHitungMundur = {
      jadwal: tambahHitungMundurJadwal(dokumen.jadwal),
    };

    const { dokumen_seminar_kp, ...data_mahasiswa } = dokumen;

    const { jadwal, ...data_mahasiswa_tanpa_jadwal } = data_mahasiswa;

    return {
      response: true,
      message: "Berhasil mendapatkan data seminar KP!, 😁",
      data: {
        ...data_mahasiswa_tanpa_jadwal,
        steps_info: stepInfo,
        dokumen_seminar_kp: dokumensByStep,
        hitung_mundur_jadwal: dokumenDenganHitungMundur,
      },
    };
  }

  public static async getAllDokumenSeminarKP() {
    const allDokumen = await DokumenSeminarKpRepository.getAllDokumenSeminarKP();

    if (!allDokumen) {
      throw new APIError(`Waduh, Dokumen tidak ditemukan! 😭`, 404);
    }

    const processedData = allDokumen.map((mahasiswa) => {
      // Kategorikan dokumen berdasarkan step
      let id_pendaftaran_kp = "";
      if (mahasiswa.dokumen_seminar_kp.length > 0) {
        id_pendaftaran_kp = mahasiswa.dokumen_seminar_kp[0].id_pendaftaran_kp ?? "";
      }

      const dokumensByStep = {
        step1: mahasiswa.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 1),
        step2: mahasiswa.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 2),
        step3: mahasiswa.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 3),
        step5: mahasiswa.dokumen_seminar_kp.filter((doc) => getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 5),
      };

      return {
        nim: mahasiswa.nim,
        nama: mahasiswa.nama,
        email: mahasiswa.email,
        id_pendaftaran_kp: id_pendaftaran_kp,
      };
    });

    return {
      response: true,
      message: "Berhasil mendapatkan seluruh dokumen mahasiswa! 😁",
      data: processedData,
    };
  }

  public static async getDokumenSeminarKPByNIM(nim: string) {
    const mahasiswa = await DokumenSeminarKpRepository.getDokumenSeminarKPByNIM(nim);

    if (!mahasiswa) {
      throw new APIError(`Waduh, Mahasiswa dengan NIM ${nim} tidak ditemukan! 😭`, 404);
    }

    if (mahasiswa.dokumen_seminar_kp.length === 0) {
      throw new APIError(`Waduh, Dokumen untuk mahasiswa dengan NIM ${nim} tidak ditemukan! 😭`, 404);
    }

    let id_pendaftaran_kp = "";
    if (mahasiswa.dokumen_seminar_kp.length > 0) {
      id_pendaftaran_kp = mahasiswa.dokumen_seminar_kp[0].id_pendaftaran_kp ?? "";
    }

    const dokumensByStep = {
      step1: mahasiswa.dokumen_seminar_kp.filter(doc => 
        getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 1
      ),
      step2: mahasiswa.dokumen_seminar_kp.filter(doc => 
        getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 2
      ),
      step3: mahasiswa.dokumen_seminar_kp.filter(doc => 
        getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 3
      ),
      step5: mahasiswa.dokumen_seminar_kp.filter(doc => 
        getStepForDokumen(doc.jenis_dokumen as jenis_dokumen) === 5
      ),
    };

    return {
      response: true,
      message: "Berhasil mendapatkan dokumen mahasiswa! 😁",
      data: {
        nim: mahasiswa.nim,
        nama: mahasiswa.nama,
        email: mahasiswa.email,
        id_pendaftaran_kp: id_pendaftaran_kp,
        dokumen: dokumensByStep
      },
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
