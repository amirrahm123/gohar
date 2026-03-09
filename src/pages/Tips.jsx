import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import CtaBand from '../components/CtaBand'
import { StaggerParent, StaggerItem } from '../components/StaggerChildren'

const tips = [
  { title: '1. פנו מיד לייעוץ משפטי', text: 'מכיוון שפיצויי נפגעי תאונה תלוי בגורמים רבים, הדבר הראשון והחשוב ביותר הוא ליצור קשר מידי עם משרדנו ולשוחח עם עורך דין מתמחה בנזיקין. הייעוץ הראשוני ניתן ללא עלות.' },
  { title: '2. בדקו את מסמכי השחרור מבית החולים', text: 'אם בעקבות תאונה התפניתם לבית חולים — יש לשים לב שבית החולים כותב את נסיבות התאונה בגיליון השחרור בהתאם למה שקרה בפועל. ודאו שהגרסה תואמת את האירוע.' },
  { title: '3. תעדו כל ביקור רפואי', text: 'יש לשים לב בכל ביקור אצל הרופא כי הרופא כותב את כל הפגיעות מהן אתם סובלים. תיעוד מדויק ומפורט מהיום הראשון הוא קריטי לחישוב הפיצויים.' },
  { title: '4. שמרו על הרישומים הרפואיים', text: 'אחד הפרמטרים לפיצויי נפגע היא הסתמכות על רישומים רפואיים המצויים בתיק הרפואי שלכם. תיעוד הרופא משפיע ישירות על חישוב הפיצויים.' },
  { title: '6. בדקו ביטוחים פרטיים', text: 'בדקו אם יש ברשותכם פוליסת ביטוח פרטית והודיעו לעורכי הדין שלכם. ייתכן שיש לכם פוליסות ביטוח נוספות שמזכות אתכם בפיצוי משמעותי.' },
  { title: '7. התייעצו לפני שאתם פועלים', text: 'מכיוון שכל מקרה ומקרה לגופו — בכל התלבטות או שאלה, עדיף לפנות לעורכי הדין המנהלים את התיק שלכם במקום לסכן את התביעה.' },
]

export default function Tips() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'חזון המשרד', to: '#' }, { label: 'טיפים לנפגע' }]} />
      <PageHero label="טיפים לנפגע" title='7 דברים <em>שחשוב לדעת</em> אחרי תאונה' subtitle="מכיוון שפיצויי נפגעי תאונה תלויים בגורמים רבים — הנה הטיפים החשובים ביותר שלנו." showButtons={false} />
      <section className="content-section">
        <div className="content-container">
          <StaggerParent>
            {tips.map((tip, i) => (
              <StaggerItem key={i}>
                <h2>{tip.title}</h2>
                <p>{tip.text}</p>
              </StaggerItem>
            ))}
          </StaggerParent>

          <AnimatedSection className="highlight-box" delay={0.2}>
            <h3>5. אל תמלאו טפסי ביטוח לאומי לבד</h3>
            <p>בתאונת עבודה, <strong>לעולם</strong> אל תמלאו טפסים לבד ואל תיתנו למקום העבודה למלא עבורכם ללא הדרכת עורך דין. טעויות בטפסים יכולות לפגוע בתביעה שלכם.</p>
          </AnimatedSection>

          <AnimatedSection className="info-card" delay={0.3}>
            <h3>ייעוץ ראשוני חינם</h3>
            <p>נפגעתם? פנו אלינו ללא עלות וללא התחייבות. <a href="tel:049923557" style={{ color: 'var(--gold)', fontWeight: 700 }}>04-9923557</a></p>
          </AnimatedSection>
        </div>
      </section>
      <CtaBand />
    </PageTransition>
  )
}
