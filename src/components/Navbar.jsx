import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import brandLogo from '../assets/images/vhlogodesign.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Legals', path: '/legals' },
  ];

  return (
    <nav className={`navbar-root ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={brandLogo} alt="VH Events Logo" />
          <span>VH Events</span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-desktop-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/contact" className="btn-gold-nav">
              <Calendar size={16} />
              <span>Book Consultation</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="mobile-cta-li">
            <Link to="/contact" className="btn-gold-nav-mobile">
              <Calendar size={18} />
              <span>Book Consultation</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Inline styles for Navbar */}
      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .navbar-root.scrolled {
          height: 70px;
          background: rgba(10, 10, 12, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-gold);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .navbar-logo img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--primary-gold);
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover img {
          transform: rotate(15deg) scale(1.05);
        }

        .navbar-logo span {
          font-family: var(--font-serif);
          font-size: 22px;
          font-weight: 600;
          color: var(--primary-gold);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .navbar-desktop-menu {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-link-item {
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          position: relative;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-link-item:hover, .nav-link-item.active {
          color: var(--primary-gold);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-gold), var(--secondary-gold));
          transition: width 0.3s ease;
        }

        .nav-link-item:hover::after, .nav-link-item.active::after {
          width: 100%;
        }

        .btn-gold-nav {
          background: linear-gradient(135deg, var(--primary-gold) 0%, var(--dark-gold) 100%);
          color: var(--text-dark) !important;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 14px;
          padding: 8px 18px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 10px rgba(252, 187, 87, 0.2);
          transition: var(--transition-smooth);
        }

        .btn-gold-nav:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 15px rgba(252, 187, 87, 0.4);
        }

        .navbar-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--primary-gold);
          cursor: pointer;
        }

        .navbar-mobile-drawer {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(10, 10, 12, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow: hidden;
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 0px solid var(--border-gold);
        }

        .navbar-mobile-drawer.open {
          height: calc(100vh - 70px);
          border-bottom: 2px solid var(--primary-gold);
        }

        .navbar-mobile-drawer ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          padding: 40px 24px;
          list-style: none;
        }

        .mobile-nav-link {
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--primary-gold);
        }

        .mobile-cta-li {
          width: 100%;
          max-width: 280px;
          margin-top: 10px;
        }

        .btn-gold-nav-mobile {
          background: linear-gradient(135deg, var(--primary-gold) 0%, var(--dark-gold) 100%);
          color: var(--text-dark) !important;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          padding: 12px 24px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          box-shadow: 0 4px 15px rgba(252, 187, 87, 0.3);
        }

        @media (max-width: 850px) {
          .navbar-desktop-menu {
            display: none;
          }
          .navbar-mobile-toggle {
            display: block;
          }
          .navbar-root {
            height: 70px;
            background: rgba(10, 10, 12, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-gold);
          }
        }
      `}</style>
    </nav>
  );
}
