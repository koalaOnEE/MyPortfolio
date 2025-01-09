import React from 'react'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h1 className={styles.contactTitle}>Contact Info<span className={styles.period}>.</span></h1>
        
        <div className={styles.contactInfo}>
         
          <li>
          <a
            href="mailto:clee030@odu.edu"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            clee030@odu.edu
          </a>
          </li>
          <li> 
          <a
            href="https://www.linkedin.com/in/chloe-slee-28o/"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            chloe-slee-28o
          </a>
          </li>
        </div>
      </div>
    </section>
  );
};