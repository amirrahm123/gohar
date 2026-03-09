import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CtaBand from '../components/CtaBand'

export default function Vision() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'חזון המשרד', to: '#' }, { label: 'חזון ודרכי פעולה' }]} />
      <PageHero label="חזון המשרד" title='חזון <em>ודרכי פעולה</em>' subtitle="הגישה המקצועית שמנחה את משרדנו בכל תיק ותיק — מומחיות, ניסיון וחדשנות." showButtons={false} />
      <section className="content-section">
        <div className="content-container">
          <AnimatedSection>
            <h2>ייצוג תובעים בלבד</h2>
            <p>משרדנו מייצג <strong>תובעים בלבד</strong> ועל כן המשרד לעולם אינו נמצא בניגוד עניינים וטובת המשרד הנה טובת הלקוח תמיד.</p>
            <p>אינו גובים שכר עבור ייעוץ ובחינת התיק, כמו כן השכר על שירותנו משולם למעשה לרוב על ידי הנתבע כתוספת באחוזים על סכום הפיצוי המגיע ללקוח — כך שככל שפיצוי שהשגנו ללקוח גדול יותר אנו מרוויחים יותר.</p>
          </AnimatedSection>
          <AnimatedSection className="highlight-box">
            <h3>חדשנות והישגים</h3>
            <p>חשוב למשרדנו להיות תמיד חדשני ובעל ההישגים הגבוהים ביותר — שכן הצלחת הלקוח היא הצלחתנו.</p>
          </AnimatedSection>
          <AnimatedSection>
            <h2>גישה מקצועית</h2>
            <p>משרדנו מאמין שידע מקצועי משפטי ורפואי נרחב, ניסיון שאין שני לו, צומת לב לפרטים והנחיית הלקוח לאורך תביעתו הם המובילים להצלחת התביעה.</p>
            <p>אנו מקפידים על תכנון מוקדם של כל תיק מתחילתו ועד סופו, תוך מוכנות מלאה לכל תרחיש וייעוץ והכוונת הלקוח על מנת להביא לתוצאה הרצויה.</p>
          </AnimatedSection>
          <AnimatedSection>
            <h2>ניסיון ויכולת</h2>
            <p>המשרד הנו אחד המשרדים בעלי הניסיון הרב ביותר בתחום הנזיקין בישראל ומייצג תובעים בהצלחה מרובה מזה <strong>51 שנים</strong>.</p>
            <p>ניסיון רב זה מתבטא בשני מישורים — הן ביכולת להביא לתוצאות הטובות ביותר במסגרת ניהול משא ומתן עיקש, והן בניהול התיק בערכאות.</p>
          </AnimatedSection>
          <AnimatedSection>
            <h2>ידע רפואי נרחב</h2>
            <p>עורכי הדין במשרד הנם בעלי ידע עצום ונמצאים בחוד החנית לא רק ברמת הידע בפן המשפטי אלא גם בפן הרפואי.</p>
            <p>כמו כן המשרד מקבל ייעוץ רפואי מסור משורה של רופאים ואנשי מדע ומקצוע מובילים בתחומם הכוללים מומחי בטיחות, חשבים ומהנדסים.</p>
          </AnimatedSection>
          <AnimatedSection className="info-card">
            <h3>ייעוץ ראשוני חינם</h3>
            <p>צרו קשר ונשמח לייעץ ללא עלות. <a href="tel:049923557" style={{ color: 'var(--gold)', fontWeight: 700 }}>04-9923557</a></p>
          </AnimatedSection>
        </div>
      </section>
      <CtaBand title="רוצים לדעת עוד?" />
    </PageTransition>
  )
}
