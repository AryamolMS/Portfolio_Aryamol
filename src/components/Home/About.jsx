import React from 'react';
import './About.css';

function About() {
 

  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
          {/* Text side */}
          <div className="about-body">
            <p className="eyebrow">Who I am</p>
            <h2 className="section-title">
              About <em>me</em>
            </h2>
            <p className="about-para">
              I am a passionate MERN stack web developer with a strong foundation
              in modern web technologies. With expertise in building robust and
              scalable web applications, I thrive on turning ideas into
              interactive, user-friendly experiences.
            </p>
            <p className="about-para">
              My journey has equipped me with proficiency in MongoDB, Express.js,
              React.js, and Node.js — plus hands-on experience creating RESTful
              APIs, integrating third-party services, and optimising application
              performance. I'm adept at front-end technologies including HTML,
              CSS, Bootstrap, and Material UI.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="hl-num">MCA</span>
                <span className="hl-label">Pursuing at GCE Cherthala</span>
              </div>
              <div className="highlight">
                <span className="hl-num">1yr</span>
                <span className="hl-label">Training at Luminar Technolab</span>
              </div>
              <div className="highlight">
                <span className="hl-num">Kerala</span>
                <span className="hl-label">Based in India</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;