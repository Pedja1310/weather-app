import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const getWeatherData = async ({ lat, lng }) => {
    const darkSkyEndpoint = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/${lat},${lng}?units=si&exclude=minutely,flags,reports,alerts`;

    const response = await fetch(darkSkyEndpoint);
    const weatherReport = await response.json();
    const { currently, hourly, daily } = weatherReport;

    setCurrentWeather(currently);
    setHourlyWeather(hourly.data);
    setWeeklyWeather(daily.data.slice(1));
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        hourlyWeather,
        weeklyWeather,
        getWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
