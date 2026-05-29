import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/',           label: 'Home' },
    { to: '/about',      label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills',     label: 'Skills' },
    { to: '/education',  label: 'Education' },
    { to: '/projects',   label: 'Projects' },
  ];

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="nav-logo">AM.</Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1oQajhHtGrpyn8myyPF8yH0oeMy88p17-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="nav-cv"
          >
            Resume
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;