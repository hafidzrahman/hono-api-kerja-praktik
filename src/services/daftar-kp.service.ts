import MahasiswaHelper from "../helpers/mahasiswa.helper";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { MahasiswaServiceCreatePermohonanResponse } from "../types/mahasiswa.type";
import { APIError } from "../utils/api-error.util";

export default class DaftarKPService {

    public static async createPermohonan(email: string, tanggalTerdaftar: Date, idInstansi: string, tujuanSuratInstansi: string): Promise<MahasiswaServiceCreatePermohonanResponse> {
        const infoDasarMahasiswa = await MahasiswaRepository.findByEmail(email);
        if (!infoDasarMahasiswa) {
            throw new APIError('Mahasiswa tidak ditemukan! 😭', 404);
        }
        const { nim } = infoDasarMahasiswa;
        const semester = MahasiswaHelper.getSemesterByNIM(nim);

        return {
            response: true,
            message: 'Berikut info dosen lengkap serta detail mahasiswa per angkatan (max 8 akt)! 😁',            
        };
    }
    
}