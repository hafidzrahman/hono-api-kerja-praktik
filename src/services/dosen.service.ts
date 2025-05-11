import { dosen } from "../generated/prisma";
import DosenRepository from "../repositories/dosen.repository";
import { APIError } from "../utils/api-error.util";
import { isTimeOverlapping } from "../helpers/date.helper";

export default class DosenService {
  public static async getDosenByNIP(nip: string): Promise<dosen | null> {
    return DosenRepository.findByNIP({nip})
  }

  public static async validateDosenExists(nip: string): Promise<dosen> {
    const dosen = await DosenRepository.findByNIP({nip})
    if (!dosen) {
      throw new APIError(`Waduh, dosen dengan NIP ${nip} tidak ditemukan! 😭`, 404);
    }
    return dosen
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
    await this.validateDosenExists(nip)

    const jadwal = await DosenRepository.getJadwalDosen(nip, tanggal);

    const conflicts = jadwal.filter((jadwal) => {
      return isTimeOverlapping(
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
}