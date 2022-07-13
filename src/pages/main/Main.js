import React from 'react';
import { Navbar } from 'common/nav';
import { getWeather } from 'services/getWeather';
import { Input } from 'common/input';
import { Loading } from 'common/loading';
import { ErrorMessage } from 'common/error';
import { Units } from 'pages/main/components/unit';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1080px;
  margin-inline: auto;
  padding-inline: 20px;
`;

const MainContainer = styled.div``;

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

const TempContainer = styled.div`
  display: flex;
`;

const CurrentForcast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: #fff;
  font-weight: 500;

  img {
    height: 150px;
  }
`;

const CurrentTemp = styled.div`
  text-align: center;
  flex: 1;
  font-size: clamp(5rem, 5vw, 5rem);
  color: #ec6e4c;
  margin: 0;
  padding-top: 20px;

  span {
    font-weight: 300;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;
const Humidity = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Sun = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span:nth-child(1) {
    color: rgba(256, 256, 256, 0.6);
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
  span:nth-child(2) {
    color: #fff;
    font-size: clamp(1rem, 1.5vw, 2rem);
  }
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
      {(isLoading || !weather) && !error && <Loading />}
      {!isLoading && weather && <div></div>}
      <MainContainer>
        <TempContainer>
          <CurrentTemp>
            {weather?.temp}
            <span>&deg;</span>
          </CurrentTemp>
          <CurrentForcast>
            <img src={weather?.icon} />
            <span>{weather?.forecast}</span>
          </CurrentForcast>
        </TempContainer>
        <Side>
          <Humidity>
            <InfoDiv>
              <span>Feels like</span>
              <span>{weather?.feelsLike}&deg;</span>
            </InfoDiv>
            <InfoDiv>
              <span>Low</span>
              <span>{weather?.tempMin}&deg;</span>
            </InfoDiv>
            <InfoDiv>
              <span>High</span>
              <span>{weather?.tempMax}&deg;</span>
            </InfoDiv>
            <InfoDiv>
              <span>Humidity</span>
              <span>{weather?.humidity}%</span>
            </InfoDiv>
            <InfoDiv>
              <span>Pressure</span>
              <span>{weather?.pressure}</span>
            </InfoDiv>
          </Humidity>
          <Sun>
            <InfoDiv>
              <span>Sunrise</span>
              <span>{weather?.sunrise}</span>
            </InfoDiv>
            <InfoDiv>
              <span>Sunset</span>
              <span>{weather?.sunset}</span>
            </InfoDiv>
            <InfoDiv>
              <span>Wind Speed</span>
              <span>{weather?.windSpeed}</span>
            </InfoDiv>
            <InfoDiv>
              <span>Wind Direction</span>
              <span>{weather?.windDirection}&deg;</span>
            </InfoDiv>
          </Sun>
        </Side>
      </MainContainer>
      {error && <ErrorMessage>{error}. Try Again</ErrorMessage>}
    </Container>
  );
};
