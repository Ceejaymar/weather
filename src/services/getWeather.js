import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (searchValue, unit) => {
  const url = new URL(BASE_URL + 'weather');
  url.search = new URLSearchParams({
    ...determineParam(searchValue),
    units: unit,
    appid: API_KEY,
  });

  const weather = await axios.get(url);

  const forecastUrl = new URL(BASE_URL + 'onecall');

  forecastUrl.search = new URLSearchParams({
    lat: weather.data.coord.lat,
    lon: weather.data.coord.lon,
    exclude: 'current',
    units: unit,
    appid: API_KEY,
  });

  const forecast = await axios.get(forecastUrl);

  return formatWeather(weather.data, forecast.data);
};

const determineParam = (searchValue) => {
  if (isNaN(Number(searchValue))) {
    return { q: searchValue };
  } else if (!isNaN(Number(searchValue))) {
    return { zip: searchValue };
  }
};

const formatWeather = (weatherData, forecastData) => {
  const {
    id,
    name,
    dt,
    visibility,
    weather,
    sys: { sunrise, sunset },
    wind: { deg, speed },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
  } = weatherData;
  const formattedData = {
    id,
    name,
    visibility,
    humidity,
    pressure,
    date: dt,
    sunrise: sunrise,
    sunset: sunset,
    icon: weather[0].icon,
    forecast: weather[0].main,
    temp: Math.round(temp),
    feelsLike: Math.round(feels_like),
    tempMin: Math.round(temp_min),
    tempMax: Math.round(temp_max),
    daily: forecastData.daily.slice(0, 5),
    windSpeed: speed,
    windDirection: deg,
  };

  // const getIcons = () => {
  //   return null;
  // };

  return formattedData;
};
