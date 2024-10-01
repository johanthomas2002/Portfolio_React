import React from 'react'
import './style.css'

function Video() {
    return (
      <div className='video-container'>
        <div>
            <video className='head-video' autoPlay loop muted>
                <source src="/images/dev.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Text Content */}
        <div className='video-text'>
            <h1 className='fs-1'>Hey, I'm Johan Thomas</h1>
            <p className='fs-3'>Mearn-Stack Developer</p>
        </div>
      </div>
    );
}

export default Video;
