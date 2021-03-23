import React from 'react'
import "../VideoFooter.css"
import  MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

export default function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>                
            <div className="videoFooter__ticker">
             <MusicNoteIcon className="videoFooter__icon" /> 
             <Ticker  mode="smooth">
                {({ index }) => (
                    <>
                        <p>{song}</p>
                        {/* <img src="www.my-image-source.com/" alt=""/> */}
                    </>
        )}
        </Ticker>
            </div>
            </div>  

        <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}
