import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CtaBand from '../components/CtaBand'

export default function EveryPerson() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'חזון המשרד', to: '#' }, { label: 'כל אדם הוא עולם' }]} />
      <PageHero label="חזון המשרד" title='כל אדם <em>הוא עולם</em>' subtitle="הייצוג המשפטי שלנו מונחה מההבנה העמוקה שכל פגיעה משפיעה על עתיד הנפגע ומשפחתו." showButtons={false} />
      <section className="content-section">
        <div className="content-container">
          <AnimatedSection>
            <p>ההבנה כי ייצוג הנפגע יכולה להשפיע ישירות על עתידו ועל עתיד משפחתו — קל וחומר כאשר מדובר בפגיעה המונעת מהנפגע להתפרנס — מביאה אותנו להתנהלות מקצועית עם שיקול דעת מלא אחריות בכל תיק.</p>
          </AnimatedSection>
          <AnimatedSection><h2>יחס אישי</h2><p>כל תיק מנוהל בקפידה תוך שימת לב לצורכי כל לקוח באופן אישי והתאמת הייצוג הטוב ביותר עם דגש על מקצועיות בלתי מתפשרת ודיסקרטיות.</p><p>אנו מבינים שאדם שנפגע בתאונה נמצא לעיתים במקום לא ברור ומבולבל בחייו — לכן אנו מטפלים בכל תיק עם שירות אישי וצמוד הכולל ייעוץ משפטי לאורך ההליך.</p></AnimatedSection>
          <AnimatedSection className="highlight-box"><h3>הגישה שלנו</h3><p>השילוב של בקיאות מקצועית רחבה, ניסיון רב שנים ונחישות הצוות — יחד עם אמונה כי כל לקוח ראוי למיצוי זכויותיו ולפיצוי מרבי — יוצר את הקומבינציה למטרת השגת תוצאות אופטימליות בכל תיק.</p></AnimatedSection>
          <AnimatedSection><h2>מחלקות ייעודיות</h2><p>המשרד מתחלק למחלקות ייעודיות המספקות טיפול אופטימלי עם ייעוץ פרטני, ליווי בוועדות רפואיות והשגת פיצויים כספיים בדרך המהירה והיעילה ביותר.</p></AnimatedSection>
          <AnimatedSection className="info-card"><h3>ייעוץ ראשוני חינם</h3><p>נשמח לשמוע ולייעץ. <a href="tel:049923557" style={{ color: 'var(--gold)', fontWeight: 700 }}>04-9923557</a></p></AnimatedSection>
        </div>
      </section>
      <CtaBand />
    </PageTransition>
  )
}
