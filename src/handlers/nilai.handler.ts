import { Context } from "hono";
import NilaiService from "../services/nilai.service";
import { validateNilaiInput } from "../helpers/nilai.helper";

export default class NilaiHandler {
  public static async createNilaiPenguji (c: Context) {
      const body = await c.req.json();
      
      if (!body.nim || !body.nip) {
        return c.json({ error: "NIM dan NIP mahasiswa wajib diisi" }, 400);
      }

      try {
        validateNilaiInput(body.penguasaanKeilmuan, "Penguasaan Keilmuan");
        validateNilaiInput(body.kemampuanPresentasi, "Kemampuan Presentasi");
        validateNilaiInput(body.kesesuaianUrgensi, "Kesesuaian Urgensi");
      } catch (error: any) {
        return c.json({ error: error.message }, 400);
      }

      const inputData = {
        penguasaanKeilmuan: body.penguasaanKeilmuan,
        kemampuanPresentasi: body.kemampuanPresentasi,
        kesesuaianUrgensi: body.kesesuaianUrgensi,
        catatan: body.catatan,
        nim: body.nim,
        nip: body.nip,
        idJadwalSeminar: body.idJadwalSeminar
      };

      const result = await NilaiService.createNilaiPenguji(inputData, body.id);
      return c.json({
        message: "Nilai penguji berhasil disimpan", 
        data: result 
      }, 201);
  };

  public static async createNilaiPembimbing (c: Context) {
      const body = await c.req.json();
      
      if (!body.nim || !body.nip) {
        return c.json({ error: "NIM dan NIP mahasiswa wajib diisi" }, 400);
      }

      try {
        validateNilaiInput(body.penyelesaianMasalah, "Penyelesaian Masalah");
        validateNilaiInput(body.bimbinganSikap, "Bimbingan Sikap");
        validateNilaiInput(body.kualitasLaporan, "Kualitas Laporan");
      } catch (error: any) {
        return c.json({ error: error.message }, 400);
      }

      const inputData = {
        penyelesaianMasalah: body.penyelesaianMasalah,
        bimbinganSikap: body.bimbinganSikap,
        kualitasLaporan: body.kualitasLaporan,
        catatan: body.catatan,
        nim: body.nim,
        nip: body.nip,
        idJadwalSeminar: body.idJadwalSeminar
      };

      const result = await NilaiService.createNilaiPembimbing(inputData, body.id);
      return c.json({ 
        message: "Nilai pembimbing berhasil disimpan", 
        data: result 
      }, 201);
  };

  public static async getNilaiById (c: Context) {
      const id = c.req.param("id");
      const result = await NilaiService.getNilaiById(id);
      
      if (!result) {
        return c.json({ error: "Nilai tidak ditemukan" }, 404);
      }

      return c.json({ data: result });
  };
}