import React from 'react'
import "./Head.css"
import image from '../../images/logo3.png'

const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className='container'>
          <div className='logo-div'>
            <div className='logo-div-1'>
                <div className='logo-img-div'><img src={image} alt="" className='logo-img'/></div>
                <div>MAKTAB-E-IMAM-E-ASR (ATFS)</div>
            </div>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <a href='https://www.youtube.com/@IMAMEASR' target='blank'><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Head
