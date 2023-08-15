import React from "react";
import logo12 from "../../images/New/logo12.png";
import './NewsLetter.css'

const NewsLetter = () => {
  return (
   <div className="News-main-div">
     <div className="Newsletter_main">
      <div className="news_text">
        <h1>Imam-e-asr(ATFS)  - Stay tune and get the islamic knowledge</h1>
        <p>We reveal the wisdom of sacred knowledge.</p>
      </div>
      <div className="news_logo">
        <div>
        
          <img src={logo12} alt="logo" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default NewsLetter;
