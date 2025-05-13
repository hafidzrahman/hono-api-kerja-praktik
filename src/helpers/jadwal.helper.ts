import { validasiStepDokumen } from "./dokumen-step.helper";

export const hitungMundur = (targetDate: Date | null): string | null => {
  if (!targetDate) return null;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const targetDateCopy = new Date(targetDate);
  targetDateCopy.setHours(0, 0, 0, 0);
  
  const diffTime = targetDateCopy.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return "Telah lewat";
  } else if (diffDays === 0) {
    return "Hari ini";
  } else {
    return `H-${diffDays}`;
  }
}

export const tambahHitungMundurJadwal = (jadwalArray: any[] | null | undefined) => {
  if (!jadwalArray || jadwalArray.length === 0) return [];
  
  return jadwalArray.map(jadwal => ({
    ...jadwal,
    countdown: hitungMundur(jadwal.tanggal)
  }));
};

export default class JadwalHelper {
  public static formatWaktu(date: Date): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();
    
    // Convert to seconds, minutes, hours, days, months
    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    if (years > 0) {
      return `${years} ${years === 1 ? 'tahun' : 'tahun'} yang lalu`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'bulan' : 'bulan'} yang lalu`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'hari' : 'hari'} yang lalu`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'jam' : 'jam'} yang lalu`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'menit' : 'menit'} yang lalu`;
    } else {
      return `${seconds} ${seconds === 1 ? 'detik' : 'detik'} yang lalu`;
    }

  }
}

export const isEligibleForScheduling = async (id_pendaftaran_kp: string): Promise<boolean> => {
  return await validasiStepDokumen(3, id_pendaftaran_kp);
};