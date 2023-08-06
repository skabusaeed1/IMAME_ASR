import React from 'react'
import './Front.css'
import image from '../../images/Front-image.jpg'

const Front = () => {
  return (
    <div className='Front'>
      <div className='main'>
        <div className='text'>
           <div><h3>WELCOME TO MAKTABE IMAM-E-ASR</h3></div>
           <div><h1>Best Online Education Expertise</h1></div>
           <div> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
           <div>
               <button className='btn-1'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
           </div>
        </div>
        <div className='front-img'>
            <img src={image} alt="" className='img-1'/>
        </div>
      </div>
    </div>
  )
}

export default Front
