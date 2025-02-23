import { Drink } from '@/interfaces'

export const getFavourites = (): Drink[] => {
  const favourites = localStorage.getItem('favourites')
  return favourites ? JSON.parse(favourites) : []
}

export const saveFavourites = (favourites: Drink[]) => {
  localStorage.setItem('favourites', JSON.stringify(favourites))
}

export const toggleFavourite = (drink: Drink): Drink[] => {
  const favourites = getFavourites()
  const isAlreadyFavourited = favourites.some((fav) => fav.id === drink.id)

  if (isAlreadyFavourited) {
    // Remove from favourites
    const updatedFaves = favourites.filter((fav) => fav.id !== drink.id)
    drink.isFavourited = false
    drink.rating = 0
    saveFavourites(updatedFaves)
  } else {
    // Add to favourites
    drink.isFavourited = true
    favourites.push(drink)
    saveFavourites(favourites)
  }

  return favourites
}

export const drinksWithFavourites = (drinks: Drink[]): Drink[] => {
  const favourites = getFavourites()
  return drinks.map((drink) => ({
    ...drink,
    isFavourited: favourites.some((fav) => fav.id === drink.id),
  }))
}
