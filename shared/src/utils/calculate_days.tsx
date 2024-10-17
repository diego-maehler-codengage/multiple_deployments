export function calculateDays() {
  const start = new Date("01/01/2024");
  const timeDifference = new Date().getTime() - start.getTime();
  const days = timeDifference / (1000 * 3600 * 24);

  return days;
}
