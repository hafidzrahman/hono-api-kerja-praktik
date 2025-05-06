import { jenis_dokumen } from "../generated/prisma";
import prisma from "../infrastructures/db.infrastructure";
import { CreateDokumenSeminarKPInput, UpdateDokumenSeminarKPInput, MahasiswaWithDokumen } from "../types/seminar-kp/dokumen-seminar-kp.type";

export default class DokumenSeminarKpRepository {
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
        dokumen_seminar_kp:{
          some: {}
        }
      },
      select:{
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
            id_pendaftaran_kp: true
          }
        }
      }
    });
  }

  public static async getDokumenSeminarKPByNIM(nim: string): Promise<MahasiswaWithDokumen | null> {
    const mahasiswa = await prisma.mahasiswa.findUnique({
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
              }
            },
            dosen_pembimbing: {
              select: {
                nip: true,
                nama: true,
                no_hp: true
              }
            },
            dosen_penguji: {
              select: {
                nip: true,
                nama: true,
                no_hp: true
              }
            }
          }
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
                nama: true
              }
            }
          }
        },
        nilai: {
          select: {
            nilai_penguji: true,
            nilai_instansi: true,
            nilai_pembimbing: true,
            nilai_akhir: true
          }
        }
      },
    });

    if (mahasiswa && mahasiswa.nilai) {
      const { nilai_instansi, nilai_pembimbing, nilai_penguji } = mahasiswa.nilai;
      
      // Pastikan semua nilai tersedia sebelum melakukan kalkulasi
      if (nilai_instansi !== null && nilai_pembimbing !== null && nilai_penguji !== null) {
        const nilaiAkhirKalkulasi = (
          (nilai_instansi * 0.4) +
          (nilai_pembimbing * 0.4) +
          (nilai_penguji * 0.2)
        );
        
        mahasiswa.nilai.nilai_akhir = nilaiAkhirKalkulasi;
      }
    }

    return mahasiswa
  }

  public static async getDokumenSeminarKPById(id: string) {
    return await prisma.dokumen_seminar_kp.findUnique({
      where: {
        id,
      },
    });
  }

  async getDokumenSeminarKPByJenisAndNim(jenis_dokumen: jenis_dokumen, nim: string) {
    return await prisma.dokumen_seminar_kp.findFirst({
      where: {
        jenis_dokumen: jenis_dokumen,
        nim,
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

  public static async deleteDokumenSeminarKP(id: string) {
    return prisma.dokumen_seminar_kp.delete({
      where: { id },
    });
  }
}
