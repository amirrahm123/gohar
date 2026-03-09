import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="form-card">
      <h3>שלחו הודעה</h3>
      <p className="form-sub">נחזור אליכם בהקדם האפשרי</p>
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="f-row">
              <div className="f-group">
                <label htmlFor="fname">שם מלא</label>
                <input type="text" id="fname" placeholder="ישראל ישראלי" required />
              </div>
              <div className="f-group">
                <label htmlFor="phone">טלפון</label>
                <input type="tel" id="phone" placeholder="050-0000000" required />
              </div>
            </div>
            <div className="f-group">
              <label htmlFor="email">דוא"ל</label>
              <input type="email" id="email" placeholder="name@example.com" />
            </div>
            <div className="f-group">
              <label htmlFor="message">ההודעה שלכם</label>
              <textarea id="message" placeholder="ספרו לנו בקצרה על המקרה שלכם..." required />
            </div>
            <button type="submit" className="f-submit">שלחו הודעה</button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="f-success"
            style={{ display: 'block' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="check">&#10004;&#65039;</div>
            <h4>ההודעה התקבלה!</h4>
            <p>נחזור אליכם בהקדם האפשרי.<br />ניתן גם להתקשר ישירות ל-04-9923557.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
