/**
 * Format numbers like 10.56 => 10,56
 * @param number
 * @returns Formated number
 */
export const formatNumberWithCommas = (number: number): string => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return number.toLocaleString("es-ES", options).replace(/,/g, ",");
};
