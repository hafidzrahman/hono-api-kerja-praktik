import { instansi, pendaftaran_kp } from "../generated/prisma";
import MahasiswaHelper from "../helpers/mahasiswa.helper";
import prisma from "../infrastructures/db.infrastructure";
import DaftarKPRepository from "../repositories/daftar-kp.repository";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { RepositoryRiwayatPendaftaranKPInterface } from "../types/daftar-kp/repository.type";
import { CreatePermohonanPendaftaranKPInterface, CreatePermohonanPendaftaranInstansiInterface, GetRiwayatPendaftaranKP, GetBerkasMahasiswa, GetPendaftaranKPTerbaru, ServicePendaftaranKPMahasiswa, ServiceDetailPendaftaranKPMahasiswa, GetAllDataInstansi, ServiceDetailInstansi, ServiceTanggalDaftarKP } from "../types/daftar-kp/service.type";
import { CommonResponse } from "../types/global.type";
import { APIError } from "../utils/api-error.util";

export default class DaftarKPService {

    public static async postTanggalDaftarKP(tanggalMulaiDaftarKP : string, tanggalTerakhirDaftarKP : string) {
        const data = await DaftarKPRepository.postTanggalDaftarKP(tanggalMulaiDaftarKP, tanggalTerakhirDaftarKP);

        return {
            response : true,
            message : "Berhasil mengupdate tanggal daftar KP",
            data
        }
    }

    public static async postTanggalDaftarKPLanjut(tanggalMulaiDaftarKP : string, tanggalTerakhirDaftarKP : string) {
        const data = await DaftarKPRepository.postTanggalDaftarKPLanjut(tanggalMulaiDaftarKP, tanggalTerakhirDaftarKP);

        return {
            response : true,
            message : "Berhasil mengupdate tanggal daftar KP",
            data
        }
    }

    public static async getTanggalDaftarKP() : Promise<ServiceTanggalDaftarKP> {
        const data = await DaftarKPRepository.getTanggalDaftarKP();

        if (!data) {
            throw new APIError("Gagal mendapatkan tanggal daftar KP", 404)
        }

        return {
            response : true,
            message : "Berhasil mendapatkan tanggal Daftar KP",
            data
        }
    }

    public static async getDataDetailInstansi(idInstansi : string) : Promise<ServiceDetailInstansi> {
        const data = await DaftarKPRepository.getDataDetailInstansi(idInstansi);
        if (!data) {
            throw new APIError("Data instansi tidak ditemukan", 404);
        }

        return {
            response : true,
            message : "Data instansi berhasil didapatkan",
            data
        }
    }

    public static async getDataKPDetailMahasiswa(idKP : string) : Promise<ServiceDetailPendaftaranKPMahasiswa> {
        const data = await DaftarKPRepository.getPendaftaranKPById(idKP);

        if (!data) {
            throw new APIError("Data pendaftaran KP mahasiswa tidak ditemukan");
        }

        const dataKP = await DaftarKPRepository.getDataKPDetailMahasiswa(data.id)

        return {
            response : true,
            message : "Data lengkap pendaftaran KP mahasiswa berhasil didapatkan",
            data : dataKP
        }
    }

    public static async getDataKPMahasiswa() : Promise<ServicePendaftaranKPMahasiswa> {
        const data = await DaftarKPRepository.getDataKPMahasiswa();

        return {
            response : true,
            message : "Data KP Mahasiswa berhasil didapatkan!",
            data
        }
    }

    public static async postTolakBerkasMahasiswa(id : string, message : string = "") : Promise<CommonResponse> {
        const dataKP = await DaftarKPRepository.getPendaftaranKPById(id)

        if (!dataKP) {
            throw new APIError("Data kerja praktek tidak ditemukan", 404);
        } else if (dataKP.level_akses % 2 !== 0) {
            throw new APIError("Level akses mahasiswa tidak memenuhi syarat")
        }

        await DaftarKPRepository.postTolakBerkasMahasiswa(dataKP.id, message !== "" ? message : "Link mungkin tidak sesuai atau tidak valid");

        return {
            response : true,
            message : "Berkas mahasiswa berhasil ditolak"
        }
    }

    public static async deleteDataInstansi(id : string) : Promise<CommonResponse> {
        const dataInstansi = await DaftarKPRepository.findInstansiById(id);

        if (!dataInstansi) {
            throw new APIError("Data instansi tidak ditemukan", 404)
        }

        await DaftarKPRepository.deleteDataInstansi(dataInstansi.id);

        return {
            response : true,
            message : "Data instansi berhasil dihapus"
        }
    }

    public static async postEditDataInstansi(id : string, status : string) : Promise<CommonResponse> {
        const dataInstansi = await DaftarKPRepository.findInstansiById(id);

        if (!dataInstansi) {
            throw new APIError("Data instansi tidak ditemukan", 404)
        }

        await DaftarKPRepository.postEditDataInstansi(dataInstansi.id, status);

        return {
            response : true,
            message : "Data instansi berhasil disimpan"
        }
    }

    public static async getAllDataInstansi() : Promise<GetAllDataInstansi> {
        const data = await DaftarKPRepository.getAllDataInstansi();

        return {
            response : true,
            message : "Data instansi berhasil didapatkan",
            data
        }

    }

    public static async getKPTerbaruMahasiswa(email : string) : Promise<GetPendaftaranKPTerbaru> {
        const dataMhs = await MahasiswaRepository.findByEmail({email});

        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404)
        }

        const data = await DaftarKPRepository.getKPTerbaruMahasiswa(dataMhs.nim);

        return {
            response : true,
            message : "Data KP mahasiswa saat ini berhasil didapatkan",
            data
        }
    }

    public static async createPermohonanPendaftaranKP({email, tanggalMulai, idInstansi, tujuanSuratInstansi} : CreatePermohonanPendaftaranKPInterface) : Promise<CommonResponse> {
        const dataMhs = await MahasiswaRepository.findByEmail({email})

        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404) 
        }

        await DaftarKPRepository.createPermomohonanKP({
            nim : dataMhs.nim, 
            tanggalMulai, 
            idInstansi, 
            tujuanSuratInstansi}
        )

            return {
                response : true,
                message : "Pendaftaran KP anda berhasil!"
            }
    }

    public static async createPermohonanPendaftaranInstansi({email, namaInstansi, alamatInstansi, namaPenanggungJawabInstansi, telpPenanggungJawabInstansi, jenisInstansi, longitude, latitude, profilSingkat} : CreatePermohonanPendaftaranInstansiInterface) : Promise<CommonResponse> {
        const dataMhs = await MahasiswaRepository.findByEmail({email})

        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404) 
        }

        await DaftarKPRepository.createPermomohonanInstansi({
            nim : dataMhs.nim,
            namaInstansi, 
            alamatInstansi, 
            namaPenanggungJawabInstansi, 
            telpPenanggungJawabInstansi, 
            jenisInstansi, 
            longitude, 
            latitude, 
            profilSingkat
        }
        )

            return {
                response : true,
                message : "Pendaftaran Instansi anda berhasil!"
            }
    }

    public static async getRiwayatPendaftaranKP(email : string) : Promise<GetRiwayatPendaftaranKP> {
        const dataMhs = await MahasiswaRepository.findByEmail({email})

        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404) 
        }

        const data = await DaftarKPRepository.getRiwayatPendaftaranKP(dataMhs.nim)

            return {
                response : true,
                message : "Riwayat KP anda berhasil didapatkan!",
                data
            }
    }

    public static async getBerkasMahasiswa() : Promise<GetBerkasMahasiswa> {

        const data = {
            suratPengantar : [] as pendaftaran_kp[] | null,
            suratBalasan : [] as pendaftaran_kp[] | null,
            idPengajuanDosenPembimbing : [] as pendaftaran_kp[] | null,
            suratPenunjukkanDosenPembimbing : [] as pendaftaran_kp[] | null,
            suratPerpanjanganKP : [] as pendaftaran_kp[] | null
        }
        
        data.suratPengantar = await DaftarKPRepository.getBerkasSuratPengantarMahasiswa()

        data.suratBalasan = await DaftarKPRepository.getBerkasSuratBalasanMahasiswa()

        data.idPengajuanDosenPembimbing = await DaftarKPRepository.getBerkasIdPengajuanDosenPembimbingMahasiswa()

        data.suratPenunjukkanDosenPembimbing = await DaftarKPRepository.getBerkasPenunjukkanDosenPembimbingMahasiswa()

        data.suratPerpanjanganKP = await DaftarKPRepository.getBerkasSuratPerpanjanganKPMahasiswa()

        return {
            response : true,
            message : "Berkas mahasiswa berhasil didapatkan",
            data
        }
    }

    public static async postSuratPengantarKP(email : string, linkSuratPengantarKP : string) : Promise<CommonResponse> {
        const dataMhs = await MahasiswaRepository.findByEmail({email});

        const tanggalPendaftaran = await prisma.option.findUnique({
            where : {
                id : 999
            }
        });

        if (new Date(tanggalPendaftaran?.tanggal_akhir_pendaftaran_kp!).getTime() - (new Date()).getTime() <= 0) {
            throw new APIError("Batas waktu perpanjangan KP Sudah Habis")
        } 
        
        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404);
        }

        await DaftarKPRepository.postSuratPengantarKP(dataMhs.nim, linkSuratPengantarKP);

        return {
            response : true,
            message : "Link surat pengantar berhasil diunggah"
        }
        
    }

    public static async postSuratBalasanKP(email : string, linkSuratBalasanKP : string) : Promise<CommonResponse> {
        const dataMhs = await MahasiswaRepository.findByEmail({email});

        const tanggalPendaftaran = await prisma.option.findUnique({
            where : {
                id : 999
            }
        });

        if (new Date(tanggalPendaftaran?.tanggal_akhir_pendaftaran_kp!).getTime() - (new Date()).getTime() <= 0) {
            throw new APIError("Batas waktu perpanjangan KP Sudah Habis")
        } 
        
        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404);
        }

        await DaftarKPRepository.postSuratBalasanKP(dataMhs.nim, linkSuratBalasanKP);

        return {
            response : true,
            message : "Link surat pengantar berhasil diunggah"
        }
        
    }

    public static async postIdPengajuanDosenPembimbingKP(email : string, idPengajuanDosenPembimbingKP : string) : Promise<CommonResponse> {
        const dataMhs = await MahasiswaRepository.findByEmail({email});
        
        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404);
        }

        const tanggalPendaftaran = await prisma.option.findUnique({
            where : {
                id : 999
            }
        });

        if (new Date(tanggalPendaftaran?.tanggal_akhir_pendaftaran_kp!).getTime() - (new Date()).getTime() <= 0) {
            throw new APIError("Batas waktu perpanjangan KP Sudah Habis")
        } 

        await DaftarKPRepository.postIdPengajuanDosenPembimbingKP(dataMhs.nim, idPengajuanDosenPembimbingKP);

        return {
            response : true,
            message : "Link surat pengantar berhasil diunggah"
        }
        
    }

    public static async getDataInstansi() {
        const data = await DaftarKPRepository.getDataInstansi();

        return {
            response : true,
            message : "Data instansi berhasil diambil",
            data
        }
    }

    public static async postSuratPenunjukkanDosenPembimbingKP(email : string, linkSuratPenunjukkanDosenPembimbingKP : string) : Promise<CommonResponse> {
        const dataMhs = await MahasiswaRepository.findByEmail({email});

        const tanggalPendaftaran = await prisma.option.findUnique({
            where : {
                id : 999
            }
        });

        if (new Date(tanggalPendaftaran?.tanggal_akhir_pendaftaran_kp!).getTime() - (new Date()).getTime() <= 0) {
            throw new APIError("Batas waktu perpanjangan KP Sudah Habis")
        } 
        
        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404);
        }

        await DaftarKPRepository.postSuratPenunjukkanDosenPembimbing(dataMhs.nim, linkSuratPenunjukkanDosenPembimbingKP);
        return {
            response : true,
            message : "Link surat pengantar berhasil diunggah"
        }
        
    }

    public static async postSuratPerpanjanganKP(email : string, linkSuratPerpanjanganKP : string) : Promise<CommonResponse> {
        // [NOTE] Validasi dulu apakah fitur perpanjangan KP sudah dibuka oleh koordinator KP?
        const tanggalPendaftaran = await prisma.option.findUnique({
            where : {
                id : 999
            }
        });

        if (new Date(tanggalPendaftaran?.tanggal_akhir_pendaftaran_kp_lanjut!).getTime() - (new Date()).getTime() <= 0) {
            throw new APIError("Batas waktu perpanjangan KP Sudah Habis")
        } 
        
        const dataMhs = await MahasiswaRepository.findByEmail({email});
        
        if (!dataMhs || !dataMhs.nim) {
            throw new APIError("Data mahasiswa tidak ditemukan", 404);
        }

        await DaftarKPRepository.postSuratPerpanjanganKP(dataMhs.nim, linkSuratPerpanjanganKP);
        return {
            response : true,
            message : "Link surat pengantar berhasil diunggah"
        }
        
    }

    public static async postBerkasMahasiswa(id : string) : Promise<CommonResponse> {
        const dataKP = await DaftarKPRepository.getPendaftaranKPById(id);

        if (!dataKP) {
            throw new APIError("Data pendaftaran kerja praktek tidak ditemukan")
        } else if (dataKP.level_akses % 2 !== 0  || dataKP.level_akses <= 0) {
            throw new APIError("Level akses mahasiswa tidak memenuhi syarat")
        }

        await DaftarKPRepository.postBerkasMahasiswa(dataKP.id, dataKP.level_akses)

        return {
            response : true,
            message : "Berkas mahasiswa berhasil disetujui"
        }
    }

    
}