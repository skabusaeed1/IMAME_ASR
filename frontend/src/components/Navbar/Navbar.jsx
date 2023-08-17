import React from 'react'
import {useState} from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [click, setClick] = useState(false)
  return (
    <div className='Navbar'>
        <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/courses'>Courses</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/team'>Team</NavLink>
            </li>
            {/* <li>
              <NavLink to='/pricing'>Pricing</NavLink>
            </li> */}
            <li>
              <NavLink to='/books'>Books</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <div className='start'>
            <div className='nav-heading'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
