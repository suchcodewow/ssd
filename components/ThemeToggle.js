'use client'

import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
    <button
      className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
      onClick={() => {
        setTheme('light')
      }}
    >
      Light
    </button>
        <button
        className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {
          setTheme('dark')
        }}
      >
        Dark
      </button>
      <button
        className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {
          setTheme('system')
        }}
      >
        System
      </button>
      <p>{theme === ''}</p>
      </div>
  )
}

export default ThemeToggle