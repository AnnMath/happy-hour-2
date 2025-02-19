import Image from 'next/image'
import { Drink } from '@/interfaces'

interface DrinkCardProps {
  drink: Drink
}
const DrinkCard = ({ drink }: DrinkCardProps) => {
  const { id, name, thumbnail, instructions, ingredients, isAlcoholic } = drink
  return (
    <section className="card border-deep-blue shadow-solid-big group relative my-8 mt-10 flex w-96 flex-col items-center border bg-neutral-100 px-4 py-6 dark:bg-slate-800">
      <Image
        src={thumbnail}
        alt=""
        className="size-80 rounded-sm transition-transform duration-500 ease-in-out group-hover:scale-105"
        width={100}
        height={100}
      />
      <Image
        src="/star-gray.svg"
        className="absolute top-10 right-12 h-8 w-8 rounded-sm bg-slate-900/50 p-1 transition ease-in-out hover:scale-110 hover:cursor-pointer"
        alt=""
        width={100}
        height={100}
      />
      {/* if isAlcoholic => badge etc */}

      <div className="absolute top-73 left-12 flex items-center justify-center gap-1 rounded-sm bg-slate-900/50 p-2 text-slate-200">
        {/* star rating goes here */}
      </div>
      <h2 className="cocktail-name font-cabin mt-4 text-2xl dark:text-slate-200">
        {name}
      </h2>
      <h3 className="ingredients-header font-montserrat text-persian-pink-900 dark:text-persian-pink-300 mt-2 text-xs font-bold uppercase">
        Ingredients
      </h3>
      <ul className="cocktail-ingredients font-roboto-mono mb-2 dark:text-slate-200">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="instructions-header font-montserrat text-persian-pink-900 dark:text-persian-pink-300 mt-2 text-xs font-bold uppercase">
        Instructions
      </h3>
      <p className="cocktail-instructions font-roboto-mono dark:text-slate-200">
        {instructions}
      </p>
    </section>
  )
}

export default DrinkCard
