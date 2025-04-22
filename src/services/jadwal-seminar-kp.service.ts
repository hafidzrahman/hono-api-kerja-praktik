import { jadwal, status_jadwal } from '../generated/prisma';
import JadwalRepository from '../repositories/jadwal-seminar-kp.repository';
import { CreateJadwalDto, UpdateJadwalDto, JadwalFilter, ScheduleConflict } from '../types/jadwal-seminar-kp.type';
import { APIError } from '../utils/api-error.util';

export default class JadwalService {
  private jadwalRepository: JadwalRepository;

  constructor() {
    this.jadwalRepository = new JadwalRepository();
  }

  async createJadwal(data: CreateJadwalDto): Promise<jadwal> {
    const conflicts = await this.checkScheduleConflicts(
      data.tanggal,
      data.waktu_mulai,
      data.waktu_selesai,
      data.nama_ruangan
    );
    
    if (conflicts.hasDosenConflict || conflicts.hasRuanganConflict) {
      throw new APIError(
        JSON.stringify({
          message: 'Schedule conflict detected',
          conflicts
        })
      );
    }
    
    return this.jadwalRepository.create(data);
  }

  async getJadwal(id: string): Promise<jadwal | null> {
    return this.jadwalRepository.findById(id);
  }

  async getAllJadwal(filter?: JadwalFilter): Promise<jadwal[]> {
    return this.jadwalRepository.findAll(filter);
  }

  async updateJadwal(id: string, data: UpdateJadwalDto): Promise<jadwal> {

    const existingJadwal = await this.jadwalRepository.findById(id);
    if (!existingJadwal) {
      throw new APIError('Jadwal not found');
    }

    if (data.tanggal || data.waktu_mulai || data.waktu_selesai || data.nama_ruangan) {
      const conflicts = await this.checkScheduleConflicts(
        data.tanggal || existingJadwal.tanggal!,
        data.waktu_mulai || existingJadwal.waktu_mulai!,
        data.waktu_selesai || existingJadwal.waktu_selesai!,
        data.nama_ruangan || existingJadwal.nama_ruangan!,
        id
      );
      
      if (conflicts.hasDosenConflict || conflicts.hasRuanganConflict) {
        throw new APIError(
          JSON.stringify({
            message: 'Schedule conflict detected',
            conflicts
          })
        );
      }
      
      if (data.tanggal !== existingJadwal.tanggal || data.nama_ruangan !== existingJadwal.nama_ruangan) {
        await this.jadwalRepository.createLogJadwal({
          log_type: 'UPDATE',
          tanggal_lama: existingJadwal.tanggal,
          tanggal_baru: data.tanggal || existingJadwal.tanggal!,
          ruangan_lama: existingJadwal.tanggal,
          ruangan_baru: data.tanggal || existingJadwal.tanggal!,
          keterangan: 'Jadwal updated',
          id_jadwal_seminar: Number(id) || null
        });
      }
    }

    if (data.status === status_jadwal.Jadwal_Ulang) {
      await this.jadwalRepository.createLogJadwal({
        log_type: 'RESCHEDULE',
        tanggal_lama: existingJadwal.tanggal,
        tanggal_baru: data.tanggal || existingJadwal.tanggal!,
        ruangan_lama: existingJadwal.tanggal,
        ruangan_baru: data.tanggal || existingJadwal.tanggal!,
        keterangan: 'Jadwal rescheduled',
        id_jadwal_seminar: Number(id) || null
      });
    }

    return this.jadwalRepository.update(id, data);
  }

  async deleteJadwal(id: string): Promise<jadwal> {
    const existingJadwal = await this.jadwalRepository.findById(id);
    if (!existingJadwal) {
      throw new APIError('Jadwal not found');
    }

    await this.jadwalRepository.createLogJadwal({
      log_type: 'DELETE',
      tanggal_lama: existingJadwal.tanggal,
      tanggal_baru: new Date(),
      ruangan_lama: existingJadwal.tanggal,
      ruangan_baru: new Date(),
      keterangan: 'Jadwal deleted',
      id_jadwal_seminar: Number(id) || null
    });

    return this.jadwalRepository.delete(id);
  }

  async checkScheduleConflicts(
    tanggal: Date,
    waktu_mulai: Date,
    waktu_selesai: Date,
    ruangan: string,
    excludeJadwalId?: string
  ): Promise<ScheduleConflict> {
    const ruanganConflicts = await this.jadwalRepository.findConflictingSchedules(
      tanggal, 
      waktu_mulai, 
      waktu_selesai, 
      ruangan,
      excludeJadwalId
    );
    
    const dosenConflicts = await this.jadwalRepository.findDosenConflicts(
      tanggal,
      waktu_mulai,
      waktu_selesai,
      excludeJadwalId
    );
    
    const filteredDosenConflicts = dosenConflicts.filter(conflict => {
      
      return true;
    });
    
    return {
      hasRuanganConflict: ruanganConflicts.length > 0,
      hasDosenConflict: filteredDosenConflicts.length > 0,
      conflictDetails: {
        ruanganConflicts: ruanganConflicts,
        dosenConflicts: filteredDosenConflicts
      }
    };
  }

  async completeJadwal(id: string): Promise<jadwal> {
    return this.updateJadwal(id, { status: status_jadwal.Selesai });
  }

  async rescheduleJadwal(id: string, newData: {
    tanggal: Date,
    waktu_mulai: Date,
    waktu_selesai: Date,
    nama_ruangan: string
  }): Promise<jadwal> {
    return this.updateJadwal(id, {
      ...newData,
      status: status_jadwal.Jadwal_Ulang
    });
  }
}