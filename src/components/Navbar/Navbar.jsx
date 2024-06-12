import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='p-4 d-flex container mb-5 pb-5'>
        <div className="logo">
            <h4>ARYAMOL M S</h4>
        </div>
        <div className="navigation ms-auto d-flex mt-3">
            <Link to="/" className='me-5 fs-5 text-decoration-none text-white'>Home</Link>
            <Link to="/about" className='me-5 fs-5 text-decoration-none text-white'>About</Link>
            <Link to="/experience" className='me-5 fs-5 text-decoration-none text-white'>Experience</Link>
            <Link to="/skills" className='me-5 fs-5 text-decoration-none text-white'>Skills</Link>
            <Link to="/education" className='me-5 fs-5 text-decoration-none text-white'>Education</Link>
            <Link to="/projects" className='me-5 fs-5 text-decoration-none text-white'>Projects</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar;
