import React from 'react'
import './Contact.css'
import Navbar from '../../Navbar/Navbar'
import Head from '../../Head/Head'
import Heading from '../../Heading/Heading'
import NewsLetter from '../../NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import image from '../../../images/cartoon4.png'

const Contact = () => {
  return (
    <div>
      <div className='view-1'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"Contact Page"} image={image}/>
     </div>
     <div style={{textAlign:"center",padding:"5%",fontSize:"1.8rem"}}>
       <h1>Contact</h1>
     </div>
      <div className="new_contact_main">
    <div className="Contact_Main">
      {/* google location */}
      <div className="Contact_Location">
        <iframe
          className="iframes_google"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3751.8605117366114!2d75.3415946752261!3d19.88811108149091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUzJzE3LjIiTiA3NcKwMjAnMzkuMCJF!5e0!3m2!1sen!2sin!4v1691954511505!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* google location end*/}
      {/* form div */}
      <div className="Contact_form">
        <div className="Contact_heading">
          <h1>Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>
        </div>
        {/* contact address and email and phone */}
        <div className="Contact_address_phone">
          <div>
            <h4>ADDRESS:</h4>
            <p>Roshan Gate, Aurangabad</p>
          </div>
          <div>
            <h4>EMAIL:</h4> <p>imameasr110@gmail.com</p>
          </div>
          <div className="contact_mobile">
            <h4>PHONE:</h4> <p>+91-8888437431</p>
            <p>+91-7006275485</p>
            <p>+91-9970250087</p>
          </div>
        </div>
        <div className="Contact_input">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea
              placeholder="Create a message here..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="Contact_button">
          <button>SEND MESSAGE</button>
        </div>
      </div>
      {/* form div end*/}
    </div>
  </div>
  <NewsLetter/>
  <Footer/>
    </div>
  )
}

export default Contact
