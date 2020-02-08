import React from "react"
import StoryImg from './StoryImg'
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
   return (
    <div id="contact">
      <div className="banner3" >
      <ScrollAnimation animateIn="fadeIn">
        <h1>Contact</h1>
        <h2>JDAVIESCREATIVE@GMAIL.COM</h2>
      </ScrollAnimation>
      </div>
      <div className="page">
        <div className="row">
          <div className="column-left">
            <StoryImg
              picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/paint_brush.jpg?raw=true"}}
            />
          </div>
          <div className="column-right">
          <ScrollAnimation animateIn="fadeIn">
            <h3>Get in Touch</h3>
            <p>Please feel free to email me about my work: <br />
            jdaviescreative@gmail.com</p>
            <h3>Commissioning Work</h3>
            <p>
              If you are interested in commissioning Original Art:
              please inquire through the degreeart.com website. <a href="#buy">'Further details'</a>
            </p>
            <h3>Follow me on Instagram</h3>
            <p>
              For more photographs and close ups:
            </p>
            <a href="http://instagram.com/jdaviesartwork" target="_blank" className="button"><span>@jdaviesartwork</span></a>
          </ScrollAnimation>
          </div>
        </div>

        <div className="arrow-container">
          <a className="arrow" href="#latest">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>

      </div>
    </div>
   );
 }

 export default Contact;
