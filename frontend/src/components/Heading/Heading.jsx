import React from 'react'
import "./Heading.css"
import cartoon1 from '../../images/cartoon1.png'

const Heading = ({line,page}) => {
  return (
    <div className='Heading-main'>
      <div className='Heading-1'>
        <p>{line}</p>
        <h1>{page}</h1>
      </div>
      <div className='Heading-img'>
        <img src={cartoon1} alt="" />
      </div>
    </div>
  )
}

export default Heading
