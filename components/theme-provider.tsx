'use client';

import { createContext, useContext, useEffect, useState } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <div {...props}>{children}</div>
}

export const useTheme = () => {
  const context = useNextTheme()
  return context
}