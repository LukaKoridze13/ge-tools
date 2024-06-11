import days from "../config/days";
import months from "../config/months";

interface FormatDateProps {
  date?: Date;
  format: string;
}

export default function formatDate({ date = new Date(), format }: FormatDateProps): string {
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date property");
  }

  const dayName = days[(date.getDay() + 6) % 7]; // Adjust for Georgian week starting on Monday
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const replacements: { [key: string]: string | number } = {
    წმ: seconds,
    წთ: minutes,
    სთ: hours,
    დღე: dayName,
    რიცხვი: dayNumber,
    თვე: monthName,
    წელი: year,
  };

  return format.replace(/__([a-zA-Zა-ჰ]+)(\d+)?(_)?/g, (match, p1, p2, p3) => {
    const value = String(replacements[p1]);
    if (!p2) return value; // No cut specified

    const n = parseInt(p2, 10);
    if (isNaN(n)) return value;

    if (p3) {
      // Last n characters
      return value.slice(-n);
    } else {
      // First n characters
      return value.slice(0, n);
    }
  });
}
