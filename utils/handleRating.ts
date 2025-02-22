import { Drink } from '@/interfaces'
import {
  getFavourites,
  saveFavourites,
  toggleFavourite,
} from './handleMyDrinks'

const handleRating = (drink: Drink, star: number) => {
  const favourites = getFavourites()
  const drinkId = drink.id
  const ratingValue = star
  let favedDrink = favourites.find((fav) => fav.id === drinkId)

  if (!favedDrink) {
    drink.rating = ratingValue
    drink.isFavourited = true
    favourites.push(drink)
  } else {
    favedDrink.rating =
      drink.rating === ratingValue ? ratingValue - 1 : ratingValue
  }

  saveFavourites(favourites)

  return [...favourites]
}

export default handleRating
