import React from 'react'
import './project.css'
import weatherImage from '../../images/weather.png'
import partyImage from '../../images/party.png'
import trainImage from '../../images/train.png'
import resortImage from '../../images/resort.png'
import { Link } from 'react-router-dom'


function Projects() {
  return (
    <>
<div className='container'>
  <h1 className='text-center mb-5 mt-5'>PROJECTS</h1>
    <div className='row'>
        <div className="col md-6">
        <div className="card" style={{width:"100%",height:'40vh'}}>
            <img src={resortImage} alt="" style={{width:"100%"}}/>
            <div className="card__content">
              <p className="card__title">Resort Booking</p>
              <ul className="card__description">
                <li><span className='fw-bold'>Description:</span> A MERN (MongoDB, Express, React, Node.js) stack application for booking resort stays.</li>
                <li className='fw-bold'>Features:</li>
                  <li className='ms-5'>
                  User authentication and profile management
                  </li>
                  <li className='ms-5'>
                  Search and filter resorts by various criteria
                  </li>
                  <li className='ms-5'>
                  View resort details, amenities, and reviews
                  </li>
                  <li className='ms-5'>
                  Booking and payment processing
                  </li>
                  <li><span className='fw-bold'>Objective:</span> To provide users with a seamless experience for finding and booking resort accommodations.</li>
              </ul>
              <span className='mt-2'>For more details, visit <Link to={'https://resort-frontend.vercel.app/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Resort Booking</Link>.</span>
            </div>
    </div>
    </div>

        <div className="col md-6">
        <div className="card" style={{width:"102%",height:'39vh'}}>
            <img src={trainImage} alt="" style={{width:"100%"}}/>
            <div className="card__content">
              <p className="card__title">Train Reservation</p>
              <ul className="card__description">
                <li><span className='fw-bold'>Description:</span> A web application for managing train reservations.
                </li>
                <li><span className='fw-bold me-2'>Technologies:</span>React.js | Python</li>
                <li className='fw-bold'>Features:</li>
                  <li className='ms-5'>
                  User registration and authentication
                  </li>
                  <li className='ms-5'>
                  Search for trains by route and date
                  </li>
                  <li className='ms-5'>
                  Booking and cancellation of tickets
                  </li>
                  
                  <li className='ms-5'>
                  View booking history
                  </li>
                  <li><span className='fw-bold'>Objective:</span> To provide a comprehensive system for booking and managing train tickets.</li>
              </ul>
              <span className='mt-2'>For more details, visit <Link to={'https://github.com/AryamolMS/Train_Reservation'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Train Reservation</Link>.</span>
            </div>
    </div>
        </div>
        
    
    </div>
</div>
<div className='container mt-3'>
<div className="row">
<div className="col md-6">
        <div className="card" style={{width:"100%",height:'40vh'}}>
            <img src={weatherImage} alt="" style={{width:"100%"}}/>
            <div className="card__content">
              <p className="card__title">Weather App</p>
              <ul className="card__description">
                <li><span className='fw-bold'>Description:</span> A web application that provides real-time weather information.
                </li>
                <li><span className='fw-bold me-2'>Technologies:</span>React.js | Weather API</li>

                <li className='fw-bold'>Features:</li>
                  <li className='ms-5'>
                  Displays current weather conditions
                  </li>
                  <li className='ms-5'>
                  Provides temperature, humidity, and wind speed data
                  </li>
                  <li className='ms-5'>
                  Displays current weather conditions
                  </li>
                  <li className='ms-5'>
                  Search functionality for different cities
                  </li>
                  <li className='ms-5'>
                  User-friendly interface with clear weather icons
                  </li>
                  <li><span className='fw-bold'>Objective:</span> To help users quickly access weather updates for any location.</li>
              </ul>
              <span className='mt-2'>For more details, visit <Link to={'https://weather-app-react-five-omega.vercel.app/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Weather App</Link>.</span>
            </div>
    </div>
    </div>

    <div className="col md-6">
        <div className="card" style={{width:"100%",height:'40vh'}}>
            <img src={partyImage} alt="" style={{width:"100%"}}/>
            <div className="card__content">
              <p className="card__title">Party Makers</p>
              <ul className="card__description">
                <li><span className='fw-bold'>Description:</span>Online platform for event planning and management.
                </li>
                <li><span className='fw-bold me-2'>Technologies:</span>React.js | JSON Server
                </li>
                <li className='fw-bold'>Features:</li>
                  <li className='ms-5'>
                  Book venues and hire vendors.
                  </li>
                  <li className='ms-5'>
                  Customizable event services.
                  </li>
                  <li className='ms-5'>
                  User-friendly interface.
                  </li>
                  <li><span className='fw-bold'>Objective:</span> Simplify the event planning process and ensure memorable experiences.</li>
              </ul>
              <span className='mt-2'>For more details, visit <Link to={'https://party-makers.vercel.app/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Party Makers</Link>.</span>
            </div>
    </div>
    </div>
</div>
</div>
    </>
  )
}

export default Projects