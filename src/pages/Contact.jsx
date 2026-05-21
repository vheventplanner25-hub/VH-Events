import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    query: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let err = '';
    if (name === 'firstName') {
      if (!value.trim()) err = 'First name is required.';
      else if (value.trim().length < 2) err = 'First name must be at least 2 characters.';
    }
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = 'Email is required.';
      else if (!emailPattern.test(value.trim())) err = 'Please enter a valid email address.';
    }
    if (name === 'phone') {
      const phonePattern = /^[0-9]{10,15}$/;
      if (!value.trim()) err = 'Phone number is required.';
      else if (!phonePattern.test(value.trim())) err = 'Please enter a valid phone number (10-15 digits).';
    }
    if (name === 'query') {
      if (!value.trim()) err = 'Query description is required.';
      else if (value.trim().length < 10) err = 'Query must be at least 10 characters long.';
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) tempErrors[key] = err;
    });

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
    } else {
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        query: ''
      });
      setErrors({});
      // Auto-clear success banner after 6s
      setTimeout(() => setIsSubmitted(false), 6000);
    }
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Top Banner */}
      <section className="contact-header-section">
        <div className="premium-container text-center">
          <span className="section-label">Get in Touch</span>
          <h1 className="contact-main-title">Let’s Start Planning Your Next Event</h1>
          <p className="contact-main-subtitle">We would love to hear about your upcoming occasion. Drop us a message for free consultations and detailed quotes.</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-content-section premium-container">
        <div className="contact-layout-grid">

          {/* Left Form Column */}
          <div className="contact-form-column glass-panel">
            <h2>Send Inquiry</h2>
            {isSubmitted ? (
              <div className="success-submission-card">
                <CheckCircle size={44} className="success-check" />
                <h3>Inquiry Submitted Successfully!</h3>
                <p>Thank you for reaching out to VH Events. A member of our design and planning team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-contact-form" noValidate>
                {/* Name */}
                <div className="form-group-custom">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name..."
                    className={errors.firstName ? 'input-error' : ''}
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                {/* Email */}
                <div className="form-group-custom">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address..."
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="form-group-custom">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number..."
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                {/* Query */}
                <div className="form-group-custom">
                  <label htmlFor="query">Add your query</label>
                  <textarea
                    id="query"
                    name="query"
                    rows="4"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Describe your event date, theme, and requirements..."
                    className={errors.query ? 'input-error' : ''}
                  ></textarea>
                  {errors.query && <span className="error-text">{errors.query}</span>}
                </div>

                <button type="submit" className="btn-gold form-submit-btn">
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Details Column */}
          <div className="contact-details-column">
            {/* Quick Contact Cards */}
            <div className="details-cards-grid">
              {/* Card WhatsApp */}
              <a href="https://wa.me/917066670417" target="_blank" rel="noopener noreferrer" className="details-card glass-panel whatsapp-hover">
                <MessageSquare className="detail-icon wa" size={24} />
                <div className="detail-info">
                  <h4>WhatsApp</h4>
                  <p>+91 7066670417</p>
                </div>
              </a>

              {/* Card Calls */}
              <div className="details-card glass-panel">
                <Phone className="detail-icon phone-c" size={24} />
                <div className="detail-info">
                  <h4>Call Coordinates</h4>
                  <h2>Harshal Patil</h2>
                  <p className="spaced-p"><a href="tel:9588626847">9588626847</a></p>
                  <h2>Vansh Rajput</h2>
                  <p className="spaced-p"><a href="tel:7261923235">7261923235</a></p>
                </div>
              </div>

              {/* Card Emails */}
              <div className="details-card glass-panel">
                <Mail className="detail-icon mail-c" size={24} />
                <div className="detail-info">
                  <h4>Email Support</h4>
                  <p className="spaced-p"><a href="mailto:vh.eventplanner25@gmail.com">vh.eventplanner25@gmail.com</a></p>
                  <p><a href="mailto:vh.eventsplanner25@gmail.com">vh.eventsplanner25@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* Office & Map Box */}
            <div className="office-location-card glass-panel">
              <div className="office-header">
                <MapPin className="detail-icon map-c" size={22} />
                <h3>Office Location</h3>
              </div>
              <p>Shri Sadguru Heights, Pune, Maharashtra, India.</p>

              <div className="map-iframe-container">
                <iframe
                  title="VH Events Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002.3679496173135!2d73.83778142659526!3d18.46386057995143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29599c8e75171%3A0x10107854a2bc2329!2sShri%20SADGURU%20HEIGHTS!5e0!3m2!1sen!2sin!4v1746878980599!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .contact-page {
          padding-bottom: 80px;
        }

        /* Header */
        .contact-header-section {
          padding: 80px 24px 40px;
        }

        .contact-main-title {
          font-size: 50px;
          line-height: 1.1;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #ffffff 0%, var(--primary-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-main-subtitle {
          color: var(--text-muted);
          max-width: 650px;
          margin: 0 auto;
          font-size: 16px;
        }

        /* Layout Grid */
        .contact-content-section {
          padding: 20px 24px;
        }

        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (min-width: 960px) {
          .contact-layout-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }

        /* Form styling */
        .contact-form-column {
          padding: 40px;
          border-radius: 16px;
        }

        .contact-form-column h2 {
          font-size: 26px;
          color: var(--primary-gold);
          margin-bottom: 30px;
          font-family: var(--font-sans);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .premium-contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group-custom {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group-custom label {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 13px;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group-custom input,
        .form-group-custom textarea {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-gold);
          border-radius: 8px;
          padding: 14px 18px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 15px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group-custom input::placeholder,
        .form-group-custom textarea::placeholder {
          color: #576574;
        }

        .form-group-custom input:focus,
        .form-group-custom textarea:focus {
          border-color: var(--primary-gold);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 15px rgba(252, 187, 87, 0.1);
        }

        .form-group-custom input.input-error,
        .form-group-custom textarea.input-error {
          border-color: rgba(239, 68, 68, 0.5);
        }

        .error-text {
          color: #ef4444;
          font-size: 12px;
          margin-top: 2px;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px;
          margin-top: 10px;
        }

        /* Success Card */
        .success-submission-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
          animation: fadeInUp 0.5s ease;
        }

        .success-check {
          color: var(--primary-gold);
          margin-bottom: 24px;
          animation: goldPulse 2s infinite;
        }

        .success-submission-card h3 {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .success-submission-card p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          max-width: 420px;
        }

        /* Right Column Contacts */
        .contact-details-column {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .details-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .details-card {
          padding: 24px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
        }

        .whatsapp-hover:hover {
          border-color: #25d366;
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.15);
        }

        .detail-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-gold);
        }

        .detail-icon.wa { color: #25d366; background: rgba(37, 211, 102, 0.05); }
        .detail-icon.phone-c { color: var(--primary-gold); background: rgba(252, 187, 87, 0.05); }
        .detail-icon.mail-c { color: #74b9ff; background: rgba(116, 185, 255, 0.05); }
        .detail-icon.map-c { color: #ff7675; background: rgba(255, 118, 117, 0.05); }

        .detail-info h4 {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 15px;
          color: var(--primary-gold);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .detail-info p {
          color: var(--text-muted);
          font-size: 14px;
        }

        .detail-info a {
          color: inherit;
        }

        .detail-info a:hover {
          color: var(--primary-gold);
        }

        .spaced-p {
          margin-bottom: 4px;
        }

        /* Office & Map */
        .office-location-card {
          padding: 30px;
          border-radius: 16px;
        }

        .office-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .office-header h3 {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .office-location-card p {
          color: var(--text-muted);
          font-size: 14px;
          margin-bottom: 24px;
        }

        .map-iframe-container {
          width: 100%;
          height: 250px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border-gold);
        }

        .map-iframe-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 768px) {
          .contact-main-title {
            font-size: 34px;
          }
          .contact-form-column {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
