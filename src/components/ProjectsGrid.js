import React from 'react';
import '../styles/ProjectsGrid.css';

const sampleProjects = [
  { title: 'Project A', img: '/assets/images/Print.jpg' },
  { title: 'Project B', img: '/assets/images/Print.jpg' },
  { title: 'Project C', img: '/assets/images/Print.jpg' },
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
