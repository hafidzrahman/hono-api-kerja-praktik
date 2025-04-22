import {
  hitungNilaiInstansi,
  hitungNilaiPembimbing,
  hitungNilaiPenguji,
  hitungNilaiAkhir,
  validateKomponenPenilaianInstansi,
  validateKomponenPenilaianPembimbing,
  validateKomponenPenilaianPenguji
} from '../helpers/nilai.helper';

import * as nilaiRepository from '../repositories/nilai-seminar-kp.repository';

import {
  CreateNilaiInstansiRequest,
  CreateNilaiPembimbingRequest,
  CreateNilaiPengujiRequest
} from '../types/nilai-seminar-kp.type';
import { APIError } from '../utils/api-error.util';

export const createNilaiInstansi = async (request: CreateNilaiInstansiRequest) => {
  try {
    const { nim, id_pembimbing_instansi, komponenPenilaian } = request;

    // Validasi komponen penilaian
    if (!validateKomponenPenilaianInstansi(komponenPenilaian)) {
      throw new Error('Nilai komponen harus dalam rentang 0-100');
    }

    // Hitung nilai instansi
    const nilaiInstansi = hitungNilaiInstansi(komponenPenilaian);

    // Buat atau ambil data nilai yang sudah ada
    const nilai = await nilaiRepository.createOrUpdateNilai(nim, undefined, id_pembimbing_instansi);

    // Cek apakah sudah ada komponen penilaian instansi
    const existingKomponen = await nilaiRepository.getExistingKomponenPenilaianInstansi(nilai.id);

    // Buat atau update komponen penilaian instansi
    if (existingKomponen) {
      await nilaiRepository.updateKomponenPenilaianInstansi(existingKomponen.id, komponenPenilaian);
    } else {
      await nilaiRepository.createKomponenPenilaianInstansi(nilai.id, komponenPenilaian);
    }

    // Update nilai instansi
    await nilaiRepository.updateNilaiInstansi(nilai.id, nilaiInstansi);

    // Ambil data nilai terbaru
    const updatedNilai = await nilaiRepository.getNilaiById(nilai.id);
    
    // Hitung dan update nilai akhir
    const nilaiAkhir = hitungNilaiAkhir(
      updatedNilai?.nilai_pembimbing ?? undefined,
      updatedNilai?.nilai_penguji ?? undefined,
      nilaiInstansi
    );
    
    await nilaiRepository.updateNilaiAkhir(nilai.id, nilaiAkhir);

    // Ambil data akhir setelah semua update
    return await nilaiRepository.getNilaiById(nilai.id);
  } catch (error) {
    throw new APIError('Gagal membuat nilai instansi', 500);
  }
};

export const createNilaiPembimbing = async (request: CreateNilaiPembimbingRequest) => {
  try {
    const { nim, nip, komponenPenilaian } = request;

    // Validasi komponen penilaian
    if (!validateKomponenPenilaianPembimbing(komponenPenilaian)) {
      throw new Error('Nilai komponen harus dalam rentang 0-100');
    }

    // Hitung nilai pembimbing
    const nilaiPembimbing = hitungNilaiPembimbing(komponenPenilaian);

    // Buat atau ambil data nilai yang sudah ada
    const nilai = await nilaiRepository.createOrUpdateNilai(nim, nip);

    // Cek apakah sudah ada komponen penilaian pembimbing
    const existingKomponen = await nilaiRepository.getExistingKomponenPenilaianPembimbing(nilai.id);

    // Buat atau update komponen penilaian pembimbing
    if (existingKomponen) {
      await nilaiRepository.updateKomponenPenilaianPembimbing(existingKomponen.id, komponenPenilaian);
    } else {
      await nilaiRepository.createKomponenPenilaianPembimbing(nilai.id, komponenPenilaian);
    }

    // Update nilai pembimbing
    await nilaiRepository.updateNilaiPembimbing(nilai.id, nilaiPembimbing);

    // Ambil data nilai terbaru
    const updatedNilai = await nilaiRepository.getNilaiById(nilai.id);
    
    // Hitung dan update nilai akhir
    const nilaiAkhir = hitungNilaiAkhir(
      nilaiPembimbing,
      updatedNilai?.nilai_penguji ?? undefined,
      updatedNilai?.nilai_instansi ?? undefined
    );
    
    await nilaiRepository.updateNilaiAkhir(nilai.id, nilaiAkhir);

    // Ambil data akhir setelah semua update
    return await nilaiRepository.getNilaiById(nilai.id);
  } catch (error) {
    throw new APIError('Gagal membuat nilai pembimbing', 500);
  }
};

export const createNilaiPenguji = async (request: CreateNilaiPengujiRequest) => {
  try {
    const { nim, nip, komponenPenilaian } = request;

    // Validasi komponen penilaian
    if (!validateKomponenPenilaianPenguji(komponenPenilaian)) {
      throw new Error('Nilai komponen harus dalam rentang 0-100');
    }

    // Hitung nilai penguji
    const nilaiPenguji = hitungNilaiPenguji(komponenPenilaian);

    // Buat atau ambil data nilai yang sudah ada
    const nilai = await nilaiRepository.createOrUpdateNilai(nim, nip);

    // Cek apakah sudah ada komponen penilaian penguji
    const existingKomponen = await nilaiRepository.getExistingKomponenPenilaianPenguji(nilai.id);

    // Buat atau update komponen penilaian penguji
    if (existingKomponen) {
      await nilaiRepository.updateKomponenPenilaianPenguji(existingKomponen.id, komponenPenilaian);
    } else {
      await nilaiRepository.createKomponenPenilaianPenguji(nilai.id, komponenPenilaian);
    }

    // Update nilai penguji
    await nilaiRepository.updateNilaiPenguji(nilai.id, nilaiPenguji);

    // Ambil data nilai terbaru
    const updatedNilai = await nilaiRepository.getNilaiById(nilai.id);
    
    // Hitung dan update nilai akhir
    const nilaiAkhir = hitungNilaiAkhir(
      updatedNilai?.nilai_pembimbing ?? undefined,
      nilaiPenguji,
      updatedNilai?.nilai_instansi ?? undefined
    );
    
    await nilaiRepository.updateNilaiAkhir(nilai.id, nilaiAkhir);

    // Ambil data akhir setelah semua update
    return await nilaiRepository.getNilaiById(nilai.id);
  } catch (error) {
    throw new APIError('Gagal membuat nilai penguji', 500);
  }
};

export const getNilaiMahasiswa = async (nim: string) => {
  try {
    return await nilaiRepository.getNilaiByNim(nim);
  } catch (error) {
    throw new APIError('Gagal mendapatkan nilai mahasiswa', 500);
  }
};

export const getAllNilai = async () => {
  try {
    return await nilaiRepository.getAllNilai();
  } catch (error) {
    throw new APIError('Gagal mendapatkan semua nilai', 500);
  }
};