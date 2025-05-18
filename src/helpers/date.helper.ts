import { fromZonedTime } from "date-fns-tz";

export default class DateHelper {
  public static isTimeOverlapping(start1: Date, end1: Date, start2: Date, end2: Date): boolean {
    return start1 < end2 && start2 < end1;
  }

  public static createDateTimeFromStrings(dateStr: string, timeStr: string): Date {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hour, minute] = timeStr.split(":").map(Number);

    const localDateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00+07:00`;

    const dateTime = new Date(localDateStr);

    return dateTime;
  }

  public static toJakartaTime(date: Date): Date {
    return fromZonedTime(date, "Asia/Jakarta");
  }
}
