import { jenis_dokumen } from '../generated/prisma';

// Validate Google Drive link
export function isValidGoogleDriveLink(link: string): boolean {
  // Check if it's a Google Drive link
  const googleDrivePattern = /^https:\/\/drive\.google\.com\/(file\/d\/|open\?id=).+/;
  return googleDrivePattern.test(link);
}

// Helper to check file extension for dokumen validation
export function hasValidExtension(link: string, jenisDokumen: jenis_dokumen): boolean {
  // For ID_SURAT_UNDANGAN, we don't need to validate since it's not a link
  if (jenisDokumen === 'ID_SURAT_UNDANGAN') {
    return true;
  }

  // File extension validation
  const pdfPattern = /\.pdf($|\?)/i;
  const docPattern = /\.(doc|docx)($|\?)/i;
  
  // Different document types might have different acceptable formats
  switch (jenisDokumen) {
    case 'LAPORAN_TAMBAHAN_KP':
    case 'REVISI_LAPORAN_TAMBAHAN':
    case 'SISTEM_KP_FINAL':
      return pdfPattern.test(link) || docPattern.test(link);
    default:
      return pdfPattern.test(link); // Default to PDF only
  }
}

// Generate a unique ID for dokumen (specifically for ID_SURAT_UNDANGAN)
export function generateSuratUndanganId(nimPrefix: string): string {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `SU-${nimPrefix}-${timestamp}${random}`;
}

// Helper to map jenis_dokumen to human-readable description
export function getDokumenDescription(jenisDokumen: jenis_dokumen): string {
  const descriptions: Record<jenis_dokumen, string> = {
    SURAT_KETERANGAN_SELESAI_KP: 'Surat Keterangan Selesai KP',
    LAPORAN_TAMBAHAN_KP: 'Laporan Tambahan KP',
    FORM_KEHADIRAN_SEMINAR: 'Form Kehadiran Seminar',
    ID_SURAT_UNDANGAN: 'ID Surat Undangan Seminar KP',
    SURAT_UNDANGAN_SEMINAR_KP: 'Surat Undangan Seminar KP',
    BERITA_ACARA_SEMINAR: 'Berita Acara Seminar',
    DAFTAR_HADIR_SEMINAR: 'Daftar Hadir Seminar',
    LEMBAR_PENGESAHAN_KP: 'Lembar Pengesahan KP',
    REVISI_DAILY_REPORT: 'Revisi Daily Report',
    REVISI_LAPORAN_TAMBAHAN: 'Revisi Laporan Tambahan',
    SISTEM_KP_FINAL: 'Sistem KP Final'
  };
  
  return descriptions[jenisDokumen];
}