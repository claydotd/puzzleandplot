import { useEffect, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'

/** Scroll past this before the header may shrink. */
const COLLAPSE_AT = 96
/** Only grow again once scroll is this close to the top. */
const EXPAND_AT = 12

export default function Layout() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    let frame = 0
    let collapsed = false
    let collapseDelta = 0

    const measureCollapseDelta = () => {
      const wasCollapsed = header.classList.contains('is-collapsed')
      header.classList.add('is-measuring')

      header.classList.remove('is-collapsed')
      const expanded = header.offsetHeight

      header.classList.add('is-collapsed')
      const shrunk = header.offsetHeight

      header.classList.toggle('is-collapsed', wasCollapsed)
      header.classList.remove('is-measuring')
      void header.offsetHeight

      collapseDelta = Math.max(0, expanded - shrunk)
    }

    const update = () => {
      frame = 0
      const y = window.scrollY

      if (!collapsed && y > COLLAPSE_AT) {
        // Shrinking shortens the document and can clamp scrollY upward.
        // Only collapse when we'd still sit below the expand threshold.
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight
        const yAfter = Math.min(y, Math.max(0, maxScroll - collapseDelta))
        if (yAfter <= EXPAND_AT) return

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

    const onResize = () => {
      measureCollapseDelta()
      update()
    }

    measureCollapseDelta()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="logo-container">
          <div className="logo-brand">
            <Link to="/" className="site-logo">
              <img src={`${import.meta.env.BASE_URL}logo-white.png`} alt="Puzzle & Plot" />
            </Link>
            <p className="site-logo-subtitle">Riddles. Mysteries. Adventures.</p>
          </div>
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
