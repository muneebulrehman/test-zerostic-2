const fetchWeatherData = async (city) => {
  return fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_API_KEY}&q=${city}&aqi=yes`);
};

export default fetchWeatherData;