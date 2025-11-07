'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ConfettiOnce({ pieces = 180 }: { pieces?: number }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const w = typeof window !== 'undefined' ? (window as any) : undefined
      if (w && typeof w.confetti === 'function') {
        w.confetti({ particleCount: pieces, spread: 70, origin: { y: 0.4 } })
      }
    }, 250)
    return () => clearTimeout(timer)
  }, [pieces])

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"
      strategy="afterInteractive"
    />
  )
}


