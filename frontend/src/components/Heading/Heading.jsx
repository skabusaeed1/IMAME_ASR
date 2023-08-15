import React from 'react'
import "./Heading.css"

const Heading = ({line,page,image}) => {
  return (
    <div className='Heading-main'>
      <div className='Heading-1'>
        <p>{line}</p>
        <h1>{page}</h1>
      </div>
      <div className='Heading-img'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Heading
