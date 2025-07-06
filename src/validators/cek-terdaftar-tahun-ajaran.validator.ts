import prisma from "../infrastructures/db.infrastructure";
import NilaiRepository from "../repositories/nilai.repository";

export async function cekTerdaftarTahunAjaran(nim : string): Promise<boolean> {
  const getTahunAjaran = (await NilaiRepository.getTahunAjaranSekarang())!.id;

  const dataKP = await prisma.pendaftaran_kp.findFirst({
    where: {
      nim,
      id_tahun_ajaran: getTahunAjaran,
    },
  });

  if (dataKP) {
    return true;
  }

  return false;
}
