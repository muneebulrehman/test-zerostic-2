import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import {
  Loader,
  MainWeatherComponent,
  InfoCards,
  TemperatureFlipper,
  RecentInputs
} from './components';
import fetchWeatherData from './helpers/weatherFetcher';
import styles from './app.module.css';

/**
 * The main App component.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */

function App() {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('New Delhi');
  const [active, setActive] = useState(1);
  const [recentCities, setRecentCities] = useState([]);

  useEffect(() => {
    handleFetchWeatherData();
  }, [city]);

  /**
   * Fetches weather data for the current city and updates the state.
   * If the city is not in the recentCities list and the list has less than 5 items,
   * the city is added to the list. If the list has 5 items, the oldest city is removed
   * and the new city is added to the list.
   * If the fetch request fails, an error message is displayed.
   *
   * @async
   * @function
   * @returns {Promise<void>} Nothing
   */

  const handleFetchWeatherData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchWeatherData(city);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        if (!recentCities?.includes(data?.location?.name)) {
          setRecentCities((prev) => {
            if (prev.length >= 5) {
              return [data?.location?.name, ...prev.slice(0, -1)];
            } else {
              return [data?.location?.name, ...prev];
            }
          });
        }
      }
    } catch (error) {
      if (error instanceof TypeError) {
        toast.error('Server issues because of free tier.');
      }

      if (error.message == 'HTTP error! status: 400') {
        toast.error('Please enter a valid city name and try again.');
      }
      // else toast.error(`Error: ${error}`);
      // Retry after 10 seconds
      // setTimeout(handleFetchWeatherData, 10000);
    } finally {
      setLoading(false);
    }
  }, [city]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.interactiveFeatures}>
            <RecentInputs
              recentCities={recentCities}
              setCity={setCity}
              cityFromData={weatherData?.location?.name}
            />
            <TemperatureFlipper active={active} setActive={setActive} />
          </div>
          <MainWeatherComponent data={weatherData} setCity={setCity} city={city} active={active} />
          <div className={styles.weatherInfo}>
            <h2 className={styles.weatherInfoSubHeading}>Today's Highlights</h2>
            <div className={styles.infoCards}>
              <InfoCards data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
