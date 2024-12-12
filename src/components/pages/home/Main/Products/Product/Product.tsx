
'use client';

import type ProductData from '@/data/products.json'

import Image from 'next/image';
import useFavoritesStore from '@/stores/favorites/useFavoritesStore'
import Button from '@/components/ui-elements/Button/Button';

export default function Product({ product }: { product: typeof ProductData[number] }) {
  const updateProduct = useFavoritesStore((state) => state.updateProduct)
  const ids = useFavoritesStore((state) => state.ids)
  const isFavorite = ids.has(product.id)

  const handleFavClick = () => {
    updateProduct(product)
  }

  return (
    <div className="tw-relative tw-flex tw-flex-col tw-h-full tw-p-4 tw-shadow tw-border tw-border-black/20">
      <div className="tw-mb-2">
        <Image
          width={200}
          height={400}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          className="tw-w-full tw-aspect-[4/3] tw-object-cover tw-object-top"
          alt={`Afbeelding van ${product.title}`}
          src={`/product/${product.img}`}
        />
      </div>
      <div className="tw-mb-2 tw-flex">
        <div className="tw-mr-auto">
          <div className="tw-text-sm tw-text-foreground-light">{product.kilometerstand}</div>
          <h3 className="tw-font-semibold tw-text-foreground">{product.title}</h3>
        </div>
        <div>
          <button
            aria-label={ids.has(product.id) ? 'Verwijder product uit favorieten' : 'Voeg product toe aan favorieten'}
            onClick={handleFavClick}
            className="tw-p-2 tw-cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill={isFavorite ? '#E74C3C' : '#34495E'}>
              {isFavorite
                ?
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                :
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              }
            </svg>
          </button>
        </div>
      </div>
      <div className="tw-inline-flex tw-items-center tw-bg-[#B3E9D8] tw-text-[#094B2A] tw-text-xs tw-font-medium tw-px-2.5 tw-py-0.5 tw-rounded-full tw-w-max tw-mb-1.5">
        <span className="tw-w-2 tw-h-2 tw-me-1 tw-bg-[#139957] tw-rounded-full"></span>
        12 maanden garantie
      </div>
      <div className="tw-flex tw-mt-auto">
        <div>
          <div className="tw-text-xl tw-font-extrabold tw-mb-0.5">
            {product.prijs}
          </div>
          <div className="tw-font-semibold tw-text-[#10844A] tw-text-sm">
            {product.brandstof}
          </div>
        </div>
        <div className="tw-ml-auto tw-mt-auto">
          <Button style="secondary">
            Bekijk auto
          </Button>
        </div>
      </div>
    </div>
  );
}
