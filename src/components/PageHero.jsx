import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHero({ label, title, subtitle, showButtons = true }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <motion.p
          className="sec-label"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {subtitle}
        </motion.p>
        {showButtons && (
          <motion.div
            className="page-hero-btns"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/contact" className="btn-gold">קבעו ייעוץ חינם</Link>
            <a href="tel:049923557" className="btn-ghost">04-9923557</a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
