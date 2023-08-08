import React from 'react'
import './Certificate.css'
import certificate from '../../images/CERTIFICATE.jpg'

const Certificate = () => {
  return (
    <div className='Certificate'>
       <div id='heading6'>
            <h3>CERTICATE</h3>
            <h1>Certificate After Course Completion</h1>
         </div>
         <div className='certifi-div'>
            <img src={certificate} alt="" />
         </div>
    </div>
  )
}

export default Certificate
