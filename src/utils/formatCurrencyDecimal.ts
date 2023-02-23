export default function formatCurrencyDecimal(value: number) {
  return !Number.isNaN(value)
    ? value.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : '';
}
