import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, Building, PartyPopper, Palette, Layers, ChevronDown, Check, ArrowRight } from 'lucide-react';
import './Services.css';

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
    },
  ];

  
    // {
    
    //   title: "Customized Service Packages",
    //   desc: ".",
    //   bullets: []
    // }

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
          <br />
          <Link to="/legals?tab=management" className="btn-outline-gold mt-2 ">
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

    
    </div>
  );
}
