'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { act } from 'react'

const Header = () => {
  const pathname = usePathname()

  const tabs = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'My Drinks', href: '/my-drinks', icon: '⭐️' },
    { name: 'Explore', href: '/explore', icon: '🔍' }, // You might want to update this link
  ]

  return (
    <header>
      <nav className="bg-slate-blue flex w-full flex-col items-center py-4">
        <Link href="/">
          <Image
            src="/happy-hour-logo.svg"
            alt="Happy hour logo"
            width={0}
            height={0}
            className="my-4 w-64 h-auto"
          />
        </Link>
        <ul className="menu flex justify-around text-slate-200 sm:w-md">
          {tabs.map(({ name, href, icon }) => {
            const isActive = pathname === href
            return (
              <li
                key={href}
                className={`menu-item font-roboto-mono rounded-md p-1 sm:p-2 hover:bg-deep-blue/20 ${
                  isActive ? 'bg-deep-blue/30' : 'bg-deep-blue/10'
                }`}
              >
                <Link href={href} aria-label={name.toLowerCase()}>
                  {icon} {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
