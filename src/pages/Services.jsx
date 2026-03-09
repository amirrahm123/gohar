import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CtaBand from '../components/CtaBand'
import { StaggerParent, StaggerItem } from '../components/StaggerChildren'

const services = [
  { title: 'תאונות דרכים', desc: 'כל סוגי התאונות בין אם נגרמו לנהג, לנוסעים ברכב או להולכי רגל. ייצוג מקיף מול חברות הביטוח וקרנית למיצוי מלוא הפיצויים המגיעים לנפגע.' },
  { title: 'תביעות נזיקין כלליות', desc: 'תאונות שגרמו לנזקי גוף מכל הסוגים, לניזקים נפשיים, נזקי כאב או למחלות מכל מקור שיש בו כדי לגבש עילת תביעה.' },
  { title: 'פגיעות בעבודה', desc: 'לרבות תביעות ביטוח לאומי, תאונות עבודה, אירועים הקשורים ללחצים נפשיים בעבודה, השגת קצבאות לנפגעי עבודה. המשרד מנהל הליך דו-מסלולי — תביעת ביטוח לאומי במקביל לתביעת נזיקין מול המעסיק.' },
  { title: 'מחלות מקצוע', desc: 'כל סוגי המחלות שנגרמו כתוצאה מעבודה ממושכת, מיקרוטראומה, חשיפה לאסבסט וחומרים מסוכנים אחרים. ייצוג מול ביטוח לאומי ובתביעות נזיקין.' },
  { title: 'תאונות קטלניות', desc: 'תאונות שהובילו למוות או לנכות גבוהה, כולל עיוורון, פרפלגיה וקוודרופלגיה. ייצוג משפחות נפגעים בהליכים מורכבים להשגת פיצויים מקסימליים.' },
  { title: 'רשלנות רפואית', desc: 'כל סוגי הרשלנות הרפואית, לידות בעוולה, ניתוחים וטיפולים כושלים. תביעות מול בתי חולים, קופות חולים ורופאים פרטיים.' },
  { title: 'תביעות נגד גופים ממשלתיים', desc: 'תביעות נגד המוסד לביטוח לאומי, קצין התגמולים, משרד הביטחון ונפגעי שירות צבאי.' },
  { title: 'תאונות גופים ציבוריים', desc: 'תאונות בבתי ספר, גני ילדים, מתקני ספורט ומוסדות ציבוריים שונים. ייצוג נפגעים בתביעות אחריות מול הגופים המפעילים.' },
  { title: 'תביעות ביטוחים פרטיים', desc: 'ביטוח תלמידים, תאונות אישיות, אובדן כושר עבודה ופוליסות ביטוח נוספות. ניהול תביעות מול חברות הביטוח ומיצוי מלוא הזכויות.' },
  { title: 'זכויות נפגעים כלליות', desc: 'סיעוד, ניידות, קצבאות מיוחדות, פיצויי פנסיה. ייצוג בפני ועדות רפואיות וסיוע במיצוי מלוא הזכויות הסוציאליות.' },
  { title: 'תביעות מס הכנסה', desc: 'תביעות לקבלת פטור ממס הכנסה עקב נכות. סיוע בהגשת בקשות לפטור ממס וערעורים על החלטות הוועדות הרפואיות.' },
]

export default function Services() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'סוגי תביעות' }]} />
      <PageHero label="תחומי עיסוק" title='סוגי <em>תביעות</em>' subtitle="במשך כל שנותיו עסק המשרד במגוון רחב של תביעות ובכל סוגי הנזק בדיני הנזיקין." showButtons={false} />
      <section className="content-section">
        <div className="content-container">
          <StaggerParent>
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerParent>

          <AnimatedSection className="highlight-box" delay={0.2}>
            <p>משרדנו הנו מהמשרדים הוותיקים ובעלי הניסיון הרב ביותר בישראל בתחום פגיעות הגוף — <strong>למעלה מ-50 שנות ניסיון</strong> בייצוג תובעים בהצלחה.</p>
          </AnimatedSection>

          <AnimatedSection className="info-card" delay={0.3}>
            <h3>ייעוץ ראשוני חינם</h3>
            <p>נפגעתם? פנו אלינו ללא עלות וללא התחייבות. <a href="tel:049923557" style={{ color: 'var(--gold)', fontWeight: 700 }}>04-9923557</a></p>
          </AnimatedSection>
        </div>
      </section>
      <CtaBand title="נפגעתם? אנחנו כאן בשבילכם" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </PageTransition>
  )
}
