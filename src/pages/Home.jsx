import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import HeroCarousel from '../components/HeroCarousel'
import AnimatedSection from '../components/AnimatedSection'
import StatBox from '../components/StatBox'
import CtaBand from '../components/CtaBand'

const services = [
  { title: 'תאונות דרכים', desc: 'ייצוג מקיף מול חברות הביטוח וקרנית למיצוי מלוא הפיצויים.' },
  { title: 'רשלנות רפואית', desc: 'תביעות מול בתי חולים, קופות חולים ורופאים פרטיים.' },
  { title: 'פגיעות בעבודה', desc: 'הליך דו-מסלולי — ביטוח לאומי במקביל לתביעת נזיקין.' },
  { title: 'תביעות נזיקין', desc: 'נזקי גוף, נזקים נפשיים וכאב מכל מקור.' },
  { title: 'נפגעי טרור', desc: 'ייצוג נפגעי פעולות איבה מול ביטוח לאומי ובתביעות אזרחיות.' },
  { title: 'מחלות מקצוע', desc: 'מיקרוטראומה, חשיפה לחומרים מסוכנים וייצוג מול ביטוח לאומי.' },
]

export default function Home() {
  return (
    <PageTransition>
      <HeroCarousel />

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          <StatBox target={54} label="שנות ניסיון" />
          <StatBox target={17} label="אנשי צוות" />
          <StatBox target={11} label="תחומי עיסוק" />
          <StatBox target={2} label="סניפים בארץ" />
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="sec">
        <div className="container">
          <div className="about-split">
            <AnimatedSection className="about-text">
              <div className="sec-header">
                <p className="sec-label">אודות המשרד</p>
                <h2 className="sec-title">מסורת של מצוינות משפטית מאז 1970</h2>
              </div>
              <p>משרד גוהר &amp; גוהר הנו משרד בוטיק <strong>מהוותיקים, המוכרים והמוערכים בישראל</strong>, המתמחה בניהול תביעות נזיקין, רשלנות רפואית, תאונות דרכים, ביטוח לאומי ודיני עבודה.</p>
              <p>המשרד מייצג <strong>תובעים בלבד</strong> ועל כן לעולם אינו נמצא בניגוד עניינים — טובת המשרד הנה טובת הלקוח תמיד.</p>
              <p style={{ marginTop: 24 }}><Link to="/about" className="btn-link">קראו עוד על המשרד</Link></p>
            </AnimatedSection>
            <AnimatedSection className="about-milestones" delay={0.15}>
              {[
                { year: '1970', text: 'עו"ד עדיאל גוהר מייסד את המשרד' },
                { year: '1980', text: 'עו"ד אורן גוהר מצטרף כשותף בכיר' },
                { year: '2017', text: 'עו"ד אוהד גוהר ממזג את משרדו' },
                { year: 'היום', text: '54+ שנות ניסיון, שני סניפים, DUN\'S 100' },
              ].map((m, i) => (
                <motion.div
                  className="milestone"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="milestone-year">{m.year}</div>
                  <div className="milestone-text">{m.text}</div>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec-alt">
        <div className="container">
          <AnimatedSection className="sec-header centered">
            <p className="sec-label centered">תחומי עיסוק</p>
            <h2 className="sec-title">מומחים בכל תחומי הנזיקין</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="svc-grid">
              {services.map((s, i) => (
                <motion.div
                  className="svc-card"
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn-link">כל תחומי העיסוק</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* TRUST BANNER */}
      <div className="trust-band">
        <div className="trust-inner">
          <AnimatedSection className="trust-text">
            <em>מייצגים תובעים בלבד</em> — ללא ניגוד עניינים.<br />טובת המשרד היא תמיד טובת הלקוח.
          </AnimatedSection>
          <AnimatedSection className="trust-badges" delay={0.2}>
            <div className="trust-badge"><span className="trust-badge-num">DUN'S</span>100</div>
            <div className="trust-badge"><span className="trust-badge-num">1970</span>מאז</div>
            <div className="trust-badge"><span className="trust-badge-num">17</span>אנשי צוות</div>
          </AnimatedSection>
        </div>
      </div>

      {/* TEAM PREVIEW */}
      <section className="sec">
        <div className="container">
          <AnimatedSection>
            <div className="sec-header">
              <p className="sec-label">הצוות המשפטי</p>
              <h2 className="sec-title">עורכי הדין שנלחמים בשבילכם</h2>
              <p className="sec-desc">צוות מנוסה ומסור, עם עשרות שנות ניסיון משולב בייצוג נפגעי גוף.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="team-layout" delay={0.1}>
            <div className="team-group-title">שותפים בכירים</div>
            <div className="team-row">
              {['עו"ד עדיאל גוהר', 'עו"ד אורן גוהר', 'עו"ד אוהד גוהר', 'עו"ד אסי רונן'].map((n, i) => (
                <motion.div className="team-member" key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="team-member-avatar">&#9878;</div>
                  <span className="team-member-name">{n}</span>
                </motion.div>
              ))}
            </div>
            <div className="team-group-title">עורכי דין</div>
            <div className="team-row">
              {['עו"ד עומר עזרא', 'עו"ד רולה רייס', 'עו"ד דין גוהר', 'עו"ד עידן נווה', 'עו"ד יוחאי בוסקילה', 'עו"ד טובה אפריאט', 'עו"ד אחמד בטאח'].map((n, i) => (
                <motion.div className="team-member" key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="team-member-avatar">&#9878;</div>
                  <span className="team-member-name">{n}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection style={{ marginTop: 36 }}>
            <Link to="/team" className="btn-link">הכירו את הצוות</Link>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand />
    </PageTransition>
  )
}
