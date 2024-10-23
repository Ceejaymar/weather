import axios from 'axios';
import { format } from 'date-fns';

const BASE_URL = 'https://api.openweathermap.org/data/3.0/';
const CITY_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const POLLUTION_URL = new URL(
  'https://api.openweathermap.org/data/2.5/air_pollution'
);
const forecastUrl = new URL(BASE_URL + 'onecall');
const API_KEY = process.env.REACT_APP_API_KEY;

const getLatLon = async (searchValue) => {
  const cityUrl = new URL(CITY_URL);

  cityUrl.search = new URLSearchParams({
    q: searchValue,
    limit: 1,
    appid: API_KEY,
  });

  const response = await axios.get(cityUrl);

  if (!response.data || response.data.length === 0) {
    throw new Error('Location not found');
  }

  const location = response.data[0];
  return {
    cityName: location.name || searchValue,
    latitude: location.lat,
    longitude: location.lon,
  };
};

export const getWeather = async (searchValue, unit) => {
  const { cityName, latitude, longitude } = await getLatLon(searchValue);

  forecastUrl.search = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    units: unit,
    appid: API_KEY,
  });

  const forecast = await axios.get(forecastUrl);

  POLLUTION_URL.search = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    appid: API_KEY,
  });

  const pollution = await axios.get(POLLUTION_URL);

  return formatWeather(cityName, forecast.data, pollution.data);
};

const formatWeather = (cityName, forecastData, pollutionData) => {
  const daily = forecastData.daily.slice(1, 6).map((day) => {
    return { ...day, dt: format(day.dt * 1000, 'iii') };
  });

  const {
    dt,
    visibility,
    weather,
    sunrise,
    sunset,
    wind_deg,
    wind_speed,
    temp,
    feels_like,
    humidity,
    pressure,
  } = forecastData.current;

  const formattedData = {
    current: {
      cityName,
      visibility,
      humidity,
      pressure,
      date: format(dt * 1000, 'iiii, MMMM do'),
      sunrise: format(sunrise * 1000, 'p'),
      sunset: format(sunset * 1000, 'p'),
      icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      forecast: weather[0].main,
      temp: Math.round(temp),
      feelsLike: Math.round(feels_like),
      tempMin: Math.floor(forecastData.daily[0].temp.min),
      tempMax: Math.round(forecastData.daily[0].temp.max),
      windSpeed: wind_speed,
      windDirection: wind_deg,
      co: Math.round(pollutionData.list[0].components.co),
    },
    daily,
  };

  return formattedData;
};
