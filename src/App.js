
import React, {useEffect, useState} from 'react';
import Video from './components/Video';
import './App.css';
import axiosDefault from './Axios'
 


function App() {

const [videos, setVideos] = useState([]);


useEffect(()=> {
    async function fetchPosts() {
        const response = await axiosDefault.get("/v2/posts")
        setVideos(response.data)
        return response
    }

    fetchPosts()
}, [])
  

return (
  <div className="app">        
      <div className="app__videos"> 

        {videos.map(data => (

          <Video               
            channel={data.channel}
              description={data.description}
              song={data.song}
              likes={data.likes}
              shares={data.shares}
              messages={data.messages}
            url={data.url}/>
        ))}         

      </div>       
  </div>
);
}


export default App;
