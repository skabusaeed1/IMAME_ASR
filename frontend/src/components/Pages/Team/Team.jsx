import React from 'react'
import "./Team.css"
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Heading from '../../Heading/Heading'
import Inspiration from '../../Inspiration/Inspiration'
import Instructor from '../../Instructor/Instructor'

const Team = () => {
  return (
    <div>
     <div className='view-1'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"Team Page"}/>
     </div>
        <Inspiration/>
        <Instructor/>
    </div>
  )
}

export default Team
