
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BimbinganScalarFieldEnum = {
  id: 'id',
  tanggal_bimbingan: 'tanggal_bimbingan',
  catatan_bimbingan: 'catatan_bimbingan',
  nim: 'nim',
  nip: 'nip'
};

exports.Prisma.Daily_reportScalarFieldEnum = {
  id: 'id',
  tanggal_presensi: 'tanggal_presensi',
  status: 'status',
  catatan_evaluasi: 'catatan_evaluasi',
  latitude: 'latitude',
  longitude: 'longitude',
  nim: 'nim'
};

exports.Prisma.Detail_daily_reportScalarFieldEnum = {
  id: 'id',
  waktu: 'waktu',
  judul_agenda: 'judul_agenda',
  deskripsi_agenda: 'deskripsi_agenda',
  id_daily_report: 'id_daily_report'
};

exports.Prisma.DosenScalarFieldEnum = {
  nip: 'nip',
  nama: 'nama',
  no_hp: 'no_hp',
  email: 'email',
  id_telegram: 'id_telegram'
};

exports.Prisma.InstansiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  alamat: 'alamat',
  longitude: 'longitude',
  latitude: 'latitude',
  jenis: 'jenis',
  profil_singkat: 'profil_singkat',
  status: 'status',
  nama_pj: 'nama_pj',
  no_hp_pj: 'no_hp_pj'
};

exports.Prisma.JadwalScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  waktu_mulai: 'waktu_mulai',
  waktu_selesai: 'waktu_selesai',
  status: 'status',
  nim: 'nim',
  nama_ruangan: 'nama_ruangan',
  id_pendaftaran_kp: 'id_pendaftaran_kp'
};

exports.Prisma.Log_jadwalScalarFieldEnum = {
  id: 'id',
  log_type: 'log_type',
  tanggal_lama: 'tanggal_lama',
  tanggal_baru: 'tanggal_baru',
  ruangan_lama: 'ruangan_lama',
  ruangan_baru: 'ruangan_baru',
  keterangan: 'keterangan',
  created_at: 'created_at',
  id_jadwal_seminar: 'id_jadwal_seminar',
  nip: 'nip'
};

exports.Prisma.MahasiswaScalarFieldEnum = {
  nim: 'nim',
  nama: 'nama',
  no_hp: 'no_hp',
  email: 'email'
};

exports.Prisma.NilaiScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  nilai_penguji: 'nilai_penguji',
  nilai_pembimbing: 'nilai_pembimbing',
  nilai_instansi: 'nilai_instansi',
  nim: 'nim',
  nip: 'nip',
  email_pembimbing_instansi: 'email_pembimbing_instansi',
  id_jadwal_seminar: 'id_jadwal_seminar'
};

exports.Prisma.Pembimbing_instansiScalarFieldEnum = {
  email: 'email',
  id: 'id',
  nama: 'nama',
  no_hp: 'no_hp',
  jabatan: 'jabatan',
  id_instansi: 'id_instansi'
};

exports.Prisma.Pendaftaran_kpScalarFieldEnum = {
  id: 'id',
  status: 'status',
  tanggal_pengajuan: 'tanggal_pengajuan',
  tanggal_mulai: 'tanggal_mulai',
  tanggal_selesai: 'tanggal_selesai',
  kelas_kp: 'kelas_kp',
  tujuan_surat_instansi: 'tujuan_surat_instansi',
  link_surat_pengantar: 'link_surat_pengantar',
  link_surat_balasan: 'link_surat_balasan',
  link_surat_penunjukan_dospem: 'link_surat_penunjukan_dospem',
  link_surat_perpanjangan_kp: 'link_surat_perpanjangan_kp',
  id_surat_pengajuan_dospem: 'id_surat_pengajuan_dospem',
  email_pembimbing_instansi: 'email_pembimbing_instansi',
  catatan_penolakan: 'catatan_penolakan',
  level_akses: 'level_akses',
  judul_kp: 'judul_kp',
  alasan_lanjut_kp: 'alasan_lanjut_kp',
  id_tahun_ajaran: 'id_tahun_ajaran',
  id_instansi: 'id_instansi',
  nim: 'nim',
  nip_pembimbing: 'nip_pembimbing',
  nip_penguji: 'nip_penguji'
};

exports.Prisma.RuanganScalarFieldEnum = {
  nama: 'nama'
};

exports.Prisma.Dokumen_seminar_kpScalarFieldEnum = {
  id: 'id',
  jenis_dokumen: 'jenis_dokumen',
  link_path: 'link_path',
  tanggal_upload: 'tanggal_upload',
  status: 'status',
  komentar: 'komentar',
  nim: 'nim',
  id_pendaftaran_kp: 'id_pendaftaran_kp'
};

exports.Prisma.Komponen_penilaian_instansiScalarFieldEnum = {
  id: 'id',
  deliverables: 'deliverables',
  ketepatan_waktu: 'ketepatan_waktu',
  kedisiplinan: 'kedisiplinan',
  attitude: 'attitude',
  kerjasama_tim: 'kerjasama_tim',
  inisiatif: 'inisiatif',
  masukan: 'masukan',
  id_nilai: 'id_nilai'
};

exports.Prisma.Komponen_penilaian_pembimbingScalarFieldEnum = {
  id: 'id',
  penyelesaian_masalah: 'penyelesaian_masalah',
  bimbingan_sikap: 'bimbingan_sikap',
  kualitas_laporan: 'kualitas_laporan',
  catatan: 'catatan',
  id_nilai: 'id_nilai'
};

exports.Prisma.Komponen_penilaian_pengujiScalarFieldEnum = {
  id: 'id',
  penguasaan_keilmuan: 'penguasaan_keilmuan',
  kemampuan_presentasi: 'kemampuan_presentasi',
  kesesuaian_urgensi: 'kesesuaian_urgensi',
  catatan: 'catatan',
  id_nilai: 'id_nilai'
};

exports.Prisma.Tahun_ajaranScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.status_presensi = exports.$Enums.status_presensi = {
  Menunggu: 'Menunggu',
  Disetujui: 'Disetujui',
  Revisi: 'Revisi'
};

exports.jenis_instansi = exports.$Enums.jenis_instansi = {
  Swasta: 'Swasta',
  Pemerintahan: 'Pemerintahan',
  Pendidikan: 'Pendidikan',
  UMKM: 'UMKM'
};

exports.status_instansi = exports.$Enums.status_instansi = {
  Pending: 'Pending',
  Aktif: 'Aktif',
  Tidak_Aktif: 'Tidak_Aktif'
};

exports.status_jadwal = exports.$Enums.status_jadwal = {
  Menunggu: 'Menunggu',
  Selesai: 'Selesai',
  Jadwal_Ulang: 'Jadwal_Ulang'
};

exports.status_pendaftaran = exports.$Enums.status_pendaftaran = {
  Baru: 'Baru',
  Lanjut: 'Lanjut',
  Gagal: 'Gagal',
  Ditolak: 'Ditolak'
};

exports.jenis_dokumen = exports.$Enums.jenis_dokumen = {
  SURAT_KETERANGAN_SELESAI_KP: 'SURAT_KETERANGAN_SELESAI_KP',
  LAPORAN_TAMBAHAN_KP: 'LAPORAN_TAMBAHAN_KP',
  FORM_KEHADIRAN_SEMINAR: 'FORM_KEHADIRAN_SEMINAR',
  ID_SURAT_UNDANGAN: 'ID_SURAT_UNDANGAN',
  SURAT_UNDANGAN_SEMINAR_HASIL: 'SURAT_UNDANGAN_SEMINAR_HASIL',
  BERITA_ACARA_SEMINAR: 'BERITA_ACARA_SEMINAR',
  DAFTAR_HADIR_SEMINAR: 'DAFTAR_HADIR_SEMINAR',
  LEMBAR_PENGESAHAN_KP: 'LEMBAR_PENGESAHAN_KP',
  REVISI_DAILY_REPORT: 'REVISI_DAILY_REPORT',
  REVISI_LAPORAN_TAMBAHAN: 'REVISI_LAPORAN_TAMBAHAN',
  SISTEM_KP_FINAL: 'SISTEM_KP_FINAL'
};

exports.status_dokumen = exports.$Enums.status_dokumen = {
  Terkirim: 'Terkirim',
  Divalidasi: 'Divalidasi',
  Ditolak: 'Ditolak'
};

exports.Prisma.ModelName = {
  bimbingan: 'bimbingan',
  daily_report: 'daily_report',
  detail_daily_report: 'detail_daily_report',
  dosen: 'dosen',
  instansi: 'instansi',
  jadwal: 'jadwal',
  log_jadwal: 'log_jadwal',
  mahasiswa: 'mahasiswa',
  nilai: 'nilai',
  pembimbing_instansi: 'pembimbing_instansi',
  pendaftaran_kp: 'pendaftaran_kp',
  ruangan: 'ruangan',
  dokumen_seminar_kp: 'dokumen_seminar_kp',
  komponen_penilaian_instansi: 'komponen_penilaian_instansi',
  komponen_penilaian_pembimbing: 'komponen_penilaian_pembimbing',
  komponen_penilaian_penguji: 'komponen_penilaian_penguji',
  tahun_ajaran: 'tahun_ajaran'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
