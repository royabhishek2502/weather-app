import React from 'react'
import clouds from '../../videos/clouds.mp4';
import './Background.css';

const Background = () => {
  return (
    <div>
        <video src={clouds} autoPlay muted loop id='myVideo' />
    </div>
  )
}

export default Background