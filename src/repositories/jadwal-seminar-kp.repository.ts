import prisma from "../infrastructures/db.infrastructure";
import { jadwal, log_jadwal } from "../generated/prisma";
import { CreateJadwalDto, UpdateJadwalDto, JadwalFilter, JadwalLogDto } from "../types/seminar-kp/jadwal-seminar-kp.type";

export default class JadwalSeminarKPRepository {
  public static async create(data: CreateJadwalDto): Promise<jadwal> {
    return prisma.jadwal.create({
      data,
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: true
      },
    });
  }

  public static async getJadwalByPendaftaranId(id_pendaftaran_kp: string) {
    return await prisma.jadwal.findFirst({
      where: {
        id_pendaftaran_kp: id_pendaftaran_kp,
      },
      include: {
        ruangan: true
      }
    });
  }

  public static async findById(id: string): Promise<jadwal | null> {
    return prisma.jadwal.findUnique({
      where: { id },
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: {
          include: {
            mahasiswa: true,
          },
        },
      },
    });
  }

  public static async findAll(filter?: JadwalFilter): Promise<jadwal[]> {
    return prisma.jadwal.findMany({
      where: filter,
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: true
      },
      orderBy: {
        tanggal: "asc",
      },
    });
  }

  public static async update(id: string, data: Partial<UpdateJadwalDto>): Promise<jadwal> {
    return prisma.jadwal.update({
      where: { id },
      data,
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: {
          include: {
            mahasiswa: true,
          },
        },
      },
    });
  }

  public static async delete(id: string): Promise<jadwal> {
    return prisma.jadwal.delete({
      where: { id },
    });
  }

  public static async findConflictingSchedules(tanggal: Date, waktu_mulai: Date, waktu_selesai: Date, ruangan: string, excludeJadwalId?: string): Promise<jadwal[]> {
    return prisma.jadwal.findMany({
      where: {
        tanggal,
        nama_ruangan: ruangan,
        waktu_mulai: {
          lt: waktu_selesai,
        },
        waktu_selesai: {
          gt: waktu_mulai,
        },
        ...(excludeJadwalId ? { id: { not: excludeJadwalId } } : {}),
      },
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: true,
      },
    });
  }

  public static async createLogJadwal(logData: JadwalLogDto): Promise<log_jadwal> {
    return prisma.log_jadwal.create({
      data: logData,
    });
  }

  public static async findJadwalByNIP(nip: string) {
    return prisma.jadwal.findMany({
      where: {
        OR: [
          {
            pendaftaran_kp: {
              nip_pembimbing: nip
            }
          },
          {
            pendaftaran_kp: {
              nip_penguji: nip
            }
          }
        ]
      },
      include: {
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            email: true,
            no_hp: true
          }
        },
        ruangan: true,
        pendaftaran_kp: {
          include: {
            instansi: {
              select: {
                nama: true,
                alamat: true
              }
            }
          }
        }
      },
      orderBy: {
        tanggal: 'asc'
      }
    })
  }
}
