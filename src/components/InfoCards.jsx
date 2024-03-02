import React from 'react';

import InfoCard from './InfoCard';

const InfoCards = ({ data }) => {
  return (
    <>
      <InfoCard
        title={'Wind Speed'}
        data={`${data?.current?.wind_kph} Km/h`}
        message={data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊'}
        extra={[`Direction: ${data?.current?.wind_dir}`]}
      />
      <InfoCard
        title={'Visibility'}
        data={`${data?.current?.vis_km} Km`}
        message={
          data?.current?.vis_km < 5
            ? 'Clear 👍'
            : data?.current?.vis_km < 12
            ? 'Average 😐'
            : 'Bad 😷'
        }
      />
      <InfoCard
        title={'UV Index'}
        data={`${data?.current?.uv}`}
        message={data?.current?.wind_kph > 1.5 && 'Sunscreen 👍'}
      />
      <InfoCard
        title={'Air Quality'}
        data={`${data?.current?.air_quality?.pm10} µg/m³`}
        message={
          data?.current?.air_quality?.pm10 <= 50
            ? 'Good 👍'
            : data?.current?.air_quality?.pm10 <= 100
            ? 'Moderate 😐'
            : data?.current?.air_quality?.pm10 <= 150
            ? 'Poor 😷'
            : data?.current?.air_quality?.pm10 <= 200
            ? 'Very Poor 😷'
            : data?.current?.air_quality?.pm10 <= 300
            ? 'Severe 😷'
            : 'Hazardous 😷'
        }
      />
      <InfoCard
        title={'Pressure'}
        data={`${data?.current?.pressure_mb} mb/in`}
        message={
          data?.current?.pressure_mb >= 1013
            ? 'High Pressure - Expect clear skies 👍'
            : 'Low Pressure - Might be cloudy or rainy ☁️'
        }
      />
      <InfoCard
        title={'Precipitation'}
        data={`${data?.current?.precip_mm} mm`}
        message={data?.current?.precip_mm > 0 ? "It's raining 🌧️" : 'No rain ☀️'}
      />
    </>
  );
};

export default InfoCards;
