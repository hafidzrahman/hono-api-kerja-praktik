import { Context } from "hono";
import DokumenService from "../services/dokumen-seminar-kp.service";
import { jenis_dokumen, status_dokumen } from "../generated/prisma";
import FileHelper from "../helpers/gdrive-validation.helper";

export default class DokumenSeminarKpHandler {
  private dokumenService: DokumenService;

  constructor() {
    this.dokumenService = new DokumenService();
  }

  async uploadDokumen(c: Context): Promise<Response> {
    try {
      const body = await c.req.json();
      const { jenis_dokumen, link_path, nim, id_pendaftaran_kp } = body;

      // Validasi input
      if (!jenis_dokumen || !link_path || !nim || !id_pendaftaran_kp) {
        return c.json({ error: "Data tidak lengkap" }, 400);
      }
      
      // Validasi link Google Drive
      if (!FileHelper.isValidGoogleDriveLink(link_path)) {
        return c.json({ error: "Link harus berupa link Google Drive yang valid" }, 400);
      }
      
      // Normalisasi link
      const normalizedLink = FileHelper.normalizeGoogleDriveLink(link_path);
      
      const dokumen = await this.dokumenService.uploadDokumen({
        jenis_dokumen: jenis_dokumen as jenis_dokumen,
        link_path: normalizedLink,
        nim,
        id_pendaftaran_kp,
      });

      return c.json({ 
        message: "Dokumen berhasil diupload", 
        data: dokumen 
      }, 201);
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  }

  async updateDokumenStatus(c: Context): Promise<Response> {
    try {
      const id = c.req.param("id");
      const body = await c.req.json();
      const { status, komentar } = body;

      if (!id || !status) {
        return c.json({ error: "ID dan status diperlukan" }, 400);
      }

      const dokumen = await this.dokumenService.updateDokumenStatus(
        id,
        status as status_dokumen,
        komentar
      );

      return c.json({ 
        message: "Status dokumen berhasil diperbarui", 
        data: dokumen 
      });
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  }

  async getCurrentStep(c: Context): Promise<Response> {
    try {
      const id_pendaftaran_kp = c.req.param("id_pendaftaran_kp");

      if (!id_pendaftaran_kp) {
        return c.json({ error: "ID pendaftaran KP diperlukan" }, 400);
      }

      const stepInfo = await this.dokumenService.getCurrentStep(id_pendaftaran_kp);

      return c.json({ 
        message: "Informasi step berhasil diambil", 
        data: stepInfo 
      });
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  }
}