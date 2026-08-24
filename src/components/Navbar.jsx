import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const navItems = [
  { label: 'Blog', to: '/blog' },
  { label: 'Case Studies', to: '/case-studies' },
]

function TopBar() {
  return (
    <div className="hidden bg-primary text-white lg:block">
      <div className="container-page flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a href="mailto:sales@magnic.in" className="transition hover:text-accent">
            sales@magnic.in
          </a>
          <a href="tel:+91-8870222099" className="transition hover:text-accent">
            +91 88702 22099
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="/news-events" className="transition hover:text-accent">
            News &amp; Events
          </a>
          <a href="/careers" className="transition hover:text-accent">
            Careers
          </a>
          <a
            href="https://erp.magnic.in/crm/portal"
            className="font-semibold text-accent transition hover:brightness-110"
          >
            Customer Portal
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      'font-heading text-[13px] font-semibold uppercase tracking-wide transition',
      isActive ? 'text-primary' : 'text-ink-light hover:text-primary',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <TopBar />
      <nav className="container-page flex h-[72px] items-center justify-between gap-6">
        <a href="/" className="flex items-center" aria-label="Magnic Technologies home">
          {/* White navbar → blue-ink artwork */}
          <Logo variant="dark-ink" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="/contact" className="btn-accent !px-5 !py-2.5 !text-xs">
            Book a Demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-primary lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <ul className="container-page flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-line/60 last:border-none">
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block py-3 font-heading text-sm font-semibold uppercase tracking-wide',
                      isActive ? 'text-primary' : 'text-ink-light',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="py-3">
              <a href="/contact" className="btn-accent w-full">
                Book a Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
