import React from "react";
import './Footer.css'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

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
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
        <div className="footer_explore">
          <h3>Explore</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Courses</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
        <div className="footer_details">
          <h3>Have a Questions?</h3>
          <div className="footer_logo_details">
            <div>
              <FaMapLocationDot className="footer_logo_icon" />
              <p>Roshan Gate, Aurangabad</p>
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
