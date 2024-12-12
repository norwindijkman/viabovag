
import useFavoritesStore from '@/stores/favorites/useFavoritesStore'
import Image from 'next/image';
import Dialog from '@/components/ui-elements/Dialog/Dialog'

export default function SidePanel({ handleClose }: { handleClose: () => void }) {
  const favorites = useFavoritesStore((state) => state.favorites)
  const removeProduct = useFavoritesStore((state) => state.removeProduct)
  return (
    <div>
      <div className="tw-bg-white/10 tw-backdrop-blur-sm tw-fixed tw-inset-0 tw-w-full tw-h-full"></div>
      <Dialog 
        handleClose={handleClose} 
        className="tw-fixed tw-right-0 tw-top-0 tw-m-0 tw-left-[unset] tw-overflow-visible"
      >
        <div className="tw-bg-white tw-border tw-border-black tw-w-80">
          <div className="tw-relative tw-px-4 tw-pt-4">
            <h2 className="tw-text-foreground-light tw-text-3xl tw-font-semibold tw-mt-2 tw-mb-4">Favorieten</h2>
            <p className="tw-text-foreground-light tw-mb-8">
              Bewaar je persoonlijke collectie van favoriete auto&lsquo;s
            </p>
            <div className="tw-absolute tw-top-4 tw-right-4">
              <button onClick={handleClose} className="tw-ml-4 tw-h-10 tw-w-10 hover:tw-bg-black/20 tw-flex tw-items-center tw-justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
            </div>
          </div>
          <div className="tw-grid tw-gap-6 tw-max-h-[calc(var(--save-height)_-_10rem)] tw-overflow-y-auto tw-p-4">
            {!favorites.length &&
              <div className="tw-text-sm tw-text-foreground-light">
                <div>
                  Je hebt nog geen favorieten.
                </div>
                <div>
                  Klik op het hartje om een product toe te voegen.
                </div>
              </div>}
            {favorites.map(({ product }, index) => (
              <div key={product.id}>
                <div className="tw-grid tw-grid-cols-3 tw-gap-4">
                  <div>
                    <Image
                      width={150}
                      height={200}
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      className="tw-w-full tw-aspect-[4/3] tw-object-cover tw-object-top"
                      alt={`Afbeelding van ${product.title}`}
                      src={`/product/${product.img}`}
                    />
                  </div>
                  <div className="tw-col-span-2">
                    <div>
                      <a href="#" className="tw-mb-1 tw-font-semibold tw-text-foreground hover:tw-text-primary-light">{product.title}</a>
                    </div>
                    <div className="tw-inline-flex tw-items-center tw-bg-[#B3E9D8] tw-text-[#094B2A] tw-text-xs tw-font-medium tw-px-2.5 tw-py-0.5 tw-rounded-full tw-w-max tw-mb-1 tw-mt-auto">
                      <span className="tw-w-2 tw-h-2 tw-me-1 tw-bg-[#139957] tw-rounded-full"></span>
                      12 maanden garantie
                    </div>
                    <div className="tw-font-semibold tw-text-[#139957] tw-text-sm">
                      {product.brandstof}
                    </div>
                    <button onClick={() => removeProduct(index)} className="hover:tw-underline tw-text-sm">
                      Verwijderen uit favorieten
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
