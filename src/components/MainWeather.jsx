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

  const formattedTime = useMemo(() => {
    const datetime = new Date(data?.location?.localtime);
    const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(datetime);
  }, [data]);

  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a city..."
          className={styles.searchInput}
        />
        <button
          onClick={() => setCity(() => inputRef.current.value)}
          className={styles.searchButton}>
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
              <span>
                <sup>&deg;C</sup>
              </span>
            </p>
            <p className={styles.description}>
              {data?.current?.condition?.text}
              {data?.current?.condition?.text.includes('rain') && ' 🌧️'}
            </p>
            {formattedTime && (
              <p className={styles.formattedTime}>
                {formattedTime}
                {data?.current?.is_day ? ' 🌝' : ' 🌚'}
              </p>
            )}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.extraInfo}>
          <p className={styles.cloudyStatus}>{cloudyStatus}</p>
          <p className={styles.infoItem}>
            Feels Like: {data?.current?.feelslike_c}
            <sup>&deg;C</sup>
          </p>

          <div className={styles.infoItem}>
            <p>Humidity: {data?.current?.humidity}%</p>
          </div>
        </div>
        <div className={styles.cityNameContainer}>
          <h2 className={styles.cityName}>{data?.location?.name || city}</h2>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
