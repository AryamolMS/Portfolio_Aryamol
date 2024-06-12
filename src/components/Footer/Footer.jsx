import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-md-3">
                <h4>About Me</h4>
                <span className='mt-5'>Passionate MERN stack developer with a knack for crafting user-friendly web experiences. Skilled in building robust applications with React, Node.js, Express.js, and MongoDB. Eager to leverage expertise for innovative solutions and contribute to a collaborative team.</span>
                <div className='icons d-flex'>
                    <div style={{width:''}}>

                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <h4 className='mb-3 mt-3'>Links</h4>
                <p className='fs-5'><i class="fa-solid fa-arrow-right me-2"></i>Home</p>
                <p className='fs-5'><i class="fa-solid fa-arrow-right me-2"></i>About</p>
                <p className='fs-5'><i class="fa-solid fa-arrow-right me-2"></i>Skill</p>
                <p className='fs-5'><i class="fa-solid fa-arrow-right me-2"></i>Project</p>
            </div>
            <div className="col-md-3">
                <h4 className='mb-5'>Services</h4>
                <p><i class="fa-solid fa-arrow-right me-2"></i>Web Development</p>
                <p><i class="fa-solid fa-arrow-right me-2"></i>Front End Development</p>
                <p><i class="fa-solid fa-arrow-right me-2"></i>Backend Development</p>
            </div>
            <div className="col-md-3 mb-5">
                <h4 className='mb-5'>Contact Me</h4>
                <p><i class="fa-solid fa-location-dot me-3"></i>Enadhi,Kottayam</p>
                <a href="mailto:aryamolms02@gmail.com" style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-envelope me-3"></i>aryamolms02@gmail.com</a>
            </div>
        </div>
    </div>
    <p className='text-center mt-5'>Copyright © 2024 Aryamol M S | Personal Portfolio. Built with React.</p>
    </>
  )
}

export default Footer