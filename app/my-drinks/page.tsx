'use client'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import {
  drinksWithFavourites,
  getFavourites,
  toggleFavourite,
} from '@/utils/handleMyDrinks'
import { useEffect, useRef, useState } from 'react'
import { Drink } from '@/interfaces'
import DrinkCard from '@/components/drink-card'

const MyDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([])
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setDrinks(getFavourites())
  }, [])

  const handleToggleFavourite = (drink: Drink) => {
    toggleFavourite(drink)
    setDrinks(getFavourites())
  }

  const handleStarClick = () => {
    console.log('some placeholder shit')
  }
  return (
    <>
      <article className="hero relative h-screen w-full">
        <Image
          src="/background-img.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-start bg-slate-900/50 p-10">
          <h1 className="font-cabin text-wattle-400 text-center text-3xl font-bold md:text-9xl">
            What's your poison?
          </h1>
          <p className="font-roboto-mono text-s mt-4 w-full text-center text-slate-200 sm:text-base">
            You'll find all your starred and rated drinks here! Click on the
            star at the top to remove it from your list. Cheers!
          </p>
          {drinks.length > 0 ? (
            <p className="font-roboto-mono text-s mt-4 w-full text-center text-slate-200 sm:text-base">
              Yay! You've saved {drinks.length}{' '}
              {drinks.length === 1 ? 'cocktail' : 'cocktails'} so far!
            </p>
          ) : (
            <p className="font-roboto-mono text-s mt-4 w-full text-center text-slate-200 sm:text-base">
              You don't have any saved cocktails yet :( Try the randomiser or
              click on the explore tab to find your next drink!
            </p>
          )}

          {drinks.length > 0 && (
            <button
              onClick={() => {
                ref.current?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label="Scroll to favourites"
              className="scroll-button font-roboto-mono bg-persian-pink-700 hover:bg-persian-pink-800 shadow-solid active:bg-slate-blue mt-20 h-12 w-12 rounded-4xl p-3 text-slate-200 cursor-pointer"
            >
              <ArrowDown />
            </button>
          )}
        </div>
      </article>
      <article
        className="my-drinks-container bg-slate-blue flex w-full flex-wrap justify-around md:px-8"
        ref={ref}
      >
        {drinks &&
          drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              onToggleFavourite={handleToggleFavourite}
              onStarClick={handleStarClick}
            />
          ))}
      </article>
    </>
  )
}

export default MyDrinks
