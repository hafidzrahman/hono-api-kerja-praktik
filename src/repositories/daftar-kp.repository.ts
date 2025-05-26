import prisma from "../infrastructures/db.infrastructure";
import {
  RepositoryPendaftaranInstansiInterface,
  RepositoryPendaftaranKPMahasiswaInterface,
  RepositoryPendaftaranKPInterface,
  RepositoryRiwayatPendaftaranKPInterface,
  RepositoryDetailPendaftaranKPMahasiswa,
  GetAllDataInstansiRepository,
} from "../types/daftar-kp/repository.type";
import MahasiswaHelper from "../helpers/mahasiswa.helper";
import { APIError } from "../utils/api-error.util";
import {
  instansi,
  LOG,
  option,
  pendaftaran_kp,
  status_instansi,
} from "../generated/prisma";
import {
  IsPendaftaranKPClosed,
  IsPendaftaranKPLanjutClosed,
} from "../validators/batas-waktu-pendaftaran..validator";

export default class DaftarKPRepository {
  public static async postTanggalDaftarKP(
    tanggalMulaiDaftarKP: string,
    tanggalTerakhirDaftarKP: string
  ) {
    const tanggalKP = await prisma.option.findUnique({
      where: {
        id: 999,
      },
    });

    if (!tanggalKP) {
      await prisma.option.create({
        data: {
          id: 999,
          tanggal_mulai_pendaftaran_kp: tanggalMulaiDaftarKP,
          tanggal_akhir_pendaftaran_kp: tanggalTerakhirDaftarKP,
        },
      });
    }

    await prisma.option.update({
      where: {
        id: 999,
      },
      data: {
        tanggal_mulai_pendaftaran_kp: tanggalMulaiDaftarKP,
        tanggal_akhir_pendaftaran_kp: tanggalTerakhirDaftarKP,
      },
    });

    let time =
      new Date(tanggalTerakhirDaftarKP).getTime() - new Date().getTime();

    if (time <= 0) {
      time = 0;
    }

    const pointer = setTimeout(async function () {
      const manyDataKP = await prisma.pendaftaran_kp.updateManyAndReturn({
        where: {
          status: "Baru",
          level_akses: {
            gte: 1,
            lt: 9,
          },
        },
        data: {
          status: "Gagal",
        },
      });

      for await (const dataKP of manyDataKP) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataKP.id,
          "Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
          new Date(),
          2
        );
      }

      clearTimeout(pointer);
    }, time);
  }

  public static async postTanggalDaftarKPLanjut(
    tanggalMulaiDaftarKP: string,
    tanggalTerakhirDaftarKP: string
  ) {
    const tanggalKP = await prisma.option.findUnique({
      where: {
        id: 999,
      },
    });

    if (!tanggalKP) {
      await prisma.option.create({
        data: {
          id: 999,
          tanggal_mulai_pendaftaran_kp_lanjut: tanggalMulaiDaftarKP,
          tanggal_akhir_pendaftaran_kp_lanjut: tanggalTerakhirDaftarKP,
        },
      });
    }

    await prisma.option.update({
      where: {
        id: 999,
      },
      data: {
        tanggal_mulai_pendaftaran_kp_lanjut: tanggalMulaiDaftarKP,
        tanggal_akhir_pendaftaran_kp_lanjut: tanggalTerakhirDaftarKP,
      },
    });

    let time =
      new Date(tanggalTerakhirDaftarKP).getTime() - new Date().getTime();

    if (time < 0) {
      time = 0;
    }

    const pointer = setTimeout(async function () {
      const manyDataKP = await prisma.pendaftaran_kp.updateManyAndReturn({
        where: {
          status: "Baru",
          level_akses: {
            equals: 9,
          },
        },
        data: {
          status: "Gagal",
        },
      });

      for await (const dataKP of manyDataKP) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataKP.id,
          "Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
          new Date(),
          2
        );
      }

      clearTimeout(pointer);
    }, time);
  }

  public static async getTanggalDaftarKP(): Promise<option | null> {
    return await prisma.option.findUnique({
      where: {
        id: 999,
      },
    });
  }

  public static async getDataDetailInstansi(
    idInstansi: string
  ): Promise<instansi | null> {
    return await prisma.instansi.findUnique({
      where: {
        id: idInstansi,
      },
    });
  }

  public static async getDataKPDetailMahasiswa(
    idKP: string
  ): Promise<RepositoryDetailPendaftaranKPMahasiswa | null> {
    return await prisma.pendaftaran_kp.findUnique({
      where: {
        id: idKP,
      },
      include: {
        mahasiswa: true,
        dosen_pembimbing: true,
        instansi: {
          include: {
            pembimbing_instansi: true,
          },
        },
      },
    });
  }

  public static async getDataKPMahasiswa(): Promise<
    RepositoryPendaftaranKPMahasiswaInterface[]
  > {
    return await prisma.pendaftaran_kp.findMany({
      select: {
        id: true,
        tanggal_mulai: true,
        status: true,
        id_tahun_ajaran: true,
        mahasiswa: {
          select: {
            nama: true,
            nim: true,
          },
        },
      },
    });
  }

  public static async getLOGByIdPendaftaranKP(idKP: string): Promise<LOG[]> {
    return await prisma.lOG.findMany({
      where: {
        pendaftaran_kp_id: idKP,
      },
    });
  }

  public static async createLOGPendaftaranKPById(
    idKP: string,
    message: string,
    tanggal: Date,
    status: number
  ) {
    return await prisma.lOG.create({
      data: {
        pendaftaran_kp_id: idKP,
        message,
        tanggal,
        status,
      },
    });
  }

  public static async postTolakBerkasMahasiswa(
    id: string,
    levelAkses: number,
    message: string
  ): Promise<void> {
    if (levelAkses > 0 && levelAkses < 10) {
      const isClosed = await IsPendaftaranKPClosed();
      if (isClosed) {
        await prisma.pendaftaran_kp.update({
          where: {
            id,
          },
          data: {
            status: "Gagal",
            // bagaimana kalau status kp tetap "baru", di front end kita cuma melihat catatan_penolakan saja, setelah diperbarui oleh mahasiswa, catatan_penolakan dikosongkan lagi
            level_akses: {
              decrement: 1,
            },
            catatan_penolakan: message,
          },
        });
      } else {
        await prisma.pendaftaran_kp.update({
          where: {
            id,
          },
          data: {
            // bagaimana kalau status kp tetap "baru", di front end kita cuma melihat catatan_penolakan saja, setelah diperbarui oleh mahasiswa, catatan_penolakan dikosongkan lagi
            level_akses: {
              decrement: 1,
            },
            catatan_penolakan: message,
          },
        });
      }

      if (levelAkses === 2) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          `[BERKAS DITOLAK] ${message}`,
          new Date(),
          2
        );
      } else if (levelAkses === 4) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          `[BERKAS DITOLAK] ${message}`,
          new Date(),
          2
        );
      } else if (levelAkses === 6) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          `[BERKAS DITOLAK] ${message}`,
          new Date(),
          2
        );
      } else if (levelAkses === 8) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          `[BERKAS DITOLAK] ${message}`,
          new Date(),
          2
        );
      }

      if (isClosed) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          "Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
          new Date(),
          2
        );
      }
    } else if (levelAkses === 10) {
      const isClosed = await IsPendaftaranKPLanjutClosed();
      if (isClosed) {
        await prisma.pendaftaran_kp.update({
          where: {
            id,
          },
          data: {
            status: "Gagal",
            // bagaimana kalau status kp tetap "baru", di front end kita cuma melihat catatan_penolakan saja, setelah diperbarui oleh mahasiswa, catatan_penolakan dikosongkan lagi
            level_akses: {
              decrement: 1,
            },
            catatan_penolakan: message,
          },
        });
      } else {
        await prisma.pendaftaran_kp.update({
          where: {
            id,
          },
          data: {
            // bagaimana kalau status kp tetap "baru", di front end kita cuma melihat catatan_penolakan saja, setelah diperbarui oleh mahasiswa, catatan_penolakan dikosongkan lagi
            level_akses: {
              decrement: 1,
            },
            catatan_penolakan: message,
          },
        });
      }

      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITOLAK] ${message}`,
        new Date(),
        2
      );

      if (isClosed) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          "Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
          new Date(),
          2
        );
      }
    }
  }

  public static async deleteDataInstansi(id: string): Promise<void> {
    // [Note] delete instansi akan menghapus semua row pendaftaran kp yang terkait dengan idnya

    await prisma.instansi.delete({
      where: {
        id,
      },
    });
  }
  //   id                  String                @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  //   nama                String                @db.VarChar(255)
  //   alamat              String                @db.VarChar(255)
  //   longitude           Float?
  //   latitude            Float?
  //   jenis               jenis_instansi
  //   profil_singkat      String?               @db.VarChar(255)
  //   status              status_instansi?      @default(Pending)
  //   nama_pj             String                @db.VarChar(255)
  //   no_hp_pj            String                @db.VarChar(14)

  public static async postEditDataInstansi(
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
  ): Promise<instansi> {
    const data = await prisma.instansi.findUnique({
      where: {
        id,
      },
    });

    if (!data) {
      throw new APIError("Data instansi tidak ditemukan", 404);
    }

    if (
      status &&
      status !== "Aktif" &&
      status !== "Pending" &&
      status !== "Tidak_Aktif"
    ) {
      throw new APIError("Harus memasukkan status yang valid");
    } else if (
      jenis &&
      jenis !== "Pendidikan" &&
      jenis !== "UMKM" &&
      jenis !== "Swasta" &&
      jenis !== "Pemerintahan"
    ) {
      throw new APIError("Harus memasukkan jenis instansi yang valid");
    }

    const result = await prisma.instansi.update({
      where: {
        id,
      },
      data: {
        status: (status === "" || status === undefined || status === null
          ? data.status
          : status) as "Aktif" | "Pending" | "Tidak_Aktif",
        profil_singkat:
          profil_singkat === "" ||
          profil_singkat === undefined ||
          profil_singkat === null
            ? data.profil_singkat
            : profil_singkat,
        longitude:
          longitude === undefined || longitude === null
            ? data.longitude
            : longitude,
        latitude:
          latitude === undefined || latitude === null
            ? data.latitude
            : latitude,
        radius: radius === undefined || radius === null ? data.radius : radius,
        nama:
          nama === "" || nama === undefined || nama === null ? data.nama : nama,
        alamat:
          alamat === "" || alamat === undefined || alamat === null
            ? data.alamat
            : alamat,
        jenis:
          jenis === "" || jenis === undefined || jenis === null
            ? data.jenis
            : (jenis as "UMKM" | "Pemerintahan" | "Pendidikan" | "Swasta"),
        nama_pj:
          nama_pj === "" || nama_pj === undefined || nama_pj === null
            ? data.nama_pj
            : nama_pj,
        no_hp_pj:
          no_hp_pj === "" || no_hp_pj === undefined || no_hp_pj === null
            ? data.no_hp_pj
            : no_hp_pj,
      },
    });

    return result;
  }

  public static async findInstansiById(id: string): Promise<instansi | null> {
    return await prisma.instansi.findUnique({
      where: {
        id,
      },
    });
  }

  public static async getAllDataInstansi(): Promise<
    GetAllDataInstansiRepository[]
  > {
    const data = await prisma.instansi.findMany({
      select: {
        id: true,
        nama: true,
        jenis: true,
        status: true,
      },
    });

    return data;
  }

  public static async getKPTerbaruMahasiswa(
    nim: string
  ): Promise<pendaftaran_kp | null> {
    const data = await prisma.pendaftaran_kp.findFirst({
      where: {
        nim,
        status: "Baru",
      },
    });

    return data;
  }

  public static async createPermomohonanKP({
    nim,
    idInstansi,
    tujuanSuratInstansi,
    tanggalMulai,
    judul_kp,
  }: RepositoryPendaftaranKPInterface): Promise<void> {
    const data = await prisma.pendaftaran_kp.create({
      data: {
        nim,
        tanggal_pengajuan: new Date(),
        tanggal_mulai: tanggalMulai,
        id_instansi: idInstansi,
        tujuan_surat_instansi: tujuanSuratInstansi,
        id_tahun_ajaran: MahasiswaHelper.getTahunAjaran(),
        judul_kp,
        level_akses: 1,
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      data.id,
      "[SUKSES] Berhasil melakukan Pendaftaran Kerja Praktek",
      new Date(),
      1
    );

    // const pointer = setTimeout(async function () {
    //   await prisma.pendaftaran_kp.update({
    //     where: {
    //       id: data.id,
    //       status: "Baru",
    //     },
    //     data: {
    //       status: "Gagal",
    //     },
    //   });
    //   clearTimeout(pointer);
    // }, 15778800000);
  }

  public static async createPermomohonanInstansi({
    nim,
    namaInstansi,
    alamatInstansi,
    namaPenanggungJawabInstansi,
    telpPenanggungJawabInstansi,
    jenisInstansi,
    longitude,
    latitude,
    radius,
    profilSingkat,
  }: RepositoryPendaftaranInstansiInterface): Promise<void> {
    await prisma.instansi.create({
      data: {
        nama: namaInstansi,
        alamat: alamatInstansi,
        longitude,
        latitude,
        radius,
        jenis: jenisInstansi,
        profil_singkat: profilSingkat,
        nama_pj: namaPenanggungJawabInstansi,
        no_hp_pj: telpPenanggungJawabInstansi,
      },
    });
  }

  public static async getRiwayatPendaftaranKP(
    nim: string
  ): Promise<RepositoryRiwayatPendaftaranKPInterface[] | null> {
    const data = await prisma.pendaftaran_kp.findMany({
      where: {
        nim,
      },
      select: {
        id: true,
        status: true,
        tanggal_mulai: true,
        level_akses: true,
        instansi: {
          select: {
            nama: true,
          },
        },
      },
    });

    return data;
  }

  public static async postSuratPengantarKP(
    nim: string,
    linkSuratPengantarKP: string
  ): Promise<void> {
    const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim);

    // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

    if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 1)) {
      throw new APIError(
        "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
      );
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id: dataKPTerbaru.id,
      },
      data: {
        catatan_penolakan: null,
        link_surat_pengantar: linkSuratPengantarKP,
        level_akses: dataKPTerbaru.level_akses + 1,
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      dataKPTerbaru.id,
      "[SUKSES] Berhasil mengajukan link surat pengantar kerja praktek",
      new Date(),
      1
    );
  }

  public static async postSuratBalasanKP(
    nim: string,
    linkSuratBalasanKP: string
  ): Promise<void> {
    const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim);

    // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

    if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 3)) {
      throw new APIError(
        "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
      );
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id: dataKPTerbaru.id,
      },
      data: {
        catatan_penolakan: null,
        link_surat_balasan: linkSuratBalasanKP,
        level_akses: dataKPTerbaru.level_akses + 1,
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      dataKPTerbaru.id,
      "[SUKSES] Berhasil mengajukan link surat balasan instansi",
      new Date(),
      1
    );
  }

  public static async postIdPengajuanDosenPembimbingKP(
    nim: string,
    idPengajuanDosenPembimbingKP: string
  ): Promise<void> {
    const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim);

    // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

    if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 5)) {
      throw new APIError(
        "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
      );
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id: dataKPTerbaru.id,
      },
      data: {
        catatan_penolakan: null,
        id_surat_pengajuan_dospem: idPengajuanDosenPembimbingKP,
        level_akses: dataKPTerbaru.level_akses + 1,
      },
    });
    await DaftarKPRepository.createLOGPendaftaranKPById(
      dataKPTerbaru.id,
      "[SUKSES] Berhasil mengajukan ID dosen pembimbing",
      new Date(),
      1
    );
  }

  public static async postSuratPenunjukkanDosenPembimbing(
    nim: string,
    linkSuratPenunjukkanDosenPembimbingKP: string
  ): Promise<void> {
    const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim);

    // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

    if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 7)) {
      throw new APIError(
        "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
      );
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id: dataKPTerbaru.id,
      },
      data: {
        catatan_penolakan: null,
        link_surat_penunjukan_dospem: linkSuratPenunjukkanDosenPembimbingKP,
        level_akses: dataKPTerbaru.level_akses + 1,
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      dataKPTerbaru.id,
      "[SUKSES] Berhasil mengajukan link surat penunjukkan dosen pembimbing",
      new Date(),
      1
    );
  }

  public static async getDataInstansi() {
    const data = await prisma.instansi.findMany({
      where: {
        status: "Aktif",
      },
    });

    return data;
  }

  // sementara pake surat + link dulu
  public static async postSuratPerpanjanganKP(
    nim: string,
    linkSuratPerpanjanganKP: string,
    alasan_lanjut_kp?: string
  ): Promise<void> {
    const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim);

    // jika 0 berarti gagal, 11 berarti sudah melakukan perpanjangan KP

    if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 9)) {
      throw new APIError(
        "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
      );
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id: dataKPTerbaru.id,
      },
      data: {
        catatan_penolakan: null,
        link_surat_perpanjangan_kp: linkSuratPerpanjanganKP,
        level_akses: dataKPTerbaru.level_akses + 1,
        alasan_lanjut_kp,
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      dataKPTerbaru.id,
      "[SUKSES] mengajukan link surat perpanjangan kerja praktek",
      new Date(),
      1
    );
  }

  public static async getPendaftaranKPById(
    id: string
  ): Promise<pendaftaran_kp | null> {
    const dataKP = await prisma.pendaftaran_kp.findUnique({
      where: {
        id,
      },
    });

    return dataKP;
  }

  public static async postBerkasMahasiswa(id: string, levelAkses: number) {
    if (levelAkses === 10) {
      await prisma.pendaftaran_kp.update({
        where: {
          id,
        },
        data: {
          status: "Lanjut",
          level_akses: levelAkses + 1,
        },
      });

      // const pointer = setTimeout(async function () {
      //   await prisma.pendaftaran_kp.update({
      //     where: {
      //       id,
      //     },
      //     data: {
      //       status: "Gagal",
      //     },
      //   });
      //   clearTimeout(pointer);
      // }, 15778800000);

      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITERIMA] Pengajuan link surat perpanjangan kerja praktek diterima`,
        new Date(),
        1
      );
      return;
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id,
      },
      data: {
        level_akses: levelAkses + 1,
      },
    });

    if (levelAkses === 2) {
      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITERIMA] Pengajuan link surat pengantar kerja praktek diterima`,
        new Date(),
        1
      );
    } else if (levelAkses === 4) {
      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITERIMA] Pengajuan link surat balasan instansi diterima`,
        new Date(),
        1
      );
    } else if (levelAkses === 6) {
      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITERIMA] Pengajuan ID penunjukkan dosen pembimbing diterima`,
        new Date(),
        1
      );
    } else if (levelAkses === 8) {
      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITERIMA] Pengajuan link surat penunjukkan dosem pembimbing diterima`,
        new Date(),
        1
      );
    }
  }

  // berkas KP harusnya
  public static async getBerkasSuratPengantarMahasiswa(): Promise<
    pendaftaran_kp[]
  > {
    const data = await prisma.pendaftaran_kp.findMany({
      where: {
        level_akses: 2,
      },
      include: {
        mahasiswa: true,
      },
    });

    return data;
  }

  public static async getBerkasSuratBalasanMahasiswa(): Promise<
    pendaftaran_kp[]
  > {
    const data = await prisma.pendaftaran_kp.findMany({
      where: {
        level_akses: 4,
      },
      include: {
        mahasiswa: true,
      },
    });

    return data;
  }

  public static async getBerkasIdPengajuanDosenPembimbingMahasiswa(): Promise<
    pendaftaran_kp[]
  > {
    const data = await prisma.pendaftaran_kp.findMany({
      where: {
        level_akses: 6,
      },
      include: {
        mahasiswa: true,
      },
    });

    return data;
  }

  public static async getBerkasPenunjukkanDosenPembimbingMahasiswa(): Promise<
    pendaftaran_kp[]
  > {
    const data = await prisma.pendaftaran_kp.findMany({
      where: {
        level_akses: 8,
      },
      include: {
        mahasiswa: true,
      },
    });

    return data;
  }

  public static async getBerkasSuratPerpanjanganKPMahasiswa(): Promise<
    pendaftaran_kp[]
  > {
    const data = await prisma.pendaftaran_kp.findMany({
      where: {
        level_akses: 10,
      },
      include: {
        mahasiswa: true,
      },
    });

    return data;
  }

  // public static async getPendaftaranKPTerbaru(nim : string) {
  //     const data = await prisma.pendaftaran_kp.findFirst({
  //         where : {
  //             nim,
  //             level_akses : {
  //                 not : 0
  //             }
  //         },
  //         take : 1
  //     })

  //     if (!data) {
  //         throw new APIError("Data pendaftaran KP tidak ditemukan", 404)
  //     }

  //     return data
  // }
}
