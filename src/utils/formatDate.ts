export const formatTxDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  // Today
  if (isSameDay(date, today)) return "Today";

  // Yesterday
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  if (isSameDay(date, yesterday)) return "Yesterday";

  // Last 7 days (not including today)
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);
  if (date > weekAgo) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }

  // Older → mm/dd/yyyy
  return date.toLocaleDateString("en-US");
};
