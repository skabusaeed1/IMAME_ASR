import React from 'react'
import "./Heading.css"

const Heading = ({line,page}) => {
  return (
    <div>
      <div className='Heading-1'>
        <p>{line}</p>
        <h1>{page}</h1>
      </div>
    </div>
  )
}

export default Heading
