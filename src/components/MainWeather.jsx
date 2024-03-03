import React, { useMemo } from 'react';
import { toast } from 'react-toastify';

import styles from './mainWeather.module.css';

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

const MainWeather = ({ data, setCity, city, active, inputRef }) => {
  const handleEnteredCity = (e) => {
    e.preventDefault();
    const trimmedValue = inputRef.current.value.trim();
    if (trimmedValue === '') {
      toast.error('Please enter a valid city name');
      return;
    }
    if (trimmedValue.toLowerCase() === city.toLowerCase()) return;
    setCity(trimmedValue);
  };

  const cloudyStatus = useMemo(() => {
    if (!data) return;
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
    if (data) {
      const datetime = new Date(data?.location?.localtime);
      const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
      return new Intl.DateTimeFormat('en-US', options).format(datetime);
    }
  }, [data]);

  const temperature = useMemo(() => {
    if (data) {
      if (active === 1) {
        return `${data?.current?.temp_c}`;
      }
      return data?.current?.temp_f;
    }
  }, [data, active]);

  const temperatureFeel = useMemo(() => {
    if (data) {
      if (active === 1) {
        return `${data?.current?.feelslike_c}`;
      }
      return data?.current?.feelslike_f;
    }
  }, [data, active]);

  return (
    <div className={styles.container}>
      {/* <div className={styles.searchContainer}> */}
      <form onSubmit={handleEnteredCity} className={styles.searchContainer}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a city..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton} aria-label="Search">
          🔍
        </button>
      </form>
      {/* </div> */}
      {data && (
        <div className={styles.weatherContainer}>
          <div className={styles.weather}>
            <div className={styles.weatherIcon}>
              <img src={`${data?.current?.condition?.icon}`} alt="weather-icon" />
            </div>
            <div className={styles.weatherInfo}>
              <p className={styles.temperature}>
                {temperature}
                <span>{active === 1 ? <sup>&deg;C</sup> : <sup>&deg;F</sup>}</span>
              </p>
              <p className={styles.description}>
                {data?.current?.condition?.text}
                {data?.current?.condition?.text.includes('rain') && ' 🌧️'}
              </p>
              {formattedTime && (
                <p className={styles.formattedTime}>
                  {formattedTime}
                  {data?.current?.is_day ? ' 🌞' : ' 🌑'}
                </p>
              )}
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.extraInfo}>
            <p className={styles.cloudyStatus}>{cloudyStatus}</p>
            <p className={styles.infoItem}>
              Feels Like: {temperatureFeel}
              {active === 1 ? <sup>&deg;C</sup> : <sup>&deg;F</sup>}
            </p>

            <div className={styles.infoItem}>
              <p>Humidity: {data?.current?.humidity}%</p>
            </div>
          </div>
          <div className={styles.cityNameContainer}>
            <h2 className={styles.cityName}>{data?.location?.name || city}</h2>
            <p className={styles.countryName}> {data?.location?.country} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainWeather;
