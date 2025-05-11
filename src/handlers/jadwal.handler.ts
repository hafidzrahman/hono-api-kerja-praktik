import { Context } from "hono";
import JadwalSeminarKPService from "../services/jadwal.service";
import { CreateJadwalDto, UpdateJadwalDto } from "../types/seminar-kp/jadwal-seminar-kp.type";
import { createJadwalSchema, updateJadwalSchema } from "../validators/jadwal-seminar-kp.validator";

export default class JadwalSeminarKPHandler {
  public static async createJadwal(c: Context): Promise<Response> {
    const body = (await c.req.json()) as CreateJadwalDto;

    const jadwalData: CreateJadwalDto = {
      ...body,
      tanggal: new Date(body.tanggal),
      waktu_mulai: new Date(body.waktu_mulai),
      waktu_selesai: new Date(body.waktu_selesai)
    }

    const jadwal = await JadwalSeminarKPService.createJadwal(jadwalData);
    return c.json({ success: true, data: jadwal }, 201);
  }

  public static async getJadwalById(c: Context): Promise<Response> {
    const id = c.req.param("id");
    const jadwal = await JadwalSeminarKPService.getJadwal(id);

    if (!jadwal) {
      return c.json({ success: false, message: "Jadwal not found" }, 404);
    }

    return c.json({ success: true, data: jadwal });
  } 

  public static async getAllJadwal(c: Context): Promise<Response> {
    const { tanggal, status, nim, nama_ruangan } = c.req.query();

    const filter = {
      ...(tanggal ? { tanggal: new Date(tanggal) } : {}),
      ...(status ? { status } : {}),
      ...(nim ? { nim } : {}),
      ...(nama_ruangan ? { nama_ruangan } : {}),
    };

    const jadwal = await JadwalSeminarKPService.getAllJadwal(filter);
    return c.json({ success: true, data: jadwal });
  }

  public static async updateJadwal(c: Context): Promise<Response> {
    const id = c.req.param("id");
    const body = (await c.req.json()) as UpdateJadwalDto;

    const updateData: UpdateJadwalDto = {
      ...body
    }

    if (body.tanggal) updateData.tanggal = new Date(body.tanggal);
    if (body.waktu_mulai) updateData.waktu_mulai = new Date(body.waktu_mulai);
    if (body.waktu_selesai) updateData.waktu_selesai = new Date(body.waktu_selesai);

    const jadwal = await JadwalSeminarKPService.updateJadwal(id, updateData);
    return c.json({ success: true, data: jadwal });
  }

  public static async deleteJadwal(c: Context): Promise<Response> {
    const id = c.req.param("id");
    await JadwalSeminarKPService.deleteJadwal(id);
    return c.json({ success: true, message: "Jadwal deleted successfully" });
  }

  public static async completeJadwal(c: Context): Promise<Response> {
    const id = c.req.param("id");
    const jadwal = await JadwalSeminarKPService.completeJadwal(id);
    return c.json({ success: true, data: jadwal });
  }

  public static async rescheduleJadwal(c: Context): Promise<Response> {
    const id = c.req.param("id");
    const body = await c.req.json();

    const rescheduleData = {
      tanggal: new Date(body.tanggal),
      waktu_mulai: new Date(body.waktu_mulai),
      waktu_selesai: new Date(body.waktu_selesai),
      nama_ruangan: body.nama_ruangan,
    };

    const jadwal = await JadwalSeminarKPService.rescheduleJadwal(id, rescheduleData);
    return c.json({ success: true, data: jadwal });
  }

  public static async checkConflicts(c: Context): Promise<Response> {
    const { tanggal, waktu_mulai, waktu_selesai, nama_ruangan, excludeId } = await c.req.json();

    const conflicts = await JadwalSeminarKPService.checkScheduleConflicts(
      new Date(tanggal), 
      new Date(waktu_mulai), 
      new Date(waktu_selesai), 
      nama_ruangan,
      excludeId
    );

    return c.json({
      success: true,
      hasConflicts: conflicts.hasDosenConflict || conflicts.hasRuanganConflict || conflicts.hasMahasiswaConflict,
      conflicts,
    });
  }
}
