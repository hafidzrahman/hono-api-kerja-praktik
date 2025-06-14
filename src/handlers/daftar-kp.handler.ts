import { Context } from "hono";
import DaftarKPService from "../services/daftar-kp.service";
import { APIError } from "../utils/api-error.util";
import { pendaftaran_kp } from "../generated/prisma";

export default class DaftarKPHandler {
  public static async accBerkasMahasiswa(c: Context) {
    const { id, catatan } = (await c.req.json()) as any;

    if (!id) {
      throw new APIError("ID pendaftaran KP tidak ditemukan");
    }

    return c.json(await DaftarKPService.accBerkasMahasiswa(id, catatan));
  }

  public static async postTanggalDaftarKP(c: Context) {
    const { tanggalMulai, tanggalTerakhir } = await c.req.json();
    return c.json(
      await DaftarKPService.postTanggalDaftarKP(tanggalMulai, tanggalTerakhir)
    );
  }

  public static async postTanggalDaftarKPLanjut(c: Context) {
    const { tanggalMulai, tanggalTerakhir } = await c.req.json();
    return c.json(
      await DaftarKPService.postTanggalDaftarKPLanjut(
        tanggalMulai,
        tanggalTerakhir
      )
    );
  }

  public static async getTanggalDaftarKP(c: Context) {
    return c.json(await DaftarKPService.getTanggalDaftarKP());
  }

  public static async getLOGKPendaftaranKPById(c: Context) {
    const idKP = c.req.param("idKP");

    if (!idKP) {
      throw new APIError("Gagal mendapatkan data LOG Pendaftaran KP");
    }

    return c.json(await DaftarKPService.getLOGKPendaftaranKPById(idKP));
  }

  public static async getDataKPDetailMahasiswa(c: Context) {
    const idKP = c.req.param("id");

    if (!idKP) {
      throw new APIError("Gagal mendapatkan data detail kp mahasiswa");
    }

    return c.json(await DaftarKPService.getDataKPDetailMahasiswa(idKP));
  }

  public static async getDataKPMahasiswa(c: Context) {
    return c.json(await DaftarKPService.getDataKPMahasiswa());
  }

  public static async postTolakBerkasMahasiswa(c: Context) {
    const { id, message } = await c.req.json();

    if (!id) {
      throw new APIError("Id kerja praktek mahasiswa kosong");
    }

    return c.json(await DaftarKPService.postTolakBerkasMahasiswa(id, message));
  }

  public static async deleteDataInstansi(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      throw new APIError("ID data instansi kosong");
    }

    return c.json(await DaftarKPService.deleteDataInstansi(id));
  }

  public static async editDataInstansi(c: Context) {
    const {
      id,
      status,
      profil_singkat,
      nama,
      alamat,
      longitude,
      latitude,
      radius,
      jenis,
      nama_pj,
      no_hp_pj,
    } = (await c.req.json()) as any;

    if (!id) {
      throw new APIError("ID data instansi kosong");
    } else if (
      status !== "Aktif" &&
      status !== "Pending" &&
      status !== "Tidak_Aktif" &&
      status !== ""
    ) {
      throw new APIError("Status instansi tidak valid");
    }

    return c.json(
      await DaftarKPService.editDataInstansi(
        id,
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
      )
    );
  }

  public static async getDataDetailInstansi(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      throw new Error("ID instansi kosong");
    }

    return c.json(await DaftarKPService.getDataDetailInstansi(id));
  }

  public static async getAllDataInstansi(c: Context) {
    return c.json(await DaftarKPService.getAllDataInstansi());
  }

  public static async getKPTerbaruMahasiswa(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    if (!email) {
      throw new APIError("Email tidak ditemukan");
    }

    return c.json(await DaftarKPService.getKPTerbaruMahasiswa(email));
  }

  public static async createPermohonanPendaftaranKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const {
      tanggalMulai,
      tujuanSuratInstansi,
      idInstansi,
      judul_kp,
      kelas_kp,
    } = await c.req.json();

    try {
      if (!email) {
        throw new APIError("Email tidak ditemukan");
      } else if (
        !tanggalMulai ||
        !Date.parse(tanggalMulai) ||
        !tujuanSuratInstansi ||
        !idInstansi
      ) {
        throw new APIError("Data yang anda masukkan kurang lengkap!");
      }
    } catch (e) {
      throw new APIError("Terdapat sebuah kesalahan pada input");
    }

    return c.json(
      await DaftarKPService.createPermohonanPendaftaranKP({
        email,
        tanggalMulai,
        tujuanSuratInstansi,
        idInstansi,
        judul_kp,
        kelas_kp,
      })
    );
  }

  public static async getDataInstansi(c: Context) {
    return c.json(await DaftarKPService.getDataInstansi());
  }

  public static async createPermohonanPendaftaranInstansi(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const {
      namaInstansi,
      alamatInstansi,
      namaPenanggungJawabInstansi,
      telpPenanggungJawabInstansi,
      jenisInstansi,
      longitude,
      latitude,
      radius,
      profilSingkat,
    } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    } else if (
      !namaInstansi ||
      !alamatInstansi ||
      !namaPenanggungJawabInstansi ||
      !telpPenanggungJawabInstansi ||
      !jenisInstansi ||
      !longitude ||
      !latitude
    ) {
      throw new APIError("Data yang anda masukkan tidak lengkap", 405);
    }

    return c.json(
      await DaftarKPService.createPermohonanPendaftaranInstansi({
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
      })
    );
  }

  public static async postSuratPengantarKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const { linkSuratPengantarKP } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    } else if (!linkSuratPengantarKP) {
      throw new APIError("Link surat tidak diisi", 404);
    }
    return c.json(
      await DaftarKPService.postSuratPengantarKP(email, linkSuratPengantarKP)
    );
  }

  public static async postSuratPenolakanInstansi(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const { link_surat_penolakan_instansi } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    } else if (!link_surat_penolakan_instansi) {
      throw new APIError("Link tidak dimasukkan", 404);
    }

    return c.json(
      await DaftarKPService.postSuratPenolakanInstansi(
        email,
        link_surat_penolakan_instansi
      )
    );
  }

  public static async postSuratBalasanKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const { linkSuratBalasanKP } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    }

    return c.json(
      await DaftarKPService.postSuratBalasanKP(email, linkSuratBalasanKP)
    );
  }

  public static async postIdPengajuanDosenPembimbingKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const { IdPengajuanDosenPembimbingKP } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    }

    return c.json(
      await DaftarKPService.postIdPengajuanDosenPembimbingKP(
        email,
        IdPengajuanDosenPembimbingKP
      )
    );
  }

  public static async postSuratPenunjukkanDosenPembimbingKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const { linkSuratPenunjukkanDosenPembimbingKP } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    }

    return c.json(
      await DaftarKPService.postSuratPenunjukkanDosenPembimbingKP(
        email,
        linkSuratPenunjukkanDosenPembimbingKP
      )
    );
  }

  public static async postSuratPerpanjanganKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    const { linkSuratPerpanjanganKP, alasan_lanjut_kp } = await c.req.json();

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    }

    return c.json(
      await DaftarKPService.postSuratPerpanjanganKP(
        email,
        linkSuratPerpanjanganKP,
        alasan_lanjut_kp
      )
    );
  }

  public static async getBerkasMahasiswa(c: Context) {
    return c.json(await DaftarKPService.getBerkasMahasiswa());
  }

  public static async putBerkasMahasiswa(c: Context) {
    const {
      id,
      status,
      kelas_kp,
      tujuan_surat_instansi,
      link_surat_penolakan_instansi,
      link_surat_pengantar,
      link_surat_balasan,
      link_surat_penunjukan_dospem,
      link_surat_perpanjangan_kp,
      id_surat_pengajuan_dospem,
      status_link_surat_penolakan_instansi,
      status_link_surat_pengantar,
      status_link_surat_balasan,
      status_link_surat_penunjukan_dospem,
      status_link_surat_perpanjangan_kp,
      status_id_surat_pengajuan_dospem,
      catatan_link_surat_penolakan_instansi,
      catatan_link_surat_pengantar,
      catatan_link_surat_balasan,
      catatan_link_surat_penunjukan_dospem,
      catatan_link_surat_perpanjangan_kp,
      catatan_id_surat_pengajuan_dospem,
      catatan_penolakan,
      level_akses,
      judul_kp,
      alasan_lanjut_kp,
      id_instansi,
    } = (await c.req.json()) as any;

    if (!id) {
      throw new APIError("ID pendaftaran KP tidak ditemukan");
    }

    if (
      (status_link_surat_penolakan_instansi !== null &&
        status_link_surat_penolakan_instansi !== undefined &&
        status_link_surat_penolakan_instansi !== "Divalidasi" &&
        status_link_surat_penolakan_instansi !== "Terkirim" &&
        status_link_surat_penolakan_instansi !== "Ditolak") ||
      (status_link_surat_pengantar !== null &&
        status_link_surat_penolakan_instansi !== undefined &&
        status_link_surat_pengantar !== "Divalidasi" &&
        status_link_surat_pengantar !== "Terkirim" &&
        status_link_surat_pengantar !== "Ditolak") ||
      (status_link_surat_balasan !== null &&
        status_link_surat_penolakan_instansi !== undefined &&
        status_link_surat_balasan !== "Divalidasi" &&
        status_link_surat_balasan !== "Terkirim" &&
        status_link_surat_balasan !== "Ditolak") ||
      (status_id_surat_pengajuan_dospem !== null &&
        status_link_surat_penolakan_instansi !== undefined &&
        status_id_surat_pengajuan_dospem !== "Divalidasi" &&
        status_id_surat_pengajuan_dospem !== "Terkirim" &&
        status_id_surat_pengajuan_dospem !== "Ditolak") ||
      (status_link_surat_penunjukan_dospem !== null &&
        status_link_surat_penolakan_instansi !== undefined &&
        status_link_surat_penunjukan_dospem !== "Divalidasi" &&
        status_link_surat_penunjukan_dospem !== "Terkirim" &&
        status_link_surat_penunjukan_dospem !== "Ditolak") ||
      (status_link_surat_perpanjangan_kp !== null &&
        status_link_surat_penolakan_instansi !== undefined &&
        status_link_surat_perpanjangan_kp !== "Divalidasi" &&
        status_link_surat_perpanjangan_kp !== "Terkirim" &&
        status_link_surat_perpanjangan_kp !== "Ditolak")
    ) {
      throw new APIError(
        "Status validasi link berkas mahasiswa tidak sesuai dengan format"
      );
    }
    return c.json(
      await DaftarKPService.putBerkasMahasiswa({
        id,
        status,
        kelas_kp,
        tujuan_surat_instansi,
        link_surat_penolakan_instansi,
        link_surat_pengantar,
        link_surat_balasan,
        link_surat_penunjukan_dospem,
        link_surat_perpanjangan_kp,
        id_surat_pengajuan_dospem,
        status_link_surat_penolakan_instansi,
        status_link_surat_pengantar,
        status_link_surat_balasan,
        status_link_surat_penunjukan_dospem,
        status_link_surat_perpanjangan_kp,
        status_id_surat_pengajuan_dospem,
        catatan_link_surat_penolakan_instansi,
        catatan_link_surat_pengantar,
        catatan_link_surat_balasan,
        catatan_link_surat_penunjukan_dospem,
        catatan_link_surat_perpanjangan_kp,
        catatan_id_surat_pengajuan_dospem,
        catatan_penolakan,
        level_akses,
        judul_kp,
        alasan_lanjut_kp,
        id_instansi,
      })
    );
  }

  public static async getRiwayatPendaftaranKP(c: Context) {
    const { email } = c.get("user");
    // const email = "a@gmail.com";

    if (!email) {
      throw new APIError("Data email tidak ditemukan", 404);
    }

    return c.json(await DaftarKPService.getRiwayatPendaftaranKP(email));
  }
}
