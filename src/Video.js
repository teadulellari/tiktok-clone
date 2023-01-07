import React from 'react';
import "./Video.css";
import tiktokVideo from "./tiktok_local.mp4";
function Video() {
  return (
    <div className="Video">
      <video
      className="video_player"
      loop
      controls
       src={tiktokVideo}></video>
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  )
}

export default Video
