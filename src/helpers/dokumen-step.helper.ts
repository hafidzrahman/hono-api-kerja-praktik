import { jenis_dokumen } from "../generated/prisma";
import DokumenSeminarKpRepository from "../repositories/dokumen-seminar-kp.repository";
import JadwalSeminarKPRepository from "../repositories/jadwal-seminar-kp.repository";
import { APIError } from "../utils/api-error.util";

const DOKUMEN_STEP_1: jenis_dokumen[] = [
  jenis_dokumen.SURAT_KETERANGAN_SELESAI_KP, 
  jenis_dokumen.FORM_KEHADIRAN_SEMINAR, 
  jenis_dokumen.LAPORAN_TAMBAHAN_KP
];

const DOKUMEN_STEP_2: jenis_dokumen[] = [
  jenis_dokumen.ID_SURAT_UNDANGAN
];

const DOKUMEN_STEP_3: jenis_dokumen[] = [
  jenis_dokumen.SURAT_UNDANGAN_SEMINAR_KP
];

const DOKUMEN_STEP_5: jenis_dokumen[] = [
  jenis_dokumen.BERITA_ACARA_SEMINAR, 
  jenis_dokumen.LEMBAR_PENGESAHAN_KP, 
  jenis_dokumen.DAFTAR_HADIR_SEMINAR, 
  jenis_dokumen.REVISI_DAILY_REPORT, 
  jenis_dokumen.REVISI_LAPORAN_TAMBAHAN
];

export const validasiStepDokumen = async (step: number, id_pendaftaran_kp: string): Promise<boolean> => {
  let dokumenList: jenis_dokumen[] = [];
  switch (step) {
    case 1:
      dokumenList = DOKUMEN_STEP_1;
      break;
    case 2:
      dokumenList = DOKUMEN_STEP_2;
      break;
    case 3:
      dokumenList = DOKUMEN_STEP_3;
      break;
    default:
      return false;
  }

  for (const jenisDokumen of dokumenList) {
    const dokumen = await DokumenSeminarKpRepository.getDokumenSeminarKPByJenisAndPendaftaranId(jenisDokumen, id_pendaftaran_kp);
    if (!dokumen || dokumen.status !== "Divalidasi") {
      return false;
    }
  }

  return true;
};

export const validasiStepAksesDokumen = async (jenis: jenis_dokumen, id_pendaftaran_kp: string): Promise<void> => {
  let currentStep = 1;

  if (DOKUMEN_STEP_2.includes(jenis)) {
    currentStep = 2;
    if (!(await validasiStepDokumen(1, id_pendaftaran_kp))) {
      throw new APIError("Waduh, Berkas Pendaftaran kamu belum divalidasi nih! 😭", 403);
    }
  } else if (DOKUMEN_STEP_3.includes(jenis)) {
    currentStep = 3;
    if (!(await validasiStepDokumen(2, id_pendaftaran_kp))) {
      throw new APIError("Waduh, ID Surat Undangan kamu belum divalidasi nih! 😭", 403);
    }
  } else if (DOKUMEN_STEP_5.includes(jenis)) {
    currentStep = 5;
    if (!(await validasiStepDokumen(3, id_pendaftaran_kp))) {
      throw new APIError("Waduh, Surat Undangan kamu belum divalidasi nih! 😭", 403);
    }

    const jadwal = await JadwalSeminarKPRepository.getJadwalByPendaftaranId(id_pendaftaran_kp);

    if (!jadwal) {
      throw new APIError("Waduh, kamu belum dapat jadwal nih! 😭", 403);
    }

    const jadwalSelesai = jadwal.tanggal && jadwal.tanggal < new Date() && new Date(`${jadwal.tanggal.toISOString().split("T")[0]}T${jadwal.waktu_selesai}`) < new Date();

    if (!jadwalSelesai) {
      throw new APIError("Waduh, Berkas Pasca Seminar kamu belum divalidasi nih! 😭", 403);
    }
  }
};

export const stepAkses = async (step: number, id_pendaftaran_kp: string): Promise<boolean> => {
  if (step === 1) {
    return true;
  }

  if (step > 1) {
    const isValid = await validasiStepDokumen(step - 1, id_pendaftaran_kp);
    return isValid === true;
  }

  if (step === 5) {
    const jadwal = await JadwalSeminarKPRepository.getJadwalByPendaftaranId(id_pendaftaran_kp);

    if (!jadwal) {
      return false;
    }

    const jadwalSelesai = jadwal.tanggal && jadwal.tanggal < new Date() && new Date(`${jadwal.tanggal.toISOString().split("T")[0]}T${jadwal.waktu_selesai}`) < new Date();

    const isValid = await validasiStepDokumen(3, id_pendaftaran_kp);
    return jadwalSelesai && isValid === true;
  }

  return false;
};

export const getStepForDokumen = (jenis: jenis_dokumen): number => {
  if (DOKUMEN_STEP_1.includes(jenis)) {
    return 1;
  } else if (DOKUMEN_STEP_2.includes(jenis)) {
    return 2;
  } else if (DOKUMEN_STEP_3.includes(jenis)) {
    return 3;
  } else if (DOKUMEN_STEP_5.includes(jenis)) {
    return 5;
  }

  return 0;
};

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

export const getNamaDokumen = (jenis: jenis_dokumen): string => {
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
