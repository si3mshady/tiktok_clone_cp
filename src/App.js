import Video from './components/Video';
import './App.css';
 
function App() {
  
  const url =  "https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v1.mp4"
// const url = "https://github.com/si3mshady/tiktok_clone_cp/blob/main/src/video/sample-mp4-file.mp4"
  return (
    <div className="app">        
        <div className="app__videos">
              <Video               
              channel="si3mshady"
                description="learning MERN stack"
                song="lose yourself"
                likes="888" shares="73" messages="124"
              url={url}/>

              <Video
              channel="eminem"
                description="8 mi MERN stack"
                song="lose 8 Mile"
                likes="888" shares="888" messages="888"
               url={url}/> 


        </div>       
    </div>
  );
}

export default App;
