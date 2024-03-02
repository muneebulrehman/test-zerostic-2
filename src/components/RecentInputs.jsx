import React, { memo } from 'react';

import styles from './recentInputs.module.css';

/**
 * MainWeather component displays the main weather information.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.data - The weather data to display
 * @param {Function} props.setCity - Function to set the city
 * @param {string} props.city - The current city
 * @param {number} props.active - The active temperature unit (1 for Celsius, 2 for Fahrenheit)
 * @returns {React.Element} The rendered MainWeather component
 * @example
 * return (
 *   <MainWeather data={weatherData} setCity={setCity} city={city} active={active} />
 * )
 */

const RecentInputs = memo(({ recentCities, setCity, cityFromData }) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={styles.container}>
      <select className={styles.recentInputs} value={cityFromData} onChange={handleChange}>
        <option value="" disabled>
          {recentCities.length > 0 ? 'Select a city' : 'No recent searches'}
        </option>
        {recentCities?.map((input) => (
          <option key={input} value={input}>
            {input}
          </option>
        ))}
      </select>
    </div>
  );
});

export default RecentInputs;
