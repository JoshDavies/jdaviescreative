import React from "react"

function PictureCard() {
   return (
     <div className="picture-card">
       <img src={props.picture.imgUrl} />
     </div>
   )
 }

 export default PictureCard;
