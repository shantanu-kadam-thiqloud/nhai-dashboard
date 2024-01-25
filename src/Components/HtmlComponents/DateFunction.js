export const DateFormatFunction = (inputDate) => {
  // Parse the input date string into a Date object
  const dateParts = inputDate.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
  const day = parseInt(dateParts[2]);
  const formattedDate = new Date(year, month, day);

  // Extract day, month, and year components
  const dd = String(formattedDate.getDate()).padStart(2, "0");
  const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
  const yyyy = formattedDate.getFullYear();

  // Format the date in "dd-mm-yyyy" format
  return `${dd}-${mm}-${yyyy}`;
};

export const ConvertFormat = (inputDate) => {
  // Split the input date into an array
  var dateArray = inputDate.split("-");
  // Rearrange the array elements to the new format
  var outputDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];

  return outputDate;
};
