import React from 'react'
import './Students.css'
import { testimonal } from "../../dummydata"

const Students = () => {
  return (
    <div>
      <section className='testimonal padding'>
        <div className='container3'>
          {/* <Heading subtitle='TESTIMONIAL' title='Our Successful Students' /> */}
            <div id='heading4'>
             <h3>TESTIMONIAL</h3>
             <h1>Our Successful Students</h1>
             </div>
          <div className='content2 grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box1 flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    {/* <i className='fa fa-quote-left icon' id='icon-dot'></i> */}
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Students
