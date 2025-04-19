import { CommonResponse } from "../global.type";

export interface CreatePermohonanRequestInterface {
    email: string;
	tanggalMulai: Date;
	idInstansi: string;
	tujuanSuratInstansi: string;
}

export interface CreatePermohonanResponseInterface extends CommonResponse {

}