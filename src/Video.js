import React, { useRef, useState } from 'react';
import "./Video.css";
import tiktokVideo from "./tiktok_local.mp4";
import VideoFooter from './VideoFooter';
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef= useRef(null);

  const handleVideoPress = () => {
    //if video is playing

    if(playing) {
      videoRef.current.pause();
      setPlaying(false);

    }else{
      videoRef.current.play();
      setPlaying(true);
    }
    //stop it


    //otherwhise if it is not playing
    //play it...
  }
  return (
    <div className="video">
      <video
      onClick ={handleVideoPress}
      className="video_player"
      loop
      ref={ videoRef }
       src={tiktokVideo}></video>
      {/* VideoFooter */}
      <VideoFooter />
      {/* VideoSidebar */}
    </div>
  )
}

export default Video;
