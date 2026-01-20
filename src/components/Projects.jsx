import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A comprehensive application demonstrating core programming concepts through full CRUD operations with persistent data storage. Showcases my understanding of data structures, control flow, and database interaction.',
      tags: ['Python', 'SQLite', 'Tkinter GUI'],
      link: '#',
      category: 'What You Know'
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'A responsive personal website created to showcase my profile and projects. Demonstrates growth in responsive design and user experience through clean layout and styling.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      category: 'What You Learned'
    },
    {
      id: 3,
      title: 'Smart Task Management App (Planned)',
      description: 'An ambitious productivity application designed to help users organize tasks and track progress efficiently. Showcases my aspiration to build user-focused, scalable modern applications.',
      tags: ['JavaScript', 'React (Planned)', 'Firebase (Planned)'],
      link: '#',
      category: 'What You Are Aspiring To'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
