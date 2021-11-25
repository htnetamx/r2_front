/**
 * Formats a number as a currency string.
 * @param {number} amount the amount to format.
 * @param {string} currency the currency to format the amount in.
 * @returns {string} the formatted currency string.
 */
export const formatMoney = (amount: number, currency: string): string => {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
};
