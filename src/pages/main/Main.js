import React from 'react';
import { Navbar } from 'common/nav';
import { getWeather } from 'services/getWeather';
import { Input } from 'common/input';
import { Loading } from 'common/loading';
import { ErrorMessage } from 'common/error';
import { Units } from 'pages/main/components/unit';
import { MainCard } from './components/mainCard';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1080px;
  margin-inline: auto;
  padding-inline: 20px;
`;

const Header = styled.h1`
  color: #fff;
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  span {
    color: #ec6e4c;
    font-weight: 700;
  }
`;

const UnitSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 10px 0;
`;

const LoadingStyled = styled(Loading)`
  margin: auto;
`;

export const Main = () => {
  const [weather, setWeather] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('brooklyn');
  const [error, setError] = React.useState('');
  const [unit, setUnit] = React.useState('imperial');

  React.useEffect(() => {
    getWeatherData();
  }, [unit]);

  const getWeatherData = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await getWeather(searchValue, unit);
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

  const handleUnitChange = (degrees) => {
    setUnit(degrees);
  };

  return (
    <Container>
      <Navbar setValue={setSearchValue} date={weather?.date} />
      <Header>
        Currently in <span>{weather?.name}</span>
      </Header>
      <UnitSearch>
        <Units onClick={handleUnitChange} error={error} />
        <form onSubmit={handleSubmit}>
          <Input setValue={setSearchValue} />
        </form>
      </UnitSearch>
      {(isLoading || !weather) && !error && <LoadingStyled />}
      {!isLoading && weather && <MainCard weather={weather} />}
      {error && <ErrorMessage>{error}. Try Again</ErrorMessage>}
    </Container>
  );
};
