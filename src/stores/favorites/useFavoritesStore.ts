import type { FavoriteProduct, Favorites, UserFavoritesState } from './types'
import { saveFavoritesToLocalStorage } from './util'
import { create } from 'zustand'

const useFavoritesStore = create<UserFavoritesState>((set) => {
  return {
    favorites: [],
    count: 0,
    ids: new Set<number>(),
    removeProduct: (index: number) => set((state) => {
      //remove product at index and save to local storage
      const newIds = new Set(state.ids)
      const favorite = state.favorites[index]
      const updatedFavorites = state.favorites.filter((_, i) => i !== index)
      newIds.delete(favorite.product.id)

      saveFavoritesToLocalStorage(updatedFavorites)

      return {
        favorites: updatedFavorites,
        count: updatedFavorites.length,
        ids: newIds,
      }
    }),
    updateProduct: (product: FavoriteProduct) => set((state) => {
      // add or remove product and save to local storage
      const newIds = new Set(state.ids)
      let updatedFavorites: Favorites

      if (newIds.has(product.id)) {
        // If product already exists, remove it
        updatedFavorites = state.favorites.filter((fav) => fav.product.id !== product.id)
        newIds.delete(product.id)
      } else {
        // If product does not exist, add it
        updatedFavorites = [...state.favorites, { product }]
        newIds.add(product.id)
      }

      saveFavoritesToLocalStorage(updatedFavorites)

      return {
        favorites: updatedFavorites,
        count: updatedFavorites.length,
        ids: newIds,
      }
    }),
  }
})

export default useFavoritesStore
