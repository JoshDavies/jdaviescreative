import React from "react"

function StoryImg(props) {
  return (
    <div className="story-img">
      <img src={props.picture.imgUrl} />
    </div>
  )
}

 export default StoryImg;
