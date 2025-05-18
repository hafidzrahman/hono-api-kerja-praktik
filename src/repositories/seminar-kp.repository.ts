import { jenis_dokumen } from "../generated/prisma";
import prisma from "../infrastructures/db.infrastructure";
import { CreateDokumenSeminarKPInput, UpdateDokumenSeminarKPInput, MahasiswaWithDokumen, SeminarKPSaya, DokumenMahasiswa } from "../types/seminar-kp/dokumen.type";

export default class SeminarKpRepository {
  public static async createDokumen(jenis_dokumen: jenis_dokumen, input: CreateDokumenSeminarKPInput) {
    return await prisma.dokumen_seminar_kp.create({
      data: {
        jenis_dokumen: jenis_dokumen,
        link_path: input.link_path,
        nim: input.nim,
        id_pendaftaran_kp: input.id_pendaftaran_kp,
        tanggal_upload: new Date(),
        status: "Terkirim",
      },
    });
  }

  public static async getAllDokumenSeminarKP(): Promise<MahasiswaWithDokumen[]> {
    return await prisma.mahasiswa.findMany({
      where: {
        dokumen_seminar_kp: {
          some: {},
        },
      },
      select: {
        nim: true,
        nama: true,
        email: true,
        dokumen_seminar_kp: {
          select: {
            id: true,
            jenis_dokumen: true,
            link_path: true,
            tanggal_upload: true,
            status: true,
            komentar: true,
            id_pendaftaran_kp: true,
          },
        },
        pendaftaran_kp: {
          select: {
            id: true,
            status: true,
            id_tahun_ajaran: true,
            tahun_ajaran: {
              select: {
                id: true,
                nama: true,
              },
            },
          },
        },
      },
    });
  }

  public static async getMahasiswaSeminarKPByNIM(nim: string): Promise<DokumenMahasiswa | null> {
    return await prisma.mahasiswa.findUnique({
      where: {
        nim: nim,
      },
      select: {
        nim: true,
        nama: true,
        email: true,
        dokumen_seminar_kp: {
          select: {
            id: true,
            jenis_dokumen: true,
            link_path: true,
            tanggal_upload: true,
            status: true,
            komentar: true,
            id_pendaftaran_kp: true,
          },
        },
        pendaftaran_kp: {
          select: {
            id: true,
            status: true,
            dosen_pembimbing: {
              select: {
                nip: true,
                nama: true,
              },
            },
            dosen_penguji: {
              select: {
                nip: true,
                nama: true,
              },
            },
            tahun_ajaran: {
              select: {
                id: true,
                nama: true,
              },
            },
            instansi: {
              select: {
                pembimbing_instansi: {
                  select: {
                    nama: true,
                  },
                },
              },
            },
          },
        },
        nilai: {
          select: {
            nilai_instansi: true,
            komponen_penilaian_pembimbing: {
              select: {
                catatan: true,
              },
            },
            komponen_penilaian_penguji: {
              select: {
                catatan: true,
              },
            },
          },
        },
      },
    });
  }

  public static async getDataSeminarKPSaya(nim: string): Promise<SeminarKPSaya | null> {
    return await prisma.mahasiswa.findUnique({
      where: {
        nim: nim,
      },
      select: {
        nim: true,
        nama: true,
        email: true,
        pendaftaran_kp: {
          select: {
            id: true,
            judul_kp: true,
            id_instansi: true,
            tanggal_mulai: true,
            tanggal_selesai: true,
            instansi: {
              select: {
                nama: true,
                alamat: true,
              },
            },
            dosen_pembimbing: {
              select: {
                nip: true,
                nama: true,
                no_hp: true,
              },
            },
            dosen_penguji: {
              select: {
                nip: true,
                nama: true,
                no_hp: true,
              },
            },
          },
        },
        dokumen_seminar_kp: {
          select: {
            id: true,
            jenis_dokumen: true,
            link_path: true,
            tanggal_upload: true,
            status: true,
            komentar: true,
            id_pendaftaran_kp: true,
          },
        },
        jadwal: {
          select: {
            id: true,
            tanggal: true,
            waktu_mulai: true,
            waktu_selesai: true,
            status: true,
            ruangan: {
              select: {
                nama: true,
              },
            },
          },
        },
        nilai: {
          select: {
            id: true,
            komponen_penilaian_pembimbing: {
              select: {
                id: true,
                catatan: true,
              },
            },
            komponen_penilaian_penguji: {
              select: {
                id: true,
                catatan: true,
              },
            },
            nilai_penguji: true,
            nilai_instansi: true,
            nilai_pembimbing: true,
            nilai_akhir: true,
          },
        },
      },
    });
  }

  public static async getDokumenSeminarKPById(id: string) {
    return await prisma.dokumen_seminar_kp.findUnique({
      where: {
        id,
      },
    });
  }

  public static async getDokumenSeminarKPByJenisAndPendaftaranId(jenis_dokumen: jenis_dokumen, id_pendaftaran_kp: string) {
    return await prisma.dokumen_seminar_kp.findFirst({
      where: {
        jenis_dokumen: jenis_dokumen,
        id_pendaftaran_kp,
      },
    });
  }

  public static async updateDokumenSeminarKP(id: string, data: UpdateDokumenSeminarKPInput) {
    return await prisma.dokumen_seminar_kp.update({
      where: { id },
      data,
    });
  }
}
