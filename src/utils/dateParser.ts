import { DateValue } from "react-aria-components";

export default function dateParser(date: DateValue): string | null {
  if (!date) return null;
  const day = date.day.toString().padStart(2, "0");
  const month = date.month.toString().padStart(2, "0");
  const year = date.year.toString();
  return `${year}-${month}-${day}`;
}
