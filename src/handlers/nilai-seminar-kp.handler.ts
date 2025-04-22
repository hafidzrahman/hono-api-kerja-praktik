import { Context } from 'hono';
import * as nilaiService from '../services/nilai-serminar-kp.service';
import { 
  CreateNilaiInstansiRequest, 
  CreateNilaiPembimbingRequest, 
  CreateNilaiPengujiRequest 
} from '../types/nilai-seminar-kp.type';

export const createNilaiInstansi = async (c: Context) => {
  try {
    const body = await c.req.json() as CreateNilaiInstansiRequest;
    
    if (!body.nim || !body.id_pembimbing_instansi || !body.komponenPenilaian) {
      return c.json({ message: 'Data tidak lengkap' }, 400);
    }
    
    const result = await nilaiService.createNilaiInstansi(body);
    return c.json({ message: 'Nilai instansi berhasil disimpan', data: result }, 201);
  } catch (error) {
    console.error('Error in createNilaiInstansi handler:', error);
    
    if (error instanceof Error) {
      return c.json({ message: error.message }, 400);
    }
    
    return c.json({ message: 'Terjadi kesalahan saat menyimpan nilai instansi' }, 500);
  }
};

export const createNilaiPembimbing = async (c: Context) => {
  try {
    const body = await c.req.json() as CreateNilaiPembimbingRequest;
    
    if (!body.nim || !body.nip || !body.komponenPenilaian) {
      return c.json({ message: 'Data tidak lengkap' }, 400);
    }
    
    const result = await nilaiService.createNilaiPembimbing(body);
    return c.json({ message: 'Nilai pembimbing berhasil disimpan', data: result }, 201);
  } catch (error) {
    console.error('Error in createNilaiPembimbing handler:', error);
    
    if (error instanceof Error) {
      return c.json({ message: error.message }, 400);
    }
    
    return c.json({ message: 'Terjadi kesalahan saat menyimpan nilai pembimbing' }, 500);
  }
};

export const createNilaiPenguji = async (c: Context) => {
  try {
    const body = await c.req.json() as CreateNilaiPengujiRequest;
    
    if (!body.nim || !body.nip || !body.komponenPenilaian) {
      return c.json({ message: 'Data tidak lengkap' }, 400);
    }
    
    const result = await nilaiService.createNilaiPenguji(body);
    return c.json({ message: 'Nilai penguji berhasil disimpan', data: result }, 201);
  } catch (error) {
    console.error('Error in createNilaiPenguji handler:', error);
    
    if (error instanceof Error) {
      return c.json({ message: error.message }, 400);
    }
    
    return c.json({ message: 'Terjadi kesalahan saat menyimpan nilai penguji' }, 500);
  }
};

export const getNilaiMahasiswa = async (c: Context) => {
  try {
    const nim = c.req.param('nim');
    
    if (!nim) {
      return c.json({ message: 'NIM mahasiswa tidak ditemukan' }, 400);
    }
    
    const result = await nilaiService.getNilaiMahasiswa(nim);
    
    if (!result) {
      return c.json({ message: 'Data nilai mahasiswa tidak ditemukan' }, 404);
    }
    
    return c.json({ message: 'Data nilai mahasiswa berhasil ditemukan', data: result }, 200);
  } catch (error) {
    console.error('Error in getNilaiMahasiswa handler:', error);
    return c.json({ message: 'Terjadi kesalahan saat mengambil data nilai mahasiswa' }, 500);
  }
};

export const getAllNilai = async (c: Context) => {
  try {
    const result = await nilaiService.getAllNilai();
    return c.json({ message: 'Data semua nilai berhasil ditemukan', data: result }, 200);
  } catch (error) {
    console.error('Error in getAllNilai handler:', error);
    return c.json({ message: 'Terjadi kesalahan saat mengambil semua data nilai' }, 500);
  }
};