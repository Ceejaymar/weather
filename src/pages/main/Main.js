import React from 'react';
import { Navbar } from 'common/nav';
import { getWeather } from 'services/getWeather';
import { Input } from 'common/input/Input';
import { ErrorMessage } from 'common/error/ErrorMessage';

export const Main = () => {
  const [weather, setWeather] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('brooklyn');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await getWeather(searchValue);
      setWeather(response);
      setIsLoading(false);
    } catch (err) {
      setError(err.response.statusText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchValue);
  };

  return (
    <>
      <Navbar setValue={setSearchValue} />
      <form onSubmit={handleSubmit}>
        <Input setValue={setSearchValue} />
      </form>
      {isLoading || !weather ? (
        <div>...loading</div>
      ) : (
        <div>
          <h1>{weather.name}</h1>
          <h2>{weather.temp}</h2>
        </div>
      )}
      {error && <ErrorMessage>{error}. Try Again</ErrorMessage>}
    </>
  );
};
