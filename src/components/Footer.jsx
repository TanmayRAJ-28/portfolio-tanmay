import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      id="contact"
      style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, #050508 100%)',
        borderTop: '1px solid rgba(0,212,255,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
          boxShadow: '0 0 20px rgba(0,212,255,0.4)',
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background:
            'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 32px 40px',
          position: 'relative',
        }}
      >
        {/* Floating particle dots background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(0,212,255,0.15) 1px, transparent 1px), radial-gradient(circle, rgba(123,47,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px, 80px 80px',
            backgroundPosition: '0 0, 20px 20px',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />

        {/* CONTACT HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: 'var(--accent-primary)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            06 / CONTACT
          </p>

          <h2
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '16px',
            }}
          >
            {"Let's Build Something Together"}
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
              margin: '0 auto 20px',
              borderRadius: '2px',
              boxShadow: '0 0 12px rgba(0,212,255,0.5)',
            }}
          />

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              maxWidth: '440px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Have a project in mind, an idea to explore, or a role that fits?
            I'd love to connect.
          </p>
        </motion.div>

        {/* CONTACT CARDS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '64px',
            maxWidth: '700px',
            margin: '0 auto 64px',
          }}
        >
          {[
            {
              icon: Mail,
              label: 'EMAIL',
              value: personalInfo.email,
              href: `mailto:${personalInfo.email}`,
              copy: true,
            },
            {
              icon: Phone,
              label: 'PHONE',
              value: personalInfo.phone,
              href: `tel:${personalInf.phone}`,
              copy: true,
            },
            {
              icon: MapPin,
              label: 'LOCATION',
              value: personalInfo.location,
              href: null,
              copy: false,
            },
          ].map((item) => {
            const IconComp = item.icon
            return (
              <div
                key={item.label}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(19,19,31,0.9), rgba(13,13,20,0.9))',
                  border: '1px solid rgba(0,212,255,0.12)',
                  borderRadius: '20px',
                  padding: '28px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  transition:
                    'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0,212,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '20%',
                    right: '20%',
                    height: '1px',
                    background:
                      'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                  }}
                />

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '4px',
                  }}
                >
                  <IconComp size={20} color="#00d4ff" />
                </div>

                <p
                  style={{
                    fontSize: '0.6rem',
                    fontFamily: 'Orbitron, sans-serif',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                      textAlign: 'center',
                      wordBreak: 'break-all',
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                      textAlign: 'center',
                      wordBreak: 'break-all',
                    }}
                  >
                    {item.value}
                  </p>
                )}

                {item.copy && (
                  <button
                    type="button"
                    onClick={() => navigator.clipboard.writeText(item.value)}
                    style={{
                      marginTop: 'auto',
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      borderRadius: '6px',
                      padding: '5px 14px',
                      color: '#00d4ff',
                      fontSize: '0.55rem',
                      fontFamily: 'Orbitron, sans-serif',
                      letterSpacing: '0.12em',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0,212,255,0.15)'
                      e.currentTarget.style.boxShadow =
                        '0 0 10px rgba(0,212,255,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0,212,255,0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    COPY
                  </button>
                )}
              </div>
            )
          })}
        </motion.div>

        {/* FOOTER GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '48px',
            marginBottom: '40px',
            paddingTop: '48px',
            borderTop: '1px solid var(--border-subtle)',
            alignItems: 'start',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1.3rem',
                fontWeight: 900,
                background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {personalInfo.name}
            </span>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '220px',
              }}
            >
              B.Tech IT @ KIIT University — building intelligent systems and data-driven
              solutions.
            </p>
            
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s, padding-left 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00d4ff'
                    e.currentTarget.style.paddingLeft = '6px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-primary)',
                      fontSize: '0.6rem',
                    }}
                  >
                    ▸
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Reach Out
            </h4>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              ✉ {personalInfo.email}
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              ⌥ github.com/TanmayRAJ-28
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0a66c2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              ◈ linkedin.com/in/tanmay-raj
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            © {year} {personalInfo.name}. Built with React & ❤️
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              fontFamily: 'JetBrains Mono, monospace',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}
          >
            <span style={{ color: 'var(--accent-primary)' }}>{'</>'}</span>{' '}
            React + Vite + Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}
