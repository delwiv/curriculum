'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = stored ? stored === 'dark' : systemDark
    setIsDark(dark)
    setMounted(true)
  }, [])

  function toggle() {
    const root = document.documentElement
    const next = !isDark
    root.classList.toggle('dark', next)
    root.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Changer de thème"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground transition-colors hover:border-brand/50 hover:text-brand"
    >
      {mounted && (
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      )}
    </button>
  )
}
