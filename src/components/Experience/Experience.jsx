import React from 'react';
import './experience.css';

const experiences = [
  {
    id: '01',
    role: 'MERN Stack Intern',
    company: 'Luminar Technolab Pvt. Ltd., Kochi',
    period: 'January 2024 – May 2024',
    color: 'green',
    points: [
      'Gained hands-on experience with the MERN stack by developing and maintaining complex web applications.',
      'Built RESTful APIs, integrated JWT authentication, and deployed to cloud platforms.',
      'Sharpened teamwork and communication skills in an agile, collaborative environment.',
    ],
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <p className="eyebrow">Where I've trained</p>
        <h2 className="section-title">Work <em>experience</em></h2>

        <div className="exp-list">
          {experiences.map((exp) => (
            <div key={exp.id} className={`exp-card exp-${exp.color}`}>
              <div className="exp-number">{exp.id}</div>
              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">
                    <i className="fa-regular fa-calendar" /> {exp.period}
                  </span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;