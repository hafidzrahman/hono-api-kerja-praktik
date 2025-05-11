import { jadwal, status_jadwal } from "../generated/prisma";
import JadwalSeminarKPRepository from "../repositories/jadwal-seminar-kp.repository";
import MahasiswaService from "./mahasiswa.service";
import DosenRepository from "../repositories/dosen.repository";
import { CreateJadwalDto, UpdateJadwalDto, JadwalFilter, ScheduleConflict } from "../types/seminar-kp/jadwal-seminar-kp.type";
import { APIError } from "../utils/api-error.util";
import { checkConflictsSchema, createJadwalSchema, rescheduleJadwalSchema, updateJadwalSchema } from "../validators/jadwal-seminar-kp.validator";

export default class JadwalSeminarKPService {
  public static async checkScheduleConflicts(
    tanggal: Date, 
    waktu_mulai: Date, 
    waktu_selesai: Date, 
    ruangan: string, 
    excludeJadwalId?: string,
    nim?: string
  ): Promise<ScheduleConflict> {

    checkConflictsSchema.parse({
      tanggal,
      waktu_mulai,
      waktu_selesai,
      nama_ruangan: ruangan,
      excludeId: excludeJadwalId
    })

    const ruanganConflicts = await JadwalSeminarKPRepository.findConflictingSchedules(
      tanggal, 
      waktu_mulai, 
      waktu_selesai, 
      ruangan, 
      excludeJadwalId
    );

    const dosenConflicts = await DosenRepository.findDosenConflicts(
      tanggal, 
      waktu_mulai, 
      waktu_selesai, 
      excludeJadwalId
    );

    let mahasiswaConflicts = []
    let hasMahasiswaConflict = false;

    if (nim) {
      const mahasiswaResult = await MahasiswaService.cekJadwalKonflikMahasiswa(
        nim,
        tanggal,
        waktu_mulai,
        waktu_selesai
      );

      hasMahasiswaConflict = mahasiswaResult.hasConflict;
      mahasiswaConflicts = mahasiswaResult.conflicts
    }

    const filteredDosenConflicts = dosenConflicts.filter(conflict => {
      return true;
    });

    return {
      hasRuanganConflict: ruanganConflicts.length > 0,
      hasDosenConflict: filteredDosenConflicts.length > 0,
      hasMahasiswaConflict: mahasiswaConflicts.length > 0,
      conflictDetails: {
        ruanganConflicts: ruanganConflicts,
        dosenConflicts: filteredDosenConflicts,
        mahasiswaConflicts: mahasiswaConflicts
      },
    };
  }

  public static async createJadwal(data: CreateJadwalDto): Promise<jadwal> {
    if (data.nim) {
      const { eligible } = await MahasiswaService.verifikasiKelayakanSeminar(data.nim);

      if (!eligible) {
        throw new APIError(`Waduh, Mahasiswa belum memenuhi syarat seminar KP nih! 😭`, 401)
      }
    }

    const validatedData = createJadwalSchema.parse(data);

    await MahasiswaService.validateMahasiswaExists(validatedData.nim)

    const conflicts = await this.checkScheduleConflicts(
      validatedData.tanggal, 
      data.waktu_mulai, 
      data.waktu_selesai, 
      data.nama_ruangan,
      undefined,
      validatedData.nim
    );

    if (conflicts.hasDosenConflict || conflicts.hasRuanganConflict || conflicts.hasMahasiswaConflict) {
      throw new APIError(`Waduh, ada jadwal yang konflik nih! 😭`, 401);
    }
    return JadwalSeminarKPRepository.create(validatedData);
  }

  public static async getJadwal(id: string): Promise<jadwal | null> {
    return JadwalSeminarKPRepository.findById(id);
  }

  public static async getAllJadwal(filter?: JadwalFilter): Promise<jadwal[]> {
    return JadwalSeminarKPRepository.findAll(filter);
  }

  public static async updateJadwal(id: string, data: UpdateJadwalDto): Promise<jadwal> {
    const validatedData = updateJadwalSchema.parse(data);

    const existingJadwal = await JadwalSeminarKPRepository.findById(id);
    if (!existingJadwal) {
      throw new APIError(`Waduh, Jadwal tidak ditemukan nih! 😭`);
    }

    if (data.nim && data.nim !== existingJadwal.nim) {
      const { eligible } = await MahasiswaService.verifikasiKelayakanSeminar(data.nim);
      if (!eligible) {
        throw new APIError(`Waduh, Mahasiswa belum memenuhi syarat seminar KP nih! 😭`, 401)
      }
    }

    const nim = existingJadwal.nim;

    if (validatedData.tanggal || validatedData.waktu_mulai || validatedData.waktu_selesai || validatedData.nama_ruangan) {
      const conflicts = await this.checkScheduleConflicts(
        data.tanggal || existingJadwal.tanggal!,
        data.waktu_mulai || existingJadwal.waktu_mulai!,
        data.waktu_selesai || existingJadwal.waktu_selesai!,
        data.nama_ruangan || existingJadwal.nama_ruangan!,
        id,
        nim as string
      );

      if (conflicts.hasDosenConflict || conflicts.hasRuanganConflict || conflicts.hasMahasiswaConflict) {
        throw new APIError(`Waduh, ada jadwal yang konflik nih! 😭`, 401);
      }

      if (validatedData.tanggal !== existingJadwal.tanggal || validatedData.nama_ruangan !== existingJadwal.nama_ruangan) {
        await JadwalSeminarKPRepository.createLogJadwal({
          log_type: "UPDATE",
          tanggal_lama: existingJadwal.tanggal,
          tanggal_baru: validatedData.tanggal || existingJadwal.tanggal!,
          ruangan_lama: existingJadwal.tanggal,
          ruangan_baru: validatedData.tanggal || existingJadwal.tanggal!,
          keterangan: "Jadwal Seminar KP Diperbarui",
          id_jadwal_seminar: Number(id) || null,
        });
      }
    }

    if (validatedData.status === status_jadwal.Jadwal_Ulang) {
      await JadwalSeminarKPRepository.createLogJadwal({
        log_type: "RESCHEDULE",
        tanggal_lama: existingJadwal.tanggal,
        tanggal_baru: validatedData.tanggal || existingJadwal.tanggal!,
        ruangan_lama: existingJadwal.tanggal,
        ruangan_baru: validatedData.tanggal || existingJadwal.tanggal!,
        keterangan: "Jadwal Seminar KP di Jadwalkan Ulang",
        id_jadwal_seminar: Number(id) || null,
      });
    }

    return JadwalSeminarKPRepository.update(id, data);
  }

  public static async deleteJadwal(id: string): Promise<jadwal> {
    const existingJadwal = await JadwalSeminarKPRepository.findById(id);
    if (!existingJadwal) {
      throw new APIError(`Waduh, Jadwal tidak ditemukan nih! 😭`);
    }

    await JadwalSeminarKPRepository.createLogJadwal({
      log_type: "DELETE",
      tanggal_lama: existingJadwal.tanggal,
      tanggal_baru: new Date(),
      ruangan_lama: existingJadwal.tanggal,
      ruangan_baru: new Date(),
      keterangan: "Jadwal sudah dihapus",
      id_jadwal_seminar: Number(id) || null,
    });

    return JadwalSeminarKPRepository.delete(id);
  }

  public static async completeJadwal(id: string): Promise<jadwal> {
    const existingJadwal = await JadwalSeminarKPRepository.findById(id);
    if (!existingJadwal) {
      throw new APIError(`Waduh, Jadwal tidak ditemukan nih! 😭`);
    }
    return this.updateJadwal(
      id, { 
        nim: existingJadwal.nim || "", 
        status: status_jadwal.Selesai 
      }
    );
  }

  public static async rescheduleJadwal(
    id: string,
    newData: {
      tanggal: Date;
      waktu_mulai: Date;
      waktu_selesai: Date;
      nama_ruangan: string;
    }
  ): Promise<jadwal> {
    const existingJadwal = await JadwalSeminarKPRepository.findById(id);
    if (!existingJadwal) {
      throw new APIError(`Waduh, Jadwal tidak ditemukan nih! 😭`);
    }

    const validatedData = rescheduleJadwalSchema.parse(newData);

    return this.updateJadwal(id, {
      ...validatedData,
      nim: existingJadwal.nim || "",
      status: status_jadwal.Jadwal_Ulang,
    });
  }

  public static async getJadwalByNIP(nip: string) {
    if (!nip || nip.trim() === '') {
      throw new APIError("Waduh, NIP dosen tidak ditemukan! 😭")
    }

    const jadwal = await JadwalSeminarKPRepository.findJadwalByNIP(nip)
    return jadwal
  }
}
