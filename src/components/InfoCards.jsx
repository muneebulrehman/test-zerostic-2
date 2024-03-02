import React from 'react';

import InfoCard from './InfoCard';

const InfoCards = ({ data }) => {
  return (
    <div>
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
        title={'Wind Speed'}
        data={`${data?.current?.wind_kph} Km/h`}
        message={data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊'}
      />
      <InfoCard
        title={'Wind Speed'}
        data={`${data?.current?.wind_kph} Km/h`}
        message={data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊'}
      />
      <InfoCard
        title={'Wind Speed'}
        data={`${data?.current?.wind_kph} Km/h`}
        message={data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊'}
      />
      <InfoCard
        title={'Wind Speed'}
        data={`${data?.current?.wind_kph} Km/h`}
        message={data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊'}
      />
      <InfoCard
        title={'Wind Speed'}
        data={`${data?.current?.wind_kph} Km/h`}
        message={data?.current?.wind_kph > 30 ? 'Windy 🌪️' : 'Normal 😊'}
      />
    </div>
  );
};

export default InfoCards;
