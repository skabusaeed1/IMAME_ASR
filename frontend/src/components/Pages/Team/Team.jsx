import React from 'react'
import "./Team.css"
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Heading from '../../Heading/Heading'
import Inspiration from '../../Inspiration/Inspiration'

const Team = () => {
  return (
    <div>
     <div className='view-1'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"Teams Page"}/>
     </div>
        <Inspiration/>
    </div>
  )
}

export default Team
