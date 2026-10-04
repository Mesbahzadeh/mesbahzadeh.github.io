/**
 * Utility to convert English digits to Persian digits.
 */
export function toPersianDigits(input: number | string | undefined | null): string {
  if (input === undefined || input === null) return '';
  const str = String(input);
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/\d/g, (digit) => persianDigits[Number(digit)]);
}

/**
 * Format Persian currency with separator and Tomans
 */
export function formatPersianPrice(amount: number): string {
  const formatted = amount.toLocaleString('fa-IR');
  return `${formatted} تومان`;
}
