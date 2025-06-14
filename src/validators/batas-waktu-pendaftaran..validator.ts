import DaftarKPRepository from "../repositories/daftar-kp.repository";

export async function IsPendaftaranKPClosed(): Promise<boolean> {
  const tanggalKP = (await DaftarKPRepository.getTanggalDaftarKP())!;
  if (
    tanggalKP.tanggal_mulai_pendaftaran_kp === null ||
    tanggalKP.tanggal_mulai_pendaftaran_kp === undefined ||
    tanggalKP.tanggal_mulai_pendaftaran_kp.getTime() > new Date().getTime() ||
    tanggalKP.tanggal_akhir_pendaftaran_kp === null ||
    tanggalKP.tanggal_akhir_pendaftaran_kp === undefined ||
    tanggalKP.tanggal_akhir_pendaftaran_kp.getTime() - new Date().getTime() <= 0
  ) {
    return true;
  }
  return false;
}

export async function IsPendaftaranKPLanjutClosed(): Promise<boolean> {
  const tanggalKP = (await DaftarKPRepository.getTanggalDaftarKP())!;

  if (
    tanggalKP.tanggal_mulai_pendaftaran_kp_lanjut === null ||
    tanggalKP.tanggal_mulai_pendaftaran_kp_lanjut === undefined ||
    tanggalKP.tanggal_mulai_pendaftaran_kp_lanjut.getTime() >
      new Date().getTime() ||
    tanggalKP.tanggal_akhir_pendaftaran_kp_lanjut === null ||
    tanggalKP.tanggal_akhir_pendaftaran_kp_lanjut === undefined ||
    tanggalKP.tanggal_akhir_pendaftaran_kp_lanjut.getTime() -
      new Date().getTime() <=
      0
  ) {
    return true;
  }
  return false;
}
