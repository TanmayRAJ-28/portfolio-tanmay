import { motion } from 'framer-motion'
import { personalInfo, stats, interests } from '../data/portfolioData'
import profilePic from '../assets/profile.jpg'

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Diagonal stripe texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 80px)',
        pointerEvents: 'none',
      }} />

      {/* Center radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '800px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-inner" style={{ position: 'relative' }}>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>

          {/* ── LEFT: avatar + name card + interests ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
          >
            {/* Spinning ring avatar */}
            <div style={{ position: 'relative', width: '220px', height: '220px' }}>
              <div style={{
                position: 'absolute', inset: '-4px', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #00d4ff, #7b2fff, transparent, #00d4ff)',
                animation: 'aboutSpin 4s linear infinite',
              }} />
              <div style={{
                position: 'absolute', inset: '3px', borderRadius: '50%',
                background: 'var(--bg-secondary)',
              }} />
              <div style={{
                position: 'absolute', inset: '8px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #0d0d20, #13131f)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
                overflow: 'hidden',
              }}>
            <img
              src={profilePic}
              alt="Tanmay Raj"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 10%',
                borderRadius: '50%',
                display: 'block',
              }}
            />
              </div>
            </div>

            {/* Name card */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: '16px', padding: '20px 24px',
              textAlign: 'center', width: '100%', maxWidth: '300px',
            }}>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: '4px',
              }}>{personalInfo.name}</h3>
              <p style={{
                fontSize: '0.7rem', color: 'var(--accent-primary)',
                fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '8px',
              }}>B.Tech IT @ KIIT</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                📍 Bhubaneswar, Odisha, India
              </p>
            </div>

            {/* Interests (moved from right column) */}
            <div style={{ width: '100%', maxWidth: '320px' }}>
              <p style={{
                fontSize: '0.6rem', fontFamily: 'Orbitron, sans-serif',
                color: 'var(--accent-primary)', letterSpacing: '0.2em',
                textTransform: 'uppercase', marginBottom: '12px',
              }}>Interests</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {interests.map((item) => (
                  <span
                    key={item.label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                      borderRadius: '999px', padding: '7px 16px',
                      fontSize: '0.82rem', color: 'var(--text-muted)',
                      cursor: 'default', transition: 'border-color 0.25s, color 0.25s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      e.currentTarget.style.color = 'var(--text-muted)'
                    }}
                  >
                    <span>{item.emoji}</span><span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT: bio + stats + interests ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <h2 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
              fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.35,
            }}>
              In short,{' '}
              <span style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>I build intelligent systems.</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
              {personalInfo.bio}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
              {personalInfo.bio2}
            </p>

            {/* Stats 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: '14px', padding: '20px 16px',
                    textAlign: 'center', cursor: 'default',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900,
                    background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    lineHeight: 1, marginBottom: '8px',
                  }}>{stat.value}{stat.suffix}</div>
                  <div style={{
                    fontSize: '0.6rem', color: 'var(--text-muted)',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

