import prisma from "../infrastructures/db.infrastructure";
import {
  RepositoryPendaftaranInstansiInterface,
  RepositoryPendaftaranKPMahasiswaInterface,
  RepositoryPendaftaranKPInterface,
  RepositoryRiwayatPendaftaranKPInterface,
  RepositoryDetailPendaftaranKPMahasiswa,
  GetAllDataInstansiRepository,
  PutMahasiswaParamsInterface,
  dataLamaPutBerkasMahasiswa,
  getTahunAjaran,
} from "../types/daftar-kp/repository.type";
import MahasiswaHelper from "../helpers/mahasiswa.helper";
import { APIError } from "../utils/api-error.util";
import {
  Document,
  instansi,
  LOG,
  option,
  pendaftaran_kp,
  status_dokumen,
  status_instansi,
} from "../generated/prisma";
import {
  IsPendaftaranKPClosed,
  IsPendaftaranKPLanjutClosed,
} from "../validators/batas-waktu-pendaftaran..validator";

export default class DaftarKPRepository {
  public static async updatePermohonanPendaftaranKP(
    id: string,
    judul_kp?: string,
    kelas_kp?: string
  ) {
    await prisma.pendaftaran_kp.update({
      where: {
        id,
      },
      data: {
        judul_kp,
        kelas_kp,
      },
    });
  }

  public static async accBerkasMahasiswa(
    id: string,
    levelAkses: number,
    documents: Document[],
    catatan?: string | null
  ) {
    // Penyesuaian level akses mahasiswa terhadap dokumen yang telah mereka upload dan divalidasi oleh koordinator kp

    if (documents[0].status === "Terkirim") {
      await prisma.pendaftaran_kp.update({
        where: {
          id,
        },
        data: {
          level_akses: 0,
          document: {
            update: [
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 0,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  status: "Divalidasi",
                  catatan,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 1,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 2,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 3,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 4,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 5,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
            ],
          },
        },
      });
      return;
    }

    function fitLevelAkses(): number {
      let levelAkses = 0;
      if (documents[2].status === "Ditolak" || documents[2].status === null) {
        levelAkses = 2;
      } else if (
        documents[3].status === "Ditolak" ||
        documents[3].status === null
      ) {
        levelAkses = 4;
      } else if (
        documents[4].status === "Ditolak" ||
        documents[4].status === null
      ) {
        levelAkses = 6;
      } else if (
        documents[5].status === "Ditolak" ||
        documents[5].status === null
      ) {
        levelAkses = 8;
      } else {
        if (documents[1].status === "Divalidasi") {
          levelAkses = 2;
        }
        if (documents[2].status === "Divalidasi") {
          levelAkses = 4;
        }
        if (documents[3].status === "Divalidasi") {
          levelAkses = 6;
        }
        if (documents[4].status === "Divalidasi") {
          levelAkses = 8;
        }
        if (documents[5].status === "Divalidasi") {
          levelAkses = 10;
        }
      }
      return levelAkses;
    }

    await prisma.pendaftaran_kp.update({
      where: {
        id,
      },
      data: {
        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: levelAkses / 2,
                idPendaftaranKP: id,
              },
            },
            data: {
              status: "Divalidasi",
              catatan,
            },
          },
        },
        level_akses: levelAkses % 2 === 0 ? fitLevelAkses() + 1 : levelAkses,
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      id,
      `[SUKSES] Berkas ${
        documents[levelAkses / 2].data
      } mahasiswa telah divalidasi oleh Koordinator Kerja Praktek`,
      new Date(),
      1
    );
  }

  public static async getDocumentsKPById(id: string) {
    return await prisma.document.findMany({
      where: {
        idPendaftaranKP: id,
      },
      orderBy: {
        idKriteria: "asc",
      },
    });
  }

  public static async postSuratPenolakanInstansi(
    id: string,
    link_surat_penolakan_instansi: string
  ) {
    // const documentSuratPenolakanInstansi = await prisma.document.findUnique({
    //   where: {
    //     idKriteria_idPendaftaranKP: {
    //       idKriteria: 0,
    //       idPendaftaranKP: id,
    //     },
    //     status: {
    //       not: "Terkirim",
    //     },
    //   },
    // });

    // if (documentSuratPenolakanInstansi) {
    //   throw new APIError(
    //     "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
    //   );
    // }

    // bisa masalah gk karena log dulu baru update?

    await DaftarKPRepository.createLOGPendaftaranKPById(
      id,
      "[SUKSES] Berhasil mengunggah surat penolakan instansi",
      new Date(),
      1
    );

    return await prisma.pendaftaran_kp.update({
      where: {
        id,
      },
      data: {
        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: 0,
                idPendaftaranKP: id,
              },
            },
            data: {
              data: link_surat_penolakan_instansi,
              status: "Terkirim",
            },
          },
        },
      },
    });
  }

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

    // TIMEOUT UNTUK 6 BULAN
    // step 1-8 tidak langsung gagal
    // ASUMSI TANGGAL PENDAFTARAN 5 BULAN

    const recurse = (time: number) => {
      if (time > 2147483640) {
        setTimeout(function () {
          recurse(time - 2147483640);
        }, 2147483640);
      } else {
        const pointer = setTimeout(async function () {
          // kalau tanggal pendaftaran diubah 10 kali, berarti ada 10 fungsi yang berjalan [1]
          const tanggalDaftarKP = await DaftarKPRepository.getTanggalDaftarKP();
          if (tanggalDaftarKP && tanggalDaftarKP.tanggal_akhir_pendaftaran_kp) {
            const checkTime =
              tanggalDaftarKP.tanggal_akhir_pendaftaran_kp.getTime() -
              new Date().getTime();
            if (checkTime >= 0) {
              clearTimeout(pointer); // solusi masalah [1] ?
              // recurse(checkTime);
            } else {
              const manyDataKP =
                await prisma.pendaftaran_kp.updateManyAndReturn({
                  where: {
                    status: "Baru",
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
            }
          }
        }, time);
      }
    };

    const recurseByDay = (time: number) => {
      if (time > 86400000) {
        setTimeout(function () {
          recurse(time - 86400000);
        }, 86400000);
      } else {
        const pointer = setTimeout(async function () {
          // kalau tanggal pendaftaran diubah 10 kali, berarti ada 10 fungsi yang berjalan [1]
          const tanggalDaftarKP = await DaftarKPRepository.getTanggalDaftarKP();
          if (tanggalDaftarKP && tanggalDaftarKP.tanggal_mulai_pendaftaran_kp) {
            const checkTime =
              tanggalDaftarKP.tanggal_mulai_pendaftaran_kp.getTime() -
              new Date().getTime();
            if (checkTime > 0) {
              clearTimeout(pointer); // solusi masalah [1] ?
              // recurse(checkTime);
            } else {
              const tenggatWaktu =
                new Date(tanggalTerakhirDaftarKP).getTime() + 15778800000;

              recurse(tenggatWaktu);
            }
          }
        }, time);
      }
    };

    const tanggalSaatIni = new Date().getTime();
    const tanggalMulai = new Date(tanggalMulaiDaftarKP).getTime();

    recurseByDay(tanggalMulai - tanggalSaatIni);

    // let time =
    //   new Date(tanggalTerakhirDaftarKP).getTime() - new Date().getTime();

    // if (time <= 0) {
    //   time = 0;
    // }

    // const pointer = setTimeout(async function () {
    //   const manyDataKP = await prisma.pendaftaran_kp.updateManyAndReturn({
    //     where: {
    //       status: "Baru",
    //       level_akses: {
    //         gte: 1,
    //         lt: 9,
    //       },
    //     },
    //     data: {
    //       status: "Gagal",
    //     },
    //   });

    //   for await (const dataKP of manyDataKP) {
    //     await DaftarKPRepository.createLOGPendaftaranKPById(
    //       dataKP.id,
    //       "Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
    //       new Date(),
    //       2
    //     );
    //   }

    //   clearTimeout(pointer);
    // }, time);
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

    // TIMEOUT UNTUK 6 BULAN

    // ASUMSI TANGGAL PENDAFTARAN 5 BULAN

    const recurse = (time: number) => {
      if (time > 2147483640) {
        setTimeout(function () {
          recurse(time - 2147483640);
        }, 2147483640);
      } else {
        setTimeout(async function () {
          const tanggalDaftarKP = await DaftarKPRepository.getTanggalDaftarKP();
          if (
            tanggalDaftarKP &&
            tanggalDaftarKP.tanggal_akhir_pendaftaran_kp_lanjut
          ) {
            const checkTime =
              tanggalDaftarKP.tanggal_akhir_pendaftaran_kp_lanjut.getTime() -
              new Date().getTime();
            if (checkTime >= 0) {
              recurse(checkTime);
            } else {
              const manyDataKP =
                await prisma.pendaftaran_kp.updateManyAndReturn({
                  where: {
                    status: "Lanjut",
                  },
                  data: {
                    status: "Gagal",
                  },
                });
              for await (const dataKP of manyDataKP) {
                await DaftarKPRepository.createLOGPendaftaranKPById(
                  dataKP.id,
                  "[Gagal] Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
                  new Date(),
                  2
                );
              }
            }
          }
        }, time);
      }
    };

    const recurseByDay = (time: number) => {
      if (time > 86400000) {
        setTimeout(function () {
          recurse(time - 86400000);
        }, 86400000);
      } else {
        const pointer = setTimeout(async function () {
          // kalau tanggal pendaftaran diubah 10 kali, berarti ada 10 fungsi yang berjalan [1]
          const tanggalDaftarKP = await DaftarKPRepository.getTanggalDaftarKP();
          if (
            tanggalDaftarKP &&
            tanggalDaftarKP.tanggal_mulai_pendaftaran_kp_lanjut
          ) {
            const checkTime =
              tanggalDaftarKP.tanggal_mulai_pendaftaran_kp_lanjut.getTime() -
              new Date().getTime();
            if (checkTime > 0) {
              clearTimeout(pointer); // solusi masalah [1] ?
              // recurse(checkTime);
            } else {
              const tenggatWaktu =
                new Date(tanggalTerakhirDaftarKP).getTime() + 15778800000;

              recurse(tenggatWaktu);
            }
          }
        }, time);
      }
    };

    const tanggalSaatIni = new Date().getTime();
    const tanggalMulai = new Date(tanggalMulaiDaftarKP).getTime();

    recurseByDay(tanggalMulai - tanggalSaatIni);

    // let time =
    //   new Date(tanggalTerakhirDaftarKP).getTime() - new Date().getTime();

    // if (time < 0) {
    //   time = 0;
    // }

    // const pointer = setTimeout(async function () {
    //   const manyDataKP = await prisma.pendaftaran_kp.updateManyAndReturn({
    //     where: {
    //       status: "Baru",
    //       level_akses: {
    //         equals: 9,
    //       },
    //     },
    //     data: {
    //       status: "Gagal",
    //     },
    //   });

    //   for await (const dataKP of manyDataKP) {
    //     await DaftarKPRepository.createLOGPendaftaranKPById(
    //       dataKP.id,
    //       "Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
    //       new Date(),
    //       2
    //     );
    //   }

    //   clearTimeout(pointer);
    // }, time);
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
        document: {
          orderBy: {
            idKriteria: "asc",
          },
        },
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
    const documents = await DaftarKPRepository.getDocumentsKPById(id);

    if (levelAkses > 0 && levelAkses < 10) {
      const isClosed = await IsPendaftaranKPClosed();
      if (isClosed) {
        await prisma.pendaftaran_kp.update({
          where: {
            id,
          },
          data: {
            document: {
              update: {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria:
                      documents[0].status === "Terkirim" ? 0 : levelAkses / 2,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  catatan: message,
                  status: "Ditolak",
                },
              },
            },
            status: "Gagal",
            level_akses: {
              decrement: documents[0].status === "Terkirim" ? 0 : 1,
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
            document: {
              update: {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria:
                      documents[0].status === "Terkirim" ? 0 : levelAkses / 2,
                    idPendaftaranKP: id,
                  },
                },
                data: {
                  catatan: message,
                  status: "Ditolak",
                },
              },
            },
            level_akses: {
              decrement: 1,
            },
            catatan_penolakan: message,
          },
        });
      }

      await DaftarKPRepository.createLOGPendaftaranKPById(
        id,
        `[BERKAS DITOLAK] Berkas ${
          documents[levelAkses / 2].data
        } mahasiswa ditolak. ${message}`,
        new Date(),
        2
      );

      if (isClosed) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          id,
          "[GAGAL] Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
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
          "[GAGAL] Pendaftaran kerja praktek gagal karena sudah melewati batas waktu",
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
        OR: [{ status: "Baru" }, { status: "Lanjut" }],
      },
      include: {
        document: {
          orderBy: {
            idKriteria: "asc",
          },
        },
        mahasiswa: true,
        dosen_pembimbing: true,
        instansi: {
          include: {
            pembimbing_instansi: true,
          },
        },
      },
    });

    return data;
  }

  public static async getTahunAjaran(): Promise<getTahunAjaran[]> {
    const dataTahunAjaran = await prisma.tahun_ajaran.findMany({});

    return dataTahunAjaran;
  }

  public static async createPermomohonanKP({
    dataKPMahasiswa,
    nim,
    idInstansi,
    tujuanSuratInstansi,
    tanggalMulai,
    judul_kp,
    kelas_kp,
  }: RepositoryPendaftaranKPInterface): Promise<void> {
    if (dataKPMahasiswa) {
      await prisma.pendaftaran_kp.update({
        where: {
          id: dataKPMahasiswa.id,
        },
        data: {
          nim,
          tanggal_pengajuan: new Date(),
          tanggal_mulai: tanggalMulai,
          id_instansi: idInstansi,
          tujuan_surat_instansi: tujuanSuratInstansi,
          id_tahun_ajaran: await MahasiswaHelper.getTahunAjaran(),
          judul_kp,
          level_akses: 1,
          kelas_kp,
        },
      });

      await DaftarKPRepository.createLOGPendaftaranKPById(
        dataKPMahasiswa.id,
        "[SUKSES] Berhasil mengubah instansi kerja praktek",
        new Date(),
        1
      );
      return;
    }

    const data = await prisma.pendaftaran_kp.create({
      data: {
        nim,
        tanggal_pengajuan: new Date(),
        tanggal_mulai: tanggalMulai,
        id_instansi: idInstansi,
        tujuan_surat_instansi: tujuanSuratInstansi,
        id_tahun_ajaran: await MahasiswaHelper.getTahunAjaran(),
        judul_kp,
        level_akses: 1,
        kelas_kp,
        document: {
          createMany: {
            data: [
              { idKriteria: 0 },
              { idKriteria: 1 },
              { idKriteria: 2 },
              { idKriteria: 3 },
              { idKriteria: 4 },
              { idKriteria: 5 },
            ],
          },
        },
      },
    });

    await DaftarKPRepository.createLOGPendaftaranKPById(
      data.id,
      "[SUKSES] Berhasil melakukan Pendaftaran Kerja Praktek",
      new Date(),
      1
    );
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

    // if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 1)) {
    //   throw new APIError(
    //     "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
    //   );
    // }

    if (!dataKPTerbaru) {
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
        level_akses:
          dataKPTerbaru.level_akses === 1
            ? dataKPTerbaru.level_akses + 1
            : dataKPTerbaru.level_akses,
        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: 1,
                idPendaftaranKP: dataKPTerbaru.id,
              },
            },
            data: {
              data: linkSuratPengantarKP,
              status: "Terkirim",
            },
          },
        },
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

    // if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 3)) {
    //   throw new APIError(
    //     "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
    //   );
    // }

    if (!dataKPTerbaru) {
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
        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: 2,
                idPendaftaranKP: dataKPTerbaru.id,
              },
            },
            data: {
              data: linkSuratBalasanKP,
              status: "Terkirim",
            },
          },
        },
        level_akses:
          dataKPTerbaru.level_akses === 3
            ? dataKPTerbaru.level_akses + 1
            : dataKPTerbaru.level_akses,
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

    // if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 5)) {
    //   throw new APIError(
    //     "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
    //   );
    // }

    if (!dataKPTerbaru) {
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

        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: 3,
                idPendaftaranKP: dataKPTerbaru.id,
              },
            },
            data: {
              data: idPengajuanDosenPembimbingKP,
              status: "Terkirim",
            },
          },
        },
        level_akses:
          dataKPTerbaru.level_akses === 5
            ? dataKPTerbaru.level_akses + 1
            : dataKPTerbaru.level_akses,
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

    // if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 7)) {
    //   throw new APIError(
    //     "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
    //   );
    // }

    if (!dataKPTerbaru) {
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
        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: 4,
                idPendaftaranKP: dataKPTerbaru.id,
              },
            },
            data: {
              data: linkSuratPenunjukkanDosenPembimbingKP,
              status: "Terkirim",
            },
          },
        },
        level_akses:
          dataKPTerbaru.level_akses === 7
            ? dataKPTerbaru.level_akses + 1
            : dataKPTerbaru.level_akses,
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

    // if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 9)) {
    //   throw new APIError(
    //     "Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait"
    //   );
    // }

    if (!dataKPTerbaru) {
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
        document: {
          update: {
            where: {
              idKriteria_idPendaftaranKP: {
                idKriteria: 5,
                idPendaftaranKP: dataKPTerbaru.id,
              },
            },
            data: {
              data: linkSuratPerpanjanganKP,
              status: "Terkirim",
            },
          },
        },
        level_akses:
          dataKPTerbaru.level_akses === 9
            ? dataKPTerbaru.level_akses + 1
            : dataKPTerbaru.level_akses,
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
  ): Promise<(pendaftaran_kp & { document: Document[] }) | null> {
    const dataKP = await prisma.pendaftaran_kp.findUnique({
      where: {
        id,
      },
      include: {
        document: {
          orderBy: {
            idKriteria: "asc",
          },
        },
      },
    });

    return dataKP;
  }

  public static async putBerkasMahasiswa(
    dataBaru: PutMahasiswaParamsInterface,
    dataLama: dataLamaPutBerkasMahasiswa
  ) {
    console.log(dataBaru);
    if (
      (dataLama.document[0].status !== "Divalidasi" &&
        dataBaru.status_link_surat_penolakan_instansi === "Divalidasi") ||
      (dataLama.level_akses !== 0 && dataBaru.level_akses === 0)
    ) {
      await prisma.pendaftaran_kp.update({
        where: {
          id: dataLama.id,
        },
        data: {
          status: dataBaru.status || dataLama.status,
          level_akses: 0,
          document: {
            update: [
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 0,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  status:
                    dataBaru.status_link_surat_penolakan_instansi ===
                    "Divalidasi"
                      ? "Divalidasi"
                      : null,
                  catatan: dataBaru.catatan_link_surat_penolakan_instansi,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 1,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 2,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 3,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 4,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 5,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data: undefined,
                  status: null,
                  catatan: null,
                },
              },
            ],
          },
        },
      });
      return;
    }
    if (dataLama.level_akses % 2 === 0) {
      let final_level_akses = dataLama.level_akses;
      if (dataLama.level_akses === 0) final_level_akses = dataBaru.level_akses;
      if (dataLama.level_akses / 2 === 1) {
        if (dataBaru.status_link_surat_pengantar === "Ditolak") {
          final_level_akses = final_level_akses - 1;
        } else if (dataBaru.status_link_surat_pengantar === "Divalidasi") {
          final_level_akses = final_level_akses + 1;
        }
      } else if (dataLama.level_akses / 2 === 2) {
        if (dataBaru.status_link_surat_balasan === "Ditolak") {
          final_level_akses = final_level_akses - 1;
        } else if (dataBaru.status_link_surat_balasan === "Divalidasi") {
          final_level_akses = final_level_akses + 1;
        }
      } else if (dataLama.level_akses / 2 === 3) {
        if (dataBaru.status_id_surat_pengajuan_dospem === "Ditolak") {
          final_level_akses = final_level_akses - 1;
        } else if (dataBaru.status_id_surat_pengajuan_dospem === "Divalidasi") {
          final_level_akses = final_level_akses + 1;
        }
      } else if (dataLama.level_akses / 2 === 4) {
        if (dataBaru.status_link_surat_penunjukkan_dospem === "Ditolak") {
          final_level_akses = final_level_akses - 1;
        } else if (
          dataBaru.status_link_surat_penunjukkan_dospem === "Divalidasi"
        ) {
          final_level_akses = final_level_akses + 1;
        }
      } else if (dataLama.level_akses / 2 === 5) {
        if (dataBaru.status_link_surat_perpanjangan_kp === "Ditolak") {
          final_level_akses = final_level_akses - 1;
        } else if (
          dataBaru.status_link_surat_perpanjangan_kp === "Divalidasi"
        ) {
          final_level_akses = final_level_akses + 1;
        }
      }
      await prisma.pendaftaran_kp.update({
        where: {
          id: dataLama.id,
        },
        data: {
          status: dataBaru.status || dataLama.status,
          alasan_lanjut_kp:
            dataBaru.alasan_lanjut_kp || dataLama.alasan_lanjut_kp,
          id_instansi: dataBaru.id_instansi || dataLama.id_instansi,
          tujuan_surat_instansi:
            dataBaru.tujuan_surat_instansi || dataLama.tujuan_surat_instansi,
          judul_kp: dataBaru.judul_kp || dataLama.judul_kp,
          kelas_kp: dataBaru.kelas_kp || dataLama.kelas_kp,
          level_akses: dataBaru.level_akses || final_level_akses,
          document: {
            update: [
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 0,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_penolakan_instansi ||
                    dataLama.document[0].data,
                  status:
                    dataBaru.level_akses === 0
                      ? "Ditolak"
                      : dataBaru.status_link_surat_penolakan_instansi ||
                        dataLama.document[0].status,
                  catatan: dataBaru.catatan_link_surat_penolakan_instansi,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 1,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_pengantar || dataLama.document[1].data,
                  status:
                    dataBaru.level_akses === 1
                      ? "Ditolak"
                      : dataBaru.status_link_surat_pengantar ||
                        dataLama.document[1].status,
                  catatan: dataBaru.catatan_link_surat_pengantar,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 2,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_balasan || dataLama.document[2].data,
                  status:
                    dataBaru.level_akses === 3
                      ? "Ditolak"
                      : dataBaru.status_link_surat_balasan ||
                        dataLama.document[2].status,
                  catatan: dataBaru.catatan_link_surat_balasan,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 3,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.id_surat_pengajuan_dospem ||
                    dataLama.document[3].data,
                  status:
                    dataBaru.level_akses === 5
                      ? "Ditolak"
                      : dataBaru.status_id_surat_pengajuan_dospem ||
                        dataLama.document[3].status,
                  catatan: dataBaru.catatan_id_surat_pengajuan_dospem,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 4,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_penunjukkan_dospem ||
                    dataLama.document[4].data,
                  status:
                    dataBaru.level_akses === 7
                      ? "Ditolak"
                      : dataBaru.status_link_surat_penunjukkan_dospem ||
                        dataLama.document[4].status,
                  catatan: dataBaru.catatan_link_surat_penunjukkan_dospem,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 5,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_perpanjangan_kp ||
                    dataLama.document[5].data,
                  status:
                    dataBaru.level_akses === 9
                      ? "Ditolak"
                      : dataBaru.status_link_surat_perpanjangan_kp ||
                        dataLama.document[5].status,
                  catatan: dataBaru.catatan_link_surat_perpanjangan_kp,
                },
              },
            ],
          },
        },
      });
    } else {
      if (dataLama.level_akses === 10) {
        // yg ini perlu?
        await prisma.pendaftaran_kp.update({
          where: {
            id: dataLama.id,
          },
          data: {
            tanggal_selesai:
              dataBaru.tanggal_selesai || dataLama.tanggal_selesai,
            level_akses:
              dataBaru.level_akses % 2 === 1
                ? dataBaru.level_akses
                : dataLama.level_akses,
            alasan_lanjut_kp:
              dataBaru.alasan_lanjut_kp || dataLama.alasan_lanjut_kp,
            id_instansi: dataBaru.id_instansi || dataLama.id_instansi,
            tujuan_surat_instansi:
              dataBaru.tujuan_surat_instansi || dataLama.tujuan_surat_instansi,
            judul_kp: dataBaru.judul_kp || dataLama.judul_kp,
            kelas_kp: dataBaru.kelas_kp || dataLama.kelas_kp,
            document: {
              update: [
                {
                  where: {
                    idKriteria_idPendaftaranKP: {
                      idKriteria: 0,
                      idPendaftaranKP: dataLama.id,
                    },
                  },
                  data: {
                    data:
                      dataBaru.link_surat_penolakan_instansi ||
                      dataLama.document[0].data,
                    status:
                      dataBaru.level_akses === -1
                        ? "Ditolak"
                        : dataBaru.status_link_surat_penolakan_instansi ||
                          dataLama.document[0].status,
                    catatan: dataBaru.catatan_link_surat_penolakan_instansi,
                  },
                },
                {
                  where: {
                    idKriteria_idPendaftaranKP: {
                      idKriteria: 1,
                      idPendaftaranKP: dataLama.id,
                    },
                  },
                  data: {
                    data:
                      dataBaru.link_surat_pengantar ||
                      dataLama.document[1].data,
                    status:
                      dataBaru.level_akses === 1
                        ? "Ditolak"
                        : dataBaru.status_link_surat_pengantar ||
                          dataLama.document[1].status,
                    catatan: dataBaru.catatan_link_surat_pengantar,
                  },
                },
                {
                  where: {
                    idKriteria_idPendaftaranKP: {
                      idKriteria: 2,
                      idPendaftaranKP: dataLama.id,
                    },
                  },
                  data: {
                    data:
                      dataBaru.link_surat_balasan || dataLama.document[2].data,
                    status:
                      dataBaru.level_akses === 3
                        ? "Ditolak"
                        : dataBaru.status_link_surat_balasan ||
                          dataLama.document[2].status,
                    catatan: dataBaru.catatan_link_surat_balasan,
                  },
                },
                {
                  where: {
                    idKriteria_idPendaftaranKP: {
                      idKriteria: 3,
                      idPendaftaranKP: dataLama.id,
                    },
                  },
                  data: {
                    data:
                      dataBaru.id_surat_pengajuan_dospem ||
                      dataLama.document[3].data,
                    status:
                      dataBaru.level_akses === 5
                        ? "Ditolak"
                        : dataBaru.status_id_surat_pengajuan_dospem ||
                          dataLama.document[3].status,
                    catatan: dataBaru.catatan_id_surat_pengajuan_dospem,
                  },
                },
                {
                  where: {
                    idKriteria_idPendaftaranKP: {
                      idKriteria: 4,
                      idPendaftaranKP: dataLama.id,
                    },
                  },
                  data: {
                    data:
                      dataBaru.link_surat_penunjukkan_dospem ||
                      dataLama.document[4].data,
                    status:
                      dataBaru.level_akses === 7
                        ? "Ditolak"
                        : dataBaru.status_link_surat_penunjukkan_dospem ||
                          dataLama.document[4].status,
                    catatan: dataBaru.catatan_link_surat_penunjukkan_dospem,
                  },
                },
                {
                  where: {
                    idKriteria_idPendaftaranKP: {
                      idKriteria: 5,
                      idPendaftaranKP: dataLama.id,
                    },
                  },
                  data: {
                    data:
                      dataBaru.link_surat_perpanjangan_kp ||
                      dataLama.document[5].data,
                    status:
                      dataBaru.level_akses === 9
                        ? "Ditolak"
                        : dataBaru.status_link_surat_perpanjangan_kp ||
                          dataLama.document[5].status,
                    catatan: dataBaru.catatan_link_surat_perpanjangan_kp,
                  },
                },
              ],
            },
            status: dataBaru.status || "Lanjut",
          },
        });

        // TIMEOUT UNTUK 6 BULAN

        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataLama.id,
          `[BERKAS DITERIMA] Pengajuan link surat perpanjangan kerja praktek diterima`,
          new Date(),
          1
        );
        return;
      }

      if (dataLama.document.length === 0) {
        console.log(
          "belum melalui proses create, harusnya jika melalui proses create, maka document akan dibuatkan"
        );
      }

      // setting di FE aja utk bagian acc berkas yang di edit

      // sistem akan rusak bila berkas merupakan bilangan genap dan mahasiswa belum mengirimkan berkas
      await prisma.pendaftaran_kp.update({
        where: {
          id: dataLama.id,
        },
        data: {
          status: dataBaru.status || dataLama.status,
          alasan_lanjut_kp:
            dataBaru.alasan_lanjut_kp || dataLama.alasan_lanjut_kp,
          id_instansi: dataBaru.id_instansi || dataLama.id_instansi,
          tujuan_surat_instansi:
            dataBaru.tujuan_surat_instansi || dataLama.tujuan_surat_instansi,
          judul_kp: dataBaru.judul_kp || dataLama.judul_kp,
          kelas_kp: dataBaru.kelas_kp || dataLama.kelas_kp,
          level_akses:
            dataBaru.level_akses % 2 === 1
              ? dataBaru.level_akses
              : dataLama.level_akses,
          document: {
            update: [
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 0,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_penolakan_instansi ||
                    dataLama.document[0].data,
                  status:
                    dataBaru.level_akses === 0
                      ? "Ditolak"
                      : dataBaru.status_link_surat_penolakan_instansi ||
                        dataLama.document[0].status,
                  catatan: dataBaru.catatan_link_surat_penolakan_instansi,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 1,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_pengantar || dataLama.document[1].data,
                  status:
                    dataBaru.level_akses === 1
                      ? "Ditolak"
                      : dataBaru.status_link_surat_pengantar ||
                        dataLama.document[1].status,
                  catatan: dataBaru.catatan_link_surat_pengantar,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 2,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_balasan || dataLama.document[2].data,
                  status:
                    dataBaru.level_akses === 3
                      ? "Ditolak"
                      : dataBaru.status_link_surat_balasan ||
                        dataLama.document[2].status,
                  catatan: dataBaru.catatan_link_surat_balasan,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 3,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.id_surat_pengajuan_dospem ||
                    dataLama.document[3].data,
                  status:
                    dataBaru.level_akses === 5
                      ? "Ditolak"
                      : dataBaru.status_id_surat_pengajuan_dospem ||
                        dataLama.document[3].status,
                  catatan: dataBaru.catatan_id_surat_pengajuan_dospem,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 4,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_penunjukkan_dospem ||
                    dataLama.document[4].data,
                  status:
                    dataBaru.level_akses === 7
                      ? "Ditolak"
                      : dataBaru.status_link_surat_penunjukkan_dospem ||
                        dataLama.document[4].status,
                  catatan: dataBaru.catatan_link_surat_penunjukkan_dospem,
                },
              },
              {
                where: {
                  idKriteria_idPendaftaranKP: {
                    idKriteria: 5,
                    idPendaftaranKP: dataLama.id,
                  },
                },
                data: {
                  data:
                    dataBaru.link_surat_perpanjangan_kp ||
                    dataLama.document[5].data,
                  status:
                    dataBaru.level_akses === 9
                      ? "Ditolak"
                      : dataBaru.status_link_surat_perpanjangan_kp ||
                        dataLama.document[5].status,
                  catatan: dataBaru.catatan_link_surat_perpanjangan_kp,
                },
              },
            ],
          },
        },
      });

      if (dataLama.level_akses === 2) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataLama.id,
          `[BERKAS DITERIMA] Pengajuan link surat pengantar kerja praktek diterima`,
          new Date(),
          1
        );
      } else if (dataLama.level_akses === 4) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataLama.id,
          `[BERKAS DITERIMA] Pengajuan link surat balasan instansi diterima`,
          new Date(),
          1
        );
      } else if (dataLama.level_akses === 6) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataLama.id,
          `[BERKAS DITERIMA] Pengajuan ID penunjukkan dosen pembimbing diterima`,
          new Date(),
          1
        );
      } else if (dataLama.level_akses === 8) {
        await DaftarKPRepository.createLOGPendaftaranKPById(
          dataLama.id,
          `[BERKAS DITERIMA] Pengajuan link surat penunjukkan dosem pembimbing diterima`,
          new Date(),
          1
        );
      }
    }
  }
  // public static async putBerkasMahasiswa(
  //   dataBaru: any,
  //   dataLama: any,
  //   isEditing: boolean
  // ) {
  //   if (isEditing) {
  //     await prisma.pendaftaran_kp.update({
  //       where: {
  //         id: dataLama.id,
  //       },
  //       data: {
  //         alasan_lanjut_kp:
  //           dataBaru.alasan_lanjut_kp || dataLama.alasan_lanjut_kp,
  //         id_instansi: dataBaru.id_instansi || dataLama.id_instansi,
  //         tujuan_surat_instansi:
  //           dataBaru.tujuan_surat_instansi || dataLama.tujuan_surat_instansi,
  //         judul_kp: dataBaru.judul_kp || dataLama.judul_kp,
  //         kelas_kp: dataBaru.kelas_kp || dataLama.kelas_kp,
  //         status: dataBaru.status || dataLama.status,
  //         level_akses: dataBaru.level_akses || dataLama.level_akses,
  //         document: {
  //           update: [
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 0,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_penolakan_instansi ||
  //                   dataLama.document[0].data,

  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 1,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_pengantar ||
  //                   dataLama.document[1].data,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 2,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_balasan || dataLama.document[2].data,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 3,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.id_surat_pengajuan_dospem ||
  //                   dataLama.document[3].data,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 4,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_penunjukkan_dospem ||
  //                   dataLama.document[4].data,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 5,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_perpanjangan_kp ||
  //                   dataLama.document[5].data,
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     });
  //   } else {
  //     if (dataLama.levelAkses === 10) {
  //       await prisma.pendaftaran_kp.update({
  //         where: {
  //           id: dataLama.id,
  //         },
  //         data: {
  //           alasan_lanjut_kp:
  //             dataBaru.alasan_lanjut_kp || dataLama.alasan_lanjut_kp,
  //           id_instansi: dataBaru.id_instansi || dataLama.id_instansi,
  //           tujuan_surat_instansi:
  //             dataBaru.tujuan_surat_instansi || dataLama.tujuan_surat_instansi,
  //           judul_kp: dataBaru.judul_kp || dataLama.judul_kp,
  //           kelas_kp: dataBaru.kelas_kp || dataLama.kelas_kp,
  //           document: {
  //             update: [
  //               {
  //                 where: {
  //                   idKriteria_idPendaftaranKP: {
  //                     idKriteria: 0,
  //                     idPendaftaranKP: dataLama.id,
  //                   },
  //                 },
  //                 data: {
  //                   data:
  //                     dataBaru.link_surat_penolakan_instansi ||
  //                     dataLama.document[0].data,
  //                 },
  //               },
  //               {
  //                 where: {
  //                   idKriteria_idPendaftaranKP: {
  //                     idKriteria: 1,
  //                     idPendaftaranKP: dataLama.id,
  //                   },
  //                 },
  //                 data: {
  //                   data:
  //                     dataBaru.link_surat_pengantar ||
  //                     dataLama.document[1].data,
  //                 },
  //               },
  //               {
  //                 where: {
  //                   idKriteria_idPendaftaranKP: {
  //                     idKriteria: 2,
  //                     idPendaftaranKP: dataLama.id,
  //                   },
  //                 },
  //                 data: {
  //                   data:
  //                     dataBaru.link_surat_balasan ||
  //                     dataLama.document[2].data,
  //                 },
  //               },
  //               {
  //                 where: {
  //                   idKriteria_idPendaftaranKP: {
  //                     idKriteria: 3,
  //                     idPendaftaranKP: dataLama.id,
  //                   },
  //                 },
  //                 data: {
  //                   data:
  //                     dataBaru.id_surat_pengajuan_dospem ||
  //                     dataLama.document[3].data,
  //                 },
  //               },
  //               {
  //                 where: {
  //                   idKriteria_idPendaftaranKP: {
  //                     idKriteria: 4,
  //                     idPendaftaranKP: dataLama.id,
  //                   },
  //                 },
  //                 data: {
  //                   data:
  //                     dataBaru.link_surat_penunjukkan_dospem ||
  //                     dataLama.document[4].data,
  //                 },
  //               },
  //               {
  //                 where: {
  //                   idKriteria_idPendaftaranKP: {
  //                     idKriteria: 5,
  //                     idPendaftaranKP: dataLama.id,
  //                   },
  //                 },
  //                 data: {
  //                   data:
  //                     dataBaru.link_surat_perpanjangan_kp ||
  //                     dataLama.document[5].data,
  //                 },
  //               },
  //             ],
  //           },
  //           status: dataBaru.status || "Lanjut",
  //           level_akses: dataBaru.level_akses || dataLama.level_akses + 1,
  //         },
  //       });

  //       // TIMEOUT UNTUK 6 BULAN

  //       const pointer = setTimeout(function () {
  //         const pointer1 = setTimeout(function () {
  //           const pointer2 = setTimeout(function () {
  //             const pointer3 = setTimeout(function () {
  //               const pointer4 = setTimeout(function () {
  //                 const pointer5 = setTimeout(function () {
  //                   const pointer6 = setTimeout(function () {
  //                     const pointer7 = setTimeout(async function () {
  //                       {
  //                         await prisma.pendaftaran_kp.update({
  //                           where: {
  //                             id: dataLama.id,
  //                             status: "Lanjut",
  //                           },
  //                           data: {
  //                             status: "Gagal",
  //                           },
  //                         });
  //                         clearTimeout(pointer7);
  //                       }
  //                     }, 518400000);
  //                     clearTimeout(pointer6);
  //                   }, 2147483640);
  //                   clearTimeout(pointer5);
  //                 }, 2147483640);
  //                 clearTimeout(pointer4);
  //               }, 2147483640);
  //               clearTimeout(pointer3);
  //             }, 2147483640);
  //             clearTimeout(pointer2);
  //           }, 2147483640);
  //           clearTimeout(pointer1);
  //         }, 2147483640);
  //         clearTimeout(pointer);
  //       }, 2147483640);

  //       await DaftarKPRepository.createLOGPendaftaranKPById(
  //         dataLama.id,
  //         `[BERKAS DITERIMA] Pengajuan link surat perpanjangan kerja praktek diterima`,
  //         new Date(),
  //         1
  //       );
  //       return;
  //     }

  //     const dataLama.document = await prisma.document.findMany({
  //       where: {
  //         idPendaftaranKP: dataLama.id,
  //       },
  //       orderBy: {
  //         idKriteria: "asc",
  //       },
  //     });

  //     if (dataLama.document.length === 0) {
  //       console.log(
  //         "belum melalui proses create, harusnya jika melalui proses create, maka document akan dibuatkan"
  //       );
  //     }

  //     await prisma.pendaftaran_kp.update({
  //       where: {
  //         id: dataLama.id,
  //       },
  //       data: {
  //         alasan_lanjut_kp:
  //           dataBaru.alasan_lanjut_kp || dataLama.alasan_lanjut_kp,
  //         id_instansi: dataBaru.id_instansi || dataLama.id_instansi,
  //         tujuan_surat_instansi:
  //           dataBaru.tujuan_surat_instansi || dataLama.tujuan_surat_instansi,
  //         judul_kp: dataBaru.judul_kp || dataLama.judul_kp,
  //         kelas_kp: dataBaru.kelas_kp || dataLama.kelas_kp,
  //         document: {
  //           update: [
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 0,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_penolakan_instansi ||
  //                   dataLama.document[0].data,
  //                 status:
  //                   dataLama.document[0].status === "Terkirim"
  //                     ? "Divalidasi"
  //                     : dataLama.document[0].status,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 1,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_pengantar ||
  //                   dataLama.document[1].data,
  //                 status:
  //                   dataLama.document[1].status === "Terkirim"
  //                     ? "Divalidasi"
  //                     : dataLama.document[1].status,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 2,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_balasan || dataLama.document[2].data,
  //                 status:
  //                   dataLama.document[2].status === "Terkirim"
  //                     ? "Divalidasi"
  //                     : dataLama.document[2].status,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 3,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.id_surat_pengajuan_dospem ||
  //                   dataLama.document[3].data,
  //                 status:
  //                   dataLama.document[3].status === "Terkirim"
  //                     ? "Divalidasi"
  //                     : dataLama.document[3].status,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 4,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_penunjukkan_dospem ||
  //                   dataLama.document[4].data,
  //                 status:
  //                   dataLama.document[4].status === "Terkirim"
  //                     ? "Divalidasi"
  //                     : dataLama.document[4].status,
  //               },
  //             },
  //             {
  //               where: {
  //                 idKriteria_idPendaftaranKP: {
  //                   idKriteria: 5,
  //                   idPendaftaranKP: dataLama.id,
  //                 },
  //               },
  //               data: {
  //                 data:
  //                   dataBaru.link_surat_perpanjangan_kp ||
  //                   dataLama.document[5].data,
  //                 status:
  //                   dataLama.document[5].status === "Terkirim"
  //                     ? "Divalidasi"
  //                     : dataLama.document[5].status,
  //               },
  //             },
  //           ],
  //         },
  //         level_akses:
  //           dataBaru.level_akses === dataLama.level_akses
  //             ? dataBaru.level_akses + 1 || dataLama.level_akses + 1
  //             : dataBaru.level_akses || dataLama.level_akses + 1,
  //       },
  //     });

  //     if (dataLama.level_akses === 2) {
  //       await DaftarKPRepository.createLOGPendaftaranKPById(
  //         dataLama.id,
  //         `[BERKAS DITERIMA] Pengajuan link surat pengantar kerja praktek diterima`,
  //         new Date(),
  //         1
  //       );
  //     } else if (dataLama.level_akses === 4) {
  //       await DaftarKPRepository.createLOGPendaftaranKPById(
  //         dataLama.id,
  //         `[BERKAS DITERIMA] Pengajuan link surat balasan instansi diterima`,
  //         new Date(),
  //         1
  //       );
  //     } else if (dataLama.level_akses === 6) {
  //       await DaftarKPRepository.createLOGPendaftaranKPById(
  //         dataLama.id,
  //         `[BERKAS DITERIMA] Pengajuan ID penunjukkan dosen pembimbing diterima`,
  //         new Date(),
  //         1
  //       );
  //     } else if (dataLama.level_akses === 8) {
  //       await DaftarKPRepository.createLOGPendaftaranKPById(
  //         dataLama.id,
  //         `[BERKAS DITERIMA] Pengajuan link surat penunjukkan dosem pembimbing diterima`,
  //         new Date(),
  //         1
  //       );
  //     }
  //   }
  // }

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
