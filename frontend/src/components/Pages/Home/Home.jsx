import React from 'react'
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Front from '../../Front/Front'
import Learn from '../../Learn/Learn'
import Popular from '../../Popular/Popular'
import Allcourses from '../../Allcourses/Allcourses'
import Students from '../../Students/Students'
import Certificate from '../../Certificate/Certificate'
import Footer from '../../Footer/Footer'
import Newsletter from '../../NewsLetter/NewsLetter'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='initial-view'>
      <Head/>
      <Navbar/>
      <div className='front-div'>
      <Front/>
      </div>
      </div>
      <Learn/>
      <Popular/>
      <Allcourses/>
      <Students/>
      <Certificate/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
