import "./App.css";
import Video from "./Video";
import { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  //create a fetch

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);
    }

    setInterval(fetchPosts,1000);
  }, [])
  return (
    //bem naming convention
    <div className="app">
      <div className="app_videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        ))};
      </div>
    </div>
  );
}

export default App;
