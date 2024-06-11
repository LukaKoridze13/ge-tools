import days from "../config/days";

interface TodayProps {
  shorten?: number;
  date?: Date;
}

export default function today({ shorten, date = new Date() }: TodayProps = {}): string {
  // Validate the date property
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date property");
  }

  const currentDayIndex = date.getDay();
  const adjustedIndex = (currentDayIndex + 6) % 7;
  let result = days[adjustedIndex];

  // Validate the shorten property
  if (typeof shorten !== "undefined" && (!Number.isInteger(shorten) || shorten <= 0)) {
    throw new Error("The 'shorten' property must be a positive integer");
  }

  // Apply the shorten property if provided
  if (shorten) {
    result = result.slice(0, shorten);
  }

  return result;
}
