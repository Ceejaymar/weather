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
    sys: { sunrise, sunset },
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
  } = weatherData;
  const formattedData = {
    id,
    name,
    date: dt,
    visibility,
    sunrise: sunrise,
    sunset: sunset,
    icon: weather[0].icon,
    forecast: weather[0].main,
    temp: Math.round(temp),
    feelsLike: Math.round(feels_like),
    tempMin: Math.round(temp_min),
    tempMax: Math.round(temp_max),
    humidity,
    daily: forecastData.daily.slice(0, 5),
  };

  // const getIcons = () => {
  //   return null;
  // };

  return formattedData;
};
