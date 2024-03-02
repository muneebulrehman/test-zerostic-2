import React, { memo } from 'react';

import InfoCard from './InfoCard';

/**
 * InfoCards component displays a list of InfoCard components with different weather data.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.data - The weather data to display in the InfoCard components
 * @returns {React.Element} The rendered InfoCards component
 * @example
 * return (
 *   <InfoCards data={weatherData} />
 * )
 */

const InfoCards = memo(({ data }) => {
  return (
    <>
      <InfoCard
        title={'Wind Speed'}
        data={`${data ? data?.current?.wind_kph : 'N/A'} Km/h`}
        message={data ? (data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊') : 'N/A'}
        extra={[`Direction: ${data ? data?.current?.wind_dir : 'N/A'}`]}
      />
      <InfoCard
        title={'Visibility'}
        data={`${data ? data?.current?.vis_km : 'N/A'} Km`}
        message={
          data
            ? data?.current?.vis_km < 5
              ? 'Bad 😷'
              : data?.current?.vis_km < 12
              ? 'Average 😐'
              : 'Clear 👍'
            : 'N/A'
        }
      />
      <InfoCard
        title={'UV Index'}
        data={`${data ? data?.current?.uv : 'N/A'}`}
        message={data ? (data?.current?.uv > 2 ? 'Use Sunscreen 👍' : 'Go outside today') : 'N/A'}
      />
      <InfoCard
        title={'Air Quality'}
        data={`${data ? data?.current?.air_quality?.pm10 : 'N/A'} µg/m³`}
        message={
          data
            ? data?.current?.air_quality?.pm10 <= 50
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
            : 'N/A'
        }
      />
      <InfoCard
        title={'Pressure'}
        data={`${data ? data?.current?.pressure_mb : 'N/A'} mb/in`}
        message={
          data
            ? data?.current?.pressure_mb >= 1013
              ? 'High Pressure - Expect clear skies 👍'
              : 'Low Pressure - Might be cloudy or rainy ☁️'
            : 'N/A'
        }
      />
      <InfoCard
        title={'Precipitation'}
        data={`${data ? data?.current?.precip_mm : 'N/A'} mm`}
        message={data ? (data?.current?.precip_mm > 0 ? "It's raining 🌧️" : 'No rain ☀️') : 'N/A'}
      />
    </>
  );
});

export default InfoCards;
