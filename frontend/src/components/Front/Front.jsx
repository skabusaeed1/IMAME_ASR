import React from 'react'
import './Front.css'
import image from '../../images/Front-image.jpg'
import { Link as ScrollLink } from "react-scroll";
import {Link} from '@chakra-ui/react'

const Front = () => {
  return (
    <div className='Front'>
      <div className='main'>
        <div className='text'>
           <div><h3>WELCOME TO MAKTABE IMAM-E-ASR</h3></div>
           <div><h1>Best Online Islamic Education Expertise</h1></div>
           <div> <p>Welcome to Maktabe Imam-e-Asr, your top-tier online source for Islamic education. Just as unseen texts hold secrets, we reveal the wisdom of sacred knowledge.</p></div>
           <div className='text4'>
              <Link className='btn-1' as={ScrollLink} to={"coursesCard"} spy={true} smooth={true}  duration={800}>VIEW COURSES   <i className='fa fa-long-arrow-alt-right'></i></Link>
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
