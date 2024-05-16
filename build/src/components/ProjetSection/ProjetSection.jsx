import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import projectsData from '../../data/project.json';  
import './projetSection.scss';  

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Ici, vous pouvez charger les données depuis un fichier JSON local ou une API
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-page">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            title={project.title} 
            image={project.image} 
            tools={project.tools} 
            link={project.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
