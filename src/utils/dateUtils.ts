/**
 * Formats a date as a string
 * @param {Date} date the date to format. Ex: 'January 03, 2022 18:34:23'
 * @returns {string} the formatted date string. Ex: 'Hoy, 03/01/2022'
 */
export const formatDate = (date: Date): string => {
  const dt = new Date(date),
    curr_date = dt.getDate(),
    curr_month = ("0" + (date.getMonth() + 1)).slice(-2),
    curr_year = date.getFullYear(),
    diffDays = new Date().getDate() - curr_date,
    diffMonths = new Date().getMonth() - dt.getMonth(),
    diffYears = new Date().getFullYear() - dt.getFullYear();

  const formattedDate = curr_date + "/" + curr_month + "/" + curr_year;

  if (diffYears === 0 && diffDays === 0 && diffMonths === 0) {
    return "Hoy, " + formattedDate;
  } else if (diffYears === 0 && diffDays === 1) {
    return "Ayer, " + formattedDate;
  }
  return formattedDate;
};
