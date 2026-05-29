import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education'];
  const services = ['Web Development', 'Frontend Development', 'Backend Development', 'REST API Design'];

  return (
    <footer className="footer">
      {/* Contact CTA */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-orb" />
          <p className="eyebrow" style={{ textAlign: 'center' }}>Open to opportunities</p>
          <h2 className="footer-cta-title">
            Let's build something <em>great together</em>
          </h2>
          <p className="footer-cta-sub">
            Seeking entry-level developer or internship roles. Always open to a good conversation.
          </p>
          <div className="footer-cta-links">
            <a href="mailto:aryamolms02@gmail.com" className="cta-link">
              <i className="fa-solid fa-envelope" /> aryamolms02@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/aryamol-m-s-074220275/" target="_blank" rel="noreferrer" className="cta-link">
              <i className="fa-brands fa-linkedin-in" /> LinkedIn
            </a>
            <a href="https://github.com/AryamolMS" target="_blank" rel="noreferrer" className="cta-link">
              <i className="fa-brands fa-github" /> GitHub
            </a>
            <a href="tel:+919539196717" className="cta-link">
              <i className="fa-solid fa-phone" /> +91 95391 96717
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="footer-grid-wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">AM.</Link>
            <p className="footer-tagline">
              Passionate MERN stack developer crafting user-friendly web experiences from Kerala, India.
            </p>
            <p className="footer-location">
              <i className="fa-solid fa-location-dot" /> Kottayam, Kerala
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            {navLinks.map((l) => (
              <Link key={l} to={`/${l.toLowerCase() === 'home' ? '' : l.toLowerCase()}`} className="footer-link">
                <i className="fa-solid fa-arrow-right" /> {l}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            {services.map((s) => (
              <span key={s} className="footer-service">
                <i className="fa-solid fa-arrow-right" /> {s}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Aryamol M S · Personal Portfolio · Built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;