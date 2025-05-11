import { jadwal } from "../generated/prisma";
import JadwalRepository from "../repositories/jadwal.repository";
import MahasiswaService from "./mahasiswa.service";
import DosenService from "./dosen.service";
import { CreateJadwalDto, UpdateJadwalDto } from "../validators/jadwal.validator";
import { APIError } from "../utils/api-error.util";
import { createDateTimeFromStrings, isEligibleForScheduling } from "../helpers/date.helper";
import { CreateJadwalInput, JadwalWithRelations, LogJadwalInput, UpdateJadwalInput } from "../types/seminar-kp/jadwal.type";

export default class JadwalService {
  public static async postJadwal(data: CreateJadwalDto): Promise<jadwal> {
    const tanggal = new Date(data.tanggal);
    const waktu_mulai = createDateTimeFromStrings(data.tanggal, data.waktu_mulai);

    const waktu_selesai = new Date(waktu_mulai);
    waktu_selesai.setHours(waktu_selesai.getHours() + 1);

    const isStudentEligible = await isEligibleForScheduling(data.id_pendaftaran_kp);
    if (!isStudentEligible) {
      throw new APIError(`Waduh, dokumen nya belum divalidasi ni! 😭`, 400);
    }

    const pendaftaran = await JadwalRepository.getPendaftaranKpById(data.id_pendaftaran_kp);
    if (!pendaftaran) {
      throw new APIError(`Waduh, pendaftaran KP tidak ditemukan! 😭`, 404);
    }

    if (!pendaftaran.nip_penguji) {
      throw new APIError(`Waduh, Dosen penguji belum ditentukan`, 400);
    }

    await MahasiswaService.validateMahasiswaExists(data.nim);

    const { hasConflict: studentHasConflict, conflicts: studentConflicts } = await MahasiswaService.cekJadwalKonflikMahasiswa(data.nim, tanggal, waktu_mulai, waktu_selesai);

    if (studentHasConflict) {
      throw new APIError(
        `Jadwal mahasiswa konflik: ${studentConflicts.map((c) => `${new Date(c.tanggal).toLocaleDateString()} ${new Date(c.waktu_mulai).toLocaleTimeString()} - ${new Date(c.waktu_selesai).toLocaleTimeString()}`).join(", ")}`,
        400
      );
    }

    const { hasConflict: pengujiHasConflict, conflicts: pengujiConflicts } = await DosenService.cekJadwalKonflikDosen(pendaftaran.nip_penguji, tanggal, waktu_mulai, waktu_selesai);

    if (pengujiHasConflict) {
      throw new APIError(
        `Jadwal dosen penguji konflik: ${pengujiConflicts.map((c) => `${new Date(c.tanggal).toLocaleDateString()} ${new Date(c.waktu_mulai).toLocaleTimeString()} - ${new Date(c.waktu_selesai).toLocaleTimeString()}`).join(", ")}`,
        400
      );
    }

    if (pendaftaran.nip_pembimbing) {
      const { hasConflict: pembimbingHasConflict, conflicts: pembimbingConflicts } = await DosenService.cekJadwalKonflikDosen(pendaftaran.nip_pembimbing, tanggal, waktu_mulai, waktu_selesai);

      if (pembimbingHasConflict) {
        throw new APIError(
          `Jadwal dosen pembimbing konflik: ${pembimbingConflicts.map((c) => `${new Date(c.tanggal).toLocaleDateString()} ${new Date(c.waktu_mulai).toLocaleTimeString()} - ${new Date(c.waktu_selesai).toLocaleTimeString()}`).join(", ")}`,
          400
        );
      }
    }

    const isRoomAvailable = await JadwalRepository.checkRuanganAvailability(data.nama_ruangan, tanggal, waktu_mulai, waktu_selesai);

    if (!isRoomAvailable) {
      throw new APIError("Ruangan tidak tersedia pada waktu yang dipilih", 400);
    }

    const jadwalInput: CreateJadwalInput = {
      tanggal,
      waktu_mulai,
      nim: data.nim,
      nama_ruangan: data.nama_ruangan,
      id_pendaftaran_kp: data.id_pendaftaran_kp,
    };

    const createdJadwal = await JadwalRepository.postJadwal(jadwalInput);

    await JadwalRepository.logJadwalChanges({
      log_type: "CREATE",
      tanggal_baru: tanggal,
      ruangan_baru: tanggal,
      keterangan: `Pembuatan jadwal untuk NIM ${data.nim}`,
    });

    return createdJadwal;
  }

  public static async putJadwal(data: UpdateJadwalDto): Promise<jadwal> {
    const existingJadwal = await JadwalRepository.getJadwalById(data.id);
    if (!existingJadwal) {
      throw new APIError("Jadwal tidak ditemukan", 404);
    }

    let tanggal = existingJadwal.tanggal;
    let waktu_mulai = existingJadwal.waktu_mulai;
    let waktu_selesai = existingJadwal.waktu_selesai;

    if (data.tanggal) {
      tanggal = new Date(data.tanggal);
    }

    if (data.waktu_mulai) {
      waktu_mulai = createDateTimeFromStrings(tanggal ? tanggal.toISOString().split("T")[0] : new Date().toISOString().split("T")[0], data.waktu_mulai);

      waktu_selesai = new Date(waktu_mulai);
      waktu_selesai.setHours(waktu_selesai.getHours() + 1);
    }

    if (!tanggal || !waktu_mulai || !waktu_selesai) {
      throw new APIError("Invalid date or time", 400);
    }

    if (existingJadwal.nim) {
      const { hasConflict: studentHasConflict, conflicts: studentConflicts } = await MahasiswaService.cekJadwalKonflikMahasiswa(existingJadwal.nim, tanggal, waktu_mulai, waktu_selesai);

      if (studentHasConflict) {
        const filteredConflicts = studentConflicts.filter((c) => c.id !== data.id);
        if (filteredConflicts.length > 0) {
          throw new APIError(
            `Jadwal mahasiswa konflik: ${filteredConflicts.map((c) => `${new Date(c.tanggal).toLocaleDateString()} ${new Date(c.waktu_mulai).toLocaleTimeString()} - ${new Date(c.waktu_selesai).toLocaleTimeString()}`).join(", ")}`,
            400
          );
        }
      }
    }

    if (existingJadwal.pendaftaran_kp) {
      const nipPenguji = existingJadwal.pendaftaran_kp.nip_penguji;
      if (nipPenguji) {
        const { hasConflict: pengujiHasConflict, conflicts: pengujiConflicts } = await DosenService.cekJadwalKonflikDosen(nipPenguji, tanggal, waktu_mulai, waktu_selesai);

        if (pengujiHasConflict) {
          const filteredConflicts = pengujiConflicts.filter((c) => c.id !== data.id);
          if (filteredConflicts.length > 0) {
            throw new APIError(
              `Jadwal dosen penguji konflik: ${filteredConflicts.map((c) => `${new Date(c.tanggal).toLocaleDateString()} ${new Date(c.waktu_mulai).toLocaleTimeString()} - ${new Date(c.waktu_selesai).toLocaleTimeString()}`).join(", ")}`,
              400
            );
          }
        }
      }

      const nipPembimbing = existingJadwal.pendaftaran_kp.nip_pembimbing;
      if (nipPembimbing) {
        const { hasConflict: pembimbingHasConflict, conflicts: pembimbingConflicts } = await DosenService.cekJadwalKonflikDosen(nipPembimbing, tanggal, waktu_mulai, waktu_selesai);

        if (pembimbingHasConflict) {
          const filteredConflicts = pembimbingConflicts.filter((c) => c.id !== data.id);
          if (filteredConflicts.length > 0) {
            throw new APIError(
              `Jadwal dosen pembimbing konflik: ${filteredConflicts.map((c) => `${new Date(c.tanggal).toLocaleDateString()} ${new Date(c.waktu_mulai).toLocaleTimeString()} - ${new Date(c.waktu_selesai).toLocaleTimeString()}`).join(", ")}`,
              400
            );
          }
        }
      }
    }

    if (data.nama_ruangan || data.tanggal || data.waktu_mulai) {
      const roomToCheck = data.nama_ruangan || existingJadwal.nama_ruangan;
      if (roomToCheck) {
        const isRoomAvailable = await JadwalRepository.checkRuanganAvailability(roomToCheck, tanggal, waktu_mulai, waktu_selesai, data.id);

        if (!isRoomAvailable) {
          throw new APIError("Ruangan tidak tersedia pada waktu yang dipilih", 400);
        }
      }
    }

    const updateInput: UpdateJadwalInput = {
      id: data.id,
      tanggal: data.tanggal ? tanggal : undefined,
      waktu_mulai: data.waktu_mulai ? waktu_mulai : undefined,
      waktu_selesai: data.waktu_mulai ? waktu_selesai : undefined,
      status: data.status,
      nama_ruangan: data.nama_ruangan,
    };

    const updatedJadwal = await JadwalRepository.putJadwal(updateInput);

    await JadwalRepository.logJadwalChanges({
      log_type: "UPDATE",
      tanggal_lama: existingJadwal.tanggal,
      tanggal_baru: tanggal,
      ruangan_lama: existingJadwal.tanggal,
      ruangan_baru: tanggal,
      keterangan: `Perubahan jadwal ${existingJadwal.nim || "unknown"}`,
      nip: existingJadwal.pendaftaran_kp?.nip_penguji || null,
    });

    return updatedJadwal;
  }

  public static async getRuanganOptions(): Promise<{ nama: string }[]> {
    return JadwalRepository.getRuangans();
  }
}
