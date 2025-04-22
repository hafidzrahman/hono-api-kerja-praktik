import { PrismaClient } from '../generated/prisma';
import { 
  KomponenPenilaianInstansi, 
  KomponenPenilaianPembimbing, 
  KomponenPenilaianPenguji 
} from '../types/nilai-seminar-kp.type';

const prisma = new PrismaClient();

export const createOrUpdateNilai = async (
  nim: string,
  nip?: string,
  id_pembimbing_instansi?: string
) => {
  try {
    // Cek apakah nilai untuk mahasiswa sudah ada
    const existingNilai = await prisma.nilai.findFirst({
      where: {
        nim,
        ...(nip ? { nip } : {}),
        ...(id_pembimbing_instansi ? { id_pembimbing_instansi } : {})
      }
    });

    if (existingNilai) {
      return existingNilai;
    }

    // Buat entri nilai baru jika belum ada
    return await prisma.nilai.create({
      data: {
        nim,
        ...(nip ? { nip } : {}),
        ...(id_pembimbing_instansi ? { id_pembimbing_instansi } : {})
      }
    });
  } catch (error) {
    console.error('Error in createOrUpdateNilai:', error);
    throw error;
  }
};

export const updateNilaiInstansi = async (
  idNilai: string,
  nilai_instansi: number
) => {
  try {
    return await prisma.nilai.update({
      where: { id: idNilai },
      data: { nilai_instansi }
    });
  } catch (error) {
    console.error('Error in updateNilaiInstansi:', error);
    throw error;
  }
};

export const updateNilaiPembimbing = async (
  idNilai: string,
  nilai_pembimbing: number
) => {
  try {
    return await prisma.nilai.update({
      where: { id: idNilai },
      data: { nilai_pembimbing }
    });
  } catch (error) {
    console.error('Error in updateNilaiPembimbing:', error);
    throw error;
  }
};

export const updateNilaiPenguji = async (
  idNilai: string,
  nilai_penguji: number
) => {
  try {
    return await prisma.nilai.update({
      where: { id: idNilai },
      data: { nilai_penguji }
    });
  } catch (error) {
    console.error('Error in updateNilaiPenguji:', error);
    throw error;
  }
};

export const updateNilaiAkhir = async (
  idNilai: string,
  nilai_akhir: number | null
) => {
  try {
    return await prisma.nilai.update({
      where: { id: idNilai },
      data: { nilai_akhir }
    });
  } catch (error) {
    console.error('Error in updateNilaiAkhir:', error);
    throw error;
  }
};

export const createKomponenPenilaianInstansi = async (
  idNilai: string,
  komponenPenilaian: KomponenPenilaianInstansi
) => {
  try {
    const { masukan, ...nilaiKomponen } = komponenPenilaian;
    
    return await prisma.komponen_penilaian_instansi.create({
      data: {
        ...nilaiKomponen,
        masukan: masukan || null,
        id_nilai: idNilai
      }
    });
  } catch (error) {
    console.error('Error in createKomponenPenilaianInstansi:', error);
    throw error;
  }
};

export const updateKomponenPenilaianInstansi = async (
  idKomponen: string,
  komponenPenilaian: KomponenPenilaianInstansi
) => {
  try {
    const { masukan, ...nilaiKomponen } = komponenPenilaian;
    
    return await prisma.komponen_penilaian_instansi.update({
      where: { id: idKomponen },
      data: {
        ...nilaiKomponen,
        masukan: masukan || null
      }
    });
  } catch (error) {
    console.error('Error in updateKomponenPenilaianInstansi:', error);
    throw error;
  }
};

export const createKomponenPenilaianPembimbing = async (
  idNilai: string,
  komponenPenilaian: KomponenPenilaianPembimbing
) => {
  try {
    const { catatan, ...nilaiKomponen } = komponenPenilaian;
    
    return await prisma.komponen_penilaian_pembimbing.create({
      data: {
        ...nilaiKomponen,
        catatan: catatan || null,
        id_nilai: idNilai
      }
    });
  } catch (error) {
    console.error('Error in createKomponenPenilaianPembimbing:', error);
    throw error;
  }
};

export const updateKomponenPenilaianPembimbing = async (
  idKomponen: string,
  komponenPenilaian: KomponenPenilaianPembimbing
) => {
  try {
    const { catatan, ...nilaiKomponen } = komponenPenilaian;
    
    return await prisma.komponen_penilaian_pembimbing.update({
      where: { id: idKomponen },
      data: {
        ...nilaiKomponen,
        catatan: catatan || null
      }
    });
  } catch (error) {
    console.error('Error in updateKomponenPenilaianPembimbing:', error);
    throw error;
  }
};

export const createKomponenPenilaianPenguji = async (
  idNilai: string,
  komponenPenilaian: KomponenPenilaianPenguji
) => {
  try {
    const { catatan, ...nilaiKomponen } = komponenPenilaian;
    
    return await prisma.komponen_penilaian_penguji.create({
      data: {
        ...nilaiKomponen,
        catatan: catatan || null,
        id_nilai: idNilai
      }
    });
  } catch (error) {
    console.error('Error in createKomponenPenilaianPenguji:', error);
    throw error;
  }
};

export const updateKomponenPenilaianPenguji = async (
  idKomponen: string,
  komponenPenilaian: KomponenPenilaianPenguji
) => {
  try {
    const { catatan, ...nilaiKomponen } = komponenPenilaian;
    
    return await prisma.komponen_penilaian_penguji.update({
      where: { id: idKomponen },
      data: {
        ...nilaiKomponen,
        catatan: catatan || null
      }
    });
  } catch (error) {
    console.error('Error in updateKomponenPenilaianPenguji:', error);
    throw error;
  }
};

export const getNilaiById = async (id: string) => {
  try {
    return await prisma.nilai.findUnique({
      where: { id },
      include: {
        komponen_penilaian_instansi: true,
        komponen_penilaian_pembimbing: true,
        komponen_penilaian_penguji: true,
        mahasiswa: {
          select: {
            nim: true,
            nama: true
          }
        }
      }
    });
  } catch (error) {
    console.error('Error in getNilaiById:', error);
    throw error;
  }
};

export const getNilaiByNim = async (nim: string) => {
  try {
    return await prisma.nilai.findFirst({
      where: { nim },
      include: {
        komponen_penilaian_instansi: true,
        komponen_penilaian_pembimbing: true,
        komponen_penilaian_penguji: true,
        mahasiswa: {
          select: {
            nim: true,
            nama: true
          }
        }
      }
    });
  } catch (error) {
    console.error('Error in getNilaiByNim:', error);
    throw error;
  }
};

export const getExistingKomponenPenilaianInstansi = async (idNilai: string) => {
  try {
    return await prisma.komponen_penilaian_instansi.findFirst({
      where: { id_nilai: idNilai }
    });
  } catch (error) {
    console.error('Error in getExistingKomponenPenilaianInstansi:', error);
    throw error;
  }
};

export const getExistingKomponenPenilaianPembimbing = async (idNilai: string) => {
  try {
    return await prisma.komponen_penilaian_pembimbing.findFirst({
      where: { id_nilai: idNilai }
    });
  } catch (error) {
    console.error('Error in getExistingKomponenPenilaianPembimbing:', error);
    throw error;
  }
};

export const getExistingKomponenPenilaianPenguji = async (idNilai: string) => {
  try {
    return await prisma.komponen_penilaian_penguji.findFirst({
      where: { id_nilai: idNilai }
    });
  } catch (error) {
    console.error('Error in getExistingKomponenPenilaianPenguji:', error);
    throw error;
  }
};

export const getAllNilai = async () => {
  try {
    return await prisma.nilai.findMany({
      include: {
        mahasiswa: {
          select: {
            nim: true,
            nama: true
          }
        },
        dosen: {
          select: {
            nip: true,
            nama: true
          }
        },
        pembimbing_instansi: {
          select: {
            id: true,
            nama: true,
            instansi: {
              select: {
                nama: true
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error in getAllNilai:', error);
    throw error;
  }
};