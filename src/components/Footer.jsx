import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="fl">גוהר &amp; גוהר — משרד עורכי דין</div>
          <p>מהמשרדים המובילים והוותיקים בישראל בתחום הנזיקין.<br />נהריה · פתח תקווה | מדורג DUN'S 100</p>
        </div>
        <div className="footer-col">
          <h4>תחומים</h4>
          <Link to="/services">סוגי תביעות</Link>
          <Link to="/about">אודות</Link>
          <Link to="/team">הצוות המשפטי</Link>
          <Link to="/vision">חזון המשרד</Link>
          <Link to="/news">כתבות</Link>
        </div>
        <div className="footer-col">
          <h4>צור קשר</h4>
          <a href="tel:049923557">04-9923557</a>
          <a href="tel:0768870240">076-887-0240</a>
          <a href="https://wa.me/972559752423" target="_blank" rel="noopener">055-975-2423 (וואטסאפ)</a>
          <a href="mailto:office@gohar-adv.com">office@gohar-adv.com</a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2025 גוהר &amp; גוהר — משרד עורכי דין. כל הזכויות שמורות.</p>
        <p><span>DUN'S 100 · מאז 1970</span></p>
      </div>
    </footer>
  )
}
