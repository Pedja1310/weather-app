import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const getWeatherData = async ({ lat, lng }) => {
    const openWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`;

    const response = await fetch(openWeatherEndpoint);
    const weatherReport = await response.json();
    const { current, hourly, daily } = weatherReport;

    setCurrentWeather(current);
    setHourlyWeather(hourly);
    setWeeklyWeather(daily);
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        hourlyWeather,
        weeklyWeather,
        getWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
