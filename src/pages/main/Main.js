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
  const [measurement, setMeasurement] = React.useState('imperial');

  const IMPERIAL = 'imperial';
  const METRIC = 'metric';

  React.useEffect(() => {
    getWeatherData();
  }, [measurement]);

  const getWeatherData = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await getWeather(searchValue, measurement);
      setWeather(response);
      setIsLoading(false);
    } catch (err) {
      setError(err.response?.statusText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchValue);
  };

  const handleMeasurementChange = (degrees) => {
    setMeasurement(degrees);
  };

  return (
    <>
      <Navbar setValue={setSearchValue} />
      <div>
        <button
          disabled={measurement === IMPERIAL}
          onClick={() => handleMeasurementChange(IMPERIAL)}
        >
          F
        </button>
        |
        <button
          disabled={measurement === METRIC}
          onClick={() => handleMeasurementChange(METRIC)}
        >
          C
        </button>
      </div>
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
