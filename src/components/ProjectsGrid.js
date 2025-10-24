import React from 'react';
import '../styles/ProjectsGrid.css';

const sampleProjects = [
  { title: 'Project A', img: '/assets/project-1.jpg' },
  { title: 'Project B', img: '/assets/project-2.jpg' },
  { title: 'Project C', img: '/assets/project-3.jpg' },
];

const ProjectsGrid = () => (
  <section className="projects" data-aos="fade-up">
    <h2>Our projects</h2>
    <div className="projects-grid">
      {sampleProjects.map((p, i) => (
        <div className="project-card" key={i}>
          <img src={p.img} alt={p.title} />
          <div className="project-title">{p.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsGrid;
