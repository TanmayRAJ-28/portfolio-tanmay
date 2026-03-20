import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import ParticleBackground from './ParticleBackground'
import Typewriter from './Typewriter'
import profilePic from '../assets/profile.jpg'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero({ onCopied }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        position: 'relative',
      }}
      className="relative overflow-hidden px-4 pb-16 md:px-6 lg:px-8 crt-overlay"
    >
      <ParticleBackground />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"
        style={{ pointerEvents: 'none', zIndex: 1 }}
      />

      <div
        className="hero-layout"
        style={{ minHeight: '80vh', position: 'relative', zIndex: 10 }}
      >
        {/* Left: text content */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <motion.div variants={itemVariants}>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-glow-pulse">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>{personalInfo.statusBadge}</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
              Hello, I'm
            </p>
            <h1
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                background:
                  'linear-gradient(90deg, #00d4ff 0%, #4f46e5 50%, #7b2fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px',
                filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.3))',
              }}
            >
              <span className="block">{personalInfo.name}</span>
            </h1>
            <p className="text-sm font-mono uppercase tracking-[0.25em] text-[var(--text-muted)]">
              {personalInfo.title}
            </p>

            <div className="mt-2 text-base md:text-lg font-medium text-[var(--text-muted)]">
              <Typewriter
                words={personalInfo.roles}
                speed={80}
                deleteSpeed={40}
                pause={1800}
              />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-sm md:text-base text-[var(--text-muted)]"
          >
            B.Tech Information Technology @ KIIT University. Building intelligent systems,
            data-driven pipelines, and immersive web experiences that feel cinematic
            and performant.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              marginTop: '12px',
            }}
          >
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #00d4ff, #7b2fff)',
                border: '2px solid transparent',
                borderRadius: '14px',
                color: '#000000',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 25px rgba(0,212,255,0.4)',
                minWidth: '140px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,212,255,0.6)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,212,255,0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              data-cursor-hover="true"
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="https://github.com/TanmayRAJ-28"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                border: '2px solid rgba(0,212,255,0.5)',
                borderRadius: '14px',
                color: '#ffffff',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,212,255,0.2)',
                minWidth: '140px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #00d4ff, #0099bb)'
                e.currentTarget.style.borderColor = '#00d4ff'
                e.currentTarget.style.boxShadow =
                  '0 8px 30px rgba(0,212,255,0.5)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.color = '#000000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #1a1a2e, #16213e)'
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(0,212,255,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.color = '#ffffff'
              }}
              data-cursor-hover="true"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tanmay-raj-0b2459331"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                border: '2px solid rgba(10,102,194,0.6)',
                borderRadius: '14px',
                color: '#ffffff',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(10,102,194,0.2)',
                minWidth: '140px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #0a66c2, #0077b5)'
                e.currentTarget.style.borderColor = '#0a66c2'
                e.currentTarget.style.boxShadow =
                  '0 8px 30px rgba(10,102,194,0.5)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #1a1a2e, #16213e)'
                e.currentTarget.style.borderColor = 'rgba(10,102,194,0.6)'
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(10,102,194,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              data-cursor-hover="true"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right: TR card */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '28px',
              background:
                'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(123,47,255,0.3))',
              filter: 'blur(20px)',
              zIndex: 0,
            }}
          />
          <div
            className="overflow-hidden"
            style={{
              position: 'relative',
              zIndex: 1,
              background: 'rgba(15,15,26,0.95)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: '24px',
              padding: '24px',
              backdropFilter: 'blur(20px)',
              boxShadow:
                '0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span className="font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                B.Tech IT @ KIIT
              </span>
            </div>

            <div className="aspect-square w-full overflow-hidden rounded-2xl">
              <img
                src={profilePic}
                alt="Tanmay Raj"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 0%',
                  borderRadius: '16px',
                  display: 'block',
                  transform: 'scale(1.05)',
                  transformOrigin: 'top center',
                }}
              />
            </div>

            <div className="mt-4 space-y-2 text-xs text-[var(--text-muted)]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--text-primary)]">
                  {personalInfo.firstName}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--accent-primary)]">
                  It // Developer
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                Bhubaneswar, Odisha
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div className="flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--text-muted)]">
          <span>Scroll</span>
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[var(--border-subtle)]">
              <motion.div
                className="mt-1 h-1 w-1 rounded-full bg-[var(--accent-primary)]"
                animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <ArrowDown size={14} className="mt-1 text-[var(--accent-primary)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
