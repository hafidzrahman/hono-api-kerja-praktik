import { CommonResponse } from "./global.type";

export interface MahasiswaRepositoryFindByEmailInterface {
    email: string;
    nim: string;
    nama: string;
}

export interface MahasiswaServiceCreatePermohonanResponse extends CommonResponse {

}