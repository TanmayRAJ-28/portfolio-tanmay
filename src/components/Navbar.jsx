import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Education',    href: '#education'    },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '10px 40px' : '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'rgba(10,10,15,0.6)',
        borderBottom: scrolled
          ? '1px solid rgba(0,212,255,0.12)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 900,
          fontSize: '1.1rem',
          color: '#00d4ff',
          textDecoration: 'none',
          letterSpacing: '0.1em',
          textShadow: '0 0 20px rgba(0,212,255,0.5)',
        }}
      >
        TR
      </a>

      {/* Horizontal nav links — always visible */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {NAV_LINKS.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = active === id
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive ? '#00d4ff' : '#8892a4',
                textShadow: isActive
                  ? '0 0 15px rgba(0,212,255,0.6)'
                  : 'none',
                paddingBottom: '4px',
                borderBottom: isActive
                  ? '2px solid #00d4ff'
                  : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s, text-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00d4ff'
                e.currentTarget.style.textShadow =
                  '0 0 12px rgba(0,212,255,0.5)'
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#8892a4'
                  e.currentTarget.style.textShadow = 'none'
                }
              }}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
