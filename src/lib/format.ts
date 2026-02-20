/** Format a raw number string with dot separators (for input fields) */
export function fmtVND(value: string): string {
  const v = value.replace(/\D/g, '');
  return v.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** Parse a VND-formatted string back to number */
export function parseVND(value: string): number {
  return parseInt((value || '0').replace(/\./g, '')) || 0;
}

/** Short display: "1.2 tỷ", "350 triệu", "50.000đ" */
export function formatVND(n: number | null | undefined): string {
  if (n == null || isNaN(n)) return '0đ';
  const a = Math.abs(Math.round(n));
  if (a >= 1e9) return (n < 0 ? '-' : '') + (a / 1e9).toFixed(1).replace('.', ',') + ' tỷ';
  if (a >= 1e6) return (n < 0 ? '-' : '') + (a / 1e6).toFixed(0) + ' triệu';
  return (n < 0 ? '-' : '') + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
}

/** Full display with dot separators: "1.500.000.000đ" */
export function formatFullVND(n: number | null | undefined): string {
  if (!n) return '0đ';
  return (n < 0 ? '-' : '') + Math.abs(Math.round(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
}

/** Format a number with dot separators (for setting input values) */
export function toVNDString(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
