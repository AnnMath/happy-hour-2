'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { fetchRandom } from '@/api'
import { Drink } from '@/interfaces'
import DrinkCard from '@/components/drink-card'
import {
  drinksWithFavourites,
  getFavourites,
  toggleFavourite,
} from '@/utils/handleMyDrinks'
import handleStarClick from '@/utils/handleStarClick'

const Home = () => {
  const [drinks, setDrinks] = useState<Drink[]>([])
  const randomDrinksRef = useRef<HTMLElement | null>(null)

  const getDrinks = async () => {
    const newDrinks = await fetchRandom()
    setDrinks(drinksWithFavourites(newDrinks))

    setTimeout(() => {
      randomDrinksRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const handleToggleFavourite = (drink: Drink) => {
    toggleFavourite(drink)
    setDrinks((prevDrinks) => drinksWithFavourites(prevDrinks))
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
            Welcome to Happy Hour!
          </h1>
          <p className="font-roboto-mono text-s mt-4 w-full text-center text-slate-200 sm:text-base">
            Hello, friend! It's always happy hour here! <br />
            Click on the button below to get 10 random cocktails!
          </p>
          <button
            onClick={() => getDrinks()}
            className="random-button font-roboto-mono bg-persian-pink-700 hover:bg-persian-pink-800 shadow-solid active:bg-slate-blue mt-20 p-1 text-slate-200 sm:p-4"
          >
            Cheers!
          </button>
        </div>
      </article>
      {/* This should be its own component, I guess */}
      <article
        className="random-drinks-container bg-slate-blue flex w-full flex-wrap justify-around md:px-8"
        ref={randomDrinksRef}
      >
        {drinks.length > 0 &&
          drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              onToggleFavourite={handleToggleFavourite}
              onStarClick={(drink, star) =>
                handleStarClick(drink, star, setDrinks)
              }
            />
          ))}
      </article>
    </>
  )
}

export default Home
