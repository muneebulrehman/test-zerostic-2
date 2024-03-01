import react, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import fetchWeatherData from './helpers/weatherFetcher';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchWeatherData();
  }, []);

  const handleFetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetchWeatherData('London');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      toast.error(`Failed to fetch weather data ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
