import React from 'react';
import './experience.css';

function Experience() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='container mt-5'>
        <h1 className='text-center mb-5'>EXPERIENCE</h1>
        <div className='row'>
          <div className="col-md-8 mx-auto">
            <h3>MERN Stack Intern</h3>
            <h5>Luminar Technolab Pvt Ltd, Kochi</h5>
            <h6 className='text-warning mb-4'>January 2024 - May 2024</h6>
            <span className='experience-description'>
              Eager to contribute my foundational programming skills to innovative projects, I leveraged my internship at Luminar Technolab (January 2024 - May 2024) to gain hands-on experience in a collaborative environment. During this time, I honed my abilities with the MERN stack (MongoDB, Express, React, Node.js) by developing and maintaining complex web applications. This internship not only solidified my technical skills but also fostered strong teamwork and communication skills – essential for success in any professional setting. Now, I'm excited to leverage this well-rounded experience in a collaborative environment that fosters continuous learning and professional growth as a developer.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
