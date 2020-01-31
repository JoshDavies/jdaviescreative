import React from "react"
import PictureCard from './PictureCard'

function LatestWork() {
   return (
    <div className="page">
      <h1 id="latest">Latest Work</h1>
        <div className="picture-container">
          <PictureCard
            picture={{imgUrl: "https://github.com/JoshDavies/jdaviescreative/blob/master/public/images/Nation.jpg?raw=true"}}
          />
        </div>
    </div>
   );
 }

 export default LatestWork;
