import { unknown } from "zod";
import { status_dokumen } from "../generated/prisma";
import MahasiswaHelper from "../helpers/mahasiswa.helper";
import NilaiRepository from "../repositories/nilai.repository";
import { NilaiPengujiInput, NilaiPembimbingInput, AllNilaiResponse, DetailMahasiswaNilai, StatusNilai } from "../types/seminar-kp/nilai.type";
import { APIError } from "../utils/api-error.util";
import NilaiHelper from "../helpers/nilai.helper";

export default class NilaiService {
  public static async createNilaiPenguji(input: NilaiPengujiInput, id?: string, email?: string) {
    if (input.idJadwalSeminar) {
      const jadwal = await NilaiRepository.getJadwalById(input.idJadwalSeminar);
      if (!jadwal) {
        throw new APIError(`Waduh, Jadwal tidak ditemukan ni! 😭`, 404);
      }

      if (!NilaiHelper.canInputNilai(jadwal.waktu_mulai)) {
        throw new APIError(`Waduh, Nilai penguji tidak bisa diinput setelah seminar dimulai! 😭`, 400);
      }
    }

    if (email) {
      const dosen = await NilaiRepository.getDosenByEmail(email);
      if (!dosen) {
        throw new APIError(`Waduh, Email Dosen tidak ditemukan ni! 😭`, 404);
      }

      const pendaftaranKp = await NilaiRepository.getPendaftaranKpDosen(input.nim);
      if (!pendaftaranKp) {
        throw new APIError(`Waduh, Pendaftaran KP untuk mahasiswa dengan NIM ${input.nim} tidak ditemukan`, 404);
      }

      if (pendaftaranKp.nip_penguji !== dosen.nip) {
        throw new APIError(`Waduh, Anda bukan penguji untuk mahasiswa ini`, 403);
      }

      input.nip = dosen.nip;
    } else {
      const pendaftaranKp = await NilaiRepository.getPendaftaranKpDosen(input.nim);
      if (!pendaftaranKp) {
        throw new APIError(`Waduh, Pendaftaran KP untuk mahasiswa dengan NIM ${input.nim} tidak ditemukan`, 404);
      }

      if (pendaftaranKp.nip_penguji !== input.nip) {
        throw new APIError(`Waduh, Dosen dengan NIP ${input.nip} bukan penguji untuk mahasiswa ini`, 403);
      }
    }

    if (input.penguasaanKeilmuan > 100 || input.kemampuanPresentasi > 100 || input.kesesuaianUrgensi > 100) {
      throw new Error("Komponen nilai tidak boleh lebih dari 100");
    }

    const nilaiPenguji = input.penguasaanKeilmuan * 0.4 + input.kemampuanPresentasi * 0.2 + input.kesesuaianUrgensi * 0.4;

    const nilai = await NilaiRepository.createNilaiPenguji(
      id || crypto.randomUUID(),
      input.penguasaanKeilmuan,
      input.kemampuanPresentasi,
      input.kesesuaianUrgensi,
      input.catatan || null,
      nilaiPenguji,
      input.nim,
      input.nip,
      input.idJadwalSeminar
    );

    await this.updateNilaiAkhir(nilai.id);
    return nilai;
  }

  public static async createNilaiPembimbing(input: NilaiPembimbingInput, id?: string, email?: string) {
    if (input.idJadwalSeminar) {
      const jadwal = await NilaiRepository.getJadwalById(input.idJadwalSeminar);
      if (!jadwal) {
        throw new APIError(`Waduh, Jadwal tidak ditemukan ni! 😭`, 404);
      }

      if (!NilaiHelper.canInputNilai(jadwal.waktu_mulai)) {
        throw new APIError(`Waduh, Nilai penguji tidak bisa diinput setelah seminar dimulai! 😭`, 400);
      }
    }

    if (email) {
      const dosen = await NilaiRepository.getDosenByEmail(email);
      if (!dosen) {
        throw new APIError(`Waduh, Email Dosen tidak ditemukan ni! 😭`, 404);
      }

      const pendaftaranKp = await NilaiRepository.getPendaftaranKpDosen(input.nim);
      if (!pendaftaranKp) {
        throw new APIError(`Waduh, Pendaftaran KP untuk mahasiswa dengan NIM ${input.nim} tidak ditemukan`, 404);
      }

      if (pendaftaranKp.nip_pembimbing !== dosen.nip) {
        throw new APIError(`Waduh, Anda bukan pembimbing untuk mahasiswa ini`, 403);
      }

      input.nip = dosen.nip;
    } else {
      const pendaftaranKp = await NilaiRepository.getPendaftaranKpDosen(input.nim);
      if (!pendaftaranKp) {
        throw new APIError(`Waduh, Pendaftaran KP untuk mahasiswa dengan NIM ${input.nim} tidak ditemukan`, 404);
      }

      if (pendaftaranKp.nip_pembimbing !== input.nip) {
        throw new APIError(`Waduh, Dosen dengan NIP ${input.nip} bukan pembimbing untuk mahasiswa ini`, 403);
      }
    }

    if (input.penyelesaianMasalah > 100 || input.bimbinganSikap > 100 || input.kualitasLaporan > 100) {
      throw new Error("Komponen nilai tidak boleh lebih dari 100");
    }

    const nilaiPembimbing = input.penyelesaianMasalah * 0.4 + input.bimbinganSikap * 0.35 + input.kualitasLaporan * 0.25;

    const nilai = await NilaiRepository.createNilaiPembimbing(
      id || crypto.randomUUID(),
      input.penyelesaianMasalah,
      input.bimbinganSikap,
      input.kualitasLaporan,
      input.catatan || null,
      nilaiPembimbing,
      input.nim,
      input.nip,
      input.idJadwalSeminar
    );

    await this.updateNilaiAkhir(nilai.id);
    return nilai;
  }

  public static async updateNilaiAkhir(id: string) {
    const nilai = await NilaiRepository.getNilaiById(id);
    if (!nilai) return null;

    if (nilai.nilai_penguji && nilai.nilai_pembimbing && nilai.nilai_instansi) {
      const nilaiAkhir = nilai.nilai_penguji * 0.2 + nilai.nilai_pembimbing * 0.4 + nilai.nilai_instansi * 0.4;

      await NilaiRepository.updateNilaiAkhir(id, nilaiAkhir);
    }

    return nilai;
  }

  public static async getNilaiById(id: string) {
    return NilaiRepository.getNilaiById(id);
  }

  public static async getAllNilai(tahunAjaranId: number = 0): Promise<AllNilaiResponse> {
    const { mahasiswaData, tahunAjaran } = await NilaiRepository.getAllMahasiswaNilai(tahunAjaranId);

    const detailMahasiswa: DetailMahasiswaNilai[] = mahasiswaData
      .map((mahasiswa) => {
        const pendaftaranKp = mahasiswa.pendaftaran_kp[0];

        if (!pendaftaranKp) {
          return null;
        }

        let nilaiInstansi = undefined;
        let nilaiPembimbing = undefined;
        let nilaiPenguji = undefined;
        let nilaiAkhir = undefined;
        let nilaiHuruf = undefined;
        let komponenNilaiInstansi = undefined;
        let komponenNilaiPembimbing = undefined;
        let komponenNilaiPenguji = undefined;

        const nilaiData = mahasiswa.nilai[0];

        if (nilaiData) {
          nilaiInstansi = nilaiData.nilai_instansi ? Number(nilaiData.nilai_instansi) : undefined;
          nilaiPembimbing = nilaiData.nilai_pembimbing ? Number(nilaiData.nilai_pembimbing) : undefined;
          nilaiPenguji = nilaiData.nilai_penguji ? Number(nilaiData.nilai_penguji) : undefined;
          nilaiAkhir = nilaiData.nilai_akhir ? Number(nilaiData.nilai_akhir) : undefined;

          nilaiHuruf = NilaiHelper.getNilaiHuruf(nilaiAkhir);

          if (nilaiData.komponen_penilaian_instansi.length > 0) {
            const komponen = nilaiData.komponen_penilaian_instansi[0];
            komponenNilaiInstansi = {
              deliverables: komponen.deliverables ? Number(komponen.deliverables) : undefined,
              ketepatan_waktu: komponen.ketepatan_waktu ? Number(komponen.ketepatan_waktu) : undefined,
              kedisiplinan: komponen.kedisiplinan ? Number(komponen.kedisiplinan) : undefined,
              attitude: komponen.attitude ? Number(komponen.attitude) : undefined,
              kerjasama_tim: komponen.kerjasama_tim ? Number(komponen.kerjasama_tim) : undefined,
              inisiatif: komponen.inisiatif ? Number(komponen.inisiatif) : undefined,
              masukan: komponen.masukan || undefined,
            };
          }

          if (nilaiData.komponen_penilaian_pembimbing.length > 0) {
            const komponen = nilaiData.komponen_penilaian_pembimbing[0];
            komponenNilaiPembimbing = {
              penyelesaian_masalah: komponen.penyelesaian_masalah ? Number(komponen.penyelesaian_masalah) : undefined,
              bimbingan_sikap: komponen.bimbingan_sikap ? Number(komponen.bimbingan_sikap) : undefined,
              kualitas_laporan: komponen.kualitas_laporan ? Number(komponen.kualitas_laporan) : undefined,
              catatan: komponen.catatan || undefined,
            };
          }

          if (nilaiData.komponen_penilaian_penguji.length > 0) {
            const komponen = nilaiData.komponen_penilaian_penguji[0];
            komponenNilaiPenguji = {
              penguasaan_keilmuan: komponen.penguasaan_keilmuan ? Number(komponen.penguasaan_keilmuan) : undefined,
              kemampuan_presentasi: komponen.kemampuan_presentasi ? Number(komponen.kemampuan_presentasi) : undefined,
              kesesuaian_urgensi: komponen.kesesuaian_urgensi ? Number(komponen.kesesuaian_urgensi) : undefined,
              catatan: komponen.catatan || undefined,
            };
          }
        }

        let statusNilai = StatusNilai.NILAI_BELUM_VALID;

        const hasAllNilai = nilaiInstansi !== undefined && nilaiPembimbing !== undefined && nilaiPenguji !== undefined;

        if (hasAllNilai) {
          const allDocumentsValidated = pendaftaranKp?.dokumen_seminar_kp.every((doc) => doc.status === status_dokumen.Divalidasi);

          if (allDocumentsValidated) {
            statusNilai = StatusNilai.NILAI_APPROVE;
          } else {
            statusNilai = StatusNilai.NILAI_VALID;
          }
        }

        return {
          nim: mahasiswa.nim,
          nama: mahasiswa.nama,
          kelas: pendaftaranKp?.kelas_kp || undefined,
          statusNilai,
          statusDaftarKp: pendaftaranKp?.status || undefined,
          semester: MahasiswaHelper.getSemesterByNIM(mahasiswa.nim).toString(),
          instansi: pendaftaranKp?.instansi?.nama || undefined,
          pembimbingInstansi: pendaftaranKp?.pembimbing_instansi?.nama || undefined,
          dosenPembimbing: pendaftaranKp?.dosen_pembimbing?.nama || undefined,
          dosenPenguji: pendaftaranKp?.dosen_penguji?.nama || undefined,
          nilaiInstansi,
          nilaiPembimbing,
          nilaiPenguji,
          nilaiAkhir,
          nilaiHuruf,
          komponenNilaiInstansi,
          komponenNilaiPembimbing,
          komponenNilaiPenguji,
        };
      })
      .filter((mahasiswa): mahasiswa is DetailMahasiswaNilai => mahasiswa !== null);

    const jumlahNilaiBelumValid = detailMahasiswa.filter((m) => m.statusNilai === StatusNilai.NILAI_BELUM_VALID).length;
    const jumlahNilaiValid = detailMahasiswa.filter((m) => m.statusNilai === StatusNilai.NILAI_VALID).length;
    const jumlahNilaiApprove = detailMahasiswa.filter((m) => m.statusNilai === StatusNilai.NILAI_APPROVE).length;

    return {
      tahun_ajaran: { ...tahunAjaran },
      jumlah_nilai_belum_valid: jumlahNilaiBelumValid,
      jumlah_nilai_valid: jumlahNilaiValid,
      jumlah_nilai_approve: jumlahNilaiApprove,
      detail_mahasiswa: detailMahasiswa,
    };
  }
}
