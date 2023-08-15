import React from 'react'
import Home from '../components/Pages/Home/Home';
import Team from '../components/Pages/Team/Team';
import Courses from '../components/Pages/Courses/Courses';
import Books from '../components/Pages/Books/Books';
import Contact from '../components/Pages/Contact/Contact';
import AboutPage from '../components/Pages/AboutPage/AboutPage';
import {Route,Routes} from 'react-router-dom'

const Allauth = () => {
  return (
    <div>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/team' element={<Team/>}/>
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<AboutPage/>}/>
       <Route path='/books' element={<Books/>}/>
       <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default Allauth
