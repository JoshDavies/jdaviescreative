import React from "react"
import StoryImg from './StoryImg'

function About() {
   return (
    <div id="about">
      <div className="banner1">
        <h1>About</h1>
        <h2>J. DAVIES</h2>
      </div>
      <div className="page">
        <div className="row">
          <div className="column-left">
            <StoryImg
              picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/profile_pic.jpeg?raw=true"}}
            />
          </div>
          <div className="column-right">
            <h3>Artist Profile </h3>
            <p>
              I am a London based graduate of Arts University Bournemouth.
              Inspired by a fusion of photography, memory & imagination to create atmospheric
              watercolour & ink illustrations. My techniques are influenced by traditional
              watercolours but have developed into my own contemporary style.
              <br />
              Fascinated by both the serenity of nature & energy of urban architecture, my work studies the character of these opposing environments, evoking how we are influence by our surroundings.
              <br />
            </p>
            <p className="quote">
              <br />
              'The most exciting attractions are between two opposites that never meet.' <br />
              Andy Warhol
            </p>
          </div>
        </div>

        <div className="arrow-container">
          <a className="arrow" href="#contact">
            <i className="fa fa-angle-down"></i>
          </a>
        </div>

      </div>
    </div>
   );
 }

 export default About;
