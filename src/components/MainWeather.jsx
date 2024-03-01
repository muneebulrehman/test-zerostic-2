import React, { useRef, useMemo } from 'react';

import styles from './mainWeather.module.css';

const MainWeather = ({ data, setCity, city }) => {
  const inputRef = useRef(null);

  const cloudyStatus = useMemo(() => {
    if (data?.current?.cloud > 75) {
      return '☁️ Cloudy';
    }

    if (data?.current?.cloud > 50) {
      return '🌥️ Mostly Cloudy';
    }

    if (data?.current?.cloud > 25) {
      return '⛅ Partly Cloudy';
    }

    return '☀️ Clear';
  }, [data]);

  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter city name"
          className={styles.searchInput}
        />
        <button onClick={() => setCity(inputRef.current.value)} className={styles.searchButton}>
          🔍
        </button>
      </div>
      <div className={styles.weatherContainer}>
        <div className={styles.weather}>
          <div className={styles.weatherIcon}>
            <img src={`${data?.current?.condition?.icon}`} alt="weather-icon" />
          </div>
          <div className={styles.weatherInfo}>
            <p className={styles.temperature}>
              {data?.current?.temp_c}
              <span>&deg;C</span>
            </p>
            <p className={styles.description}>{data?.current?.condition?.text}</p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.extraInfo}>
          <p className={styles.cloudyStatus}>{cloudyStatus}</p>
          <p className={styles.infoItem}>Feels Like: {data?.current?.feelslike_c}&deg;C</p>

          <div className={styles.infoItem}>
            <p>Humidity: {data?.current?.humidity}%</p>
          </div>
        </div>
        <h2 className={styles.cityName}>{data?.location?.name || city}</h2>
      </div>
    </div>
  );
};

export default MainWeather;
