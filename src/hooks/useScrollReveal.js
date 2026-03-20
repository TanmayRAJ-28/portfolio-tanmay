import { useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { amount: 0.2, once: true })

  if (inView) {
    controls.start('show')
  }

  const variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        ...options.transition,
      },
    },
  }

  return { ref, controls, variants }
}
