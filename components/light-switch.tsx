import { Monitor, Moon, Sun } from 'lucide-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const LightSwitch = () => {
  const [checkedTheme, setCheckedTheme] = useState<string>('light')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const lightSwitches = [
    { id: 'light', icon: <Sun size={16} strokeWidth={1.5} /> },
    { id: 'dark', icon: <Moon size={16} strokeWidth={1.5} /> },
    { id: 'system', icon: <Monitor size={16} strokeWidth={1.5} /> },
  ]
  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedTheme(e.target.id)
    setTheme(e.target.id)
  }
  return (
    <section className="theme-select bg-wattle-300 dark:bg-wattle-950 mt-1 flex w-fit justify-center rounded-sm">
      {lightSwitches.map(({ id, icon }) => (
        <div key={id}>
          <input
            type="radio"
            id={id}
            name="theme-select"
            className="peer hidden"
            onChange={handleThemeChange}
            checked={checkedTheme === id}
          />
          <label
            htmlFor={id}
            className="peer-checked:bg-persian-pink-400 dark:peer-checked:bg-persian-pink-800 rounded-sm p-1 cursor-pointer flex items-center justify-center"
          >
            {icon}
          </label>
        </div>
      ))}
    </section>
  )
}

export default LightSwitch
