import React from "react"
import StoryImg from './StoryImg'

function Buy() {
   return (
    <div className="page" id="buy">
      <h1>Buy</h1>
      <StoryImg
        picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/tree_angle.jpg?raw=true"}}
      />
      <h3>Interested in Buying or Commissioning Original Artwork & Prints?</h3>
      <p>
      I am Represented by DegreeArt.com <br />
      Based in Somerset House, DegreeArt.com is one of the UK's first Online Art Galleries.
      Over the past 16 years, DegreeArt.com has established itself as the market leader in
      UK student & graduate art sales, hand picking & promoting the most promising talent.
      </p>
      <a href="https://www.degreeart.com/artists/josh-davies" target="_blank" className="button">J Davies @ DegreeArt.com</a>
    </div>
   );
 }

 export default Buy;
