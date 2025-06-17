import { instansi, pendaftaran_kp } from "../generated/prisma";
import MahasiswaHelper from "../helpers/mahasiswa.helper";
import prisma from "../infrastructures/db.infrastructure";
import DaftarKPRepository from "../repositories/daftar-kp.repository";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { RepositoryRiwayatPendaftaranKPInterface } from "../types/daftar-kp/repository.type";
import {
  CreatePermohonanPendaftaranKPInterface,
  CreatePermohonanPendaftaranInstansiInterface,
  GetRiwayatPendaftaranKP,
  GetBerkasMahasiswa,
  GetPendaftaranKPTerbaru,
  ServicePendaftaranKPMahasiswa,
  ServiceDetailPendaftaranKPMahasiswa,
  GetAllDataInstansi,
  ServiceDetailInstansi,
  ServiceTanggalDaftarKP,
  ServiceUpdateInstansiKP,
  ServiceLOGPendaftaranKPById,
  PutMahasiswaParamsInterface,
  getTahunAjaranService,
} from "../types/daftar-kp/service.type";
import { CommonResponse } from "../types/global.type";
import { APIError } from "../utils/api-error.util";
import {
  IsPendaftaranKPClosed,
  IsPendaftaranKPLanjutClosed,
} from "../validators/batas-waktu-pendaftaran..validator";
import { cekKPTerbaruMahasiswa } from "../validators/cek-kp-terbaru-mahasiswa";
import { cekTerdaftarTahunAjaran } from "../validators/cek-terdaftar-tahun-ajaran.validator";

export default class DaftarKPService {
  public static async updatePermohonanPendaftaranKP(
    email: string,
    judul_kp?: string,
    kelas_kp?: string
  ): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    const dataKP = await DaftarKPRepository.getKPTerbaruMahasiswa(dataMhs.nim);

    if (!dataKP) {
      throw new APIError("Data kerja praktek mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.updatePermohonanPendaftaranKP(
      dataKP.id,
      judul_kp,
      kelas_kp
    );

    return {
      response: true,
      message: "Berhasil memperbarui data kerja praktek",
    };
  }

  public static async accBerkasMahasiswa(
    id: string,
    catatan?: string | null
  ): Promise<CommonResponse> {
    const dataKP = await DaftarKPRepository.getPendaftaranKPById(id);

    const documents = await DaftarKPRepository.getDocumentsKPById(id);

    if (!dataKP) {
      throw new APIError("Data pendaftaran kerja praktek tidak ditemukan");
    } else if (
      dataKP.level_akses % 2 !== 0 &&
      documents[0].status !== "Terkirim"
    ) {
      throw new APIError("Level akses mahasiswa tidak memenuhi syarat");
    }

    await DaftarKPRepository.accBerkasMahasiswa(
      dataKP.id,
      dataKP.level_akses,
      documents,
      catatan
    );

    return {
      response: true,
      message: "Berkas mahasiswa berhasil disetujui",
    };
  }

  public static async postSuratPenolakanInstansi(
    email: string,
    link_surat_penolakan_instansi: string
  ): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    const dataKP = await DaftarKPRepository.getKPTerbaruMahasiswa(dataMhs.nim);

    if (!dataKP) {
      throw new APIError("Data KP Mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.postSuratPenolakanInstansi(
      dataKP.id,
      link_surat_penolakan_instansi
    );

    return {
      response: true,
      message: "Berhasil mengunggah link surat penolakan instansi",
    };
  }

  public static async getLOGKPendaftaranKPById(
    idKP: string
  ): Promise<ServiceLOGPendaftaranKPById> {
    const data = await DaftarKPRepository.getLOGByIdPendaftaranKP(idKP);

    return {
      response: true,
      message: "Berhasil mendapatkan data log pendaftaran KP",
      data,
    };
  }

  public static async postTanggalDaftarKP(
    tanggalMulaiDaftarKP: string,
    tanggalTerakhirDaftarKP: string
  ) {
    const data = await DaftarKPRepository.postTanggalDaftarKP(
      tanggalMulaiDaftarKP,
      tanggalTerakhirDaftarKP
    );

    return {
      response: true,
      message: "Berhasil mengupdate tanggal daftar KP",
      data,
    };
  }

  public static async postTanggalDaftarKPLanjut(
    tanggalMulaiDaftarKP: string,
    tanggalTerakhirDaftarKP: string
  ) {
    const data = await DaftarKPRepository.postTanggalDaftarKPLanjut(
      tanggalMulaiDaftarKP,
      tanggalTerakhirDaftarKP
    );

    return {
      response: true,
      message: "Berhasil mengupdate tanggal daftar KP",
      data,
    };
  }

  public static async getTanggalDaftarKP(): Promise<ServiceTanggalDaftarKP> {
    const data = await DaftarKPRepository.getTanggalDaftarKP();

    if (!data) {
      throw new APIError("Gagal mendapatkan tanggal daftar KP", 404);
    }

    return {
      response: true,
      message: "Berhasil mendapatkan tanggal Daftar KP",
      data,
    };
  }

  public static async getDataDetailInstansi(
    idInstansi: string
  ): Promise<ServiceDetailInstansi> {
    const data = await DaftarKPRepository.getDataDetailInstansi(idInstansi);
    if (!data) {
      throw new APIError("Data instansi tidak ditemukan", 404);
    }

    return {
      response: true,
      message: "Data instansi berhasil didapatkan",
      data,
    };
  }

  public static async getDataKPDetailMahasiswa(
    idKP: string
  ): Promise<ServiceDetailPendaftaranKPMahasiswa> {
    const data = await DaftarKPRepository.getPendaftaranKPById(idKP);

    if (!data) {
      throw new APIError("Data pendaftaran KP mahasiswa tidak ditemukan");
    }

    const dataKP = await DaftarKPRepository.getDataKPDetailMahasiswa(data.id);

    return {
      response: true,
      message: "Data lengkap pendaftaran KP mahasiswa berhasil didapatkan",
      data: dataKP,
    };
  }

  public static async getDataKPMahasiswa(): Promise<ServicePendaftaranKPMahasiswa> {
    const data = await DaftarKPRepository.getDataKPMahasiswa();

    return {
      response: true,
      message: "Data KP Mahasiswa berhasil didapatkan!",
      data,
    };
  }

  public static async postTolakBerkasMahasiswa(
    id: string,
    message: string = ""
  ): Promise<CommonResponse> {
    const dataKP = await DaftarKPRepository.getPendaftaranKPById(id);

    if (!dataKP) {
      throw new APIError("Data kerja praktek tidak ditemukan", 404);
    } else if (dataKP.level_akses % 2 !== 0) {
      throw new APIError("Level akses mahasiswa tidak memenuhi syarat");
    }

    await DaftarKPRepository.postTolakBerkasMahasiswa(
      dataKP.id,
      dataKP.level_akses,
      message !== "" ? message : "Link mungkin tidak sesuai atau tidak valid"
    );

    return {
      response: true,
      message: "Berkas mahasiswa berhasil ditolak",
    };
  }

  public static async deleteDataInstansi(id: string): Promise<CommonResponse> {
    const dataInstansi = await DaftarKPRepository.findInstansiById(id);

    if (!dataInstansi) {
      throw new APIError("Data instansi tidak ditemukan", 404);
    }

    await DaftarKPRepository.deleteDataInstansi(dataInstansi.id);

    return {
      response: true,
      message: "Data instansi berhasil dihapus",
    };
  }

  public static async editDataInstansi(
    id: string,
    status?: string,
    profil_singkat?: string,
    nama?: string,
    alamat?: string,
    longitude?: number,
    latitude?: number,
    radius?: number,
    jenis?: string,
    nama_pj?: string,
    no_hp_pj?: string
  ): Promise<ServiceUpdateInstansiKP> {
    const dataInstansi = await DaftarKPRepository.findInstansiById(id);

    if (!dataInstansi) {
      throw new APIError("Data instansi tidak ditemukan", 404);
    }

    const result = await DaftarKPRepository.editDataInstansi(
      dataInstansi.id,
      status,
      profil_singkat,
      nama,
      alamat,
      longitude,
      latitude,
      radius,
      jenis,
      nama_pj,
      no_hp_pj
    );

    return {
      response: true,
      message: "Data instansi berhasil disimpan",
      data: result,
    };
  }

  public static async getAllDataInstansi(): Promise<GetAllDataInstansi> {
    const data = await DaftarKPRepository.getAllDataInstansi();

    return {
      response: true,
      message: "Data instansi berhasil didapatkan",
      data,
    };
  }

  public static async getKPTerbaruMahasiswa(
    email: string
  ): Promise<GetPendaftaranKPTerbaru> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });
    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    const data = await DaftarKPRepository.getKPTerbaruMahasiswa(dataMhs.nim);

    if (!data) {
      throw new APIError("Data kerja praktek mahasiswa tidak ditemukan", 404);
    }

    return {
      response: true,
      message: "Data KP mahasiswa saat ini berhasil didapatkan",
      data,
    };
  }

  public static async getTahunAjaran() : Promise<getTahunAjaranService> {
    const dataTahunAjaran = await DaftarKPRepository.getTahunAjaran();

    return {
      response : true,
      message : "Berhasil mendapatkan data tahun ajaran",
      data : dataTahunAjaran
    }
  }

  public static async createPermohonanPendaftaranKP({
    email,
    tanggalMulai,
    idInstansi,
    tujuanSuratInstansi,
    judul_kp,
    kelas_kp,
  }: CreatePermohonanPendaftaranKPInterface): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    const dataKPMahasiswa = await cekKPTerbaruMahasiswa(dataMhs.nim);

    if (
      dataKPMahasiswa &&
      dataKPMahasiswa.level_akses > 0 &&
      dataKPMahasiswa.level_akses !== -1
    ) {
      throw new APIError(
        "Mahasiswa sudah melakukan pendaftaran KP pada periode ini",
        404
      );
    }

    const dataInstansi = await DaftarKPRepository.findInstansiById(idInstansi);

    if (!dataInstansi) {
      throw new APIError("Data instansi tidak ditemukan");
    } else if (dataInstansi.status === "Pending") {
      throw new APIError("Instansi belum disetujui oleh koordinator KP");
    } else if (dataInstansi.status === "Tidak_Aktif") {
      throw new APIError("Instansi yang dipilih tidak aktif");
    }

    const isPendaftaranKPClosed = await IsPendaftaranKPClosed();

    if (isPendaftaranKPClosed) {
      throw new APIError("Tanggal Pendaftaran KP Sudah ditutup", 404);
    }

    const isAlreadyRegistered = await cekTerdaftarTahunAjaran();

    if (isAlreadyRegistered) {
      throw new APIError(
        "Anda sudah pernah terdaftar dalam kerja praktek pada tahun ajaran ini"
      );
    }

    await DaftarKPRepository.createPermomohonanKP({
      dataKPMahasiswa,
      nim: dataMhs.nim,
      tanggalMulai,
      idInstansi,
      tujuanSuratInstansi,
      judul_kp,
      kelas_kp,
    });

    return {
      response: true,
      message: "Pendaftaran KP anda berhasil!",
    };
  }

  public static async createPermohonanPendaftaranInstansi({
    email,
    namaInstansi,
    alamatInstansi,
    namaPenanggungJawabInstansi,
    telpPenanggungJawabInstansi,
    jenisInstansi,
    longitude,
    latitude,
    radius,
    profilSingkat,
  }: CreatePermohonanPendaftaranInstansiInterface): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.createPermomohonanInstansi({
      nim: dataMhs.nim,
      namaInstansi,
      alamatInstansi,
      namaPenanggungJawabInstansi,
      telpPenanggungJawabInstansi,
      jenisInstansi,
      longitude,
      latitude,
      radius,
      profilSingkat,
    });

    return {
      response: true,
      message: "Pendaftaran Instansi anda berhasil!",
    };
  }

  public static async getRiwayatPendaftaranKP(
    email: string
  ): Promise<GetRiwayatPendaftaranKP> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    const data = await DaftarKPRepository.getRiwayatPendaftaranKP(dataMhs.nim);

    return {
      response: true,
      message: "Riwayat KP anda berhasil didapatkan!",
      data,
    };
  }

  public static async getBerkasMahasiswa(): Promise<GetBerkasMahasiswa> {
    const data = {
      suratPengantar: [] as pendaftaran_kp[] | null,
      suratBalasan: [] as pendaftaran_kp[] | null,
      idPengajuanDosenPembimbing: [] as pendaftaran_kp[] | null,
      suratPenunjukkanDosenPembimbing: [] as pendaftaran_kp[] | null,
      suratPerpanjanganKP: [] as pendaftaran_kp[] | null,
    };

    data.suratPengantar =
      await DaftarKPRepository.getBerkasSuratPengantarMahasiswa();

    data.suratBalasan =
      await DaftarKPRepository.getBerkasSuratBalasanMahasiswa();

    data.idPengajuanDosenPembimbing =
      await DaftarKPRepository.getBerkasIdPengajuanDosenPembimbingMahasiswa();

    data.suratPenunjukkanDosenPembimbing =
      await DaftarKPRepository.getBerkasPenunjukkanDosenPembimbingMahasiswa();

    data.suratPerpanjanganKP =
      await DaftarKPRepository.getBerkasSuratPerpanjanganKPMahasiswa();

    return {
      response: true,
      message: "Berkas mahasiswa berhasil didapatkan",
      data,
    };
  }

  public static async postSuratPengantarKP(
    email: string,
    linkSuratPengantarKP: string
  ): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    const isPendaftaranKPClosed = await IsPendaftaranKPClosed();

    if (isPendaftaranKPClosed) {
      throw new APIError("Tanggal Pendaftaran KP Sudah ditutup", 404);
    }

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.postSuratPengantarKP(
      dataMhs.nim,
      linkSuratPengantarKP
    );

    return {
      response: true,
      message: "Link surat pengantar berhasil diunggah",
    };
  }

  public static async postSuratBalasanKP(
    email: string,
    linkSuratBalasanKP: string
  ): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    const isPendaftaranKPClosed = await IsPendaftaranKPClosed();

    if (isPendaftaranKPClosed) {
      throw new APIError("Tanggal Pendaftaran KP Sudah ditutup", 404);
    }

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.postSuratBalasanKP(
      dataMhs.nim,
      linkSuratBalasanKP
    );

    return {
      response: true,
      message: "Link surat pengantar berhasil diunggah",
    };
  }

  public static async postIdPengajuanDosenPembimbingKP(
    email: string,
    idPengajuanDosenPembimbingKP: string
  ): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    const isPendaftaranKPClosed = await IsPendaftaranKPClosed();

    if (isPendaftaranKPClosed) {
      throw new APIError("Tanggal Pendaftaran KP Sudah ditutup", 404);
    }

    await DaftarKPRepository.postIdPengajuanDosenPembimbingKP(
      dataMhs.nim,
      idPengajuanDosenPembimbingKP
    );

    return {
      response: true,
      message: "Link surat pengantar berhasil diunggah",
    };
  }

  public static async getDataInstansi() {
    const data = await DaftarKPRepository.getDataInstansi();

    return {
      response: true,
      message: "Data instansi berhasil diambil",
      data,
    };
  }

  public static async postSuratPenunjukkanDosenPembimbingKP(
    email: string,
    linkSuratPenunjukkanDosenPembimbingKP: string
  ): Promise<CommonResponse> {
    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    const isPendaftaranKPClosed = await IsPendaftaranKPClosed();

    if (isPendaftaranKPClosed) {
      throw new APIError("Tanggal Pendaftaran KP Sudah ditutup", 404);
    }

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.postSuratPenunjukkanDosenPembimbing(
      dataMhs.nim,
      linkSuratPenunjukkanDosenPembimbingKP
    );
    return {
      response: true,
      message: "Link surat pengantar berhasil diunggah",
    };
  }

  public static async postSuratPerpanjanganKP(
    email: string,
    linkSuratPerpanjanganKP: string,
    alasan_lanjut_kp?: string
  ): Promise<CommonResponse> {
    // [NOTE] Validasi dulu apakah fitur perpanjangan KP sudah dibuka oleh koordinator KP?

    const isPendaftaranKPLanjutClosed = await IsPendaftaranKPLanjutClosed();

    if (isPendaftaranKPLanjutClosed) {
      throw new APIError("Tanggal Pendaftaran KP Sudah ditutup", 404);
    }

    const dataMhs = await MahasiswaRepository.findByEmail({ email });

    if (!dataMhs || !dataMhs.nim) {
      throw new APIError("Data mahasiswa tidak ditemukan", 404);
    }

    await DaftarKPRepository.postSuratPerpanjanganKP(
      dataMhs.nim,
      linkSuratPerpanjanganKP,
      alasan_lanjut_kp
    );
    return {
      response: true,
      message: "Link surat pengantar berhasil diunggah",
    };
  }

  // public static async editMahasiswa(
  //   data: pendaftaran_kp
  // ): Promise<CommonResponse> {
  //   const dataKP = await DaftarKPRepository.getPendaftaranKPById(data.id);

  //   if (!dataKP) {
  //     throw new Error("Data KP mahasiswa tidak ditemukan");
  //   }

  //   await DaftarKPRepository.editMahasiswa(data, dataKP);

  //   return {
  //     response: true,
  //     message: "Berhasil mengubah data mahasiswa",
  //   };
  // }

  // public static async putBerkasMahasiswa(
  //   dataBaru: any
  // ): Promise<CommonResponse> {
  //   const dataKP = await DaftarKPRepository.getPendaftaranKPById(dataBaru.id);

  //   if (!dataKP) {
  //     throw new APIError("Data pendaftaran kerja praktek tidak ditemukan");
  //   }
  //   else if (
  //     dataKP.document.find(
  //       (item) => item.idKriteria === 0 && item.status === "Terkirim"
  //     )
  //   ) {
  //     await DaftarKPRepository.putBerkasMahasiswa(dataBaru, dataKP, false);
  //   } else if (dataKP.level_akses % 2 !== 0 || dataKP.level_akses <= 0) {
  //     await DaftarKPRepository.putBerkasMahasiswa(dataBaru, dataKP, true);
  //   } else {
  //     await DaftarKPRepository.putBerkasMahasiswa(dataBaru, dataKP, false);
  //   }
  //   return {
  //     response: true,
  //     message: "Berkas mahasiswa berhasil disetujui",
  //   };
  // }

  public static async putBerkasMahasiswa(
    dataBaru: PutMahasiswaParamsInterface
  ): Promise<CommonResponse> {
    const dataKP = await DaftarKPRepository.getPendaftaranKPById(dataBaru.id);

    if (!dataKP) {
      throw new APIError("Data pendaftaran kerja praktek tidak ditemukan");
    }

    if (dataKP.level_akses > 11 && dataKP.level_akses < 0) {
      throw new APIError("Level akses mahasiswa tidak memenuhi syarat");
    }
    await DaftarKPRepository.putBerkasMahasiswa(dataBaru, dataKP);
    return {
      response: true,
      message: "Berkas mahasiswa berhasil disetujui",
    };
  }
}
