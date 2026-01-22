import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img src="/profile.jpg" alt="Profile Picture" className="profile-pic" />
          </div>
          <div className="hero-content">
            <h1>Hi, I'm An Edrada</h1>
            <p>I am a Computer Science student who is passionate about learning how to design and develop reliable software solutions that solve real-world problems.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View My Work</button>
              <button className="btn btn-secondary">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
