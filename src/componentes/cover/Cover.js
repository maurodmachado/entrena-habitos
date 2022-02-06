import React from 'react';
import './Cover.css';
import CoverVideo from '../../media/cover.mp4';

const Cover = () => {
    return(
        <div className='cover-container' id="home">
            <video className='video' src={CoverVideo} autoPlay loop muted /> 
        </div>
    )
}

export default Cover;