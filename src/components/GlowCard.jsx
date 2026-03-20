import { motion } from 'framer-motion'

export function GlowCard({ children, className = '', ...rest }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`relative glow-border rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/80 overflow-hidden ${className}`}
      {...rest}
    >
      <div className="relative z-10 h-full w-full bg-gradient-to-b from-white/5 via-white/0 to-white/5/0">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100" aria-hidden="true" />
    </motion.div>
  )
}

export default GlowCard
