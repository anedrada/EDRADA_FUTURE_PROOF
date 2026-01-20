import React from 'react'
import './Skills.css'

function Skills() {
  const skills = {
    'Core Languages': ['Python', 'JavaScript', 'HTML', 'CSS'],
    'Tools & Platforms': ['Git/GitHub', 'SQLite', 'Tkinter', 'VS Code'],
    'Currently Learning': ['Advanced JavaScript', 'Data Structures & Algorithms', 'React.js']
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {skillList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
