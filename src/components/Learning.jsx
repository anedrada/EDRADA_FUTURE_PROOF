import React from 'react'
import './Learning.css'

function Learning() {
  const learningItems = [
    {
      id: 1,
      skill: 'JavaScript',
      reason: 'To strengthen my programming logic and prepare for building interactive and dynamic web applications.',
      timeline: 'January 2026 – Present',
      progress: 65
    },
    {
      id: 2,
      skill: 'Data Structures and Algorithms',
      reason: 'To improve my problem-solving skills and write more efficient and optimized code, especially for technical interviews and real-world applications.',
      timeline: 'December 2025 – Present',
      progress: 50
    },
    {
      id: 3,
      skill: 'Git and GitHub (Version Control)',
      reason: 'To learn proper version control, collaborate on projects, and manage code effectively in a professional development environment.',
      timeline: 'January 2026 – Present',
      progress: 60
    }
  ]

  return (
    <section id="learning" className="learning">
      <div className="container">
        <h2>Currently Learning</h2>
        <p className="learning-intro">
          I'm committed to continuous learning and growth. Here's what I'm currently focusing on to expand my skills.
        </p>
        <div className="learning-grid">
          {learningItems.map((item) => (
            <div key={item.id} className="learning-card">
              <div className="learning-header">
                <h3>{item.skill}</h3>
                <span className="timeline">{item.timeline}</span>
              </div>
              <p className="learning-reason">{item.reason}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
              </div>
              <span className="progress-text">{item.progress}% Progress</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learning
