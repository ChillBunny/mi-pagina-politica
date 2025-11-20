import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggle: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark') return true
      if (saved === 'light') return false
    } catch {}
    // Default light <-- Aqui se cambia el tema de inicio.
    return true
  })

  // Sincroniza el DOM y localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggle = () => setIsDark((v) => !v)

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
