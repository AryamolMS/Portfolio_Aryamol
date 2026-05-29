import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    accent: 'green',
    icon: 'fa-solid fa-shield-halved',
    name: 'AI-Based Smart Home Security & Intrusion Detection',
    tech: 'Python · OpenCV · Face Recognition · Machine Learning',
    desc: 'Built a real-time face detection and recognition system for home security with sub-2s alert response time. Automated motion logging reduces manual surveillance dependency.',
    tags: ['Computer Vision', 'Machine Learning', 'Python', 'OpenCV'],
  },
  {
    id: 2,
    accent: 'pink',
    icon: 'fa-solid fa-warehouse',
    name: 'Warehouse Management System',
    tech: 'React.js · Django · MongoDB · REST APIs',
    desc: 'Automated inventory tracking, billing, and invoice generation. Built real-time analytics dashboards for stock monitoring and operational insights, reducing manual errors.',
    tags: ['React.js', 'Django', 'MongoDB', 'REST APIs'],
  },
  {
    id: 3,
    accent: 'amber',
    icon: 'fa-solid fa-handshake-angle',
    name: 'Senior Citizen Service Platform',
    tech: 'React.js · Material UI · Node.js · MongoDB',
    desc: 'Role-based platform (Admin, User, Provider) for booking senior citizen care services. Designed an accessible, responsive UI with service search, provider management, and payments.',
    tags: ['MERN Stack', 'Material UI', 'JWT Auth', 'Role-Based'],
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <p className="eyebrow">What I've built</p>
        <h2 className="section-title">Featured <em>projects</em></h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className={`project-card pc-${p.accent}`}>
              <div className="pc-top-bar" />
              <div className="pc-header">
                <div className="pc-icon-wrap">
                  <i className={p.icon} />
                </div>
                <span className="pc-number">0{p.id}</span>
              </div>
              <h3 className="pc-name">{p.name}</h3>
              <p className="pc-tech">{p.tech}</p>
              <p className="pc-desc">{p.desc}</p>
              <div className="pc-tags">
                {p.tags.map((t) => (
                  <span key={t} className={`pc-tag pct-${p.accent}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;