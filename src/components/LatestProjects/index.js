import React, { useState } from "react";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import "./LatestProjects.scss";

const LatestProjects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Currency Converter",
      description: "Application Full-Stack de conversion de devises en temps réel avec gestion des taux de change",
      technologies: ["Vue.js", "Laravel", "API REST"],
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&auto=format&fit=crop",
      github: "https://github.com/FlorentGATTI/Currency-converter",
    },
    {
      id: 2,
      title: "Analytics Platform",
      description: "Tendances des prénoms US avec visualisation interactive",
      technologies: ["Vue.js", "FastAPI", "MongoDB", "Leaflet", "Plotly"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      github: "https://github.com/FlorentGATTI/projet-cda",
    },
    {
      id: 3,
      title: "BitChest",
      description: "Plateforme de trading de crypto-monnaies avec simulation temps réel",
      technologies: ["React", "Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop",
      github: "https://github.com/FlorentGATTI/projet-finale_bitchest",
    },
  ];

  return (
    <div className="latest-projects" id="portfolio">
      <SectionHeader subtitle="Portfolios" title="Derniers Projets" className="latest-projects__header" />

      <div className="projects-grid">
        {projects.map((project) => (
          <Card key={project.id} className="project-card" onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}>
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
              <div className={`project-card__overlay ${hoveredId === project.id ? "active" : ""}`}>
                <div className="project-card__overlay-content">
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    Explorer le code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card__content">
              <h3 className="title">{project.title}</h3>
              <p className="description">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
