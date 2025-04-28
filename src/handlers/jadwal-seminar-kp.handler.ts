import { Context } from "hono";
import JadwalService from "../services/jadwal-seminar-kp.service";
import { CreateJadwalDto, UpdateJadwalDto } from "../types/seminar-kp/jadwal-seminar-kp.type";

export default class JadwalHandler {
  private jadwalService: JadwalService;

  constructor() {
    this.jadwalService = new JadwalService();
  }

  async createJadwal(c: Context): Promise<Response> {
    try {
      const body = (await c.req.json()) as CreateJadwalDto;

      // Convert date strings to Date objects
      body.tanggal = new Date(body.tanggal);
      body.waktu_mulai = new Date(body.waktu_mulai);
      body.waktu_selesai = new Date(body.waktu_selesai);

      const jadwal = await this.jadwalService.createJadwal(body);
      return c.json({ success: true, data: jadwal }, 201);
    } catch (error: any) {
      // Check if error is a schedule conflict
      if (error.message && error.message.includes("Schedule conflict")) {
        const conflicts = JSON.parse(error.message);
        return c.json(
          {
            success: false,
            message: "Schedule conflict detected",
            conflicts: conflicts.conflicts,
          },
          409
        );
      }

      console.error("Error creating jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to create jadwal" }, 500);
    }
  }

  async getJadwalById(c: Context): Promise<Response> {
    try {
      const id = c.req.param("id");
      const jadwal = await this.jadwalService.getJadwal(id);

      if (!jadwal) {
        return c.json({ success: false, message: "Jadwal not found" }, 404);
      }

      return c.json({ success: true, data: jadwal });
    } catch (error: any) {
      console.error("Error getting jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to get jadwal" }, 500);
    }
  }

  async getAllJadwal(c: Context): Promise<Response> {
    try {
      const { tanggal, status, nim, nama_ruangan } = c.req.query();

      const filter = {
        ...(tanggal ? { tanggal: new Date(tanggal) } : {}),
        ...(status ? { status } : {}),
        ...(nim ? { nim } : {}),
        ...(nama_ruangan ? { nama_ruangan } : {}),
      };

      const jadwals = await this.jadwalService.getAllJadwal(filter);
      return c.json({ success: true, data: jadwals });
    } catch (error: any) {
      console.error("Error getting all jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to get jadwals" }, 500);
    }
  }

  async updateJadwal(c: Context): Promise<Response> {
    try {
      const id = c.req.param("id");
      const body = (await c.req.json()) as UpdateJadwalDto;

      // Convert date strings to Date objects if they exist
      if (body.tanggal) body.tanggal = new Date(body.tanggal);
      if (body.waktu_mulai) body.waktu_mulai = new Date(body.waktu_mulai);
      if (body.waktu_selesai) body.waktu_selesai = new Date(body.waktu_selesai);

      const jadwal = await this.jadwalService.updateJadwal(id, body);
      return c.json({ success: true, data: jadwal });
    } catch (error: any) {
      // Check if error is a schedule conflict
      if (error.message && error.message.includes("Schedule conflict")) {
        const conflicts = JSON.parse(error.message);
        return c.json(
          {
            success: false,
            message: "Schedule conflict detected",
            conflicts: conflicts.conflicts,
          },
          409
        );
      }

      console.error("Error updating jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to update jadwal" }, 500);
    }
  }

  async deleteJadwal(c: Context): Promise<Response> {
    try {
      const id = c.req.param("id");
      await this.jadwalService.deleteJadwal(id);
      return c.json({ success: true, message: "Jadwal deleted successfully" });
    } catch (error: any) {
      console.error("Error deleting jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to delete jadwal" }, 500);
    }
  }

  async completeJadwal(c: Context): Promise<Response> {
    try {
      const id = c.req.param("id");
      const jadwal = await this.jadwalService.completeJadwal(id);
      return c.json({ success: true, data: jadwal });
    } catch (error: any) {
      console.error("Error completing jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to complete jadwal" }, 500);
    }
  }

  async rescheduleJadwal(c: Context): Promise<Response> {
    try {
      const id = c.req.param("id");
      const body = await c.req.json();

      // Convert date strings to Date objects
      const rescheduleData = {
        tanggal: new Date(body.tanggal),
        waktu_mulai: new Date(body.waktu_mulai),
        waktu_selesai: new Date(body.waktu_selesai),
        nama_ruangan: body.nama_ruangan,
      };

      const jadwal = await this.jadwalService.rescheduleJadwal(id, rescheduleData);
      return c.json({ success: true, data: jadwal });
    } catch (error: any) {
      // Check if error is a schedule conflict
      if (error.message && error.message.includes("Schedule conflict")) {
        const conflicts = JSON.parse(error.message);
        return c.json(
          {
            success: false,
            message: "Schedule conflict detected",
            conflicts: conflicts.conflicts,
          },
          409
        );
      }

      console.error("Error rescheduling jadwal:", error);
      return c.json({ success: false, message: error.message || "Failed to reschedule jadwal" }, 500);
    }
  }

  async checkConflicts(c: Context): Promise<Response> {
    try {
      const { tanggal, waktu_mulai, waktu_selesai, nama_ruangan, excludeId } = await c.req.json();

      const conflicts = await this.jadwalService.checkScheduleConflicts(new Date(tanggal), new Date(waktu_mulai), new Date(waktu_selesai), nama_ruangan, excludeId);

      return c.json({
        success: true,
        hasConflicts: conflicts.hasDosenConflict || conflicts.hasRuanganConflict,
        conflicts,
      });
    } catch (error: any) {
      console.error("Error checking conflicts:", error);
      return c.json({ success: false, message: error.message || "Failed to check conflicts" }, 500);
    }
  }
}
