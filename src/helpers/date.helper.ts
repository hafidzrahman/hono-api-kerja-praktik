import { validasiStepDokumen } from "./dokumen-step.helper";

// export function formatDate(date: Date): string {
//   return date.toISOString().split('T')[0];
// }

// export function formatTime(date: Date): string {
//   return date.toISOString().split('T')[1].substring(0, 5);
// }

export function isTimeOverlapping(
  start1: Date,
  end1: Date,
  start2: Date,
  end2: Date
): boolean {
  return start1 < end2 && start2 < end1;
}

export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
}

export const parseTime = (dateString: string, timeString: string): Date => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date(dateString);
  
  date.setHours(hours, minutes, 0, 0);
  return date;
}

export const combineDateAndTime = (date: Date, time: string): Date => {
  const [hours, minutes] = time.split(':').map(Number);
  const combinedDate = new Date(date);
  
  combinedDate.setHours(hours, minutes, 0, 0);
  return combinedDate;
}

export const createDateTimeFromStrings = (dateStr: string, timeStr: string): Date => {
  const [year, month, day] = dateStr.split("-").map(Number);
  const [hour, minute] = timeStr.split(":").map(Number);
  
  return new Date(year, month - 1, day, hour, minute);
};

export const isEligibleForScheduling = async (id_pendaftaran_kp: string): Promise<boolean> => {
  return await validasiStepDokumen(3, id_pendaftaran_kp);
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
};