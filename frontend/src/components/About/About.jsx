import React from 'react'
import './About.css'
import {about} from '../../dummydata'

const About = () => {
  return (
    <div>
       <div className="new_about_main">
      <div className="about_main">
        <div className="about_main_2">
        <h1 style={{textAlign:"center",padding:"10%",fontSize:"2.5rem"}}>About us</h1>
          <div>
            <h2>Who Are We?</h2>
            <p>
              {/* <span className="about_span"> */}
              Maktabe Imam-e-Asr {/* </span> */}
              is one of the leading online Qur’an, Arabic, Persian and Islamic studies
              websites. We have a group of male & female experts
              who have been teaching all over the world for
              many years. We offer 18 different courses that are designed by
              great experts along with structured study plans for each course to
              help our students learn effectively and achieve their goals.
            </p>
          </div>
          <div>
            <h2>Why we Created this Platform?</h2>
            <p>
              We found out that so many Muslims are suffering from finding a
              male or female teacher who is so professional in teaching either
              Qur’an, Arabic, Persian or Islamic studies. They are also able to
              communicate with them or their kids in English fluently, We wanted to offer Very
              exceptional pricing for our courses as we would like all Muslims to afford to pay to
              learn the book of Allah, its language and message. We also have
              the best curriculum which is all based on structured study plans
              to help our students or their parents track their progress and
              always be motivated.
            </p>
          </div>
          <div>
            <h2>Our Goal</h2>
            <p>
              We aim to teach at least 1 lakh Muslims from around the world in only 5 years! And make sure they recite
              Qur’an correctly and fluently, speak Arabic fluently, speak Persian fluently, and also
              have a great Islamic background and help them spread the message
              of Islam all over the world.
            </p>
          </div>
        </div>
        <div className="about_our_Mission">
         <div className='about_our_Mission2'> <h2>Our Mission</h2></div>
          <p>
            Maktabe Imam-e-Asr was launched to provide a phenomenal and
            multi-featured online platform with the ultimate goal to teach more
            than 1 lakh Muslims all over the world to recite and memorize the
            Quran with Tajweed beautifully and perfectly like Prophet Muhammad
            SAWW with the direction of incredibly trained and competent Huffaz
            who will make this ambition possible by providing a very structured
            plan to attain your targets. We aspire at facilitating our brothers
            and sisters, especially in Asia, with the minimum rates to continue
            learning Quran no matter what economic issues they have. Our goal is
            to provide premium-quality lessons that are supervised by proficient
            experts who keep a thorough check on each class.
          </p>
        </div>
        <div className="about_arry">
         <div className="about_arry2"> <h3>WHAT MAKES OUR CLASSES EXCEPTIONAL?</h3></div>
          <div className="about_arry_sub">
            {about.map((val, index) => (
              <div className="about_arry_main_div" key={index}>
                <div className="about_img_div">
                  <img src={val.image} alt="img" />
                </div>
                <div className="about_details_div">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
