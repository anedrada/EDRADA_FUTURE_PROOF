import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student. I am passionate about learning software development fundamentals, problem-solving, and building practical applications that improve user experience and efficiency.
            </p>
            <p>
              I'm currently strengthening my skills in JavaScript, Data Structures & Algorithms, and version control with Git.
              I believe in clean code, continuous learning, and creating solutions that enhance user experience and efficiency.
            </p>
            <p>
              My goal is to grow into a developer who designs user-focused, scalable, and modern applications while contributing meaningfully to the tech community.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>3</h3>
              <p>Key Projects</p>
            </div>
            <div className="stat">
              <h3>3</h3>
              <p>Core Skills</p>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <p>Growth Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
