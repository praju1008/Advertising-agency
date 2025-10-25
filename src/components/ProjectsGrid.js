import React from 'react';
import '../styles/ProjectsGrid.css';

const projects = [
  { title: 'Web Design & Development', img: '/assets/images/web-design.jpg' },
  { title: 'Print', img: '/assets/images/Print.jpg' },
  { title: 'Event Exhibition', img: '/assets/images/event.jpg' }
];

const ProjectsGrid = () => (
  <div className="projects-grid">
    {projects.map((project, idx) => (
      <div className="project-card" key={idx}>
        <img src={project.img} alt={project.title} />
        <div className="project-overlay">
          <h3>{project.title}</h3>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectsGrid;
