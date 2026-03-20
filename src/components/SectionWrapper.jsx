import { motion } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
