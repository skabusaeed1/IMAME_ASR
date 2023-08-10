import React from 'react'
import './Popular.css'
import { coursesCard } from "../../dummydata"

const Popular = () => {
  return (
    <div>
       <section className='coursesCard' id='coursesCard'>
        <div id='heading1'>
          <h3>OUR COURSES</h3>
          <h1>Explore Our Popular Online Courses</h1>
        </div>
       <div className='coursesCard'>
         <div className='grid2'>
          {
            coursesCard.slice(0,3).map((val)=>{
              return <div className='items2'>
                   <div className='content3'>
                   <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                     
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
                          </>
                        ))}
                      </div>
                    </div>
                   </div>
                   <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                   <div className='price'>
                    <h3>
                      Contact for more Information
                    </h3>
                  </div>
                </div>
            })
          }
         </div>
       </div>
      </section>
    </div>
  )
}

export default Popular
