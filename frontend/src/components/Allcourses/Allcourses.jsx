import React from 'react'
import './Allcourses.css'
import { online } from "../../dummydata"

const Allcourses = () => {
  return (
    <div>
      <section className='online'>
        <div className='container2'>
        <div id='heading3'>
          <h3>COURSES</h3>
          <h1>Browse Our Online Courses</h1>
        </div>
          <div className='content1'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Allcourses
