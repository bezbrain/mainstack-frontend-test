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
