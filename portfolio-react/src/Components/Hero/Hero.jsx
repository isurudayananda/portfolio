import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""  />
        <h1><span>I'm ISuru Dayananda,</span> Frontend Developer, Undergraduate</h1>
        <p>I am a Fronend developer </p>
        <div className="hero-action">
          <div className="hero-connect">Connect With Me</div>
          <div className="hero-resume">My resume</div>

        </div>

    </div>
  )
}

export default Hero