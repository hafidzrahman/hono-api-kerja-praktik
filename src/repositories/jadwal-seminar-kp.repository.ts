import { PrismaClient, jadwal, log_jadwal } from '../generated/prisma';
import { CreateJadwalDto, UpdateJadwalDto, JadwalFilter, JadwalLogDto } from '../types/jadwal-seminar-kp.type';

export default class JadwalRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateJadwalDto): Promise<jadwal> {
    return this.prisma.jadwal.create({
      data,
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: {
          include: {
            mahasiswa: true
          }
        }
      }
    });
  }

  async findById(id: string): Promise<jadwal | null> {
    return this.prisma.jadwal.findUnique({
      where: { id },
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: {
          include: {
            mahasiswa: true
          }
        }
      }
    });
  }

  async findAll(filter?: JadwalFilter): Promise<jadwal[]> {
    return this.prisma.jadwal.findMany({
      where: filter,
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: {
          include: {
            mahasiswa: true
          }
        }
      },
      orderBy: {
        tanggal: 'asc'
      }
    });
  }

  async update(id: string, data: Partial<UpdateJadwalDto>): Promise<jadwal> {
    return this.prisma.jadwal.update({
      where: { id },
      data,
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: {
          include: {
            mahasiswa: true
          }
        }
      }
    });
  }

  async delete(id: string): Promise<jadwal> {
    return this.prisma.jadwal.delete({
      where: { id }
    });
  }

  async findConflictingSchedules(
    tanggal: Date,
    waktu_mulai: Date,
    waktu_selesai: Date,
    ruangan: string,
    excludeJadwalId?: string
  ): Promise<jadwal[]> {
    return this.prisma.jadwal.findMany({
      where: {
        tanggal,
        nama_ruangan: ruangan,
        waktu_mulai: {
          lt: waktu_selesai
        },
        waktu_selesai: {
          gt: waktu_mulai
        },
        ...(excludeJadwalId ? { id: { not: excludeJadwalId } } : {})
      },
      include: {
        ruangan: true,
        mahasiswa: true,
        pendaftaran_kp: true
      }
    });
  }

  async findDosenConflicts(
    tanggal: Date,
    waktu_mulai: Date,
    waktu_selesai: Date,
    excludeJadwalId?: string
  ): Promise<any[]> {
    // Find conflicts where dosen is assigned as either pembimbing or penguji
    return this.prisma.jadwal.findMany({
      where: {
        tanggal,
        waktu_mulai: {
          lt: waktu_selesai
        },
        waktu_selesai: {
          gt: waktu_mulai
        },
        ...(excludeJadwalId ? { id: { not: excludeJadwalId } } : {})
      },
      include: {
        pendaftaran_kp: {
          include: {
            mahasiswa: true
          }
        }
      }
    });
  }

  async createLogJadwal(logData: JadwalLogDto): Promise<log_jadwal> {
    return this.prisma.log_jadwal.create({
      data: logData
    });
  }
}