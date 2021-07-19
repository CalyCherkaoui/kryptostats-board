import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';

import styles from '../styles/AboutPage.module.css';

const AboutPage = () => (
  <div className={styles.aboutpage_wrapper}>
    <div className={`${styles.about_frame} flex_col flex_bottom`}>
      <h1 className={styles.aboutpage_text}>
        This is a catalogue of a statistics for Cryptocurrencies
      </h1>
      <div className={styles.about_icons}>
        <a href="https://github.com/CalyCherkaoui/kryptostats-board" className={styles.about_icons_link}>
          <IconContext.Provider value={{ className: `${styles.about_icon}` }}>
            <AiFillGithub />
          </IconContext.Provider>
        </a>
        <a href="https://www.linkedin.com/in/houda-cherkaoui-64106395/" className={styles.about_icons_link}>
          <IconContext.Provider value={{ className: `${styles.about_icon}` }}>
            <FiLinkedin />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  </div>
);

export default AboutPage;
