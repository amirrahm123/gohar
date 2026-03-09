import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CtaBand from '../components/CtaBand'
import { StaggerParent, StaggerItem } from '../components/StaggerChildren'

const helpTypes = [
  'הגשת תביעות הכרה כנפגע פעולות איבה מול ביטוח לאומי',
  'ליווי בוועדות רפואיות לקביעת אחוזי נכות',
  'תביעות לפיצוי בגין נזק גופני ונפשי',
  'ערעורים על החלטות ביטוח לאומי',
  'תביעות אזרחיות נגד גורמי הטרור',
  'סיוע במיצוי זכויות סוציאליות נלוות',
]

export default function HostileActs() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'נפגעי פעולות איבה' }]} />
      <PageHero label="נפגעי פעולות איבה" title='ייצוג נפגעי <em>פעולות איבה וטרור</em>' subtitle="משרדנו מייצג נפגעי פעולות איבה ופיגועי טרור בהליכים מול ביטוח לאומי ובתביעות אזרחיות." showButtons={false} />
      <section className="content-section">
        <div className="content-container">
          <AnimatedSection>
            <h2>ייצוג נפגעי טרור</h2>
            <p>משרד גוהר & גוהר מייצג נפגעי פעולות איבה ופיגועי טרור, הן בהליכים מול <strong>המוסד לביטוח לאומי</strong> לקבלת הכרה וקצבאות, והן בתביעות אזרחיות נגד גורמי הטרור.</p>
            <p>הייצוג כולל ליווי בוועדות רפואיות, הגשת תביעות לפיצוי בגין נזק גופני ונפשי, וסיוע במיצוי מלוא הזכויות המגיעות לנפגעים ולמשפחותיהם.</p>
          </AnimatedSection>

          <AnimatedSection className="highlight-box" delay={0.1}>
            <h3>תביעה תקדימית — 245 נפגעי טרור</h3>
            <p>עו"ד דין גוהר מהמשרד הוביל תביעה תקדימית בשם <strong>245 נפגעי טרור</strong> בסך <strong>1.255 מיליארד ש"ח</strong> נגד הרשות הפלסטינית. תביעה ייחודית בהיקפה שמטרתה להביא לפיצוי הולם עבור קורבנות הטרור.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2>ייצוג נפגעי ה-7 באוקטובר</h2>
            <p>לאחר אירועי ה-7 באוקטובר, המשרד מייצג נפגעים שנפצעו פיזית ונפשית מול ביטוח לאומי לקבלת הכרה כנפגעי פעולות איבה ומיצוי מלוא הזכויות הנובעות מכך — קצבאות, טיפולים רפואיים ופיצויים כספיים.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2>סוגי הסיוע שאנו מעניקים</h2>
          </AnimatedSection>
          <StaggerParent>
            {helpTypes.map((item, i) => (
              <StaggerItem key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <li style={{ listStyle: 'none', fontFamily: 'var(--sans)' }}>{item}</li>
              </StaggerItem>
            ))}
          </StaggerParent>

          <AnimatedSection className="info-card" delay={0.3}>
            <h3>ייעוץ ראשוני חינם</h3>
            <p>נפגעתם בפעולת איבה? פנו אלינו ללא עלות. <a href="tel:049923557" style={{ color: 'var(--gold)', fontWeight: 700 }}>04-9923557</a></p>
          </AnimatedSection>
        </div>
      </section>
      <CtaBand title="נפגעי טרור — אנחנו לצידכם" />
    </PageTransition>
  )
}
