import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div``;

const TempContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const CurrentForecast = styled.div`
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

const WeatherInfoOne = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const WeatherInfoTwo = styled.div`
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

export const MainCard = ({ weather }) => (
  <MainContainer>
    <TempContainer>
      <CurrentTemp>
        {weather.temp}
        <span>&deg;</span>
      </CurrentTemp>
      <CurrentForecast>
        <img src={weather.icon} />
        <span>{weather.forecast}</span>
      </CurrentForecast>
    </TempContainer>
    <Side>
      <WeatherInfoOne>
        <InfoDiv>
          <span>Feels like</span>
          <span>{weather.feelsLike}&deg;</span>
        </InfoDiv>
        <InfoDiv>
          <span>Low</span>
          <span>{weather.tempMin}&deg;</span>
        </InfoDiv>
        <InfoDiv>
          <span>High</span>
          <span>{weather.tempMax}&deg;</span>
        </InfoDiv>
        <InfoDiv>
          <span>Humidity</span>
          <span>{weather.humidity}%</span>
        </InfoDiv>
        <InfoDiv>
          <span>Pollution</span>
          <span>{weather.co}co</span>
        </InfoDiv>
      </WeatherInfoOne>
      <WeatherInfoTwo>
        <InfoDiv>
          <span>Sunrise</span>
          <span>{weather.sunrise}</span>
        </InfoDiv>
        <InfoDiv>
          <span>Sunset</span>
          <span>{weather.sunset}</span>
        </InfoDiv>
        <InfoDiv>
          <span>Wind Speed</span>
          <span>{weather.windSpeed}</span>
        </InfoDiv>
        <InfoDiv>
          <span>Wind Direction</span>
          <span>{weather.windDirection}&deg;</span>
        </InfoDiv>
      </WeatherInfoTwo>
    </Side>
  </MainContainer>
);

MainCard.propTypes = {
  weather: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    forecast: PropTypes.string.isRequired,
    feelsLike: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    co: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.number.isRequired,
  }),
};
