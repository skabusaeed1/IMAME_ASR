import React from "react";
import './Footer.css'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="new_footer_main">
      <div className="footer_main">
        <div className="footer_heading">
          <h1>MAKTABE IMAM-E-ASR (ATFS)</h1>
          <p className="footer_sub">ONLINE EDUCATION & LEARNING</p>
          <p className="footer_sub_detail">
          Maktabe Imam-e-Asr, your top-tier online source for Islamic education. 
          </p>

          <div className="social1">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <a href="https://www.youtube.com/@IMAMEASR" target="blank"><i className="fab fa-youtube icon"></i></a>
          </div>
        </div>
        <div className="footer_explore">
          <h3>Explore</h3>
          <p><Link to={"/about"} style={{textDecoration:"none",color:"#808080"}}>About</Link></p>
          <p><Link to={"/courses"} style={{textDecoration:"none",color:"#808080"}}>Courses</Link></p>
          <p><Link to={"/team"} style={{textDecoration:"none",color:"#808080"}}>Team</Link></p>
          <p><Link to={"/books"} style={{textDecoration:"none",color:"#808080"}}>Books</Link></p>
          <p><Link to={"/contact"} style={{textDecoration:"none",color:"#808080"}}>Contact</Link></p>
        </div>
        <div className="footer_details">
          <h3>Have a Questions?</h3>
          <div className="footer_logo_details">
            <div>
              <FaMapLocationDot className="footer_logo_icon" />
              <p>Roshan Gate, Aurangabad, Maharashtra</p>
            </div>
          </div>

          <div className="footer_logo_details">
            <div>
              <IoCall className="footer_logo_icon" />
              <p>+91-8888437431 / +91-9970250087</p>
            </div>
          </div>

          <div className="footer_logo_details">
            <div>
              <SiMinutemailer className="footer_logo_icon" />
              <p>imameasr110@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Copyright ©2023 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
