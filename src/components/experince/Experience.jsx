import React from 'react'
import "../experince/Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">


        {/* ==============FRONTEND=============== */}

        <div className="experience-frontend">
        <h3>Android Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>XML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
             <div>
             <h4>Java</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>Kotlin</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>MVVM</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>Dagger Hilt</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>Jetpack navigation</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ==============BACKEND=============== */}
        {/* <div className="experience-backend">
        <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience