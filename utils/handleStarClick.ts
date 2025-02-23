import { Drink } from '@/interfaces'
import { getFavourites } from './handleMyDrinks'
import handleRating from './handleRating'

const handleStarClick = (
  drink: Drink,
  star: number,
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>
) => {
  handleRating(drink, star)
  setDrinks((prevDrinks) => {
    const updatedFavourites = getFavourites()

    return prevDrinks.map((d) => {
      const isFavourited = updatedFavourites.some((fav) => fav.id === d.id)
      return d.id === drink.id
        ? { ...d, rating: star, isFavourited }
        : { ...d, isFavourited }
    })
  })
}

export default handleStarClick
