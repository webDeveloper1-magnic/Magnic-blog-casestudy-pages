import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Splits a stat label into the parts around its first number, e.g.
 *   "20,000+"   -> { prefix: '',   value: 20000, suffix: '+',      decimals: 0 }
 *   "< 3 Sec"   -> { prefix: '< ', value: 3,     suffix: ' Sec',   decimals: 0 }
 *   "3000–6000K"-> null  (a range — nothing sensible to count to)
 * Returns null when there is no single number to animate, so the caller renders
 * the original text untouched.
 */
function parseStat(text) {
  if (typeof text !== 'string') return null
  const matches = text.match(/\d[\d,]*\.?\d*/g)
  if (!matches || matches.length !== 1) return null

  const raw = matches[0]
  const value = parseFloat(raw.replace(/,/g, ''))
  if (!Number.isFinite(value)) return null

  const at = text.indexOf(raw)
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  return {
    prefix: text.slice(0, at),
    suffix: text.slice(at + raw.length),
    value,
    decimals,
    grouped: raw.includes(','),
  }
}

const format = (n, decimals, grouped) => {
  const fixed = n.toFixed(decimals)
  return grouped ? Number(fixed).toLocaleString('en-IN') : fixed
}

/**
 * Counts a stat up from zero when it scrolls into view. Falls back to the plain
 * text for ranges, non-numeric values, reduced-motion viewers and hidden tabs —
 * the number must always be readable even if it never animates.
 */
export default function CountUp({ value, className = '', duration = 1400 }) {
  const parsed = parseStat(value)
  const ref = useRef(null)
  const [display, setDisplay] = useState(() => (parsed ? null : value))

  useEffect(() => {
    if (!parsed) return
    const el = ref.current
    if (!el) return

    const settle = () => setDisplay(value)

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined' || document.hidden) {
      settle()
      return
    }

    let frame = null
    let failsafe = null

    const run = () => {
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        // easeOutCubic — fast start, gentle landing
        const eased = 1 - Math.pow(1 - t, 3)
        setDisplay(
          parsed.prefix +
            format(parsed.value * eased, parsed.decimals, parsed.grouped) +
            parsed.suffix,
        )
        if (t < 1) frame = requestAnimationFrame(tick)
        else settle()
      }
      frame = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(failsafe)
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    // Only rescue a stat that is on screen and failed to start. A blanket timer would
    // also finish every counter below the fold, so none would be left to animate.
    failsafe = setTimeout(() => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) {
        settle()
        io.disconnect()
      }
    }, 2500)
    const onHide = () => document.hidden && settle()
    document.addEventListener('visibilitychange', onHide)

    return () => {
      io.disconnect()
      if (frame) cancelAnimationFrame(frame)
      clearTimeout(failsafe)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [value, duration, parsed?.value])

  // Before the observer fires, show a zeroed version so the box never collapses.
  const initial = parsed
    ? parsed.prefix + format(0, parsed.decimals, parsed.grouped) + parsed.suffix
    : value

  return (
    <span ref={ref} className={className}>
      {display ?? initial}
    </span>
  )
}
