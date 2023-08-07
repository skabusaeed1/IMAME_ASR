import React from 'react'
import "./Head.css"
import image from '../../images/logo1.png'

const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className='container'>
          <div className='logo-div'>
            <div className='logo-div-1'>
                <div className='logo-img-div'><img src={image} alt="" className='logo-img'/></div>
                <div>IMAM-E-ASR OFFICIAL</div>
            </div>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Head
