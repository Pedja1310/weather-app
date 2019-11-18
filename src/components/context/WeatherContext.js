import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({ temperature: "" });
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        hourlyWeather,
        setHourlyWeather,
        weeklyWeather,
        setWeeklyWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
