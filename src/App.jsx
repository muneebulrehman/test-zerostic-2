import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  const inputRef = useRef(null);

  useEffect(() => {
    handleFetchWeatherData(inputRef.current.value);
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

  const handleFetchWeatherData = useCallback(
    async (inputRefValue) => {
      setLoading(true);
      try {
        const response = await fetchWeatherData(city);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error.message || 'Server error');
        }
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        if (data) {
          setWeatherData(data);
          if (
            !recentCities?.includes(data?.location?.name) &&
            inputRefValue &&
            inputRefValue.length > 0
          ) {
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
        console.error(error);
        if (error instanceof TypeError) {
          toast.error('Server issues because of free tier.');
        } else if (error.message.includes('400')) {
          toast.error('Please enter a valid city name and try again.');
        } else {
          toast.error(`${error}`);
        }
        setCity(recentCities[0] || 'New Delhi');
      } finally {
        setLoading(false);
      }
    },
    [city]
  );

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
          <MainWeatherComponent
            data={weatherData}
            setCity={setCity}
            city={city}
            active={active}
            inputRef={inputRef}
          />
          <div className={styles.weatherInfo}>
            <h2 className={styles.weatherInfoSubHeading}>
              {weatherData ? `Today's Highlights` : 'No Data Available'}
            </h2>
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
