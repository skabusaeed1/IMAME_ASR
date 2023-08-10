import React from 'react'
import './Instructor.css'
import { team } from "../../dummydata"

const Instructor = () => {
  return (
    <div className='teacher'>
    <h1>Our Team</h1>
  <div className='teach-main'>
  {team.map((val,index) => (
    <div className='teach-div' key={index}>
      <div className='teach-img'>
        <img src={val.cover} alt='' />
      </div>
      <div className='teach-text'>
        <h5>{val.name}</h5>
        <p>{val.work}</p>
      </div>
    </div>
  ))}
  </div>
  </div>
  )
}

export default Instructor
