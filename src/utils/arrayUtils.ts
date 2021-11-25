/**
 *  Generate a range of numbers.
 * @param {number} start start number
 * @param {number} end end number
 * @returns {number[]} array of numbers.
 */
export function range(start: number, end: number): number[] {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
