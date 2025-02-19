import { Drink, RawDrink } from "@/interfaces";

const formatDrink = (drink: RawDrink): Drink => ({
  id: drink.idDrink,
  name: drink.strDrink,
  ingredients: Array.from({ length: 15 }, (_, i) => {
    const ingredientKey = `strIngredient${i + 1}` as keyof RawDrink;
    const measureKey = `strMeasure${i + 1}` as keyof RawDrink;
    const ingredient = drink[ingredientKey];
    const measure = drink[measureKey];

    return ingredient ? (measure ? `${measure.trim()} ${ingredient}` : ingredient) : null;
  }).filter((item) => item) as string[],  // Filter nulls and assert as string[]
  instructions: drink.strInstructions,
  isAlcoholic: drink.strAlcoholic,
  isFavourited: false, // Default value
  rating: 0, // Default value
  thumbnail: drink.strDrinkThumb,
});

export default formatDrink;