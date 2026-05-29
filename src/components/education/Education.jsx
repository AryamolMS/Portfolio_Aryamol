import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Government College of Engineering, Cherthala',
    period: 'Aug 2024 – Present',
    desc: 'Currently pursuing MCA with a focus on advanced software development, algorithms, and system design.',
  },
  {
    degree: 'ME(A)RN Stack Development',
    institution: 'Luminar Technolab Pvt. Ltd., Kochi',
    period: 'July 2023 – February 2024',
    desc: 'Intensive full-stack training covering React.js, Node.js, MongoDB, and Express.js. Built real-world web applications alongside experienced developers and learned agile methodologies, Git, and responsive design.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swamy Saswathikananda College, Puthankav',
    period: 'July 2020 – March 2023',
    desc: 'Covered programming languages (Java, C, PHP), database management, web development, software engineering, and computer networking through practical sessions, projects, and seminars.',
  },
];

const certifications = [
  { name: 'MERN Stack Development', org: 'Luminar Technolab Pvt. Ltd., Kochi' },
  { name: 'IoT Fundamentals', org: 'IIT Kharagpur · NPTEL' },
];

function Education() {
  return (
    <section className="section edu-section" id="education">
      <div className="section-inner">
        <p className="eyebrow">Academic background</p>
        <h2 className="section-title">Education &amp; <em>certifications</em></h2>

        <div className="edu-timeline">
          {education.map((e, i) => (
            <div key={i} className="edu-item">
              <div className="edu-line-col">
                <div className="edu-dot" />
                {i < education.length - 1 && <div className="edu-connector" />}
              </div>
              <div className="edu-content">
                <div className="edu-period">{e.period}</div>
                <h3 className="edu-degree">{e.degree}</h3>
                <p className="edu-institution">{e.institution}</p>
                <p className="edu-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-section">
          <h3 className="cert-heading">Certifications</h3>
          <div className="cert-list">
            {certifications.map((c, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon">
                  <i className="fa-solid fa-certificate" />
                </div>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-org">{c.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;