import React from 'react';
import './experience.css';

function Experience() {
  return (
    <>
      <div className='container'>
        <h1 className='text-center mb-5 mt-5'>EXPERIENCE</h1>
        <div className='row'>
          <div className="col-md-6">
            <h3>MERN Stack Intern</h3>
            <h5>Luminar Technolab Pvt Ltd, Kochi</h5>
            <h6 className='text-warning mb-4'>January 2024 - May 2024</h6>
            <span className='experience-description'>
              Eager to contribute my foundational programming skills to innovative projects, I leveraged my internship at Luminar Technolab (January 2024 - May 2024) to gain hands-on experience in a collaborative environment. During this time, I honed my abilities with the MERN stack (MongoDB, Express, React, Node.js) by developing and maintaining complex web applications. This internship not only solidified my technical skills but also fostered strong teamwork and communication skills – essential for success in any professional setting. Now, I'm excited to leverage this well-rounded experience in a collaborative environment that fosters continuous learning and professional growth as a developer.
            </span>
          </div>

          <div className="col-md-6 ">
            <h3>ME(A)RN STACK Development</h3>
            <h5>Luminar Technolab Pvt Ltd, Kochi</h5>
            <h6 className='text-warning mb-4'>July 2023 - February 2024</h6>
            <span className='experience-description mb-4'>
            My full-stack development internship at Luminar Technolab Pvt Ltd in Kochi from July 2023 to February 2024 provided me with the invaluable opportunity to work on real-world projects alongside a team of experienced developers. Collaboratively, we built and enhanced web applications, deepening my understanding of React.js, Node.js, MongoDB, and Express.js. This hands-on experience sharpened my skills in front-end and back-end development, while also introducing me to agile development methodologies, version control systems like Git, and the importance of crafting responsive and user-friendly designs.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
