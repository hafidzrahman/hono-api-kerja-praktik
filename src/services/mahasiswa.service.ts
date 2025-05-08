import MahasiswaRepository from "../repositories/mahasiswa.repository"
import { APIError } from "../utils/api-error.util";

export default class MahasiswaService {
  public static async checkLevelAccess(email: string) {
    const {nim} = await MahasiswaRepository.findNIMByEmail(email)
    const {id, level_akses} = await MahasiswaRepository.getPendaftaranKP(nim)

    return {
      response: true,
      message:
        level_akses >= 5 ? "Sudah bisa diakses! 😁" : "Belum bisa diakses! 😡",
      data: {
        id: id,
        nim: nim,
        accessLevel: level_akses,
        hasAccess: level_akses >= 5,
      },
    }
  }

  public static async checkSeminarDocumentsValidation(nim: string): Promise<{
    canScheduleSeminar: boolean;
    pendaftaranId: string;
    missingOrInvalidDocuments: string[];
  }> {
    try {
      const { id: pendaftaranId } = await MahasiswaRepository.getPendaftaranKP(nim);
      
      const { allDokumenDivalidasi, statusDokumen } = 
        await MahasiswaRepository.cekDokumenSeminarKP(nim, pendaftaranId);
      
      const missingOrInvalidDocuments = statusDokumen
        .filter(doc => !doc.exists || !doc.validated)
        .map(doc => doc.type);
      
      return {
        canScheduleSeminar: allDokumenDivalidasi,
        pendaftaranId,
        missingOrInvalidDocuments
      };
    } catch (error: any) {
      throw new APIError(error.message);
    }
  }

  public static async verifikasiKelayakanSeminar(nim: string): Promise<{
    eligible: boolean;
    pendaftaran_id: string | null;
    errors: string[]
  }> {
    try {
      const errors: string[] = [];
      let pendaftaran_id: string | null = null;
      
      try {
        const { id, level_akses } = await MahasiswaRepository.getPendaftaranKP(nim);
        let pendaftaran_id = id;
        
        if (level_akses < 5) {
          errors.push(`Insufficient access level: current level is ${level_akses}, required level is 5`);
        }
      } catch (err: any) {
        errors.push(err.message || "Could not verify KP registration status");
        return { eligible: false, pendaftaran_id: null, errors };
      }
      
      const { canScheduleSeminar, missingOrInvalidDocuments } = 
        await MahasiswaService.checkSeminarDocumentsValidation(nim);
      
      if (!canScheduleSeminar) {
        errors.push(`Missing or invalid documents: ${missingOrInvalidDocuments.join(", ")}`);
      }
      
      return {
        eligible: errors.length === 0,
        pendaftaran_id,
        errors
      };
    } catch (error: any) {
      throw new APIError(error.message || "Error verifying seminar eligibility");
    }
  }
}