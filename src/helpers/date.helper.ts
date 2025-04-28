// Format a date to YYYY-MM-DD format
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}


// Format a timestamp to HH:MM format
export function formatTime(date: Date): string {
  return date.toISOString().split('T')[1].substring(0, 5);
}

// Check if two time ranges overlap
export function isTimeOverlapping(
  start1: Date,
  end1: Date,
  start2: Date,
  end2: Date
): boolean {
  return start1 < end2 && start2 < end1;
}

// Parse date string in YYYY-MM-DD format to Date object
export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

// Parse time string in HH:MM format to Date object
export function parseTime(dateString: string, timeString: string): Date {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date(dateString);
  
  date.setHours(hours, minutes, 0, 0);
  return date;
}

// Combine date and time to create a full datetime object
export function combineDateAndTime(date: Date, time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const combinedDate = new Date(date);
  
  combinedDate.setHours(hours, minutes, 0, 0);
  return combinedDate;
}