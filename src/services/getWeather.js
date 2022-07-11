import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b72c1341722e6f5c5f2307681e344d0d';

export const getWeather = async (searchValue) => {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({
    ...determineParam(searchValue),
    units: 'imperial',
    appid: API_KEY,
  });
  const response = await axios.get(url);
  return formatWeather(response.data);
};

const determineParam = (searchValue) => {
  if (isNaN(Number(searchValue))) {
    return { q: searchValue };
  } else if (!isNaN(Number(searchValue))) {
    return { zip: searchValue };
  }
};

const formatWeather = (weatherData) => {
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
  };

  // const getIcons = () => {
  //   return null;
  // };

  return formattedData;
};