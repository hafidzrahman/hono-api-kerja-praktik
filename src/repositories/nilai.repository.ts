import prisma from "../infrastructures/db.infrastructure";

export default class NilaiRepository {
  public static async createNilaiPenguji(
    id: string,
    penguasaanKeilmuan: number,
    kemampuanPresentasi: number,
    kesesuaianUrgensi: number,
    catatan: string | null,
    nilaiPenguji: number,
    nim: string,
    nip: string,
    idJadwalSeminar?: string
  ) {
    const nilai = await prisma.nilai.upsert({
      where: { id },
      update: {
        nilai_penguji: nilaiPenguji,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
      create: {
        nilai_penguji: nilaiPenguji,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
    });

    await prisma.komponen_penilaian_penguji.create({
      data: {
        penguasaan_keilmuan: penguasaanKeilmuan,
        kemampuan_presentasi: kemampuanPresentasi,
        kesesuaian_urgensi: kesesuaianUrgensi,
        catatan,
        id_nilai: nilai.id,
      },
    });

    return nilai;
  }

  public static async createNilaiPembimbing(
    id: string,
    penyelesaianMasalah: number,
    bimbinganSikap: number,
    kualitasLaporan: number,
    catatan: string | null,
    nilaiPembimbing: number,
    nim: string,
    nip: string,
    idJadwalSeminar?: string
  ) {
    const nilai = await prisma.nilai.upsert({
      where: { id },
      update: {
        nilai_pembimbing: nilaiPembimbing,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
      create: {
        nilai_pembimbing: nilaiPembimbing,
        nim,
        nip,
        id_jadwal_seminar: idJadwalSeminar,
      },
    });

    await prisma.komponen_penilaian_pembimbing.create({
      data: {
        penyelesaian_masalah: penyelesaianMasalah,
        bimbingan_sikap: bimbinganSikap,
        kualitas_laporan: kualitasLaporan,
        catatan,
        id_nilai: nilai.id,
      },
    });

    return nilai;
  }

  public static async getNilaiById(id: string) {
    return prisma.nilai.findUnique({
      where: { id },
      include: {
        komponen_penilaian_penguji: true,
        komponen_penilaian_pembimbing: true,
        komponen_penilaian_instansi: true,
        mahasiswa: {
          select: {
            nim: true,
            nama: true,
            email: true,
          },
        },
      },
    });
  }

  public static async updateNilaiAkhir(id: string, nilaiAkhir: number) {
    return prisma.nilai.update({
      where: { id },
      data: {
        nilai_akhir: nilaiAkhir,
      },
    });
  }
}