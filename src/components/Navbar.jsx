import { useRef, useState } from 'react'
import Container from './Container.jsx'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl"
      onKeyDown={handleKeyDown}
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex min-h-[4.5rem] items-center justify-between gap-6">
            <a
              className="rounded-sm text-sm font-semibold tracking-[0.08em] text-primary no-underline hover:text-accent-hover hover:no-underline"
              href="#home"
              onClick={closeMenu}
            >
              Sanchit Mishra
            </a>

            <ul className="hidden items-center gap-7 md:flex">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    className="text-sm text-secondary no-underline hover:text-primary hover:no-underline"
                    href={href}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              ref={menuButtonRef}
              aria-label={
                isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex size-11 items-center justify-center rounded-control border border-border text-primary transition-colors hover:border-border-strong hover:bg-surface-raised focus-visible:outline-offset-2 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.7"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.7"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-border py-3 md:hidden`}
            id="mobile-navigation"
          >
            <ul className="flex flex-col">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    className="block rounded-control px-3 py-3 text-sm text-secondary no-underline transition-colors hover:bg-surface-raised hover:text-primary hover:no-underline focus-visible:outline-offset-0"
                    href={href}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Navbar
