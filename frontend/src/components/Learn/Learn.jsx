import React from 'react'
import './Learn.css'
import { homeAbout } from '../../dummydata'

const Learn = () => {
  return (
    <div>
        <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
              <div id='heading'>
               <h3>LEARN ANYTHING</h3>
               <h1>Benefits About Online Learning Expertise</h1>
              </div>
            <div className='items1'>
              {homeAbout.map((val) => {
                return (
                  <div className='item'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Learn
