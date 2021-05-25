import React from "react";
import CurrentWeatherComponent from "./CurrentWeather";
import HourlyWeatherComponent from "./HourlyWeather";
import WeeklyWeatherComponent from "./WeeklyWeather";

export default function WeatherDataComponents() {
  return (
    <React.Fragment>
      <CurrentWeatherComponent />
      <HourlyWeatherComponent />
      <WeeklyWeatherComponent />
    </React.Fragment>
  );
}
