import React from 'react'
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Front from '../../Front/Front'
import Learn from '../../Learn/Learn'
import Popular from '../../Popular/Popular'
import Allcourses from '../../Allcourses/Allcourses'
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
    </div>
  )
}

export default Home
