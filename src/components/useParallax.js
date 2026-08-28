import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Drifts an element against the scroll for a subtle depth effect.
 * Returns a ref for the container and the transform to apply to the moving layer.
 *
 * Yields a zero transform under reduced-motion, so the layer simply sits still.
 * Reads are batched into rAF and the listener is passive, so this never blocks scroll.
 */
export default function useParallax(strength = 0.12) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    let frame = null

    const update = () => {
      frame = null
      const rect = el.getBoundingClientRect()
      // Only compute while the element is anywhere near the viewport.
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return
      // How far the element's centre has travelled past the viewport centre.
      const travelled = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(-travelled * strength)
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength])

  return { ref, style: { transform: `translate3d(0, ${offset.toFixed(1)}px, 0)` } }
}
