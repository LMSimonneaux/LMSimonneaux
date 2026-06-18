import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

/**
 * Scroll-reveal primitive — CSS-transition driven (no rAF loop, so it stays
 * robust in background tabs and never leaves content stuck hidden).
 * Reveals immediately if already in view at mount, otherwise on first
 * intersection.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Already (nearly) in view → reveal now. Works even when rAF is throttled.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95) {
      setShown(true)
      return
    }
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()}
      style={{ ['--reveal-delay' as string]: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
