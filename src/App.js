import React from "react";
import GlobalWrapper from "./components/styles/GlobalWrapper";
import Header from "./components/Header";
import CurrentWeatherComponent from "./components/CurrentWeather";
import HourlyWeatherComponent from "./components/HourlyWeather";
import WeeklyWeatherComponent from "./components/WeeklyWeather";
import { WeatherProvider } from "./components/context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <GlobalWrapper>
        <Header />
        <CurrentWeatherComponent />
        <HourlyWeatherComponent />
        <WeeklyWeatherComponent />
      </GlobalWrapper>
    </WeatherProvider>
  );
}

export default App;
