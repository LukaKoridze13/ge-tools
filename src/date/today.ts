import days from "../config/days";

interface TodayProps {
  shorten?: number;
}

export default function today({ shorten }: TodayProps = {}): string {
  const currentDayIndex = new Date().getDay();
  const adjustedIndex = (currentDayIndex + 6) % 7;
  let result = days[adjustedIndex];

  if (typeof shorten !== "undefined" && shorten <= 0) {
    throw new Error("Invalid shorten property");
  }

  if (shorten) {
    result = result.slice(0, shorten);
  }

  return result;
}
