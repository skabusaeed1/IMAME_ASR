import React from 'react'
import './Courses.css'
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Heading from '../../Heading/Heading'
import NewsLetter from '../../NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import image from '../../../images/cartoon1.png'
import { coursesCard } from '../../../dummydata'

const Courses = () => {
  return (
    <div>
       <div className='view-3'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"Courses Page"} image={image}/>
     </div>
     <div id='heading6'>
          <h3>OUR COURSES</h3>
          <h1>Explore Our Popular Online Courses</h1>
        </div>
     <div className='coursesCard' style={{marginBottom:"5%"}}>
         <div className='grid2'>
          {
            coursesCard.map((val)=>{
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
       <NewsLetter/>
       <Footer/>
    </div>
  )
}

export default Courses
