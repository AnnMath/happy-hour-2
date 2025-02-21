'use client'

import Link from 'next/link'
import LightSwitch from './light-switch'

const Footer = () => {
  return (
    <footer className="footer bg-wattle-500 dark:bg-wattle-900 flex w-full flex-col justify-between p-16 sm:flex-row">
      <section className="about mb-4 flex flex-col sm:mb-0">
        <Link href="/">
          <img
            src="/happy-hour-logo-slate.svg"
            alt="Happy hour logo"
            className="w-60"
          />
        </Link>
        <p className="font-cabin my-4 text-xl dark:text-slate-200">
          Made in GBG by Ann 👩🏾 and Cate 🐈‍⬛
        </p>
        <button className="click-me font-roboto-mono shadow-solid hover:bg-persian-pink-800 bg-persian-pink-700 self-start p-2 text-xs text-slate-200">
          Click me :)
        </button>
      </section>
      <section className="links font-roboto-mono font-bold dark:text-slate-200">
        <ul className="">
          <li className="mb-2">
            <Link href="/" aria-label="home">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/my-drinks" aria-label="favourites">
              My drinks
            </Link>
          </li>
          <li className="">
            <Link href="/explore" aria-label="explore">
              Explore
            </Link>
          </li>
        </ul>
        <LightSwitch />
      </section>
    </footer>
  )
}

export default Footer
