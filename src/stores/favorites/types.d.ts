import type ProductData from '@/data/products.json'

export type FavoriteProduct = typeof ProductData[number]

export type Favorites = {
  product: FavoriteProduct
}[]

export interface UserFavoritesState {
  favorites: Favorites
  updateProduct: (product: FavoriteProduct) => void
  removeProduct: (index: number) => void
  count: number
  ids: Set<number>
}
