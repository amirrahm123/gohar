import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const slides = [
  {
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
    label: 'משרד עורכי דין',
    title: 'גוהר & גוהר',
    titleEm: 'מסורת של מצוינות',
    sub: 'למעלה מ-50 שנות ניסיון בייצוג נפגעי גוף. מהמשרדים המובילים והוותיקים בישראל.',
  },
  {
    bg: 'linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 40%, #2d2d2d 100%)',
    label: 'DUN\'S 100',
    title: 'מדורגים בין',
    titleEm: 'המשרדים המובילים בישראל',
    sub: 'צוות של 17 אנשי מקצוע עם ניסיון עשיר בכל תחומי הנזיקין ופגיעות הגוף.',
  },
  {
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #0d1b2a 40%, #1b2838 100%)',
    label: 'ייעוץ ראשוני חינם',
    title: 'נפגעתם?',
    titleEm: 'אנחנו נלחמים בשבילכם',
    sub: 'ייעוץ ראשוני ללא עלות וללא התחייבות. פנו אלינו היום למיצוי מלוא זכויותיכם.',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <div className="hero-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-slide-bg" style={{ background: slide.bg }} />
          <div className="hero-slide-overlay" />
          <div className="hero-slide-content">
            <motion.div
              className="hero-slide-label"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {slide.label}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {slide.title} <em>{slide.titleEm}</em>
            </motion.h1>
            <motion.p
              className="hero-slide-sub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {slide.sub}
            </motion.p>
            <motion.div
              style={{ display: 'flex', gap: 14 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <Link to="/contact" className="btn-gold">ייעוץ חינם</Link>
              <a href="tel:049923557" className="btn-ghost">04-9923557</a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`שקופית ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
