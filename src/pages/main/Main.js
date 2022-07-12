import React from 'react';
import { Navbar } from 'common/nav';
import { getWeather } from 'services/getWeather';

export const Main = () => {
  const [weather, setWeather] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    const getWeatherData = async () => {
      setIsLoading(true);
      const response = await getWeather('brooklyn');
      setWeather(response);
      setIsLoading(false);
    };

    getWeatherData();
  }, []);

  return (
    <div>
      {console.log('value', searchValue)}
      <Navbar setValue={setSearchValue} />
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
