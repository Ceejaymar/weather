import React from 'react';
import { getWeather } from './api';

export const Main = () => {
  const [weather, setWeather] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    const getWeatherData = async () => {
      setIsLoading(true);
      // console.log(navigator.geolocation.getCurrentPosition());
      const response = await getWeather('brooklyn');
      console.log('weather', response);
      setWeather(response);
      setIsLoading(false);
    };

    getWeatherData();
  }, []);

  return (
    <div>
      weather
      {isLoading || !weather ? (
        <div>...loading</div>
      ) : (
        <div>
          <h1>{weather.name}</h1>
          <h2>{weather.temp}</h2>
        </div>
      )}
    </div>
  );
};

// http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
