import React from "react"
import PictureCard from './PictureCard'

function LatestWork() {
   return (
    <div className="latest-work">
      <h1 id="latest">Latest Work</h1>
        <PictureCard
          picture={[imgUrl: ""]}
        />


    </div>
   );
 }

 export default LatestWork;
