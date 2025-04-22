import { Context } from 'hono';
import { PrismaClient, jenis_dokumen } from '../generated/prisma';
import DokumenService from '../services/dokumen-seminar-kp.service';
import { DokumenUploadDTO, UpdateDokumenStatusDTO } from '../types/dokumen-seminar-kp.type';
import { getDokumenDescription } from '../helpers/gdrive-validation.helper';

export default class DokumenSeminarKpHandler {
  private dokumenService: DokumenService;

  constructor(prisma: PrismaClient) {
    this.dokumenService = new DokumenService(prisma);
  }

  // Handler for uploading a document
  uploadDokumen = async (c: Context) => {
    try {
      const body = await c.req.json();
      const { jenis_dokumen, link_path, nim, id_pendaftaran_kp } = body as DokumenUploadDTO;

      // Validate required fields
      if (!jenis_dokumen || (!link_path && jenis_dokumen !== 'ID_SURAT_UNDANGAN') || !nim || !id_pendaftaran_kp) {
        return c.json({ 
          success: false, 
          message: 'Data tidak lengkap' 
        }, 400);
      }

      // Validate jenis_dokumen is a valid enum value
      if (!Object.values(jenis_dokumen).includes(jenis_dokumen as jenis_dokumen)) {
        return c.json({ 
          success: false, 
          message: 'Jenis dokumen tidak valid' 
        }, 400);
      }

      const dokumen = await this.dokumenService.uploadDokumen({
        jenis_dokumen: jenis_dokumen as jenis_dokumen,
        link_path,
        nim,
        id_pendaftaran_kp
      });

      return c.json({
        success: true,
        message: `${getDokumenDescription(dokumen.jenis_dokumen)} berhasil diunggah`,
        data: dokumen
      }, 201);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengunggah dokumen'
      }, 400);
    }
  };

  // Handler for generating ID_SURAT_UNDANGAN
  generateSuratUndanganId = async (c: Context) => {
    try {
      const body = await c.req.json();
      const { nim, id_pendaftaran_kp } = body;

      if (!nim || !id_pendaftaran_kp) {
        return c.json({ 
          success: false, 
          message: 'NIM dan ID Pendaftaran KP diperlukan' 
        }, 400);
      }

      const suratUndanganId = await this.dokumenService.generateSuratUndanganId({
        nim,
        id_pendaftaran_kp
      });

      return c.json({
        success: true,
        message: 'ID Surat Undangan berhasil dibuat',
        data: { id_surat_undangan: suratUndanganId }
      }, 201);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat membuat ID Surat Undangan'
      }, 400);
    }
  };

  // Handler for getting documents by KP registration ID
  getDokumenByPendaftaranKp = async (c: Context) => {
    try {
      const id_pendaftaran_kp = c.req.param('id_pendaftaran_kp');

      if (!id_pendaftaran_kp) {
        return c.json({ 
          success: false, 
          message: 'ID Pendaftaran KP diperlukan' 
        }, 400);
      }

      const dokumen = await this.dokumenService.getDokumenByPendaftaranKp(id_pendaftaran_kp);

      return c.json({
        success: true,
        data: dokumen
      }, 200);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengambil dokumen'
      }, 500);
    }
  };

  // Handler for getting documents by NIM
  getDokumenByNim = async (c: Context) => {
    try {
      const nim = c.req.param('nim');

      if (!nim) {
        return c.json({ 
          success: false, 
          message: 'NIM diperlukan' 
        }, 400);
      }

      const dokumen = await this.dokumenService.getDokumenByNim(nim);

      return c.json({
        success: true,
        data: dokumen
      }, 200);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengambil dokumen'
      }, 500);
    }
  };

  // Handler for getting a document by ID
  getDokumenById = async (c: Context) => {
    try {
      const id = c.req.param('id');

      if (!id) {
        return c.json({ 
          success: false, 
          message: 'ID dokumen diperlukan' 
        }, 400);
      }

      const dokumen = await this.dokumenService.getDokumenById(id);

      if (!dokumen) {
        return c.json({
          success: false,
          message: 'Dokumen tidak ditemukan'
        }, 404);
      }

      return c.json({
        success: true,
        data: dokumen
      }, 200);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengambil dokumen'
      }, 500);
    }
  };

  // Handler for updating document status
  updateDokumenStatus = async (c: Context) => {
    try {
      const body = await c.req.json();
      const { id, status, komentar } = body as UpdateDokumenStatusDTO;

      if (!id || !status) {
        return c.json({ 
          success: false, 
          message: 'ID dokumen dan status diperlukan' 
        }, 400);
      }

      const dokumen = await this.dokumenService.updateDokumenStatus({
        id,
        status,
        komentar
      });

      return c.json({
        success: true,
        message: 'Status dokumen berhasil diperbarui',
        data: dokumen
      }, 200);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat memperbarui status dokumen'
      }, 400);
    }
  };

  // Handler for deleting a document
  deleteDokumen = async (c: Context) => {
    try {
      const id = c.req.param('id');

      if (!id) {
        return c.json({ 
          success: false, 
          message: 'ID dokumen diperlukan' 
        }, 400);
      }

      const dokumen = await this.dokumenService.deleteDokumen(id);

      return c.json({
        success: true,
        message: 'Dokumen berhasil dihapus',
        data: dokumen
      }, 200);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat menghapus dokumen'
      }, 400);
    }
  };

  resubmitDokumen = async (c: Context) => {
    try {
      const body = await c.req.json();
      const { id, link_path } = body;
  
      if (!id || !link_path) {
        return c.json({ 
          success: false, 
          message: 'ID dokumen dan link dokumen baru diperlukan' 
        }, 400);
      }
  
      // Retrieve the existing document
      const existingDokumen = await this.dokumenService.getDokumenById(id);
      
      if (!existingDokumen) {
        return c.json({
          success: false,
          message: 'Dokumen tidak ditemukan'
        }, 404);
      }
  
      // Check if document is in rejected status
      if (existingDokumen.status !== 'Ditolak') {
        return c.json({
          success: false,
          message: 'Hanya dokumen yang ditolak yang dapat dikirim ulang'
        }, 400);
      }
  
      // Special case for ID_SURAT_UNDANGAN - can't resubmit this type
      if (existingDokumen.jenis_dokumen === 'ID_SURAT_UNDANGAN') {
        return c.json({
          success: false,
          message: 'ID Surat Undangan tidak dapat dikirim ulang, silakan generate ID baru'
        }, 400);
      }
  
      // Update document with new link and reset status to Terkirim
      const updatedDokumen = await this.dokumenService.resubmitDokumen(id, link_path);
  
      return c.json({
        success: true,
        message: `${getDokumenDescription(updatedDokumen.jenis_dokumen)} berhasil dikirim ulang`,
        data: updatedDokumen
      }, 200);
    } catch (error: any) {
      return c.json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengirim ulang dokumen'
      }, 400);
    }
  };
}