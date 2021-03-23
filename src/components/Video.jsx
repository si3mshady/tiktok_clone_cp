import React, {useState,useRef} from 'react'
import "../Video.css"
import VideoFooter from '../components/VideoFooter'
import VideoSidebar from '../components/VideoSidebar'
import vid1 from '../video/waterfall.mp4'

// https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json
// https://youtu.be/g8yGxDMyGiE?t=2518


export default function Video({url, song, channel,description,likes, shares, messages}) {
    const [playing,setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handleVideoClick = () => {
        //  if video is playing 
        if (playing){
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
        // stop it ....
        // otherwise play it 
    }
    return (
        <div className="video">
            <video className="video__player"
            onClick={handleVideoClick}
            ref={videoRef}
             src={url} muted  controls loop/>
            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            /> 
            <VideoSidebar likes={likes} shares={shares} messages={messages}  />
        </div>

        
    )
}
