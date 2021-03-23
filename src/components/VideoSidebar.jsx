import React, {useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "../VideoSidebar.css"

export default function VideoSidebar( {likes,shares,messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
            {liked?  <FavoriteIcon 
              onClick={(e) => setLiked(!liked)}
            fontSize="large" />:
            <FavoriteBorderIcon 
                fontSize="large"
                onClick={(e) => setLiked(!liked)}
            />                       
            }
        
            <p>{liked ? likes +  1: likes}</p>

            </div>
            <div className="videoSidebar__button">
            <MessageIcon fontSize="large" />
            <p>{messages}</p>
            
                
            </div>
            <div className="videoSidebar__button">
            <ShareIcon fontSize="large"/>
            <p>{shares}</p>
                
             </div>
            
        </div>
    )
}
