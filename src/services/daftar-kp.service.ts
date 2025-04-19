import MahasiswaHelper from "../helpers/mahasiswa.helper";
import DaftarKPRepository from "../repositories/daftar-kp.repository";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { CreatePermohonanRequestInterface, CreatePermohonanResponseInterface } from "../types/daftar-kp/service.type";
import { APIError } from "../utils/api-error.util";

export default class DaftarKPService {

    public static async createPermohonan({ email, tanggalMulai, idInstansi, tujuanSuratInstansi }: CreatePermohonanRequestInterface): Promise<CreatePermohonanResponseInterface> {

        const infoDasarMahasiswa = await MahasiswaRepository.findByEmail({email});
        if (!infoDasarMahasiswa) {
            throw new APIError('Mahasiswa tidak ditemukan! 😭', 404);
        }
        const { nim } = infoDasarMahasiswa;
        const semester = MahasiswaHelper.getSemesterByNIM(nim);

        // logika bisnis lainnya buat disini lengkap detail, sampe mhs bisa daftar kp

        const pendaftaranKP = await DaftarKPRepository.createPermohonan({
            nim: nim,
            semester: semester,
        });

        return {
            response: true,
            message: 'Yeay, Permohonan KP berhasil dibuat! 😁',            
        };
    }
    
}