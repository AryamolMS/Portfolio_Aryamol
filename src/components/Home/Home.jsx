import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Home/About';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skill';
import Projects from '../Projects/Projects';
import Education from '../education/Education';
import './Home.css';

function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-dot" />
              Available for internships &amp; roles
            </div>

            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <em>Aryamol</em> M S
            </h1>
            <h2 className="hero-role">MERN Stack Developer</h2>
            <p className="hero-desc">
              Building full-stack web applications across security, logistics,
              and social service domains. Trained at Luminar Technolab, Kochi.
            </p>

            <div className="hero-ctas">
              <Link to="/projects" className="btn-primary-custom">See My Work</Link>
              <a
                href="https://drive.google.com/file/d/1ZGXYwKk5iKtS0Zpu4qmWd_oe_RAE6QYH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-custom"
              >
                Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/aryamol-m-s-074220275/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <i className="fa-brands fa-linkedin-in" /> LinkedIn
              </a>
              <a
                href="https://github.com/AryamolMS"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <i className="fa-brands fa-github" /> GitHub
              </a>
              <a href="mailto:aryamolms02@gmail.com" className="social-pill">
                <i className="fa-solid fa-envelope" /> Email
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects built</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">1yr</span>
                <span className="stat-label">Training</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">MCA</span>
                <span className="stat-label">Pursuing</span>
              </div>
            </div>

            <div className="hero-info-card">
              <div className="info-icon"><i className="fa-solid fa-layer-group" /></div>
              <div>
                <div className="info-title">MERN Stack</div>
                <div className="info-sub">MongoDB · Express · React · Node</div>
              </div>
            </div>

            <div className="hero-info-card">
              <div className="info-icon"><i className="fa-solid fa-location-dot" /></div>
              <div>
                <div className="info-title">Kerala, India</div>
                <div className="info-sub">Open to remote &amp; on-site</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}

export default Home;