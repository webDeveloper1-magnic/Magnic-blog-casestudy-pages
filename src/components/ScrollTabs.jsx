import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Horizontally scrollable tab bar with an underline marking the active tab.
 * Keeps every filter on one line instead of wrapping, and fades the edges
 * only while there is more to scroll to, so the overflow is discoverable.
 */
export default function ScrollTabs({
  options,
  active,
  onSelect,
  label = 'Filter',
  bordered = true,
}) {
  const scrollerRef = useRef(null)
  const activeRef = useRef(null)
  const [edges, setEdges] = useState({ left: false, right: false })

  const measure = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEdges({ left: el.scrollLeft > 4, right: max > 4 && el.scrollLeft < max - 4 })
  }, [])

  useEffect(() => {
    measure()
    const el = scrollerRef.current
    if (!el) return

    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)

    // The scroller can change width without the window resizing — a layout reflow,
    // a late webfont, or the panel it sits in changing size. Watch the element too.
    let ro = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(measure)
      ro.observe(el)
    }
    // Re-measure once fonts land, since tab widths depend on the loaded typeface.
    document.fonts?.ready?.then(measure).catch(() => {})

    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
      ro?.disconnect()
    }
  }, [measure])

  // Keep the selected tab in view when it sits off-screen in the scroller.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    measure()
  }, [active, measure])

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        role="tablist"
        aria-label={label}
        className={[
          'no-scrollbar flex gap-1 overflow-x-auto',
          bordered ? 'border-b border-line' : '',
        ].join(' ')}
      >
        {options.map((c) => {
          const isActive = active === c.slug
          return (
            <button
              key={c.slug}
              ref={isActive ? activeRef : null}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(c.slug)}
              className={[
                'relative shrink-0 whitespace-nowrap px-4 py-3 font-heading text-sm font-semibold transition-colors duration-200',
                'after:absolute after:inset-x-2 after:bottom-0 after:h-[3px] after:rounded-t after:transition-all after:duration-300 after:content-[""]',
                isActive
                  ? 'text-primary after:bg-primary'
                  : 'text-ink-light after:bg-transparent hover:text-primary hover:after:bg-line-strong',
              ].join(' ')}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      {/* Scroll affordances — only rendered while there is more in that direction */}
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent transition-opacity duration-200',
          edges.left ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent transition-opacity duration-200',
          edges.right ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
    </div>
  )
}
