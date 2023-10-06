export function formatDate(date: string | number | null | undefined): string | null {
  if (!date) {
    return null;
  }

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year}`;
}
