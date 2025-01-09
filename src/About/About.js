import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.about} id="about">
  
      <div className={styles.headingContainer}>
        <h1 className={styles.aboutHeading}>
          About<span className={styles.period}>.</span>
        </h1>
        <p className={styles.subheading}>Skills & Journey</p>
      </div>

    
      <div className={styles.aboutContentWrapper}>
      
        <div className={styles.aboutContent}>
          <p>
            Hi, my name is Chloe Lee and I'm from Virginia. I am currently a senior at Old Dominion University and am pursuing a Bachelor's in Computer Science with a minor in Data Science.
          </p>
          <p>
            Throughout my education, I have gained experience in backend development, while also building a solid foundation in frontend development. I am passionate about solving problems and creating efficient, scalable software solutions.
          </p>
          <p>
            Currently, I'm interested in opportunities to expand my knowledge and skills in software design, development, and data analytics. If you have an opening that might be a good fit, I would love to connect!
          </p>
        </div>

      
        <div className={styles.skills}>
          <h2>
            <FontAwesomeIcon icon={faCode} className={styles.Icon} />
            Skills
          </h2>
          <div className={styles.skillsGrid}>
            <span>C++</span>
            <span>Java</span>
            <span>SQL</span>
            <span>React</span>
            <span>Linux</span>
            <span>Unix</span>
            <span>Git</span>
            <span>RestAPI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
