
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
  tanggal: 'tanggal',
  catatan: 'catatan',
  status: 'status',
  nim: 'nim',
  nip: 'nip'
};

exports.Prisma.Daily_reportScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  status: 'status',
  catatan: 'catatan',
  latitude: 'latitude',
  longitude: 'longitude',
  nim: 'nim'
};

exports.Prisma.Detail_daily_reportScalarFieldEnum = {
  id: 'id',
  judul_kegiatan: 'judul_kegiatan',
  deskripsi_kegiatan: 'deskripsi_kegiatan',
  waktu: 'waktu',
  id_daily_report: 'id_daily_report'
};

exports.Prisma.DokumenScalarFieldEnum = {
  id: 'id',
  nim: 'nim',
  jenis_dokumen: 'jenis_dokumen',
  file_path: 'file_path',
  tanggal_upload: 'tanggal_upload',
  status: 'status',
  komentar: 'komentar'
};

exports.Prisma.DosenScalarFieldEnum = {
  nip: 'nip',
  nama: 'nama',
  email: 'email',
  no_hp: 'no_hp',
  id_telegram: 'id_telegram'
};

exports.Prisma.InstansiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  alamat: 'alamat',
  jenis: 'jenis',
  profil_singkat: 'profil_singkat',
  status: 'status'
};

exports.Prisma.JadwalScalarFieldEnum = {
  id: 'id',
  nim: 'nim',
  nip: 'nip',
  tanggal: 'tanggal',
  waktu_mulai: 'waktu_mulai',
  waktu_selesai: 'waktu_selesai',
  ruangan_nama: 'ruangan_nama',
  status: 'status'
};

exports.Prisma.Log_jadwalScalarFieldEnum = {
  id: 'id',
  jadwal_seminar_id: 'jadwal_seminar_id',
  log_type: 'log_type',
  nip: 'nip',
  tanggal_lama: 'tanggal_lama',
  tanggal_baru: 'tanggal_baru',
  ruangan_lama: 'ruangan_lama',
  ruangan_baru: 'ruangan_baru',
  keterangan: 'keterangan',
  created_at: 'created_at'
};

exports.Prisma.MahasiswaScalarFieldEnum = {
  nim: 'nim',
  nama: 'nama',
  email: 'email'
};

exports.Prisma.NilaiScalarFieldEnum = {
  id: 'id',
  nim: 'nim',
  jadwal_seminar_id: 'jadwal_seminar_id',
  nip_penguji: 'nip_penguji',
  nip_pembimbing: 'nip_pembimbing',
  nilai_pembimbing: 'nilai_pembimbing',
  nilai_penguji: 'nilai_penguji',
  note_pembimbing: 'note_pembimbing',
  note_penguji: 'note_penguji'
};

exports.Prisma.Nilai_instansiScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  nilai_angka: 'nilai_angka',
  nilai_huruf: 'nilai_huruf',
  nim: 'nim',
  id_pembimbing_instansi: 'id_pembimbing_instansi'
};

exports.Prisma.Pembimbing_instansiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  email: 'email',
  jabatan: 'jabatan',
  no_hp: 'no_hp',
  id_instansi: 'id_instansi'
};

exports.Prisma.Pendaftaran_kpScalarFieldEnum = {
  nim: 'nim',
  semester: 'semester',
  tanggalTerdaftar: 'tanggalTerdaftar',
  tanggalMulai: 'tanggalMulai',
  tenggatWaktu: 'tenggatWaktu',
  gagal: 'gagal',
  tanggalSelesai: 'tanggalSelesai',
  linkSuratPengantar: 'linkSuratPengantar',
  linkSuratBalasan: 'linkSuratBalasan',
  linkSuratPenunjukkanDospem: 'linkSuratPenunjukkanDospem',
  alasanLanjutKP: 'alasanLanjutKP',
  linkSuratPerpanjanganKP: 'linkSuratPerpanjanganKP',
  id_pembimbing_instansi: 'id_pembimbing_instansi',
  nip: 'nip'
};

exports.Prisma.RuanganScalarFieldEnum = {
  nama: 'nama'
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
exports.StatusValidasi = exports.$Enums.StatusValidasi = {
  MENUNGGU: 'MENUNGGU',
  VALID: 'VALID',
  REVISI: 'REVISI'
};

exports.JenisDokumen = exports.$Enums.JenisDokumen = {
  SURAT_KETERANGAN_SELESAI_KP: 'SURAT_KETERANGAN_SELESAI_KP',
  LAPORAN_TAMBAHAN_KP: 'LAPORAN_TAMBAHAN_KP',
  ID_SURAT_UNDANGAN: 'ID_SURAT_UNDANGAN',
  FORM_KEHADIRAN_SEMINAR: 'FORM_KEHADIRAN_SEMINAR',
  SURAT_UNDANGAN_SEMINAR_HASIL: 'SURAT_UNDANGAN_SEMINAR_HASIL',
  BERITA_ACARA_SEMINAR: 'BERITA_ACARA_SEMINAR',
  DAFTAR_HADIR_SEMINAR: 'DAFTAR_HADIR_SEMINAR',
  LEMBAR_PENGESAHAN_KP: 'LEMBAR_PENGESAHAN_KP',
  REVISI_DAILY_REPORT: 'REVISI_DAILY_REPORT',
  REVISI_LAPORAN_TAMBAHAN: 'REVISI_LAPORAN_TAMBAHAN',
  SISTEM_KP_FINAL: 'SISTEM_KP_FINAL'
};

exports.DokumenStatus = exports.$Enums.DokumenStatus = {
  submitted: 'submitted',
  verified: 'verified',
  rejected: 'rejected'
};

exports.JenisInstansi = exports.$Enums.JenisInstansi = {
  SWASTA: 'SWASTA',
  PEMERINTAHAN: 'PEMERINTAHAN',
  PENDIDIKAN: 'PENDIDIKAN',
  UMKM: 'UMKM'
};

exports.StatusInstansi = exports.$Enums.StatusInstansi = {
  PENDING: 'PENDING',
  AKTIF: 'AKTIF',
  TIDAK_AKTIF: 'TIDAK_AKTIF'
};

exports.StatusSeminar = exports.$Enums.StatusSeminar = {
  pending: 'pending',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled'
};

exports.LogType = exports.$Enums.LogType = {
  created: 'created',
  updated: 'updated',
  cancelled: 'cancelled',
  rescheduled: 'rescheduled'
};

exports.Prisma.ModelName = {
  bimbingan: 'bimbingan',
  daily_report: 'daily_report',
  detail_daily_report: 'detail_daily_report',
  dokumen: 'dokumen',
  dosen: 'dosen',
  instansi: 'instansi',
  jadwal: 'jadwal',
  log_jadwal: 'log_jadwal',
  mahasiswa: 'mahasiswa',
  nilai: 'nilai',
  nilai_instansi: 'nilai_instansi',
  pembimbing_instansi: 'pembimbing_instansi',
  pendaftaran_kp: 'pendaftaran_kp',
  ruangan: 'ruangan'
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
