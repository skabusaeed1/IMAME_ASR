import React from 'react'
import './AboutPage.css'
import Navbar from '../../Navbar/Navbar'
import Head from '../../Head/Head'
import Heading from '../../Heading/Heading'
import About from '../../About/About'
import NewsLetter from '../../NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import image from '../../../images/cartoon2.png'

const AboutPage = () => {
  return (
    <div>
       <div className='view-1'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"About Page"} image={image}/>
     </div>
       <About/>
       <NewsLetter/>
       <Footer/>
    </div>
  )
}

export default AboutPage
