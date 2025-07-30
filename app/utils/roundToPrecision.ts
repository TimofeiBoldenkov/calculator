export default function roundToPrecision(num: number, precision: number): number {
  if (!Number.isInteger(precision) || precision < 1) {
    return NaN
  }

  return Math.round(num * 10 ** precision) / 10 ** precision
}