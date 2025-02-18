import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <nav className="bg-slate-blue flex w-full flex-col items-center py-4">
        <Link href="/">
          <div className="my-4 w-64">
            <Image
              src="/happy-hour-logo.svg"
              alt="Happy hour logo"
              width={256}
              height={100}
            />
          </div>
        </Link>
        <ul className="menu flex justify-around text-slate-200 sm:w-96">
          <li className="menu-item font-roboto-mono bg-deep-blue/30 hover:bg-deep-blue/20 rounded-md p-1 sm:p-2">
            <Link href="/" aria-label="home">
              🏠 Home
            </Link>
          </li>
          <li className="menu-item font-roboto-mono bg-deep-blue/10 hover:bg-deep-blue/20 rounded-md p-1 sm:p-2">
            <Link href="/" aria-label="favourites">
              ⭐️ My drinks
            </Link>
          </li>
          <li className="menu-item font-roboto-mono bg-deep-blue/10 hover:bg-deep-blue/20 rounded-md p-1 sm:p-2">
            <Link href="/" aria-label="explore">
              🔍 Explore
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
