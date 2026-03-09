import PageTransition from '../components/PageTransition'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <PageTransition>
      <Breadcrumb items={[{ label: 'צור קשר' }]} />
      <PageHero label="צור קשר" title='השאירו פרטים <em>ונחזור אליכם</em>' subtitle="ייעוץ ראשוני ללא עלות. מלאו את הטופס או התקשרו ישירות." showButtons={false} />
      <section className="sec">
        <div className="container">
          <div className="contact-layout">
            <AnimatedSection>
              <div className="office">
                <h4>סניף נהריה</h4>
                <p>הרצל 75, נהריה</p>
              </div>
              <div className="office">
                <h4>סניף פתח תקווה</h4>
                <p>אורי צבי גרינברג 7, פתח תקווה</p>
              </div>
              <div style={{ marginTop: 24 }}>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#128222;</div>
                  <a href="tel:049923557">04-9923557</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#128241;</div>
                  <a href="tel:0768870240">076-887-0240</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#128172;</div>
                  <a href="https://wa.me/972559752423" target="_blank" rel="noopener">055-975-2423 (וואטסאפ)</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#9993;</div>
                  <a href="mailto:office@gohar-adv.com">office@gohar-adv.com</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#128336;</div>
                  <span>א'-ה' 09:00-17:00</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
