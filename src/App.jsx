import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Loader, MainWeatherComponent, InfoCard, InfoCards } from './components';
import fetchWeatherData from './helpers/weatherFetcher';
import styles from './app.module.css';

function App() {
  const [weatherData, setWeatherData] = useState({
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      tz_id: 'Europe/London',
      localtime_epoch: 1709317869,
      localtime: '2024-03-01 18:31'
    },
    current: {
      last_updated_epoch: 1709316900,
      last_updated: '2024-03-01 18:15',
      temp_c: 4.0,
      temp_f: 39.2,
      is_day: 0,
      condition: {
        text: 'Light rain',
        icon: '//cdn.weatherapi.com/weather/64x64/night/296.png',
        code: 1183
      },
      wind_mph: 6.9,
      wind_kph: 11.2,
      wind_degree: 220,
      wind_dir: 'SW',
      pressure_mb: 991.0,
      pressure_in: 29.26,
      precip_mm: 0.21,
      precip_in: 0.01,
      humidity: 93,
      cloud: 75,
      feelslike_c: 0.4,
      feelslike_f: 32.7,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 14.8,
      gust_kph: 23.9,
      air_quality: {
        co: 250.3,
        no2: 16.8,
        o3: 72.2,
        so2: 6.1,
        pm2_5: 0.9,
        pm10: 1.2,
        'us-epa-index': 1,
        'gb-defra-index': 1
      }
    }
  });
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('New Delhi');

  console.log(city);

  // useEffect(() => {
  //   handleFetchWeatherData();
  // }, []);

  // const handleFetchWeatherData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetchWeatherData('London');
  //     // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  //     const data = await response.json();
  //     if (data) setWeatherData(data);
  //   } catch (error) {
  //     toast.error(`Error: ${error}`);
  //     // Retry after 5 seconds
  //     // setTimeout(handleFetchWeatherData, 10000);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.innerContainer}>
          <MainWeatherComponent data={weatherData} setCity={setCity} city={city} />
          <div className={styles.weatherInfo}>
            <div className={styles.infocards}>
              <InfoCards data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
