import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';

/**
 * Contact page — mirrors contact.html.
 * Left column: address, phone, email, store hours.
 * Right column: ContactForm component.
 */
export default function Contact() {
  return (
    <>
      <PageBanner
        title="Visit & Contact Us"
        subtitle="We'd love to see you in store — or answer any question you have."
        breadcrumbLabel="Contact"
      />

      <section className="contact-section">
        <div className="contact-inner">
          {/* ── Left: contact info ── */}
          <div className="contact-info">
            <h2>Find Us</h2>
            <p>
              Drop in during opening hours, give us a call, or use the form to
              send us a message. We reply to all enquiries within one business day.
            </p>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">📍</div>
              <div className="info-text">
                <strong>Store Address</strong>
                <span>12 Elm Street, Downtown District, New York, NY 10001</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">📞</div>
              <div className="info-text">
                <strong>Phone</strong>
                <span>+1 (555) 012-3456</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">✉</div>
              <div className="info-text">
                <strong>Email</strong>
                <span>hello@readingnook.com</span>
              </div>
            </div>

            <div className="store-hours">
              <h4>🕐 Store Hours</h4>
              <div className="hours-row">
                <span>Monday – Wednesday</span><span>9am – 7pm</span>
              </div>
              <div className="hours-row">
                <span>Thursday – Friday</span><span>9am – 8pm</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span><span>10am – 8pm</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span><span>11am – 6pm</span>
              </div>
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
