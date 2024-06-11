import months from "../config/months";

interface CurrentMonthProps {
  shorten?: number;
  date?: Date;
}

export default function currentMonth({ shorten, date = new Date() }: CurrentMonthProps = {}): string {
  // Validate the date property
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date property");
  }

  const currentMonthIndex = date.getMonth();
  let result = months[currentMonthIndex];

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
