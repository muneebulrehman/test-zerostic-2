import React from 'react';

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={`${styles.cloud} ${styles.front}`}>
          <span className={`${styles.leftFront}`}></span>
          <span className={`${styles.rightFront}`}></span>
        </div>
        <span className={`${styles.sun} ${styles.sunshine}`}></span>
        <span className={styles.sun}></span>
        <div className={`${styles.cloud} ${styles.back}`}>
          <span className={styles.leftBack}></span>
          <span className={styles.rightBack}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
