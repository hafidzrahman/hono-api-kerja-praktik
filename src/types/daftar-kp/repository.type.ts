import { status_pendaftaran } from "../../generated/prisma";
import { CreatePermohonanPendaftaranKPInterface, CreatePermohonanPendaftaranInstansiInterface } from "./service.type";

// utk params
export interface RepositoryPendaftaranKPInterface extends Omit<CreatePermohonanPendaftaranKPInterface, 'email'>{
    nim : string,
}

export interface RepositoryPendaftaranInstansiInterface extends Omit<CreatePermohonanPendaftaranInstansiInterface, 'email'>{
    nim : string,
}

// utk return
export interface RepositoryRiwayatPendaftaranKPInterface {
        status : status_pendaftaran | null | undefined,
        tanggal_mulai : Date,
        instansi : {
            nama : string
        } | null
}