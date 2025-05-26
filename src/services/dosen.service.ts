import { dosen } from "../generated/prisma";
import DosenRepository from "../repositories/dosen.repository";
import { APIError } from "../utils/api-error.util";
import DateHelper from "../helpers/date.helper";

export default class DosenService {
  public static async getDosenByNIP(nip: string){
    const dosen = await DosenRepository.findByNIP(nip)
    if (!dosen) {
      throw new APIError(`Waduh, Dosen dengan NIP ${nip} tidak ditemukan! 😭`, 404);
    }
    return dosen;
  }

  public static async getDosenByEmail(email: string){
    const dosen = await DosenRepository.findByEmail({email});
    if (!dosen) {
      throw new APIError(`Waduh, Dosen dengan email ${email} tidak ditemukan!`, 404);
    }
    return dosen;
  }

  public static async cekJadwalKonflikDosen(
    nip: string,
    tanggal: Date,
    waktu_mulai: Date,
    waktu_selesai: Date
  ): Promise<{
    hasConflict: boolean,
    conflicts: any[]
  }> {
    await this.getDosenByNIP(nip)

    const jadwal = await DosenRepository.getJadwalDosen(nip, tanggal);

    const conflicts = jadwal.filter((jadwal) => {
      return DateHelper.isTimeOverlapping(
        waktu_mulai,
        waktu_selesai,
        jadwal.waktu_mulai,
        jadwal.waktu_selesai
      )
    })

    return {
      hasConflict: conflicts.length > 0,
      conflicts
    }
  }

  public static async getNamaByNip(nip: string) {
    const dosen = await DosenRepository.findNamaDosenByNip(nip)
    if (!dosen) {
      throw new APIError(`Waduh, dosen tidak ditemukan ! 😭`, 404)
    }

    return dosen
  }
}