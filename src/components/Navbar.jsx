import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ solid }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)
  const cls = `${solid ? 'nav-solid' : ''} ${scrolled ? 'scrolled' : ''}`

  return (
    <>
      <nav id="navbar" className={cls}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="firm">גוהר <span className="sep">&amp;</span> גוהר</span>
            <span className="sub">משרד עורכי דין</span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/about">אודות</Link></li>
            <li className="has-dropdown">
              <a href="#">חזון המשרד</a>
              <div className="nav-dropdown">
                <Link to="/vision">חזון ודרכי פעולה</Link>
                <Link to="/every-person">כל אדם הוא עולם</Link>
                <Link to="/tips">טיפים לנפגע</Link>
              </div>
            </li>
            <li><Link to="/services">סוגי תביעות</Link></li>
            <li><Link to="/team">הצוות המשפטי</Link></li>
            <li><Link to="/hostile-acts">נפגעי פעולות איבה</Link></li>
            <li><Link to="/news">כתבות</Link></li>
            <li><a href="tel:049923557" className="nav-phone">04-9923557</a></li>
            <li><Link to="/contact" className="nav-cta-big">צור קשר</Link></li>
          </ul>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="תפריט"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={close}>אודות</Link>
        <span className="mob-section-title">חזון המשרד</span>
        <Link to="/vision" onClick={close} className="mob-sub">חזון ודרכי פעולה</Link>
        <Link to="/every-person" onClick={close} className="mob-sub">כל אדם הוא עולם</Link>
        <Link to="/tips" onClick={close} className="mob-sub">טיפים לנפגע</Link>
        <Link to="/services" onClick={close}>סוגי תביעות</Link>
        <Link to="/team" onClick={close}>הצוות המשפטי</Link>
        <Link to="/hostile-acts" onClick={close}>נפגעי פעולות איבה</Link>
        <Link to="/news" onClick={close}>כתבות</Link>
        <a href="tel:049923557" onClick={close}>04-9923557</a>
        <Link to="/contact" onClick={close} className="mob-cta">צור קשר</Link>
      </div>
    </>
  )
}
