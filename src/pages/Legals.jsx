import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShieldCheck, FileText, UserCheck, Lock, ArrowRight, HelpCircle } from 'lucide-react';

export default function Legals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'client';

  const tabs = [
    { id: 'client', label: 'Client Agreement', icon: <FileText size={18} /> },
    { id: 'management', label: 'Management Terms', icon: <UserCheck size={18} /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <Lock size={18} /> },
    { id: 'security', label: 'Security Policy', icon: <ShieldCheck size={18} /> }
  ];

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  return (
    <div className="legals-page animate-fade-in animate-fade-in-up">
      {/* Top Header */}
      <section className="legals-header-section">
        <div className="premium-container text-center">
          <span className="section-label">VH Events Transparency</span>
          <h1 className="legals-main-title">Legal & Security Hub</h1>
          <p className="legals-main-subtitle">Read our terms of booking, management guidelines, and privacy security safeguards.</p>
        </div>
      </section>

      {/* Main Tab Layout */}
      <section className="legals-content-section premium-container">
        <div className="legals-dashboard-grid">
          
          {/* Sidebar Tabs */}
          <div className="legals-sidebar glass-panel">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`sidebar-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
            <div className="sidebar-decor-card text-center">
              <HelpCircle size={24} className="gold-icon mb-2" />
              <h5>Need Clarification?</h5>
              <p>Have questions about our agreements?</p>
              <Link to="/contact" className="btn-gold sidebar-cta-btn">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Document Content Display */}
          <div className="legals-doc-display glass-panel">
            
            {/* Tab: Client Agreement */}
            {activeTab === 'client' && (
              <div className="document-container">
                <div className="doc-header">
                  <FileText className="gold-icon" size={28} />
                  <h2>Client Agreement Terms</h2>
                </div>
                <p className="doc-desc-para">Please review our booking and coordination terms carefully prior to locking in your event arrangements.</p>
                
                <ol className="premium-ordered-list">
                  <li>
                    <strong>Booking Confirmation:</strong>
                    <p>All event bookings are subject to availability. Bookings are confirmed valid only upon receipt of an advance deposit or signed contract, whichever is applicable.</p>
                  </li>
                  <li>
                    <strong>Event Planning Scope:</strong>
                    <p>VH Events will deliver services strictly according to consultation agreements and the finalized list of services. Additional requests or adjustments during planning will be treated as extra work and may attract separate charges.</p>
                  </li>
                  <li>
                    <strong>Client Responsibility:</strong>
                    <p>The client is responsible for supplying prompt, clear specifications regarding guest count, date details, and venue clearances. Adequate setup and teardown access time windows at the chosen venue must be guaranteed.</p>
                  </li>
                  <li>
                    <strong>Payment Policy:</strong>
                    <p>A minimum advance of 50% is required to initiate design and vendor booking. The remaining balance must be paid 1 day prior to the scheduled occasion, unless explicitly agreed in writing otherwise.</p>
                  </li>
                  <li>
                    <strong>Cancellations & Refunds:</strong>
                    <p>In the event of cancellation initiated by the client:</p>
                    <ul className="premium-nested-list">
                      <li>Before 15 days of event: 70% refund of the advance deposit.</li>
                      <li>Within 7–14 days of event: 40% refund of the advance deposit.</li>
                      <li>Less than 7 days: No refund of the advance deposit.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Force Majeure:</strong>
                    <p>VH Events shall not be held liable for delayed or cancelled services stemming from acts of nature, pandemics, government restrictions, or extreme incidents beyond reasonable control.</p>
                  </li>
                  <li>
                    <strong>Photography & Promotion:</strong>
                    <p>By engaging with VH Events, the client gives consent to capture and utilize event media (photos/videos) for brand promotional purposes, unless a denial is submitted in writing prior to the event date.</p>
                  </li>
                  <li>
                    <strong>Damage Liability:</strong>
                    <p>The client holds full responsibility for any breakages or damage to decor structures, custom prop settings, or hired items caused by guests, venue managers, or invitees.</p>
                  </li>
                  <li>
                    <strong>Timely Communication:</strong>
                    <p>To assure a seamless logistical experience, the client agrees to communicate promptly in response to queries, design signoffs, and budget updates shared by VH coordinators.</p>
                  </li>
                  <li>
                    <strong>Final Agreement:</strong>
                    <p>Proceeding with the booking payment signifies that the client accepts and is legally bound by all terms listed above.</p>
                  </li>
                </ol>
              </div>
            )}

            {/* Tab: Management Terms */}
            {activeTab === 'management' && (
              <div className="document-container">
                <div className="doc-header">
                  <UserCheck className="gold-icon" size={28} />
                  <h2>Management Profile Agreement</h2>
                </div>
                <p className="doc-desc-para">For coordinators, shadows, and logistical directors joining the VH Event Planners Management Network.</p>
                
                <ol className="premium-ordered-list">
                  <li>
                    <strong>Truthfulness of Information:</strong>
                    <p>You confirm that all personal and professional details supplied are completely accurate. Supplying falsified info leads to immediate dismissal from our project network.</p>
                  </li>
                  <li>
                    <strong>Consent to Contact:</strong>
                    <p>You grant VH Event Planners consent to contact you via telephone calls, WhatsApp messages, or emails concerning immediate event requirements, team updates, or slot details.</p>
                  </li>
                  <li>
                    <strong>Use of Submitted Information:</strong>
                    <p>Your details (name, photo, department coordinates, and experience metrics) will be stored securely for selecting coordinators and may be partially showcased on our client-facing portal upon shortlist.</p>
                  </li>
                  <li>
                    <strong>Professional On-site Conduct:</strong>
                    <p>While representing VH Events on location, you agree to show up punctually, maintain cooperative teamwork, and treat clients, family members, and venue staff with total respect.</p>
                  </li>
                  <li>
                    <strong>Confidentiality (Non-Disclosure):</strong>
                    <p>You may acquire access to sensitive family budgets, sponsor deals, or celebrity coordinates. You agree to hold all details strictly confidential and never share them outside VH Events.</p>
                  </li>
                  <li>
                    <strong>Event Payments & Payouts:</strong>
                    <p>Work compensations are settled based on prior agreement for each event. To receive full payout, coordinators must complete their assigned duties successfully and share valid UPI/bank details promptly.</p>
                  </li>
                  <li>
                    <strong>Termination of Agreement:</strong>
                    <p>VH Event Planners reserves the right to terminate association if a network member fails to adhere to professional standards, ignores assignments, or behaves unprofessionally.</p>
                  </li>
                </ol>
              </div>
            )}

            {/* Tab: Privacy Policy */}
            {activeTab === 'privacy' && (
              <div className="document-container">
                <div className="doc-header">
                  <Lock className="gold-icon" size={28} />
                  <h2>Privacy & Data Policy</h2>
                </div>
                <p className="doc-desc-para">This Privacy Policy governs the ways in which VH Event Planners handles, safeguards, and protects your information.</p>
                
                <ol className="premium-ordered-list">
                  <li>
                    <strong>Information We Collect:</strong>
                    <p>We collect essential personal information (names, emails, telephone numbers) alongside event details (date, guest count, hotel bookings, preferences) to plan your occasion.</p>
                  </li>
                  <li>
                    <strong>How We Use Your Data:</strong>
                    <p>Collected details are strictly used to coordinate venue bookings, finalize schedules, send event reminders, and enhance our digital customer services.</p>
                  </li>
                  <li>
                    <strong>Zero-Sale Commitment:</strong>
                    <p>We do not sell, rent, or distribute personal user information to third-party marketing companies. Data is only shared with verified event vendors and coordinators solely under binding confidentiality terms.</p>
                  </li>
                  <li>
                    <strong>Cookies & Tracking:</strong>
                    <p>Our website utilizes local cookies to optimize performance, track page analytics, and remember custom UI preferences. You can adjust cookies inside browser setups.</p>
                  </li>
                  <li>
                    <strong>Robust Data Protection:</strong>
                    <p>We establish standard digital security protocols to prevent unauthorized database entries, modifications, disclosures, or data leaks.</p>
                  </li>
                  <li>
                    <strong>Third-Party Hyperlinks:</strong>
                    <p>Our site links to social coordinates (Instagram, maps). We do not assume responsibility for data protocols followed by these external websites.</p>
                  </li>
                  <li>
                    <strong>Your Data Rights:</strong>
                    <p>You maintain the right to inspect, edit, or request complete removal of your email, telephone, or name entries in our files at any point by contacting support.</p>
                  </li>
                  <li>
                    <strong>Policy Evolution:</strong>
                    <p>This privacy document is updated periodically. New iterations will be dated and posted openly on this digital hub.</p>
                  </li>
                  <li>
                    <strong>Consent Sign-off:</strong>
                    <p>Submitting query forms or booking events implies that you completely accept and consent to the data rules in this Privacy Policy.</p>
                  </li>
                </ol>
              </div>
            )}

            {/* Tab: Security Policy */}
            {activeTab === 'security' && (
              <div className="document-container">
                <div className="doc-header">
                  <ShieldCheck className="gold-icon" size={28} />
                  <h2>Security Policy</h2>
                </div>
                <p className="doc-desc-para">Our technical framework safeguards the data integrity and digital interactions of our clients and network coordinators.</p>
                
                <ol className="premium-ordered-list">
                  <li>
                    <strong>Data Encryption:</strong>
                    <p>All network entries and form data are handled and transmitted using secure protocols and standard SSL encryption to stop intercept attempts.</p>
                  </li>
                  <li>
                    <strong>Strict Access Controls:</strong>
                    <p>Database logs are secured. Only verified project leads are granted permissions to review details on a strictly need-to-know basis.</p>
                  </li>
                  <li>
                    <strong>Secure Cloud Infrastructures:</strong>
                    <p>Our digital coordinates are deployed on trusted, firewalled cloud hosting systems, constantly monitored for unauthorized breach patterns.</p>
                  </li>
                  <li>
                    <strong>Hashing Protection:</strong>
                    <p>Internal network logins and user security passwords are processed using robust cryptographic hashing algorithms. We never store credentials in clear readable text.</p>
                  </li>
                  <li>
                    <strong>Regular Systems Auditing:</strong>
                    <p>We carry out periodic automated testing and manual audits to locate network weaknesses and bolster firewall configurations.</p>
                  </li>
                  <li>
                    <strong>Defensive Incident Response:</strong>
                    <p>In case of data breaches, we maintain an action plan to isolate issues, patch server holes, and alert affected users immediately.</p>
                  </li>
                  <li>
                    <strong>Vetted Third-party Integrations:</strong>
                    <p>Every digital utility (e.g., mail dispatchers, hosting providers) used by our systems is selected based on stringent data security compliance.</p>
                  </li>
                  <li>
                    <strong>User Security Advice:</strong>
                    <p>Coordinators are responsible for protecting their access codes and closing browsing tabs when planning on public computer systems.</p>
                  </li>
                  <li>
                    <strong>Continuous Security Upgrades:</strong>
                    <p>We consistently audit and upgrade our system settings to keep your data safe against modern cybersecurity threats.</p>
                  </li>
                </ol>
              </div>
            )}

          </div>

        </div>
      </section>

      <style>{`
        .legals-page {
          padding-bottom: 80px;
        }

        /* Header */
        .legals-header-section {
          padding: 80px 24px 40px;
        }

        .legals-main-title {
          font-size: 50px;
          line-height: 1.1;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #ffffff 0%, var(--primary-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .legals-main-subtitle {
          color: var(--text-muted);
          max-width: 650px;
          margin: 0 auto;
          font-size: 16px;
        }

        /* Dashboard Grid Layout */
        .legals-content-section {
          padding: 20px 24px;
        }

        .legals-dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }

        @media (min-width: 900px) {
          .legals-dashboard-grid {
            grid-template-columns: 0.8fr 2.2fr;
          }
        }

        /* Sidebar Tabs */
        .legals-sidebar {
          padding: 24px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-tab-btn {
          width: 100%;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-muted);
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 15px;
          transition: var(--transition-smooth);
        }

        .sidebar-tab-btn:hover {
          color: var(--primary-gold);
          background: rgba(252, 187, 87, 0.03);
          border-color: rgba(252, 187, 87, 0.1);
        }

        .sidebar-tab-btn.active {
          background: rgba(252, 187, 87, 0.08);
          border-color: var(--primary-gold);
          color: var(--primary-gold);
          font-weight: 600;
          box-shadow: 0 0 15px rgba(252, 187, 87, 0.05);
        }

        .sidebar-decor-card {
          margin-top: 30px;
          padding: 24px 16px;
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid var(--border-gold);
        }

        .sidebar-decor-card h5 {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .sidebar-decor-card p {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .sidebar-cta-btn {
          width: 100%;
          justify-content: center;
          padding: 10px 18px;
          font-size: 13px;
        }

        /* Doc Display styling */
        .legals-doc-display {
          padding: 48px;
          border-radius: 16px;
          min-height: 500px;
        }

        .document-container {
          animation: fadeIn 0.4s ease;
        }

        .doc-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          border-bottom: 1.5px solid var(--border-gold);
          padding-bottom: 16px;
        }

        .doc-header h2 {
          font-size: 28px;
          font-family: var(--font-sans);
          font-weight: 600;
        }

        .doc-desc-para {
          color: var(--text-primary);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 16px;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .premium-ordered-list {
          list-style: none;
          counter-reset: doc-counter;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .premium-ordered-list > li {
          position: relative;
          padding-left: 44px;
          counter-increment: doc-counter;
        }

        .premium-ordered-list > li::before {
          content: counter(doc-counter);
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(252, 187, 87, 0.06);
          border: 1px solid var(--primary-gold);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--primary-gold);
        }

        .premium-ordered-list strong {
          font-family: var(--font-sans);
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          display: block;
          margin-bottom: 6px;
        }

        .premium-ordered-list p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .premium-nested-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 10px;
          padding-left: 12px;
          border-left: 2px solid var(--border-gold);
        }

        .premium-nested-list li {
          color: var(--text-muted);
          font-size: 14px;
          position: relative;
          padding-left: 16px;
        }

        .premium-nested-list li::before {
          content: '•';
          color: var(--primary-gold);
          position: absolute;
          left: 0;
          top: 0;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .legals-main-title {
            font-size: 34px;
          }
          .legals-doc-display {
            padding: 24px;
          }
          .doc-header h2 {
            font-size: 22px;
          }
          .premium-ordered-list > li {
            padding-left: 36px;
          }
        }
      `}</style>
    </div>
  );
}
