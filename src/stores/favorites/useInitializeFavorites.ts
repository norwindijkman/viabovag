import useFavoritesStore from './useFavoritesStore'
import { loadFavoritesFromLocalStorage } from './util'
import { useEffect } from 'react'

const useInitializeFavorites = () => {
  useEffect(() => {
    const { favorites } = loadFavoritesFromLocalStorage()
    const ids = new Set(favorites.map(favorite => favorite.product.id))
    const count = favorites.length
    useFavoritesStore.setState({
      favorites,
      count,
      ids,
    })
  })
}

export default useInitializeFavorites
