import React from 'react'
import './Inspiration.css'
import { team } from "../../dummydata"

const Inspiration = () => {
  return (
    <div className='Inspiration'>
        <h1>Our Inspiration</h1>
      <div className='insp-main'>
      {team.map((val) => (
        <div className='insp-div'>
          <div className='insp-img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='insp-text'>
            <h5>{val.name}</h5>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Inspiration
