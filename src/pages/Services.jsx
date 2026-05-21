import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, Building, PartyPopper, Palette, Layers, ChevronDown, Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const [openDept, setOpenDept] = useState(null);

  const toggleDept = (idx) => {
    if (openDept === idx) {
      setOpenDept(null);
    } else {
      setOpenDept(idx);
    }
  };

  const competencies = [
    { title: "Planning", desc: "Expertly handling event flow, logistics, budgets, vendors, and onsite event coordination." },
    { title: "Management", desc: "Comprehensive oversight ensuring smooth, stress-free event execution and absolute success." },
    { title: "Concept Designing", desc: "Crafting unique event experiences through creative visual design and immersive storytelling." },
    { title: "Production", desc: "Flawless execution of stage, sound, lighting, and custom fabrics with high precision." },
    { title: "Fulfillment", desc: "Enhancing sponsor and brand impact through tailored, experience-driven services." },
    { title: "Guest Engagement", desc: "Creating meaningful interactions and memorable moments for VIP and V-VIP attendees." }
  ];

  const mainServices = [
    {
      icon: <Briefcase size={28} />,
      title: "Event Planning & Management",
      desc: "From early blueprint concepts to final day execution, we craft seamless events that leave a lasting mark.",
      bullets: ["Venue selection & contract coordination", "Budget planning & logistics flows", "On-site supervisor alignment", "Primary vendor contract handling"]
    },
    {
      icon: <Heart size={28} />,
      title: "Luxury Weddings",
      desc: "Elegant, personalized, and breathtaking celebrations. We bring your fairytale love story to life.",
      bullets: ["Pre-wedding functions (Sangeet, Haldi, Engagement)", "Theme and custom decor conceptualization", "Bridal & groom shadow coordinator placement", "Exquisite destination wedding planning"]
    },
    {
      icon: <Building size={28} />,
      title: "Corporate Galas & Meets",
      desc: "Polished, purpose-driven professional events that reflect your brand identity and corporate core values.",
      bullets: ["Annual General Meetings & team building", "Conferences, forums, and seminars", "Bespoke product launch activations", "Award nights & VIP recognition galas"]
    },
    {
      icon: <PartyPopper size={28} />,
      title: "Social Gatherings & Parties",
      desc: "Celebrate life's precious milestones in grand style — stress-free, stunning, and unforgettable.",
      bullets: ["Baby showers & gender reveals", "Milestone birthdays & anniversary galas", "Private estate parties & dinners", "Warm family reunions"]
    },
    {
      icon: <Palette size={28} />,
      title: "Decor & Styling Production",
      desc: "We bring visual aesthetics and thematic styling to life, custom tailored to your exact creative tastes.",
      bullets: ["Premium table settings & furniture styling", "Custom backdrops, stage designs, and props", "Professional ambient lighting & architectural lights", "Floral styling & organic installations"]
    },
    {
      icon: <Layers size={28} />,
      title: "Customized Service Packages",
      desc: "Every event is unique. We tailor our logistical service combinations to suit your scope and budget.",
      bullets: ["Flexible value-driven planning options", "Bespoke service bundles", "Modular combinations", "Full-scale end-to-end setups"]
    }
  ];

  const managementDepts = [
    { title: "Hospitality", desc: "Manages guest welcome desks, hotel check-in/check-out concierge support, room tagging, and hampers placements in rooms." },
    { title: "Logistics", desc: "Coordinates airport and station pickups for guests, handles transport scheduling, and manages luxury shuttle flows for attendees." },
    { title: "RSVP", desc: "Manages guest lists, coordinates invitations, logs dietary preferences, and ensures an accurate headcount process prior to the event." },
    { title: "Shadows", desc: "Specially assigned personal shadow coordinates dedicated to key family members (bride, groom, and parents) for continuous onsite assistance." },
    { title: "Rituals", desc: "Maintains thorough arrangements for traditional, religious, and cultural activities including Ganesh Pujan, Haldi set, Baraat assembly, Fere, and Vidai." },
    { title: "Food & Beverage (F&B)", desc: "Conducts food menu selections, coordinates catering tastings, manages plate counts, and guarantees direct support to main family dining suites." },
    { title: "Production", desc: "Oversees physical venue layout, fabric installations, staging setups, table seating formats, and coordinates directly with tenting vendors." },
    { title: "Technical Coordination", desc: "Directs DJ sound rigs, coordinates microphones, lighting desks, LED wall overlays, special effects (SFX), and guarantees zero sound dropouts." },
    { title: "Vendor Management", desc: "Acts as the single point of contact for external artists, bands, emcees, choreographers, and handles setup slots." },
    { title: "VIP & Guest Management", desc: "Provides high-priority protocol, prioritized seating, private access coordinates, and celebrity handling for VIP, political, or corporate guests." },
    { title: "Security & Crowd Control", desc: "Establishes crowd management strategies, gate access security, stage barrier guards, and safeguards private VIP sectors." },
    { title: "Backstage Coordination", desc: "Orchestrates performance entries, cues lighting and screens, handles dancer properties, and aligns varmala entry countdowns." },
    { title: "Entertainment Coordination", desc: "Coordinates live program flow sheets, anchor script alignments, musical entry timings, and custom choreographies." },
    { title: "Itinerary & Hampering", desc: "Designs and circulates detailed hourly timelines for guests and vendors, and oversees the curation, room drop assembly, and delivery of welcome gifts." }
  ];

  const timelineSteps = [
    { id: "ZERO", title: "Inquiry & Consultation", desc: "Our team receives your inquiry through our website. We arrange an initial virtual or in-person consultation to map dates, primary requirements, and location targets." },
    { id: "ONE", title: "Detailed Discovery", desc: "We sit down with you to dive into your event vision, target guest count, aesthetic preferences, and budget boundary lines to set expectations." },
    { id: "TWO", title: "Concept & Proposal Design", desc: "Our design team crafts a custom event concept outline. We supply an initial visual proposal, rough budget estimates, and mood boards." },
    { id: "THREE", title: "Precision Event Planning", desc: "Upon sign-off, we map the detailed timeline. We begin vendor shortlisting (decor, F&B, sound), secure site contracts, and allocate budget blocks." },
    { id: "FOUR", title: "Finalization Session", desc: "We present the complete plan, vendor grid, layout schematics, and hourly schedule. We incorporate final edits and collect the advance payment." },
    { id: "FIVE", title: "Pre-Event Coordination", desc: "All bookings are locked. We compile logistics sheets, assign detailed staff roles, distribute timelines to vendors, and hold rehearsals." },
    { id: "SIX", title: "Flawless Event Execution", desc: "Onsite production directors and coordinators manage setup, transitions, timing cues, and guest services to guarantee a spectacular flow." },
    { id: "SEVEN", title: "Post-Event Wrap-up", desc: "Our logistics team oversees vendor teardown, inspects equipment removal, returns client personal items, conducts final settlements, and welcomes client feedback." }
  ];

  return (
    <div className="services-page animate-fade-in">
      {/* Page Header */}
      <section className="services-header-section">
        <div className="premium-container text-center">
          <span className="section-label">Luxury Standard</span>
          <h1 className="services-main-title">What We Bring To The Table…</h1>
          <p className="services-main-subtitle">A comprehensive suite of event production, concept curation, and execution management services.</p>
        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="competencies-section premium-container">
        <div className="competencies-grid">
          {competencies.map((comp, idx) => (
            <div className="comp-card glass-panel" key={idx}>
              <h3>{comp.title}</h3>
              <p>{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="main-services-section premium-container" id="services">
        <div className="section-header text-center">
          <span className="section-label">Our Service Catalog</span>
          <h2 className="section-title">Exclusive Service Verticals</h2>
          <p className="section-subtitle">Exquisite setups customized to create memories that linger for a lifetime.</p>
        </div>

        <div className="services-grid">
          {mainServices.map((service, idx) => (
            <div className="service-card glass-panel" key={idx}>
              <div className="service-icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-bullets">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <Check size={14} className="check-bullet" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-line-premium" />

      {/* Management Departments Accordion */}
      <section className="management-section premium-container" id="management">
        <div className="section-header text-center">
          <span className="section-label">Logistical Backbone</span>
          <h2 className="section-title">Management Specializations</h2>
          <p className="section-subtitle">Our dedicated operational departments ensure that every minute of your event is executed in perfect harmony.</p>
        </div>

        <div className="management-accordion-container">
          {managementDepts.map((dept, idx) => {
            const isOpen = openDept === idx;
            return (
              <div className={`accordion-item glass-panel ${isOpen ? 'active' : ''}`} key={idx}>
                <button className="accordion-trigger" onClick={() => toggleDept(idx)}>
                  <span className="accordion-title-text">{dept.title}</span>
                  <ChevronDown className={`accordion-chevron ${isOpen ? 'rotated' : ''}`} size={20} />
                </button>
                <div className="accordion-content" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                  <div className="accordion-inner">
                    <p>{dept.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="management-cta text-center">
          <p>Interested in joining our elite management network as a team coordinator?</p>
          <Link to="/legals?tab=management" className="btn-outline-gold mt-2">
            Read Network Terms <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <hr className="hr-line-premium" />

      {/* How We Work Timeline */}
      <section className="timeline-section-main premium-container">
        <div className="section-header text-center">
          <span className="section-label">Mastery in Process</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">A structured, elegant journey from initial imagination to post-event teardown.</p>
        </div>

        <div className="timeline-vertical-flow">
          {timelineSteps.map((step, idx) => (
            <div className="timeline-flow-node" key={idx}>
              <div className="node-dot-container">
                <div className="node-dot"></div>
                <div className="node-line"></div>
              </div>
              <div className="node-content glass-panel">
                <span className="node-id">{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .services-page {
          padding-bottom: 80px;
        }

        /* Services Header */
        .services-header-section {
          padding: 80px 24px 40px;
        }

        .services-main-title {
          font-size: 50px;
          line-height: 1.1;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #ffffff 0%, var(--primary-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-main-subtitle {
          color: var(--text-muted);
          max-width: 650px;
          margin: 0 auto;
          font-size: 16px;
        }

        /* Core Competencies Grid */
        .competencies-section {
          padding: 20px 24px 60px;
        }

        .competencies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .comp-card {
          padding: 30px;
          border-radius: 12px;
        }

        .comp-card h3 {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 600;
          color: var(--primary-gold);
          margin-bottom: 12px;
        }

        .comp-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        /* Services Verticals Grid */
        .main-services-section {
          padding: 60px 24px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
          margin-top: 50px;
        }

        .service-card {
          padding: 40px 30px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
        }

        .service-icon-box {
          background: rgba(252, 187, 87, 0.05);
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-gold);
          color: var(--primary-gold);
          margin-bottom: 24px;
          transition: var(--transition-smooth);
        }

        .service-card:hover .service-icon-box {
          background: var(--primary-gold);
          color: var(--text-dark);
        }

        .service-card h3 {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .service-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .service-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .service-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: var(--text-muted);
        }

        .check-bullet {
          color: var(--primary-gold);
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* Management Accordion styling */
        .management-section {
          padding: 60px 24px;
        }

        .management-accordion-container {
          max-width: 800px;
          margin: 45px auto 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          border-radius: 12px;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .accordion-item.active {
          border-color: var(--primary-gold);
        }

        .accordion-trigger {
          width: 100%;
          background: transparent;
          border: none;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .accordion-title-text {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: var(--transition-fast);
        }

        .accordion-trigger:hover .accordion-title-text {
          color: var(--primary-gold);
        }

        .accordion-chevron {
          color: var(--primary-gold);
          transition: transform 0.3s ease;
        }

        .accordion-chevron.rotated {
          transform: rotate(180deg);
        }

        .accordion-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-inner {
          padding: 0 24px 20px;
          border-top: 1px solid rgba(252, 187, 87, 0.05);
        }

        .accordion-inner p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .management-cta {
          margin-top: 40px;
          color: var(--text-muted);
          font-size: 15px;
        }

        /* How We Work Timeline */
        .timeline-section-main {
          padding: 60px 24px;
        }

        .timeline-vertical-flow {
          max-width: 800px;
          margin: 60px auto 0;
          position: relative;
          padding-left: 32px;
        }

        .timeline-vertical-flow::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(180deg, var(--primary-gold), transparent);
        }

        .timeline-flow-node {
          position: relative;
          margin-bottom: 32px;
        }

        .timeline-flow-node:last-child {
          margin-bottom: 0;
        }

        .node-dot-container {
          position: absolute;
          left: -32px;
          top: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .node-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 2px solid var(--primary-gold);
          box-shadow: 0 0 10px rgba(252, 187, 87, 0.5);
          z-index: 2;
        }

        .node-content {
          padding: 30px;
          border-radius: 16px;
          transition: var(--transition-smooth);
        }

        .node-id {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          color: var(--primary-gold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .node-content h3 {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .node-content p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-main-title {
            font-size: 34px;
          }
          .timeline-vertical-flow {
            padding-left: 20px;
          }
          .node-dot-container {
            left: -20px;
          }
          .node-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
