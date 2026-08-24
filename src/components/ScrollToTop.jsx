import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Route changes in an SPA keep the previous scroll position, which lands the
// reader halfway down a freshly opened article. Reset on every path change.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
