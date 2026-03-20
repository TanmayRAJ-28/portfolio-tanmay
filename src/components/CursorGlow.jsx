import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px'
        ring.current.style.top = e.clientY + 'px'
      }
    }

    const handleEnter = () => ring.current?.classList.add('hovering')
    const handleLeave = () => ring.current?.classList.remove('hovering')

    window.addEventListener('mousemove', moveCursor)

    const addListeners = () => {
      const targets = document.querySelectorAll('a, button, [data-cursor-hover]')
      targets.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
