'use server'

import { Drink } from './interfaces'
import formatDrink from './utils/formatDrink'

export const fetchRandom = async (): Promise<Drink[]> => {
  const URL =
    'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }
  const data = await response.json()
  const drinks = data.drinks
  return drinks.map(formatDrink)
}
