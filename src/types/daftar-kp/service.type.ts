import { CommonResponse } from "../global.type";
import { instansi, jenis_instansi, pendaftaran_kp } from "../../generated/prisma";
import { RepositoryRiwayatPendaftaranKPInterface } from "./repository.type";

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

export interface GetPendingDataInstansi extends CommonResponse {
    data : instansi[]
}