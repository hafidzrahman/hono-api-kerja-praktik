import prisma from "../infrastructures/db.infrastructure";

export default class MahasiswaHelper {
  public static getSemesterByNIM(nim: string): number {
    const angkatan = nim.substring(1, 3);
    const tahunMasuk = 2000 + Number(angkatan);

    const tahunSekarang = new Date().getFullYear();
    const bulanSekarang = new Date().getMonth();

    let tahunLewat = tahunSekarang - tahunMasuk;
    let semester = tahunLewat * 2;

    if (bulanSekarang >= 7) {
      semester += 1;
    }
    return semester;
  }


}
