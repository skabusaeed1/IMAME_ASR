import React from 'react'
import './Popular.css'
import { coursesCard } from "../../dummydata"

const Popular = () => {
  return (
    <div>
       <section className='coursesCard'>
        <div id='heading1'>
          <h3>OUR COURSES</h3>
          <h1>Explore Our Popular Online Courses</h1>
        </div>
        <div className='container1 grid2'>
          {coursesCard.slice(0, 3).map((val) => (
            <div className='items popular'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              {/* <button className='outline-btn'>ENROLL NOW !</button> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Popular
