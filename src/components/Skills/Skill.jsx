import React from 'react';
import './Skill.css';

const skillGroups = [
  {
    icon: 'fa-solid fa-display',
    label: 'Frontend',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI'],
  },
  {
    icon: 'fa-solid fa-server',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    icon: 'fa-solid fa-database',
    label: 'Database',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    label: 'Other Tools',
    skills: ['Python', 'Django', 'OpenCV', 'Git', 'GitHub', 'Vercel', 'Render'],
  },
];

function Skill() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <p className="eyebrow">What I work with</p>
        <h2 className="section-title">Skills &amp; <em>tools</em></h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  <i className={group.icon} />
                </div>
                <span className="skill-group-label">{group.label}</span>
              </div>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;