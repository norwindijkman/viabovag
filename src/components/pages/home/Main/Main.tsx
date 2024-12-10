'use client'

import type ProductData from '@/data/products.json'
import Filters from './Filters'
import Products from './Products/Products'

export default function Main({ products, searchValue }: { products: typeof ProductData, searchValue: string }) {
  return (
    <main className="tw-mx-4">
      <Filters searchValue={searchValue} />
      <Products products={products} />
    </main>
  );
}
