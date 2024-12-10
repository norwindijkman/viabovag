import type ProductData from '@/data/products.json'
import Product from './Product/Product'

export default function Products({ products }: { products: typeof ProductData }) {
  return (
    <div>
      <div>
        {!products.length ? <div className="tw-p-8 tw-text-center tw-w-full">Geen producten gevonden. Probeer je filters te verwijderen.</div> : ''}
      </div>
      <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {products.map(product => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
