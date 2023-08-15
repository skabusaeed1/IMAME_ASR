import React from 'react'
import "./Team.css"
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Heading from '../../Heading/Heading'
import Inspiration from '../../Inspiration/Inspiration'
import Instructor from '../../Instructor/Instructor'
import NewsLetter from '../../NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import image from '../../../images/cartoon5.png'

const Team = () => {
  return (
    <div>
     <div className='view-1'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"Team Page"} image={image}/>
     </div>
        <Inspiration/>
        <Instructor/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Team
