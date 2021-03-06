import React from "react"
import StoryImg from './StoryImg'
import ScrollAnimation from 'react-animate-on-scroll';

function Buy() {
  return (
    <div id="buy">
      <div className="banner2">
      <ScrollAnimation animateIn="fadeIn">
        <h1>Buy</h1>
        <h2>ARTWORK</h2>
      </ScrollAnimation>
      </div>
      <div className="page">
        <div className="row">
          <div className="column-left">
            <StoryImg
              picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/tree_angle.jpg?raw=true"}}
            />
          </div>
          <div className="column-right">
          <ScrollAnimation animateIn="fadeIn">
            <h3>Buy or Commission Original Art & Prints</h3>
            <p>
            I am Represented by DegreeArt.com <br />
            Based in Somerset House, DegreeArt.com is one of the UK's first Online Art Galleries.
            Over the past 16 years, DegreeArt.com has established itself as the market leader in
            UK student & graduate art sales, hand picking & promoting the most promising talent.
            </p>
            <a href="https://www.degreeart.com/artists/josh-davies" target="_blank" className="button"><span>J Davies @ DegreeArt.com</span></a>
          </ScrollAnimation>
          </div>
        </div>

        <div className="arrow-container">
          <a className="arrow" href="#about">
            <i className="fa fa-angle-down"></i>
          </a>
        </div>

      </div>
    </div>
   );
 }

 export default Buy;
