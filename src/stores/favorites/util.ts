import type { Favorites } from './types'

export const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem('favorites')
  const favorites: Favorites = storedFavorites ? JSON.parse(storedFavorites) : []
  return { favorites }
}

export const saveFavoritesToLocalStorage = (favorites: Favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}
