import React from 'react';

import styles from './temperatureFlipper.module.css';

/**
 * TemperatureFlipper component displays two buttons to switch between Celsius and Fahrenheit.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.setActive - Function to set the active temperature unit
 * @param {number} props.active - The active temperature unit (1 for Celsius, 2 for Fahrenheit)
 * @returns {React.Element} The rendered TemperatureFlipper component
 * @example
 * return (
 *   <TemperatureFlipper setActive={setActive} active={active} />
 * )
 */

const TemperatureFlipper = ({ setActive, active }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${active === 1 && styles.active}`}
        onClick={() => setActive(1)}
        aria-label="Celsius">
        ℃
      </button>
      <button
        className={`${styles.button} ${active === 2 && styles.active}`}
        onClick={() => setActive(2)}
        aria-label="Fahrenheit">
        ℉
      </button>
    </div>
  );
};

export default TemperatureFlipper;
