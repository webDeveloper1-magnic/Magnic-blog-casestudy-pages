import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const VARIANTS = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  rise: 'reveal-rise',
  blur: 'reveal-blur',
}

/**
 * Animates its children into view the first time they are scrolled to.
 *
 * The animation is never load-bearing: content is revealed unconditionally if the
 * viewer prefers reduced motion, if IntersectionObserver is missing, if the page is
 * hidden (a background tab never fires intersections, which would otherwise leave the
 * article blank), or if the observer has not fired within a grace period.
 *
 * @param variant  up | down | left | right | scale | rise | blur
 * @param delay    ms to stagger this element behind its siblings
 */
export default function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  // Reveal without animating. A transition does not tick in a hidden tab, so an
  // animated reveal there would leave the element stuck at opacity 0.
  const [instant, setInstant] = useState(false)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined' || document.hidden) {
      setInstant(true)
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    let failsafe = null
    let settleTimer = null

    const show = () => {
      setVisible(true)
      // Release the compositing layer once the transition has finished.
      settleTimer = setTimeout(() => setSettled(true), 900 + delay)
    }
    const showInstantly = () => {
      setInstant(true)
      setVisible(true)
      setSettled(true)
    }

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
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' },
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

    // Safety net for content that is on screen but never got its intersection
    // callback. It deliberately checks geometry first: a blanket timer would also
    // reveal everything below the fold, so nothing would be left to animate on scroll.
    failsafe = setTimeout(() => {
      const r = el.getBoundingClientRect()
      const onScreen = r.top < window.innerHeight && r.bottom > 0
      if (onScreen) {
        showInstantly()
        io.disconnect()
      }
      // Off-screen elements are not stranded — they are simply waiting to be
      // scrolled to, which is the observer's job.
    }, 2500)

    return () => {
      io.disconnect()
      clearTimeout(failsafe)
      clearTimeout(settleTimer)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={[
        'reveal',
        VARIANTS[variant] ?? VARIANTS.up,
        visible ? 'is-visible' : '',
        instant ? 'is-instant' : '',
        settled ? 'is-settled' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={delay && !instant ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
