import React from 'react'
import { Link } from 'react-router-dom'
import Skill from '../Skills/Skill'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import Education from '../education/Education'
import About from './About'

function Home() {
  return (
    <>
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row mb-5 pb-5 mt-5 pt-5">
        <div className="col-md-6">
          <div className="flex-column">
            <h1 style={{fontSize:'40px'}}>Hello,</h1>
            <h1 style={{fontSize:'60px'}} className='mt-3 mb-3 text-warning d-flex'>I'm <span className='ms-4'>Aryamol M S</span></h1>
            <h1>MERN STACK DEVELOPER</h1>
            <div className='mt-3'>
            <Link to={'https://www.linkedin.com/in/aryamol-m-s-074220275/'}><button className='btn btn-outline-warning ms-3 w-25'>LinkedIn</button></Link>
              <Link to={'https://github.com/AryamolMS'}><button className='btn btn-outline-warning ms-3 w-25'>GitHub</button></Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
          <a href='https://drive.google.com/file/d/1oQajhHtGrpyn8myyPF8yH0oeMy88p17-/view?usp=sharing' target='blank' className='btn btn-warning fw-bold w-50' >Download CV <i class="fa-solid fa-download ms-2"></i></a>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Experience/>
    <Skill/>
    <Projects/>
    <Education/>
    </>
  )
}

export default Home