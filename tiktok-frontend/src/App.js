import "./App.css";
import Video from "./Video";
import tiktokVideo1 from "./tiktok_local.mp4";
import tiktokVideo2 from "./tiktok_local2.mp4";
import tiktokVideo3 from "./tiktok_local3.mp4";
import tiktokVideo4 from "./tiktok_local4.mp4";

function App() {
  return (
    //bem namin convention
    <div className="app">
      <h1>Full stack MERN tik-tok clone </h1>

      <div className="app_videos">
        <Video
          url={tiktokVideo1}
          channel="oldFoodEater"
          description="wow"
          song="my song"
          likes={123}
          messages={45}
          shares={2}
        />
        <Video
          url={tiktokVideo2}
          channel="freshFoodEater"
          description="hehe"
          song="my song"
          likes={123}
          messages={45}
          shares={2}
        />
        <Video url={tiktokVideo3} />
        <Video url={tiktokVideo4} />
      </div>
    </div>
  );
}

export default App;
