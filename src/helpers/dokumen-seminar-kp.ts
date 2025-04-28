import { jenis_dokumen } from "../generated/prisma";

// Helper untuk memetakan route path ke jenis dokumen
export const mapPathToJenisDokumen = (path: string): jenis_dokumen | null => {
  const mapping: Record<string, jenis_dokumen> = {
    "surat-keterangan-selesai-kp": jenis_dokumen.SURAT_KETERANGAN_SELESAI_KP,
    "laporan-tambahan-kp": jenis_dokumen.LAPORAN_TAMBAHAN_KP,
    "form-kehadiran-seminar": jenis_dokumen.FORM_KEHADIRAN_SEMINAR,
    "id-surat-undangan": jenis_dokumen.ID_SURAT_UNDANGAN,
    "surat-undangan-seminar-kp": jenis_dokumen.SURAT_UNDANGAN_SEMINAR_KP,
    "berita-acara-seminar": jenis_dokumen.BERITA_ACARA_SEMINAR,
    "daftar-hadir-seminar": jenis_dokumen.DAFTAR_HADIR_SEMINAR,
    "lembar-pengesahan-kp": jenis_dokumen.LEMBAR_PENGESAHAN_KP,
    "revisi-daily-report": jenis_dokumen.REVISI_DAILY_REPORT,
    "revisi-laporan-tambahan": jenis_dokumen.REVISI_LAPORAN_TAMBAHAN,
    "sistem-kp-final": jenis_dokumen.SISTEM_KP_FINAL,
  };

  return mapping[path] || null;
};

// Helper untuk mendapatkan nama dokumen yang user-friendly
export const getNamaJenisDokumen = (jenis: jenis_dokumen): string => {
  const names: Record<jenis_dokumen, string> = {
    [jenis_dokumen.SURAT_KETERANGAN_SELESAI_KP]: "Surat Keterangan Selesai KP",
    [jenis_dokumen.LAPORAN_TAMBAHAN_KP]: "Laporan Tambahan KP",
    [jenis_dokumen.FORM_KEHADIRAN_SEMINAR]: "Form Kehadiran Seminar",
    [jenis_dokumen.ID_SURAT_UNDANGAN]: "ID Surat Undangan",
    [jenis_dokumen.SURAT_UNDANGAN_SEMINAR_KP]: "Surat Undangan Seminar KP",
    [jenis_dokumen.BERITA_ACARA_SEMINAR]: "Berita Acara Seminar",
    [jenis_dokumen.DAFTAR_HADIR_SEMINAR]: "Daftar Hadir Seminar",
    [jenis_dokumen.LEMBAR_PENGESAHAN_KP]: "Lembar Pengesahan KP",
    [jenis_dokumen.REVISI_DAILY_REPORT]: "Revisi Daily Report",
    [jenis_dokumen.REVISI_LAPORAN_TAMBAHAN]: "Revisi Laporan Tambahan",
    [jenis_dokumen.SISTEM_KP_FINAL]: "Sistem KP Final",
  };

  return names[jenis];
};