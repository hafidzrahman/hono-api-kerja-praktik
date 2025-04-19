
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
  nip: 'nip',
  id_pendaftaran_kp: 'id_pendaftaran_kp'
};

exports.Prisma.Daily_reportScalarFieldEnum = {
  id: 'id',
  tanggal_presensi: 'tanggal_presensi',
  status: 'status',
  catatan_evaluasi: 'catatan_evaluasi',
  latitude: 'latitude',
  longitude: 'longitude',
  nim: 'nim',
  id_pendaftaran_kp: 'id_pendaftaran_kp'
};

exports.Prisma.Detail_daily_reportScalarFieldEnum = {
  id: 'id',
  judul_agenda: 'judul_agenda',
  deskripsi_agenda: 'deskripsi_agenda',
  waktu: 'waktu',
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
  no_hp_pj: 'no_hp_pj',
  nim: 'nim',
  nip: 'nip'
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
  id_pembimbing_instansi: 'id_pembimbing_instansi',
  id_jadwal_seminar: 'id_jadwal_seminar'
};

exports.Prisma.Pembimbing_instansiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  no_hp: 'no_hp',
  jabatan: 'jabatan',
  email: 'email',
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

exports.jenis_instansi = exports.$Enums.jenis_instansi = {
  Swasta: 'Swasta',
  Pemerintahan: 'Pemerintahan',
  Pendidikan: 'Pendidikan',
  UMKM: 'UMKM'
};

exports.status_dokumen = exports.$Enums.status_dokumen = {
  Terkirim: 'Terkirim',
  Divalidasi: 'Divalidasi',
  Ditolak: 'Ditolak'
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

exports.status_presensi = exports.$Enums.status_presensi = {
  Menunggu: 'Menunggu',
  Disetujui: 'Disetujui',
  Revisi: 'Revisi'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Coding\\Projek\\API\\hono-api-kerja-praktik\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\Coding\\Projek\\API\\hono-api-kerja-praktik\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel bimbingan {\n  id                String          @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  tanggal_bimbingan DateTime?       @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  catatan_bimbingan String?         @db.VarChar(255)\n  nim               String?         @db.VarChar(11)\n  nip               String?         @db.VarChar(20)\n  id_pendaftaran_kp String?         @db.Uuid\n  pendaftaran_kp    pendaftaran_kp? @relation(fields: [id_pendaftaran_kp], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  mahasiswa         mahasiswa?      @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction)\n  dosen             dosen?          @relation(fields: [nip], references: [nip], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel daily_report {\n  id                  String                @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  tanggal_presensi    DateTime?             @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  status              status_presensi?      @default(Menunggu)\n  catatan_evaluasi    String?               @db.VarChar(255)\n  latitude            Float?\n  longitude           Float?\n  nim                 String?               @db.VarChar(11)\n  id_pendaftaran_kp   String?               @db.Uuid\n  pendaftaran_kp      pendaftaran_kp?       @relation(fields: [id_pendaftaran_kp], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  mahasiswa           mahasiswa?            @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction)\n  detail_daily_report detail_daily_report[]\n}\n\nmodel detail_daily_report {\n  id               Int           @id @default(autoincrement())\n  judul_agenda     String        @db.VarChar(255)\n  deskripsi_agenda String        @db.VarChar(255)\n  waktu            DateTime      @db.Timestamp(6)\n  id_daily_report  String?       @db.Uuid\n  daily_report     daily_report? @relation(fields: [id_daily_report], references: [id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel dosen {\n  nip         String      @id @db.VarChar(20)\n  nama        String      @db.VarChar(255)\n  no_hp       String?     @unique @db.VarChar(14)\n  email       String      @unique @db.VarChar(255)\n  id_telegram String?     @unique @db.VarChar(10)\n  bimbingan   bimbingan[]\n  nilai       nilai[]\n}\n\nmodel instansi {\n  id                  String                @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  nama                String                @db.VarChar(255)\n  alamat              String                @db.VarChar(255)\n  longitude           Float?\n  latitude            Float?\n  jenis               jenis_instansi\n  profil_singkat      String?               @db.VarChar(255)\n  status              status_instansi?      @default(Pending)\n  nama_pj             String                @db.VarChar(255)\n  no_hp_pj            String                @db.VarChar(14)\n  nim                 String?               @db.VarChar(11)\n  nip                 String?               @db.VarChar(20)\n  pembimbing_instansi pembimbing_instansi[]\n  pendaftaran_kp      pendaftaran_kp[]\n}\n\nmodel jadwal {\n  id                String          @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  tanggal           DateTime?       @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  waktu_mulai       DateTime?       @db.Timestamp(6)\n  waktu_selesai     DateTime?       @db.Timestamp(6)\n  status            status_jadwal?\n  nim               String?         @db.VarChar(11)\n  nama_ruangan      String?         @db.VarChar(10)\n  id_pendaftaran_kp String?         @db.Uuid\n  pendaftaran_kp    pendaftaran_kp? @relation(fields: [id_pendaftaran_kp], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  ruangan           ruangan?        @relation(fields: [nama_ruangan], references: [nama], onDelete: NoAction, onUpdate: NoAction)\n  mahasiswa         mahasiswa?      @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel log_jadwal {\n  id                String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  log_type          String?\n  tanggal_lama      DateTime? @db.Date\n  tanggal_baru      DateTime  @db.Date\n  ruangan_lama      DateTime? @db.Date\n  ruangan_baru      DateTime  @db.Date\n  keterangan        String?   @db.VarChar(255)\n  created_at        DateTime? @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  id_jadwal_seminar Int?\n  nip               String?   @db.VarChar(20)\n}\n\nmodel mahasiswa {\n  nim                String               @id @db.VarChar(11)\n  nama               String               @db.VarChar(255)\n  no_hp              String?              @db.VarChar(14)\n  email              String               @unique @db.VarChar(255)\n  bimbingan          bimbingan[]\n  daily_report       daily_report[]\n  dokumen_seminar_kp dokumen_seminar_kp[]\n  jadwal             jadwal[]\n  nilai              nilai[]\n  pendaftaran_kp     pendaftaran_kp[]\n}\n\nmodel nilai {\n  id                            String                          @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  tanggal                       DateTime?                       @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  nilai_penguji                 Float?\n  nilai_pembimbing              Float?\n  nilai_instansi                Float?\n  nim                           String?                         @db.VarChar(11)\n  nip                           String?                         @db.VarChar(20)\n  id_pembimbing_instansi        String?                         @db.Uuid\n  id_jadwal_seminar             String?                         @db.Uuid\n  komponen_penilaian_instansi   komponen_penilaian_instansi[]\n  komponen_penilaian_pembimbing komponen_penilaian_pembimbing[]\n  komponen_penilaian_penguji    komponen_penilaian_penguji[]\n  pembimbing_instansi           pembimbing_instansi?            @relation(fields: [id_pembimbing_instansi], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  mahasiswa                     mahasiswa?                      @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction)\n  dosen                         dosen?                          @relation(fields: [nip], references: [nip], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel pembimbing_instansi {\n  id          String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  nama        String?   @db.VarChar(255)\n  no_hp       String?   @db.VarChar(16)\n  jabatan     String?   @db.VarChar(40)\n  email       String    @unique @db.VarChar(255)\n  id_instansi String?   @db.Uuid\n  nilai       nilai[]\n  instansi    instansi? @relation(fields: [id_instansi], references: [id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel pendaftaran_kp {\n  id                           String               @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  status                       status_pendaftaran?  @default(Baru)\n  tanggal_pengajuan            DateTime?            @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  tanggal_mulai                DateTime             @db.Date\n  tanggal_selesai              DateTime?            @db.Date\n  kelas_kp                     String?              @db.Char(1)\n  tujuan_surat_instansi        String               @db.VarChar(255)\n  link_surat_pengantar         String?              @db.VarChar(255)\n  link_surat_balasan           String?              @db.VarChar(255)\n  link_surat_penunjukan_dospem String?              @db.VarChar(255)\n  link_surat_perpanjangan_kp   String?              @db.VarChar(255)\n  id_surat_pengajuan_dospem    String?              @db.VarChar(25)\n  email_pembimbing_instansi    String?              @db.VarChar(255)\n  catatan_penolakan            String?              @db.VarChar(255)\n  level_akses                  Int?                 @default(0)\n  judul_kp                     String?              @db.VarChar(255)\n  alasan_lanjut_kp             String?              @db.VarChar(255)\n  id_tahun_ajaran              Int?\n  id_instansi                  String?              @db.Uuid\n  nim                          String?              @db.VarChar(11)\n  nip_pembimbing               String?              @db.VarChar(20)\n  nip_penguji                  String?              @db.VarChar(20)\n  bimbingan                    bimbingan[]\n  daily_report                 daily_report[]\n  dokumen_seminar_kp           dokumen_seminar_kp[]\n  jadwal                       jadwal[]\n  instansi                     instansi?            @relation(fields: [id_instansi], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  tahun_ajaran                 tahun_ajaran?        @relation(fields: [id_tahun_ajaran], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  mahasiswa                    mahasiswa?           @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel ruangan {\n  nama   String   @id @db.VarChar(10)\n  jadwal jadwal[]\n}\n\nmodel dokumen_seminar_kp {\n  id                String          @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  jenis_dokumen     jenis_dokumen\n  link_path         String          @db.VarChar(255)\n  tanggal_upload    DateTime?       @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  status            status_dokumen? @default(Terkirim)\n  komentar          String?         @db.VarChar(255)\n  nim               String?         @db.VarChar(11)\n  id_pendaftaran_kp String?         @db.Uuid\n  pendaftaran_kp    pendaftaran_kp? @relation(fields: [id_pendaftaran_kp], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  mahasiswa         mahasiswa?      @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel komponen_penilaian_instansi {\n  id              String  @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  deliverables    Float?\n  ketepatan_waktu Float?\n  kedisiplinan    Float?\n  attitude        Float?\n  kerjasama_tim   Float?\n  inisiatif       Float?\n  masukan         String?\n  id_nilai        String? @db.Uuid\n  nilai           nilai?  @relation(fields: [id_nilai], references: [id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel komponen_penilaian_pembimbing {\n  id                   String  @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  penyelesaian_masalah Float?\n  bimbingan_sikap      Float?\n  kualitas_laporan     Float?\n  catatan              String?\n  id_nilai             String? @db.Uuid\n  nilai                nilai?  @relation(fields: [id_nilai], references: [id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel komponen_penilaian_penguji {\n  id                   String  @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  penguasaan_keilmuan  Float?\n  kemampuan_presentasi Float?\n  kesesuaian_urgensi   Float?\n  catatan              String?\n  id_nilai             String? @db.Uuid\n  nilai                nilai?  @relation(fields: [id_nilai], references: [id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel tahun_ajaran {\n  id             Int              @id @default(autoincrement())\n  nama           String?          @db.VarChar(255)\n  created_at     String?          @db.VarChar(255)\n  pendaftaran_kp pendaftaran_kp[]\n}\n\nenum jenis_dokumen {\n  SURAT_KETERANGAN_SELESAI_KP\n  LAPORAN_TAMBAHAN_KP\n  FORM_KEHADIRAN_SEMINAR\n  ID_SURAT_UNDANGAN\n  SURAT_UNDANGAN_SEMINAR_HASIL\n  BERITA_ACARA_SEMINAR\n  DAFTAR_HADIR_SEMINAR\n  LEMBAR_PENGESAHAN_KP\n  REVISI_DAILY_REPORT\n  REVISI_LAPORAN_TAMBAHAN\n  SISTEM_KP_FINAL\n}\n\nenum jenis_instansi {\n  Swasta\n  Pemerintahan\n  Pendidikan\n  UMKM\n}\n\nenum status_dokumen {\n  Terkirim\n  Divalidasi\n  Ditolak\n}\n\nenum status_instansi {\n  Pending\n  Aktif\n  Tidak_Aktif\n}\n\nenum status_jadwal {\n  Menunggu\n  Selesai\n  Jadwal_Ulang\n}\n\nenum status_pendaftaran {\n  Baru\n  Lanjut\n  Gagal\n  Ditolak\n}\n\nenum status_presensi {\n  Menunggu\n  Disetujui\n  Revisi\n}\n",
  "inlineSchemaHash": "b5e0509eb7592618d9cc45bcbbcfc6474b583769fd3934d12eaf2e31b667ad13",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"bimbingan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_bimbingan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan_bimbingan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pendaftaran_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"bimbinganTopendaftaran_kp\",\"relationFromFields\":[\"id_pendaftaran_kp\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"bimbinganTomahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dosen\",\"nativeType\":null,\"relationName\":\"bimbinganTodosen\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"daily_report\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_presensi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"status_presensi\",\"nativeType\":null,\"default\":\"Menunggu\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan_evaluasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pendaftaran_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"daily_reportTopendaftaran_kp\",\"relationFromFields\":[\"id_pendaftaran_kp\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"daily_reportTomahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detail_daily_report\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detail_daily_report\",\"nativeType\":null,\"relationName\":\"daily_reportTodetail_daily_report\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"detail_daily_report\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_agenda\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_agenda\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_daily_report\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daily_report\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"daily_report\",\"nativeType\":null,\"relationName\":\"daily_reportTodetail_daily_report\",\"relationFromFields\":[\"id_daily_report\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dosen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"14\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_telegram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bimbingan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bimbingan\",\"nativeType\":null,\"relationName\":\"bimbinganTodosen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilai\",\"nativeType\":null,\"relationName\":\"dosenTonilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"instansi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jenis_instansi\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profil_singkat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"status_instansi\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp_pj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"14\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pembimbing_instansi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pembimbing_instansi\",\"nativeType\":null,\"relationName\":\"instansiTopembimbing_instansi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"instansiTopendaftaran_kp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jadwal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu_mulai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu_selesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_jadwal\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ruangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pendaftaran_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"jadwalTopendaftaran_kp\",\"relationFromFields\":[\"id_pendaftaran_kp\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ruangan\",\"nativeType\":null,\"relationName\":\"jadwalToruangan\",\"relationFromFields\":[\"nama_ruangan\"],\"relationToFields\":[\"nama\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"jadwalTomahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"log_jadwal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_lama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan_lama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_jadwal_seminar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mahasiswa\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"14\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bimbingan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bimbingan\",\"nativeType\":null,\"relationName\":\"bimbinganTomahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daily_report\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"daily_report\",\"nativeType\":null,\"relationName\":\"daily_reportTomahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dokumen_seminar_kp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dokumen_seminar_kp\",\"nativeType\":null,\"relationName\":\"dokumen_seminar_kpTomahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jadwal\",\"nativeType\":null,\"relationName\":\"jadwalTomahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilai\",\"nativeType\":null,\"relationName\":\"mahasiswaTonilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"mahasiswaTopendaftaran_kp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"nilai\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_penguji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_pembimbing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pembimbing_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_jadwal_seminar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komponen_penilaian_instansi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"komponen_penilaian_instansi\",\"nativeType\":null,\"relationName\":\"komponen_penilaian_instansiTonilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komponen_penilaian_pembimbing\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"komponen_penilaian_pembimbing\",\"nativeType\":null,\"relationName\":\"komponen_penilaian_pembimbingTonilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komponen_penilaian_penguji\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"komponen_penilaian_penguji\",\"nativeType\":null,\"relationName\":\"komponen_penilaian_pengujiTonilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pembimbing_instansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pembimbing_instansi\",\"nativeType\":null,\"relationName\":\"nilaiTopembimbing_instansi\",\"relationFromFields\":[\"id_pembimbing_instansi\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"mahasiswaTonilai\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dosen\",\"nativeType\":null,\"relationName\":\"dosenTonilai\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pembimbing_instansi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jabatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"40\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilai\",\"nativeType\":null,\"relationName\":\"nilaiTopembimbing_instansi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"instansi\",\"nativeType\":null,\"relationName\":\"instansiTopembimbing_instansi\",\"relationFromFields\":[\"id_instansi\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pendaftaran_kp\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"status_pendaftaran\",\"nativeType\":null,\"default\":\"Baru\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_mulai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_selesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kelas_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tujuan_surat_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_surat_pengantar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_surat_balasan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_surat_penunjukan_dospem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_surat_perpanjangan_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_surat_pengajuan_dospem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_pembimbing_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan_penolakan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level_akses\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alasan_lanjut_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tahun_ajaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip_pembimbing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip_penguji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bimbingan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bimbingan\",\"nativeType\":null,\"relationName\":\"bimbinganTopendaftaran_kp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daily_report\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"daily_report\",\"nativeType\":null,\"relationName\":\"daily_reportTopendaftaran_kp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dokumen_seminar_kp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dokumen_seminar_kp\",\"nativeType\":null,\"relationName\":\"dokumen_seminar_kpTopendaftaran_kp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jadwal\",\"nativeType\":null,\"relationName\":\"jadwalTopendaftaran_kp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"instansi\",\"nativeType\":null,\"relationName\":\"instansiTopendaftaran_kp\",\"relationFromFields\":[\"id_instansi\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tahun_ajaran\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tahun_ajaran\",\"nativeType\":null,\"relationName\":\"pendaftaran_kpTotahun_ajaran\",\"relationFromFields\":[\"id_tahun_ajaran\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"mahasiswaTopendaftaran_kp\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ruangan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jadwal\",\"nativeType\":null,\"relationName\":\"jadwalToruangan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dokumen_seminar_kp\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_dokumen\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jenis_dokumen\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_upload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"status_dokumen\",\"nativeType\":null,\"default\":\"Terkirim\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pendaftaran_kp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"dokumen_seminar_kpTopendaftaran_kp\",\"relationFromFields\":[\"id_pendaftaran_kp\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"dokumen_seminar_kpTomahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"komponen_penilaian_instansi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliverables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ketepatan_waktu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kedisiplinan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kerjasama_tim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inisiatif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masukan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nilai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilai\",\"nativeType\":null,\"relationName\":\"komponen_penilaian_instansiTonilai\",\"relationFromFields\":[\"id_nilai\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"komponen_penilaian_pembimbing\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penyelesaian_masalah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bimbingan_sikap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kualitas_laporan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nilai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilai\",\"nativeType\":null,\"relationName\":\"komponen_penilaian_pembimbingTonilai\",\"relationFromFields\":[\"id_nilai\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"komponen_penilaian_penguji\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penguasaan_keilmuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kemampuan_presentasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kesesuaian_urgensi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nilai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilai\",\"nativeType\":null,\"relationName\":\"komponen_penilaian_pengujiTonilai\",\"relationFromFields\":[\"id_nilai\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tahun_ajaran\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran_kp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pendaftaran_kp\",\"nativeType\":null,\"relationName\":\"pendaftaran_kpTotahun_ajaran\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"jenis_dokumen\":{\"values\":[{\"name\":\"SURAT_KETERANGAN_SELESAI_KP\",\"dbName\":null},{\"name\":\"LAPORAN_TAMBAHAN_KP\",\"dbName\":null},{\"name\":\"FORM_KEHADIRAN_SEMINAR\",\"dbName\":null},{\"name\":\"ID_SURAT_UNDANGAN\",\"dbName\":null},{\"name\":\"SURAT_UNDANGAN_SEMINAR_HASIL\",\"dbName\":null},{\"name\":\"BERITA_ACARA_SEMINAR\",\"dbName\":null},{\"name\":\"DAFTAR_HADIR_SEMINAR\",\"dbName\":null},{\"name\":\"LEMBAR_PENGESAHAN_KP\",\"dbName\":null},{\"name\":\"REVISI_DAILY_REPORT\",\"dbName\":null},{\"name\":\"REVISI_LAPORAN_TAMBAHAN\",\"dbName\":null},{\"name\":\"SISTEM_KP_FINAL\",\"dbName\":null}],\"dbName\":null},\"jenis_instansi\":{\"values\":[{\"name\":\"Swasta\",\"dbName\":null},{\"name\":\"Pemerintahan\",\"dbName\":null},{\"name\":\"Pendidikan\",\"dbName\":null},{\"name\":\"UMKM\",\"dbName\":null}],\"dbName\":null},\"status_dokumen\":{\"values\":[{\"name\":\"Terkirim\",\"dbName\":null},{\"name\":\"Divalidasi\",\"dbName\":null},{\"name\":\"Ditolak\",\"dbName\":null}],\"dbName\":null},\"status_instansi\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Aktif\",\"dbName\":null},{\"name\":\"Tidak_Aktif\",\"dbName\":null}],\"dbName\":null},\"status_jadwal\":{\"values\":[{\"name\":\"Menunggu\",\"dbName\":null},{\"name\":\"Selesai\",\"dbName\":null},{\"name\":\"Jadwal_Ulang\",\"dbName\":null}],\"dbName\":null},\"status_pendaftaran\":{\"values\":[{\"name\":\"Baru\",\"dbName\":null},{\"name\":\"Lanjut\",\"dbName\":null},{\"name\":\"Gagal\",\"dbName\":null},{\"name\":\"Ditolak\",\"dbName\":null}],\"dbName\":null},\"status_presensi\":{\"values\":[{\"name\":\"Menunggu\",\"dbName\":null},{\"name\":\"Disetujui\",\"dbName\":null},{\"name\":\"Revisi\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
