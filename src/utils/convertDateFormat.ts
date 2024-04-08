import { Value } from "../components/transactions/filters/dateRange/dateRange";

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);

  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month name from the array based on the month index (0-indexed)
  const month = monthNames[date.getMonth()];

  // Get the day and pad it with leading zero if necessary
  const day = String(date.getDate()).padStart(2, "0");

  // Get the year
  const year = date.getFullYear();

  // Assemble the formatted date string
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export const calendarFormat = (value: Value) => {
  if (value !== null && !(value instanceof Array)) {
    const date = new Date(value);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = monthNames[monthIndex];

    // console.log(day, month, year);
    return { day, month, year };
  }
};
