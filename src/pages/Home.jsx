import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Lightbulb, Users, CheckCircle, Quote, Sparkles, Phone, ArrowRight, UserCheck } from 'lucide-react';
import "./Home.css";
import Review from './Review';



// Image imports
import abbyImage from '../assets/images/abby.jpg';
import aboutImg1 from '../assets/images/aboutimg1.avif';
import foundersImg from '../assets/images/founders.jpg';
import homeImg from '../assets/images/vhlogodesign.jpg';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [activePowerhouse, setActivePowerhouse] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const whyChooseUsData = [
    { icon: <Sparkles className="gold-icon" />, title: "250+ Events Organized", desc: "From dream destination weddings to corporate galas, we manage every detail." },
    { icon: <Target className="gold-icon" />, title: "Personalized Service", desc: "Tailored planning specifically designed to meet your unique desires." },
    { icon: <Lightbulb className="gold-icon" />, title: "Innovative Concepts", desc: "Creative and trend-setting designs for a truly stand-out celebration." },
    { icon: <Users className="gold-icon" />, title: "Strong Vendor Network", desc: "Only reliable, top-tier partners ensuring high quality and seamless execution." },
    { icon: <CheckCircle className="gold-icon" />, title: "End-to-End Management", desc: "From early brainstorming to post-event wrap-up – we handle it all." },
    { icon: <Award className="gold-icon" />, title: "Proven Track Record", desc: "Successful events with glowing praise and wonderful client memories." },
    { icon: <Users className="gold-icon" />, title: "100+ Clients", desc: "Trusted by prominent brands and elite families alike." },
    { icon: <Users className="gold-icon" />, title: "50,000+ Happy Guests", desc: "Creating warm, memorable, and premium experiences for every attendee." }
  ];

  const powerhouseMembers = [
    {
      name: "Harshal Patil",
      role: "Founder & Chief Executive",
      desc: "The visionary behind VH Events, steering overall brand concept, vendor alignment, and high-profile wedding orchestrations.",
      img: foundersImg,
    },
    {
      name: "Vansh Rajput",
      role: "Co-Founder & Operations Lead",
      desc: "Directs logistic flows, VIP shadow coordination, and guarantees flawless structural execution across massive venues.",
      img: foundersImg,
    }
  ];

  const reviews = [
    {
      name: "Shubham Chechani",
      role: "Wedding Client",
      quote: "VH Event Planner exceeded our expectations. Every detail was meticulously handled, the decor was breathtaking, and the outcome was exceptional."
    },
    {
      name: "Nikhil Oswal",
      role: "Corporate Gala Host",
      quote: "Professional, creative, and extremely responsive. VH made our annual corporate event completely seamless and highly successful."
    },
    {
      name: "Shubham Jain",
      role: "Family Event",
      quote: "Flawless execution and thoughtful coordination. VH made my brother's destination wedding stress-free and a truly memorable occasion for everyone!"
    },
    {
      name: "Tanvi ji",
      role: "Wedding Client",
      quote: "A heartfelt thank you to VH Event Planner for making Manali & Darpan’s wedding truly beautiful and memorable. 💍✨ Your amazing décor, smooth management, and attention to every detail gave our family memories we’ll cherish forever. Wishing you continued success ahead! 🌸"
    },
    {
      name: "Oswal Family",
      role: "Wedding Client",
      quote: "Dear Vansh, Harshal & Team, Thank you so much for your kind words and heartfelt wishes. We truly appreciate the effort, dedication, and creativity your entire team put into making the wedding celebrations so seamless and memorable. A big thank you once again for being such an important part of this special occasion."
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(10,10,12,0.95)), url(${abbyImage})` }}>
        <div className="hero-content">
          <span className="hero-badge"><Sparkles size={14} /> Welcome to Premium Celebrations</span>
          <h1 className="hero-title">
            VH <span className="gold-text-gradient">Events</span>
          </h1>
          <h3 className="hero-subtitle">Planning & Luxury Management</h3>
          <p className="hero-philosophy">
            "You have special occasion, and we have responsibility..."
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline-gold">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section premium-container" id="about">
        <div className="about-grid">
          {/* Collage Images */}
          <div className="about-collage">
            <div className="collage-box box1">
              <img src={aboutImg1} alt="Luxury Decor Setup" />
            </div>
            <div className="collage-box box2">
              <img src={foundersImg} alt="VH Events Founders" />
            </div>
            <div className="collage-box box3">
              <img src={homeImg} alt="Event Planning Design" />
            </div>
          </div>

          {/* About Copy */}
          <div className="about-details">
            <span className="section-label">Bespoke Experiences</span>
            <h2 className="section-title">Where Vision Meets Celebration</h2>
            <p className="about-paragraph highlight">
              VH Event Planner is a full-service event planning company specializing in high-profile Weddings, Corporate Galas, and elite Social Occasions.
            </p>
            <p className="about-paragraph">
              What sets us apart is our deep understanding of the emotional and strategic significance behind every occasion. We believe no two events are the same — that's why we craft bespoke setups that reflect your personality, values, or brand identity.
            </p>
            <p className="about-paragraph">
              From lavish destination weddings to high-stakes product launches, our dedication to excellence ensures that every aspect — from luxury decor and logistics to guest hospitality and vendor management — is handled flawlessly.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-line-premium" />

      {/* Why Choose Us */}
      <section className="why-section premium-container">
        <div className="section-header text-center">
          <span className="section-label">Outstanding Deliverables</span>
          <h2 className="section-title">Why Choose <span className="gold-text-gradient">VH Events?</span></h2>
          <p className="section-subtitle">We merge logistical precision with creative artistry to ensure a stress-free planning journey.</p>
        </div>

        <div className="why-grid">
          {whyChooseUsData.map((item, idx) => (
            <div className="why-card glass-panel" key={idx}>
              <div className="why-card-icon-container">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-line-premium" />

      {/* Powerhouse Team */}
      <section className="powerhouse-section premium-container" id="powerhouse">
        <div className="section-header text-center">
          <span className="section-label">The Architects of Joy</span>
          <h2 className="section-title">Meet Our <span className="gold-text-gradient">Powerhouse</span></h2>
          <p className="section-subtitle">Dedicated curators and project leads orchestrating spectacular milestones behind the scenes.</p>
        </div>

        <div className="powerhouse-layout">
          {powerhouseMembers.map((member, index) => (
            <div className="powerhouse-card glass-panel" key={index}>
              <div className="powerhouse-img-container">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="powerhouse-info">
                <span className="powerhouse-crown">👑</span>
                <h3>{member.name}</h3>
                <span className="powerhouse-role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-line-premium" />

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header section-header2 text-center">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">What Our <span className="gold-text-gradient">Clients Say</span></h2>
        </div>

        <Review />
      </section>

      {/* Hero CTA banner */}
      <section className="cta-banner-section">
        <div className="premium-container cta-banner-content glass-panel">
          <Sparkles className="cta-sparkle" size={32} />
          <h2>Ready to Plan Your Next Grand Event?</h2>
          <p>Let's collaborate to make your next wedding, corporate gala, or private gathering completely unforgettable. Book a free consultation today!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-gold">
              <Phone size={16} /> Contact Our Team
            </Link>
            <Link to="/legals" className="btn-outline-gold">
              <UserCheck size={16} /> Management Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
