import React from 'react'
import './skills.css'
import htmlImage from '../../images/html.png'
import cssImage from '../../images/css.png'
import bootstrapImage from '../../images/bootstrap.png'
import reactImage from '../../images/react.png'
import muiImage from '../../images/mui.png'


function Skill() {
  return (
    <>
    <div className='container mb-5 pb-5 mt-5'>
      <h1 className='text-center mb-5 mt-5'>SKILLS</h1>
    <div className="row">
      <div className="col skills">
        <div className="skills_card">
        <div className="centered">
              <img src={htmlImage} alt="" style={{width:'100%'}} />
              <p>HTML</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src={cssImage} alt="" style={{width:'100%'}} />
              <p>CSS</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src={bootstrapImage} alt="" style={{width:'80%'}} />
              <p>BOOTSTRAP</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src="https://static.vecteezy.com/system/resources/previews/012/697/298/original/3d-javascript-logo-design-free-png.png" alt="" style={{width:'80%'}} />
              <p>JAVASCRIPT</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src={reactImage} alt="" style={{width:'100%'}} />
              <p>REACT.JS</p>
            </div>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col skills">
        <div className="skills_card">
        <div className="centered">
              <img src={muiImage} alt="" style={{width:'100%'}} />
              <p>MATERIAL UI</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" style={{width:'70%'}} />
              <p>NODE.JS</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src="https://vectorified.com/images/express-js-icon-20.png" alt="" style={{width:'90%'}} />
              <p>EXPRESS.JS</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01-768x530.png" alt="" style={{width:'100%'}} />
              <p>MONGODB</p>
            </div>
        </div>
      </div>
      <div className="col skills">
      <div className="skills_card">
        <div className="centered">
              <img src="https://logos-download.com/wp-content/uploads/2021/01/Git_Logo-420x420.png" alt="" style={{width:'80%'}} />
             <p className='mt-2'>GIT</p>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Skill