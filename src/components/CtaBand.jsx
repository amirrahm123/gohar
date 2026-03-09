import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function CtaBand({ title = 'נפגעתם? אנחנו כאן בשבילכם', subtitle = 'ייעוץ ראשוני ללא עלות וללא התחייבות' }) {
  return (
    <section className="cta-band">
      <AnimatedSection>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="cta-btns">
          <Link to="/contact" className="btn-white">השאירו פרטים</Link>
          <a href="tel:049923557" className="btn-outline-w">04-9923557</a>
        </div>
      </AnimatedSection>
    </section>
  )
}
