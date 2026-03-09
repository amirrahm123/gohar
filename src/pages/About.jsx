import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CtaBand from '../components/CtaBand'

export default function About() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'אודות' }]} />
      <PageHero
        label="אודות המשרד"
        title='מסורת של <em>מצוינות משפטית</em> מאז 1970'
        subtitle="משרד גוהר & גוהר — מהמשרדים המובילים והוותיקים בישראל בתחום הנזיקין ונזקי הגוף."
      />
      <section className="content-section">
        <div className="content-container">
          <AnimatedSection>
            <h2>על המשרד</h2>
            <p>"גוהר את גוהר — משרד עורכי דין", הנו משרד בוטיק מהוותיקים, המוכרים והמוערכים בישראל בתחומו.</p>
            <p>המשרד הוקם בשנת <strong>1970</strong> על ידי עו"ד <strong>עדיאל גוהר</strong> ומתמחה בהשגת סכומי פיצוי מרביים לתובעים במגוון תחומי הנזיקין.</p>
            <p>בשנת <strong>1980</strong> הצטרף כשותף למשרד עו"ד <strong>אורן גוהר</strong>. בשנת <strong>2017</strong> התחבר למשרד גוהר משרד עורכי הדין G&amp;G בראשות עו"ד <strong>אוהד גוהר</strong>.</p>
          </AnimatedSection>
          <AnimatedSection>
            <h2>תחומי התמחות</h2>
            <p>המשרד מנהל תביעות לרבות: תאונות דרכים, פגיעות בעבודה, ביטוח לאומי, מחלות מקצוע, התקפי לב ואירועים מוחיים, רשלנות רפואית, מוות מתאונות וממחלות קשות.</p>
          </AnimatedSection>
          <AnimatedSection className="highlight-box">
            <h3>דירוג DUN'S 100</h3>
            <p>המשרד מופיע בדירוג <strong>DUN'S 100</strong> של Dan and Bradstreet כאחד ממשרדי עורכי הדין המובילים בישראל בתחום נזקי הגוף. המשרד מונה <strong>17 עובדים</strong> הכוללים עורכי דין, מתמחים וצוות אדמיניסטרטיבי.</p>
          </AnimatedSection>
          <AnimatedSection>
            <h2>למה לבחור בנו?</h2>
            <ul>
              <li><strong>מומחיות עם ניסיון מעל 50 שנה</strong> — מהמשרדים הוותיקים בישראל בתחום</li>
              <li><strong>הדרכה וייצוג בכל שלבי ההליך</strong> — ליווי צמוד מהרגע הראשון ועד לקבלת הפיצוי</li>
              <li><strong>בעלי ידע ושיטות חקירה ייחודיות</strong> — גישה חדשנית לכל תיק</li>
              <li><strong>שירות מקצועי ויחס אישי</strong> — כל לקוח מקבל תשומת לב מלאה</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection className="info-card">
            <h3>ייעוץ ראשוני חינם</h3>
            <p>פנו אלינו ללא עלות וללא התחייבות. <a href="tel:049923557" style={{ color: 'var(--gold)', fontWeight: 700 }}>04-9923557</a></p>
          </AnimatedSection>
        </div>
      </section>
      <CtaBand title="רוצים לשמוע עוד?" />
    </PageTransition>
  )
}
