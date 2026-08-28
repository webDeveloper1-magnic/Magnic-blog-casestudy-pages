import { useEffect, useState } from 'react'

/**
 * Appears once the reader is well down the page. The blog runs to ~18 cards and a
 * case study page to ~8,000px on mobile, by which point the filters are long gone —
 * without this there is no way back to them but a long manual scroll.
 */
export default function BackToTop() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      setShown(window.scrollY > window.innerHeight * 1.5)
    }
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const toTop = () => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      // Kept out of the tab order and off the a11y tree while hidden, so it is not a
      // phantom focus stop at the top of the page.
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={[
        'fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full',
        'bg-primary text-white shadow-card-hover transition-all duration-300',
        'hover:bg-primary-2 hover:-translate-y-0.5',
        shown ? 'pointer-events-auto opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      ].join(' ')}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 13V3M3 8l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
