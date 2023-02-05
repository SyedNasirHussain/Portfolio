import React from 'react'
import CV from "../../assets/Syed-Nasir-Hussain.pdf"
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Syed_Nasir_Hussain.pdf" className='btn'> Download CV</a> 
        <a href="#Contactus" className='btn btn-primary'>Let's Talk</a>
    
    </div>
  )
}

export default CTA