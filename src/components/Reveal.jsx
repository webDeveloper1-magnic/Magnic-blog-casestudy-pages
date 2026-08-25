import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Fades and lifts its children into view the first time they are scrolled to.
 *
 * The animation must never be load-bearing: content is revealed unconditionally if
 * the viewer prefers reduced motion, if IntersectionObserver is missing, if the page
 * is hidden (a background tab never fires intersections, which would otherwise leave
 * the article blank when the reader switches to it), or if the observer has not
 * fired within a short grace period.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  // Reveal without animating. A transition does not tick in a hidden tab, so an
  // animated reveal there would leave the element stuck at opacity 0.
  const [instant, setInstant] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined' || document.hidden) {
      setInstant(true)
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const show = () => setVisible(true)
    const showInstantly = () => {
      setInstant(true)
      setVisible(true)
    }

    // Declared before the observer so the callback can cancel it on a real reveal.
    let failsafe = null

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cancel the failsafe first, or it fires later and swaps the element to
          // `is-instant`, killing the transition mid-animation.
          clearTimeout(failsafe)
          show()
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)

    // If the tab is backgrounded before the observer fires, stop animating entirely.
    const onVisibilityChange = () => {
      if (document.hidden) {
        showInstantly()
        io.disconnect()
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Last-resort guard so content can never be stranded at opacity 0.
    failsafe = setTimeout(showInstantly, 3000)

    return () => {
      io.disconnect()
      clearTimeout(failsafe)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={['reveal', visible ? 'is-visible' : '', instant ? 'is-instant' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={delay && !instant ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
