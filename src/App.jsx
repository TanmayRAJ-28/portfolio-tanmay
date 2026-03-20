import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CursorGlow from './components/CursorGlow'
import { personalInfo } from './data/portfolioData'

const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Footer = lazy(() => import('./components/Footer'))

function MatrixOverlay({ active }) {
  if (!active) return null

  return (
    <div className="matrix-overlay pointer-events-none">
      <div className="absolute inset-0 bg-black/90" />
      <div className="absolute inset-0 flex items-center justify-center text-[32px] md:text-[44px] font-mono text-green-400/80">
        <div className="animate-pulse">ACCESS GRANTED_</div>
      </div>
    </div>
  )
}

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            <div className="mb-6 text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
              Initializing portfolio system
            </div>
            <div className="flex justify-center gap-1 text-3xl md:text-4xl font-display tracking-[0.25em]">
              {personalInfo.name.split('').map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function useKonami(callback) {
  useEffect(() => {
    const sequence = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ]
    let position = 0

    const handler = (event) => {
      const key = event.key
      const requiredKey = sequence[position]

      if (key === requiredKey) {
        position += 1
        if (position === sequence.length) {
          callback?.()
          position = 0
        }
      } else {
        position = 0
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [callback])
}

function ToastContainer({ toasts }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 text-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-panel rounded-lg border border-[var(--accent-primary)]/40 px-4 py-3 text-[var(--text-primary)] shadow-lg"
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function App() {
  const [loadingDone, setLoadingDone] = useState(false)
  const [matrixActive, setMatrixActive] = useState(false)
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const t = setTimeout(() => setLoadingDone(true), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const bar = document.createElement('div')
    bar.id = 'scroll-bar'
    document.body.appendChild(bar)

    const update = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      if (total > 0) {
        bar.style.width = `${(scrolled / total) * 100}%`
      } else {
        bar.style.width = '0%'
      }
    }

    window.addEventListener('scroll', update)
    update()

    return () => {
      window.removeEventListener('scroll', update)
      if (bar.parentNode) bar.remove()
    }
  }, [])

  useKonami(() => {
    setMatrixActive(true)
    setTimeout(() => setMatrixActive(false), 3000)
  })

  const pushToast = (message) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2500)
  }

  const handleCopied = () => {
    pushToast('Copied! \u2713')
  }

  const handleMessageSent = () => {
    pushToast("Message sent! I'll get back to you soon \u2713")
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] cursor-none">
      <CursorGlow />
      <MatrixOverlay active={matrixActive} />
      <LoadingScreen done={loadingDone} />
      <ToastContainer toasts={toasts} />

      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-muted)]">
            Loading interface...
          </div>
        }
      >
        <div className="page-gradient-bg relative min-h-screen pb-12">
          <Navbar />
          <main className="pt-20 md:pt-24">
            <Hero onCopied={handleCopied} />
            <div className="section-divider" />
            <About onCopied={handleCopied} />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Education />
          </main>
          <Footer />
        </div>
      </Suspense>
    </div>
  )
}

export default App
