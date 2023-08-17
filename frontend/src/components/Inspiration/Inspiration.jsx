import React from 'react'
import './Inspiration.css'
import { inspiration } from "../../dummydata"

const Inspiration = () => {
  return (
    <div className='Inspiration'>
        <h1>Our Inspiration</h1>
      <div className='insp-main'>
      {inspiration.map((val,index) => (
        <div className='insp-div' key={index}>
          <div className='insp-img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='insp-text'>
            <h5>{val.name}</h5>  
            <p style={{textAlign:"center"}}>{val.work}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Inspiration
