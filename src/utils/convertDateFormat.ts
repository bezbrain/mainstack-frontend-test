import { Value } from "../management/features/filtersSlice";

// DATE IN THE FORMAT e.g. Apr 9, 2024
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

// CALENDAR IN THE FORMAT e.g 9 Apr 2024
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

// DATE IN THE FORMAT e.g. 2024-04-09
export const numberFormat = (value: Date) => {
  const date = new Date(value);

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
  const day = ("0" + date.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;
  // console.log(formattedDate); // Output: 2024-04-09
  return formattedDate;
};

// DATE IN THE FORMAT e.g. 1709424000000
export const completeNumberFormat = (value: string) => {
  const dateObject = new Date(value);
  const numericDate = dateObject.getTime();

  return numericDate;
};
