import React from "react";
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
    return <div className="videoFooter">
        <div className="videoFooter_text">
            <h3>fjwbfiw</h3>
            <p>This is some description</p>
            <div className="videoFooter_ticker">
                <MusicNoteIcon 
                className="videoFooter_icon" />


               
            </div>
        </div>
    </div>
}

export default VideoFooter;