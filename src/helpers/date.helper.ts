import { fromZonedTime } from "date-fns-tz";

export default class DateTimeUtil {
  public static isTimeOverlapping(
    start1: Date,
    end1: Date,
    start2: Date,
    end2: Date
  ): boolean {
    return start1 < end2 && start2 < end1;
  }

  public static parseDate(dateString: string): Date {
    const date = new Date(dateString);
    const jakartaOffset = 7 * 60;
    const localOffset = date.getTimezoneOffset();

    const totalOffsetMinutes = localOffset + jakartaOffset;
    date.setMinutes(date.getMinutes() - totalOffsetMinutes);
    return date;
  }

  public static parseTime(dateString: string, timeString: string): Date {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date(dateString);

    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  public static combineDateAndTime(date: Date, time: string): Date {
    const [hours, minutes] = time.split(":").map(Number);
    const combinedDate = new Date(date);

    combinedDate.setHours(hours, minutes, 0, 0);
    return combinedDate;
  }

  public static createDateTimeFromStrings(dateStr: string, timeStr: string): Date {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hour, minute] = timeStr.split(":").map(Number);

    const localDateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;

    const jakartaDate = fromZonedTime(localDateStr, "Asia/Jakarta");

    return jakartaDate;
  }

  public static preserveLocalTime(dateTime: Date): Date {
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const day = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    return new Date(year, month, day, hours, minutes, 0, 0);
  }

  public static formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    };

    return date.toLocaleDateString("id-ID", options);
  }

  public static formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    };

    return date.toLocaleDateString("id-ID", options);
  }

  public static formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    };

    return date.toLocaleTimeString("id-ID", options);
  }
}