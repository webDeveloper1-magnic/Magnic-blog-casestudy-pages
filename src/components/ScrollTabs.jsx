import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Filter tab bar with an underline marking the active tab.
 *
 * Two layouts:
 *  - wrap (default): every tab is always visible, flowing onto another line when the
 *    row runs out of width. Nothing is ever clipped or hidden behind a scroll.
 *  - scroll: one line that scrolls sideways, with fades hinting at the overflow.
 */
export default function ScrollTabs({
  options,
  active,
  onSelect,
  label = 'Filter',
  bordered = true,
  // Tabs always stay on one line. Labels tighten on small screens (and can supply a
  // `short` variant) so they fit; only a bar too wide even then falls back to scroll.
  wrap = false,
  align = 'start',
}) {
  const scrollerRef = useRef(null)
  const activeRef = useRef(null)
  const [edges, setEdges] = useState({ left: false, right: false })

  const measure = useCallback(() => {
    if (wrap) return
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEdges({ left: el.scrollLeft > 4, right: max > 4 && el.scrollLeft < max - 4 })
  }, [wrap])

  useEffect(() => {
    if (wrap) return
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
    document.fonts?.ready?.then(measure).catch(() => {})

    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
      ro?.disconnect()
    }
  }, [measure, wrap])

  // Only relevant while scrolling: bring a selected off-screen tab into view.
  useEffect(() => {
    if (wrap) return
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    measure()
  }, [active, measure, wrap])

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        role="tablist"
        aria-label={label}
        className={[
          'flex gap-1',
          wrap ? 'flex-wrap' : 'no-scrollbar overflow-x-auto',
          // Centred on phones, where a short bar looks stranded against the left edge;
          // left-aligned from sm up, which reads better beside full-width content.
          // The auto margins keep the first tab reachable if the row ever overflows —
          // plain justify-center would push it past the left edge unreachably.
          align === 'center'
            ? 'justify-center [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto sm:justify-start sm:[&>*:first-child]:ml-0 sm:[&>*:last-child]:mr-0'
            : '',
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
                'relative shrink-0 whitespace-nowrap py-3 font-heading font-semibold transition-colors duration-200',
                'px-2.5 text-[13px] sm:px-4 sm:text-sm',
                'after:absolute after:inset-x-1.5 after:bottom-0 after:h-[3px] after:rounded-t after:transition-all after:duration-300 after:content-[""] sm:after:inset-x-2',
                isActive
                  ? 'text-primary after:bg-primary'
                  : 'text-ink-light after:bg-transparent hover:text-primary hover:after:bg-line-strong',
              ].join(' ')}
            >
              {/* A shorter label on narrow screens keeps the bar on one line without
                  shrinking the type to an unreadable size. */}
              {c.short ? (
                <>
                  <span className="sm:hidden">{c.short}</span>
                  <span className="hidden sm:inline">{c.label}</span>
                </>
              ) : (
                c.label
              )}
            </button>
          )
        })}
      </div>

      {/* Scroll affordances — only in scroll mode, and only while there is more
          in that direction. */}
      {!wrap && (
        <>
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
        </>
      )}
    </div>
  )
}
