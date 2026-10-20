import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/virtual-rooms', label: 'Online' },
  { to: '/weddings', label: 'Weddings' },
  { to: '/puzzle-trail', label: 'City Trail' },
  { to: '/faq', label: 'FAQ' },
  { to: '/media', label: 'Media' },
]

const MOBILE_NAV_QUERY = '(max-width: 767px)'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_NAV_QUERY).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(MOBILE_NAV_QUERY)
    const onChange = () => setIsMobile(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="site-nav-bar">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
      </button>

      <nav
        id="site-nav"
        className={`site-nav${open ? ' is-open' : ''}`}
        aria-label="Main"
        inert={isMobile && !open ? true : undefined}
      >
        <div className="site-nav__clip">
        <ul className="site-nav__list">
          {links.map(({ to, label, end }, index) => (
            <li key={to} style={{ '--nav-step': index } as React.CSSProperties}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                <span className="site-nav__tab">
                  <span className="site-nav__label">{label}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </div>
  )
}
