import React from 'react';

function Education() {
  return (
    <>
      <div className='container mt-5 pt-5'>
        <h1 className='text-center mb-5'>EDUCATION</h1>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <h4>ME(A)RN STACK Development</h4>
              <h5>Luminar Technolab Pvt Ltd, Kochi</h5>
              <h6 className='text-warning mb-4'>July 2023 - February 2024</h6>
              <span className='experience-description mb-4'>
                My full-stack development internship at Luminar Technolab Pvt Ltd in Kochi from July 2023 to February 2024 provided me with the invaluable opportunity to work on real-world projects alongside a team of experienced developers. Collaboratively, we built and enhanced web applications, deepening my understanding of React.js, Node.js, MongoDB, and Express.js. This hands-on experience sharpened my skills in front-end and back-end development, while also introducing me to agile development methodologies, version control systems like Git, and the importance of crafting responsive and user-friendly designs.
              </span>
            </div>
            <div className="col-md-6 mb-5">
              <h4 className="text-left">Bachelor of Computer Application (BCA)</h4>
              <h5 className="text-left">Swamy Saswathikanada College, Puthankav</h5>
              <p className='text-warning text-left mb-4'>July 2020 - March 2023</p>
              <span className='experience-description mb-4'>
                My BCA program at Swamy Saswathikanada College from June 2020 to March 2023, I delved into various aspects of computer applications. The curriculum covered a wide range of programming languages like Java, C, and PHP, database management systems, web development, software engineering principles, and computer networking. I participated in practical sessions, projects, and seminars that enriched my understanding and skills in software development, data management, and IT infrastructure.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
