import type ProductData from '@/data/products.json'
import Product from './Product/Product'

export default function Products({ products }: { products: typeof ProductData }) {
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-4">
      {products.map(product => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
