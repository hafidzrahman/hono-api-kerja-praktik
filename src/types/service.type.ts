import { CommonResponse } from "../global.type";
import { $Enums, instansi, jenis_instansi, option, pendaftaran_kp } from "../../generated/prisma";
import { GetAllDataInstansiRepository, RepositoryDetailPendaftaranKPMahasiswa, RepositoryPendaftaranKPMahasiswaInterface, RepositoryRiwayatPendaftaranKPInterface } from "./repository.type";

export interface CreatePermohonanPendaftaranKPInterface {
    email : string,
    tanggalMulai : Date,
    idInstansi : string,
    tujuanSuratInstansi : string
}

export interface CreatePermohonanPendaftaranInstansiInterface {
    email : string,
    namaInstansi : string,
    alamatInstansi : string,
    jenisInstansi : jenis_instansi,
    profilSingkat? : string
    longitude? : number,
    latitude? : number,
    namaPenanggungJawabInstansi : string,
    telpPenanggungJawabInstansi : string
}

export interface GetRiwayatPendaftaranKP extends CommonResponse {
    data : RepositoryRiwayatPendaftaranKPInterface[] | null
}

export interface GetBerkasMahasiswa extends CommonResponse {
    data : {
        suratPengantar : pendaftaran_kp[] | null,
        suratBalasan : pendaftaran_kp[] | null,
        idPengajuanDosenPembimbing : pendaftaran_kp[] | null,
        suratPenunjukkanDosenPembimbing : pendaftaran_kp[] | null,
        suratPerpanjanganKP : pendaftaran_kp[] | null
    }
}

export interface GetPendaftaranKPTerbaru extends CommonResponse {
    data : pendaftaran_kp | null
}

export interface GetAllDataInstansi extends CommonResponse {
    data : GetAllDataInstansiRepository[]
}

export interface ServicePendaftaranKPMahasiswa extends CommonResponse {
    data : RepositoryPendaftaranKPMahasiswaInterface[]
}

export interface ServiceDetailPendaftaranKPMahasiswa extends CommonResponse {
    data : RepositoryDetailPendaftaranKPMahasiswa | null
}

export interface ServiceDetailInstansi extends CommonResponse {
    data : instansi | null
}

export interface ServiceTanggalDaftarKP extends CommonResponse {
    data : option | null
}

export interface ServiceUpdateInstansiKP extends CommonResponse {
    data : instansi | null
}