import React from 'react'
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Front from '../../Front/Front'
import Learn from '../../Learn/Learn'
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
    </div>
  )
}

export default Home
