export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function formatTime(date: Date): string {
  return date.toISOString().split('T')[1].substring(0, 5);
}

export function isTimeOverlapping(
  start1: Date,
  end1: Date,
  start2: Date,
  end2: Date
): boolean {
  return start1 < end2 && start2 < end1;
}

export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

export function parseTime(dateString: string, timeString: string): Date {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date(dateString);
  
  date.setHours(hours, minutes, 0, 0);
  return date;
}

export function combineDateAndTime(date: Date, time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const combinedDate = new Date(date);
  
  combinedDate.setHours(hours, minutes, 0, 0);
  return combinedDate;
}