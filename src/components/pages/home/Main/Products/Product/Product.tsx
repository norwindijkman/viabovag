
'use client';

import type ProductData from '@/data/products.json'

import Image from 'next/image';
import formatPrice from '@/util/format/price';
import useFavoritesStore from '@/stores/favorites/useFavoritesStore'
import Button from '@/components/ui-elements/Button/Button';
import { useState } from 'react';

export default function Product({ product }: { product: typeof ProductData[number] }) {
  const updateProduct = useFavoritesStore((state) => state.updateProduct)
  const ids = useFavoritesStore((state) => state.ids)

  const handleFavClick = () => {
    updateProduct(product)
  }

  return (
    <div className="tw-relative tw-flex tw-flex-col tw-h-full tw-p-4">
      <div>
        <Image
          width={200}
          height={200}
          alt={`Afbeelding van ${product.name}`}
          src={`/product${product.media}`}
        />
      </div>
      <div className="tw-font-semibold tw-text-foreground-light">{product.brand}</div>
      <h3 className="tw-mb-1 tw-font-semibold tw-text-foreground">{product.name.replace(product.brand, '')}</h3>
      <div className="tw-inline-flex tw-items-center tw-bg-[#B3E9D8] tw-text-[#094B2A] tw-text-xs tw-font-medium tw-px-2.5 tw-py-0.5 tw-rounded-full tw-w-max tw-mb-3 tw-mt-auto">
        <span className="tw-w-2 tw-h-2 tw-me-1 tw-bg-[#139957] tw-rounded-full"></span>
        Op voorraad
      </div>
      <div className="tw-flex">
        <div>
          <div className="tw-text-xl tw-font-extrabold">
            {formatPrice(product.price)}
          </div>
          <div className="tw-font-semibold tw-text-[#10844A] tw-text-sm">
            Morgen gratis in huis
          </div>
        </div>
        <div className="tw-ml-auto tw-mt-auto">
          <Button style="secondary">
            Add
          </Button>
        </div>
      </div>
      <div className="tw-absolute tw-top-4 tw-right-0">
        <button 
          aria-label={ids.has(product.id) ? 'Verwijder product uit favorieten' : 'Voeg product toe aan favorieten'}
          onClick={handleFavClick} 
          className="tw-p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill={ids.has(product.id) ? '#E74C3C' : '#34495E'}>
            {ids.has(product.id)
              ?
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
              :
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            }
          </svg>
        </button>
      </div>
    </div>
  );
}
