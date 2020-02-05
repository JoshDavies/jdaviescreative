import React from "react"
import StoryImg from './StoryImg'

function About() {
   return (
    <div className="page" id="about">
      <h1>About</h1>
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
            <br />
            'The most exciting attractions are between two opposites that never meet.' <br />
            Andy Warhol
            'Accidents, try to change them -- it's impossible. The accidental reveals man."
            Pablo Picasso
          </p>
        </div>
      </div>
    </div>
   );
 }

 export default About;
