import React from 'react'
import "./Services.css"
import { FiCheck } from "react-icons/fi"
const Services = () => {
  return (
    <section id='Services'>
      {/* <h5>What i offer</h5> */}
      <h2>My Expertise</h2>

      <div className="container services-container">
        {/* <article className='services'>
          <div className="services-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services-list'>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article> */}
        {/* =====================END UI/UX DESIGN========== */}
        <article className='services'>
          <div className="services-head">
            <h3>Android Development</h3>
          </div>
          <ul className='services-list'>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Java, Kotlin & Android SDK.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Experience working with Retrofit library consuming remote API's.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Familiar with Android JetPack libraries like, LiveData, ViewModel, Room Database, DataBinding and View Binding.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Dependency injection through Dagger-Hilt.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Experience with third-party libraries and APIs.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Experience of using software design architecture pattern like MVP and MVVM.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Knowledge of designing complex UI using Constraint Layout.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Custom views knowledge.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Experience of using mobile built in sensors like accelerometer, step sensors etc.
              </p>
            </li>
            <li>
              <div className='services-icon'>
                <FiCheck className='services-list-icon' />
              </div>
              <p>
                Experience of using mobile built in sensors like accelerometer, step sensors etc.
              </p>
            </li>
          </ul>
        </article>
        {/* =====================END WEB DEVELOPMENT========== */}
        {/* <article className='services'>
          <div className="services-head">
            <h3>Content Creation</h3>
          </div>
          <ul className='services-list'>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className='services-list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article> */}
        {/* =====================END CONTENT CREATION========== */}

      </div>
    </section>
  )
}

export default Services