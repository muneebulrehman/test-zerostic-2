import React from 'react';

import styles from './temperatureFlipper.module.css';

const TemperatureFlipper = ({ setActive, active }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${active == 1 && styles.active}`}
        onClick={() => setActive(1)}>
        ℃
      </button>
      <button
        className={`${styles.button} ${active == 2 && styles.active}`}
        onClick={() => setActive(2)}>
        ℉
      </button>
    </div>
  );
};

export default TemperatureFlipper;
