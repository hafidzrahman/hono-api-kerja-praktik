import {z} from 'zod'
import { status_jadwal } from '../generated/prisma'

export const createJadwalSchema = z.object({
  tanggal: z.coerce.date({
    required_error: "Tanggal harus diisi",
    invalid_type_error: "Tanggal harus berisi format tanggal yang benar"
  }),
  waktu_mulai: z.coerce.date({
    required_error: "Waktu mulai seminar kp harus diisi",
    invalid_type_error: "Waktu mulai harus berisi format jam yang benar"
  }),
  waktu_selesai: z.coerce.date({
    required_error: "Waktu selesai harus diisi",
    invalid_type_error: "Waktu selesai harus berisi format jam yang benar"
  }).refine(data => data > new Date(), {
    message: "Waktu selesai harus lebih dari waktu mulai"
  }),
  nim: z.string({
    required_error: "NIM harus diisi"
  }).min(1, "NIM tidak bisa kosong").max(11, "NIM tidak boleh lebih dari 11 karakter"),
  nama_ruangan: z.string({
    required_error: "Ruangan harus diisi"
  }).min(1, "Ruangan tidak boleh kosong").max(10, "Nama ruangan tidak boleh lebih dari 10 karakter"),
  id_pendaftaran_kp: z.string({
    required_error: "ID Pendaftaran KP harus diisi"
  }).uuid("ID Pendaftaran KP harus uuid yang valid")
}).refine(data => data.waktu_selesai > data.waktu_mulai, {
  message: "Waktu selesai harus lebih dari waktu mulai",
  path: ["waktu_selesai"]
});

export const updateJadwalSchema = z.object({
  tanggal: z.coerce.date({
    invalid_type_error: "Tanggal harus berisi format tanggal yang benar"
  }).optional(),
  waktu_mulai: z.coerce.date({
    invalid_type_error: "Waktu mulai harus berisi format jam yang benar"
  }).optional(),
  waktu_selesai: z.coerce.date({
    invalid_type_error: "Waktu selesai harus berisi format jam yang benar"
  }).optional(),
  status: z.nativeEnum(status_jadwal).optional(),
  nama_ruangan: z.string().min(1, "Ruangan tidak boleh kosong").max(10, "Nama ruangan tidak boleh lebih dari 10 karakter").optional(),
}).refine(
  data => {
    if (data.waktu_mulai && data.waktu_selesai) {
      return data.waktu_selesai > data.waktu_mulai;
    }
    return true;
  },
  {
    message: "Waktu selesai harus lebih dari waktu mulai",
    path: ["waktu_selesai"]
  }
);

export const checkConflictsSchema = z.object({
  tanggal: z.coerce.date({
    required_error: "Tanggal harus diisi",
    invalid_type_error: "Tanggal harus berisi format tanggal yang benar"
  }),
  waktu_mulai: z.coerce.date({
    required_error: "Waktu mulai seminar kp harus diisi",
    invalid_type_error: "Waktu mulai harus berisi format jam yang benar"
  }),
  waktu_selesai: z.coerce.date({
    required_error: "Waktu selesai harus diisi",
    invalid_type_error: "Waktu selesai harus berisi format jam yang benar"
  }),
  nama_ruangan: z.string({
    required_error: "Ruangan harus diisi"
  }).min(1, "Ruangan tidak boleh kosong"),
  excludeId: z.string().uuid("Exclude ID must be a valid UUID").optional(),
}).refine(data => data.waktu_selesai > data.waktu_mulai, {
  message: "Waktu selesai harus lebih dari waktu mulai",
  path: ["waktu_selesai"]
});

export const rescheduleJadwalSchema = z.object({
  tanggal: z.coerce.date({
    required_error: "Tanggal harus diisi",
    invalid_type_error: "Tanggal harus berisi format tanggal yang benar"
  }),
  waktu_mulai: z.coerce.date({
    required_error: "Waktu mulai seminar kp harus diisi",
    invalid_type_error: "Waktu mulai harus berisi format jam yang benar"
  }),
  waktu_selesai: z.coerce.date({
    required_error: "Waktu selesai harus diisi",
    invalid_type_error: "Waktu selesai harus berisi format jam yang benar"
  }),
  nama_ruangan: z.string({
    required_error: "Ruangan harus diisi"
  }).min(1, "Ruangan tidak boleh kosong").max(10, "Nama ruangan tidak boleh lebih dari 10 karakter"),
}).refine(data => data.waktu_selesai > data.waktu_mulai, {
  message: "Waktu selesai harus lebih dari waktu mulai",
  path: ["waktu_selesai"]
});