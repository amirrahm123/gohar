import { useState, useEffect } from 'react'

export default function FloatingElements() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="https://wa.me/972559752423?text=שלום%2C%20אני%20מעוניין%2Fת%20בייעוץ%20משפטי"
        target="_blank"
        rel="noopener"
        className="wa-float"
        aria-label="WhatsApp"
      >
        &#128172;
      </a>
      <button
        id="scrollTop"
        className={showScroll ? 'visible' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="חזרה למעלה"
      >
        &#8593;
      </button>
    </>
  )
}
