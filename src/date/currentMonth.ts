import months from "../config/months";

interface CurrentMonthProps {
  shorten?: number;
}

export default function currentMonth({ shorten }: CurrentMonthProps = {}): string {
  const currentMonthIndex = new Date().getMonth();
  let result = months[currentMonthIndex];

  if (typeof shorten !== "undefined" && shorten <= 0) {
    throw new Error("Invalid shorten property");
  }

  if (shorten) {
    result = result.slice(0, shorten);
  }

  return result;
}
