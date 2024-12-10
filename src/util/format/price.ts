
// Format the number as a price: add ',-' if it's an integer, or ',dd' for decimal values.
export default function formatPrice(num: number) {
  if (Number.isInteger(num)) return `${num},-`
  const euro = Math.floor(num)
  const cents = Math.round((num - euro) * 100);
  return `${euro},${cents}`
}
