import React from 'react'
import Portrait from './Portrait.png';
import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
export const Hero = () => {
    return (
      <section className={styles.container} id="home">
        <div className={styles.content}>


        <ul className={styles.socialLinks}>
         
         <li>

            <a href="https://www.linkedin.com/in/chloe-slee-28o/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1.2x"  className={styles.icon}/>
            </a>

         </li>
         <li>

            <a href = "https://github.com/koalaOnEE"  target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub}  className={styles.icon}/>
            </a>
         </li>
         
         <li>

            <a href="https://instagram.com/csl757_"target="_blank" rel="noopener noreferrer">

            <FontAwesomeIcon icon={faInstagram}  size="2x" className={styles.icon} />

            </a>

         </li>
         </ul>

          <h1 className={styles.title}>Hi, I'm Chloe.</h1>
          <p className={styles.description}>
            I'm an undergrad Computer Science student at Old Dominion University.
          </p>
          <a href="mailto:clee030@odu.edu" className={styles.contactEmail}>
            Get In Touch
          </a>
         

         
        </div>

        <img className={styles.heroImg} src={Portrait} height="110" alt="Hero image of me" />
        
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };