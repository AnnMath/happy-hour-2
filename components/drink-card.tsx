import Image from 'next/image'
import { Drink } from '@/interfaces'

interface DrinkCardProps {
  drink: Drink
  onToggleFavourite: (drink: Drink) => void
}
const DrinkCard = ({ drink, onToggleFavourite }: DrinkCardProps) => {
  const {
    id,
    name,
    thumbnail,
    instructions,
    ingredients,
    isAlcoholic,
    isFavourited,
  } = drink

  return (
    <section className="card border-deep-blue shadow-solid-big group relative my-8 mt-10 flex w-96 flex-col items-center border bg-neutral-100 px-4 py-6 dark:bg-slate-800">
      <Image
        src={thumbnail}
        alt=""
        className="size-80 rounded-sm transition-transform duration-500 ease-in-out group-hover:scale-105"
        width={100}
        height={100}
      />
      <button
        onClick={() => onToggleFavourite(drink)}
        className="absolute top-10 right-12 h-8 w-8 rounded-sm bg-slate-900/50 p-1 transition ease-in-out hover:scale-110 hover:cursor-pointer"
      >
        <Image
          src={isFavourited ? '/star-fill.svg' : '/star-gray.svg'}
          alt=""
          width={100}
          height={100}
        />
      </button>
      {isAlcoholic !== 'Alcoholic' && (
        <div className="non-alcoholic-badge  absolute top-70 right-4 flex h-18 w-18 rotate-315 items-center justify-center rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700">
          <p className="font-montserrat text-persian-pink-100 text-center text-xs font-bold uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
            {isAlcoholic === 'Optional alcohol'
              ? 'Alcohol optional'
              : 'No alcohol'}
          </p>
        </div>
      )}

      {/* if isAlcoholic => badge etc */}

      {/* <div className="absolute top-73 left-12 flex items-center justify-center gap-1 rounded-sm bg-slate-900/50 p-2 text-slate-200">
        star rating
      </div> */}
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
