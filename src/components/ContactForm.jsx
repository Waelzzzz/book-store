import { useState } from 'react';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

/**
 * Controlled contact form with inline success confirmation.
 * Uses local state for field values and submission feedback.
 */
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Swap in a real API call here when a backend is available.
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <div className="contact-form">
      <h2>Send Us a Message</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >
            <option value="" disabled>Select a topic</option>
            <option value="Book Enquiry">Book Enquiry</option>
            <option value="Order & Delivery">Order &amp; Delivery</option>
            <option value="Events & Book Club">Events &amp; Book Club</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="form-submit">
          Send Message &rarr;
        </button>

        {submitted && (
          <div className="form-success" role="alert">
            ✓ Your message has been sent! We&apos;ll get back to you within one business day.
          </div>
        )}
      </form>
    </div>
  );
}
