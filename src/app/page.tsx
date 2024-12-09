import type ProductData from '@/data/products.json'
import Sidebar from '@/components/pages/home/Sidebar/Sidebar'
import Main from '@/components/pages/home/Main/Main'
import Breadcrumbs from '@/components/layout/Breadcrumbs/Breadcrumbs'
import { headers } from 'next/headers';

// test if str contains search with case-insensitivity and ignoring diacritics (like ä)
const matchValue = (str: string, search: string) => {
  return str.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase().includes(search.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase());
}

const filterProduct = (searchValue: string) => (product: typeof ProductData[number]) => {
  return matchValue(product.name, searchValue) || matchValue(product.brand, searchValue)
}

export default async function Home() {
  const headerStore = await headers()
  const search = headerStore.get('x-url-search') || '';
  const searchParams = new URLSearchParams(search)
  const searchValue = searchParams.get('q')||''

  const { default: productList } = await import('@/data/products.json');

  const products = searchValue ? productList.filter(filterProduct(searchValue)) : productList

  return (
    <div>
      <Breadcrumbs />
      <div className="tw-grid tw-grid-cols-[24rem_1fr] tw-pt-8">
        <Sidebar searchValue={searchValue} />
        <Main products={products} />
      </div>
    </div>
  );
}
