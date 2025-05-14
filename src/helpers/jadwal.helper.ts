import { format } from "date-fns";
import { id } from "date-fns/locale";
import StepHelper from "./dokumen-step.helper";

export default class JadwalHelper {
  public static async hitungMundur(targetDate: Date | null): Promise<string | null> {
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

  public static async tambahHitungMundurJadwal(jadwalArray: any[] | null | undefined) {
    if (!jadwalArray || jadwalArray.length === 0) return [];

    return jadwalArray.map((jadwal) => ({
      ...jadwal,
      countdown: this.hitungMundur(jadwal.tanggal),
    }));
  }

  public static async formatWaktu(date: Date): Promise<string> {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} ${years === 1 ? "tahun" : "tahun"} yang lalu`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "bulan" : "bulan"} yang lalu`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "hari" : "hari"} yang lalu`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "jam" : "jam"} yang lalu`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "menit" : "menit"} yang lalu`;
    } else {
      return `${seconds} ${seconds === 1 ? "detik" : "detik"} yang lalu`;
    }
  }

  public static async isEligibleForScheduling(id_pendaftaran_kp: string): Promise<boolean> {
    return await StepHelper.validasiStepDokumen(3, id_pendaftaran_kp);
  }

  public static async formatJadwalData(jadwal: any, mahasiswaDinilaiMap: Record<string, boolean>) {
    const nim = jadwal.pendaftaran_kp?.mahasiswa?.nim;
    const isPenilaianCompleted = nim ? !!mahasiswaDinilaiMap[nim] : false;

    let semester = "";
    if (jadwal.pendaftaran_kp?.tahun_ajaran?.nama) {
      const tahunAjaranName = jadwal.pendaftaran_kp.tahun_ajaran.nama;
      if (tahunAjaranName.includes("Ganjil")) {
        semester = "Ganjil";
      } else if (tahunAjaranName.includes("Genap")) {
        semester = "Genap";
      }
    }

    return {
      id: jadwal.id,
      nim: nim || "-",
      nama: jadwal.pendaftaran_kp?.mahasiswa?.nama || "-",
      ruangan: jadwal.ruangan?.nama || "-",
      tanggal: jadwal.tanggal ? format(new Date(jadwal.tanggal), "EEEE, MMMM dd yyyy", { locale: id }) : "-",
      waktuMulai: jadwal.waktu_mulai ? format(new Date(jadwal.waktu_mulai), "HH:mm") : "-",
      waktuSelesai: jadwal.waktu_selesai ? format(new Date(jadwal.waktu_selesai), "HH:mm") : "-",
      status: isPenilaianCompleted ? "Dinilai" : "Belum Dinilai",
      semester: semester || "-",
      dosenPembimbing: jadwal.pendaftaran_kp?.dosen_pembimbing?.nama || "-",
      pembimbingInstansi: jadwal.pendaftaran_kp?.pembimbing_instansi?.nama || "-",
      judulKp: jadwal.pendaftaran_kp?.judul_kp || "-",
      lokasiKp: jadwal.pendaftaran_kp?.instansi?.nama ? `${jadwal.pendaftaran_kp.instansi.nama}, ${jadwal.pendaftaran_kp.instansi.alamat}` : "-",
      statusJadwal: jadwal.status || "-",
      idPendaftaranKp: jadwal.pendaftaran_kp?.id || null,
    };
  }
}
