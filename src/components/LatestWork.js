import React from "react"
import PictureCard from './PictureCard'

function LatestWork() {
   return (
    <div id="latest">
      <div className="banner0">
        <h1>Latest Work</h1>
        <h2>HAND PAINTED WATERCOLOUR & INK</h2>
      </div>
      <div className="page">
        <div className="picture-container">
          <PictureCard
            picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/Nation.jpg?raw=true"}}
          />
          <PictureCard
            picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/Structure.jpg?raw=true"}}
          />
          <PictureCard
            picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/kingfisher.jpg?raw=true"}}
          />
          <PictureCard
            picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/winter+stag.jpg?raw=true"}}
          />
          <PictureCard
            picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/Montpellier.jpg?raw=true"}}
          />
        </div>

        <div className="arrow-container">
          <a className="arrow" href="#buy">
            <i className="fa fa-angle-down"></i>
          </a>
        </div>

      </div>
    </div>
   );
 }

 export default LatestWork;
