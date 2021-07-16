import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';

import styles from '../styles/AboutPage.module.css';

// eslint-disable-next-line arrow-body-style
const AboutPage = () => {
  return (
    <div className={styles.aboutpage_wrapper}>
      <div className={`${styles.about_frame} flex_col flex_bottom`}>
        <h1 className={styles.aboutpage_text}>
          This is a catalogue of a statistics for Cryptocurrencies
        </h1>
        <div className={styles.about_icons}>
          <IconContext.Provider value={{ className: `${styles.about_icon}` }}>
            <AiFillGithub />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: `${styles.about_icon}` }}>
            <FiLinkedin />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
