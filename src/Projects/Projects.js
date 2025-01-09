import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Projects.module.css';
import projects from "../data/Projects.json";
import project1IMG from "./project1.jpeg";
import project2IMG from "./project2.png";


const projectImages = {
  'project1.jpeg': project1IMG,
  'project2.png':  project2IMG
};
export const Projects = () => {
  return (
    <section className={styles.projects} id="Projects">
      <div className={styles.headingContainer}>
        <h1 className={styles.projectsHeading}>
          Projects<span className={styles.period}>.</span>
        </h1>
          
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <img
  className={styles.ProjectImg}
  src={projectImages[project.imageSrc]} 
  alt={`pic of ${project.title}`}
/>
            <div className={styles.projectLinks}>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
