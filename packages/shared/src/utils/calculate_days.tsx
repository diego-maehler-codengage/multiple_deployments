export function calculateDays(start_date: string) {
  const start = new Date(start_date);
  const timeDifference = new Date().getTime() - start.getTime();
  const days = timeDifference / (1000 * 3600 * 24);

  return days;
}
