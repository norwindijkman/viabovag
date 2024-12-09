import type ProductData from '@/data/products.json'
import Filters from './Filters'
import Products from './Products/Products'


export default function Main({ products }: { products: typeof ProductData }) {
  return (
    <main>
      <Filters />
      <Products products={products} />
    </main>
  );
}
