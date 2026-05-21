import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowUpRight } from 'lucide-react';
import brandLogo from '../assets/images/homeimg.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Email is required.');
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setSuccess(true);
      setEmail('');
      // Simulate API call
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <footer className="footer-root">
      <div className="premium-container">
        {/* Brand Bar */}
        <div className="footer-brand-bar">
          <Link to="/" className="footer-logo">
            <img src={brandLogo} alt="VH Events Logo" />
            <span>VH Event Planner</span>
          </Link>
          <div className="footer-social-icons">
            <a href="https://wa.me/917066670417" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
            <a href="https://www.instagram.com/vh_event_planner/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <hr className="hr-line-premium" style={{ margin: '40px 0' }} />

        {/* Links Columns */}
        <div className="footer-columns">
          {/* Col 1 */}
          <div className="footer-col">
            <h3>Info</h3>
            <ul className="footer-links">
              <li>
                <Link to="/#about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/services#management">Management Roles</Link>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/#reviews">Client Reviews</Link>
              </li>
              <li>
                <Link to="/#powerhouse">Our Powerhouse</Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li>
                <Link to="/legals?tab=client">Client Agreement</Link>
              </li>
              <li>
                <Link to="/legals?tab=management">Management Agreement</Link>
              </li>
              <li>
                <Link to="/legals?tab=privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/legals?tab=security">Security Policy</Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col newsletter-col">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for event design ideas, helpful planning tips, and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? 'error' : ''}
                />
                <button type="submit" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </div>
              {error && <span className="newsletter-error">{error}</span>}
              {success && <span className="newsletter-success">Thank you for subscribing! ✨</span>}
            </form>
          </div>
        </div>

        <hr className="hr-line-premium" style={{ margin: '40px 0' }} />

        {/* Bottom Credits */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VH Event Planner. All rights reserved.</p>
          <p className="developer-tag">
            <span>Developed by @_dev.Pranav____</span>
            <a href="https://devpranav.onrender.com/" target="_blank" rel="noopener noreferrer" className="dev-link">
              Visit Website <ArrowUpRight size={14} />
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #060608;
          border-top: 1px solid var(--border-gold);
          padding: 80px 0 30px;
          margin-top: auto;
          position: relative;
        }

        .footer-brand-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .footer-logo img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1.5px solid var(--primary-gold);
          object-fit: cover;
        }

        .footer-logo span {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 600;
          color: var(--primary-gold);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .footer-social-icons {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-gold);
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          color: #000;
          transform: translateY(-3px);
        }

        .social-icon.whatsapp:hover {
          background: #25d366;
          border-color: #25d366;
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.4);
        }

        .social-icon.instagram:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285aeb 90%);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(214, 36, 159, 0.4);
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        @media (min-width: 900px) {
          .footer-columns {
            grid-template-columns: 1fr 1fr 1fr 2fr;
          }
        }

        .footer-col h3 {
          font-size: 18px;
          color: var(--primary-gold);
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-sans);
          font-weight: 600;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links li a {
          color: var(--text-muted);
          font-size: 15px;
          transition: var(--transition-fast);
        }

        .footer-links li a:hover {
          color: var(--primary-gold);
          padding-left: 4px;
        }

        .newsletter-col p {
          color: var(--text-muted);
          font-size: 14px;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .newsletter-form {
          position: relative;
        }

        .input-group {
          display: flex;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-gold);
          border-radius: 30px;
          overflow: hidden;
          padding: 4px;
          transition: var(--transition-smooth);
        }

        .input-group:focus-within {
          border-color: var(--primary-gold);
          box-shadow: 0 0 15px rgba(252, 187, 87, 0.1);
        }

        .newsletter-form input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          padding: 10px 16px;
          font-size: 14px;
        }

        .newsletter-form input.error {
          border-color: rgba(239, 68, 68, 0.5);
        }

        .newsletter-form button {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--primary-gold);
          border: none;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .newsletter-form button:hover {
          background: var(--secondary-gold);
          transform: scale(1.05);
        }

        .newsletter-error {
          color: #ef4444;
          font-size: 12px;
          display: block;
          margin-top: 8px;
          margin-left: 12px;
        }

        .newsletter-success {
          color: var(--primary-gold);
          font-size: 13px;
          display: block;
          margin-top: 8px;
          margin-left: 12px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          color: var(--text-muted);
          font-size: 13px;
        }

        .developer-tag {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dev-link {
          color: var(--primary-gold);
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-weight: 500;
        }

        .dev-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}
