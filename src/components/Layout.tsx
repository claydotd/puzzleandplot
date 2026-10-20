import { useEffect, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'

const COLLAPSE_AT = 80
const EXPAND_AT = 16

export default function Layout() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    let frame = 0
    let collapsed = false

    const update = () => {
      frame = 0
      const y = window.scrollY
      if (!collapsed && y > COLLAPSE_AT) {
        collapsed = true
        header.classList.add('is-collapsed')
      } else if (collapsed && y < EXPAND_AT) {
        collapsed = false
        header.classList.remove('is-collapsed')
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="logo-container">
          <Link to="/" className="site-logo">
            <img src={`${import.meta.env.BASE_URL}logo-white.png`} alt="Puzzle & Plot" />
          </Link>
          <p className="site-logo-subtitle">Riddles. Mysteries. Adventures.</p>
        </div>
        <Nav />
      </header>

      <div className="site-body">
        <main className="site-main">
          <Outlet />
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <p>&copy; {new Date().getFullYear()} Puzzle &amp; Plot</p>
          </div>
          <div className="credit">site made by <a href="https://analoguegonedigital.co.uk">analoguegonedigital.co.uk</a></div>
        </footer>
      </div>
    </>
  )
}
