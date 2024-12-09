
export default function formatPrice(num: number) {
  if (Number.isInteger(num)) return `${num},-`
  const euro = Math.floor(num)
  const cents = Math.round((num - euro) * 100);
  return `${euro},${cents}`
}
