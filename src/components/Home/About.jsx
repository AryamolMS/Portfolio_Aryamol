import React from 'react'
import aryaImage from '../../images/arya.jpg'

function About() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row d-flex flex-column align-items-center mt-5">
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <img className='w-50 p-3' src={aryaImage} alt="Arya" style={{borderRadius:'50%',marginLeft:'150px',height:'300px'}}/>
          </div>
          <div className="col-md-8">
            <h1 className='text-center'>About Me</h1>
            <p className='about'>
              I am a passionate MERN stack web developer with a strong foundation in modern web technologies. With expertise in building robust and scalable web applications, I thrive on turning ideas into interactive and user-friendly experiences. My journey in web development has equipped me with a diverse skill set, including proficiency in MongoDB, Express.js, React.js, and Node.js. I have hands-on experience in creating RESTful APIs, integrating third-party services, and optimizing application performance.
              Additionally, I am adept at front-end technologies such as HTML, CSS, and JavaScript frameworks like Bootstrap and Material-UI. My goal is to leverage my skills to deliver innovative solutions that drive business growth and exceed user expectations, contributing positively to every project I work on.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
