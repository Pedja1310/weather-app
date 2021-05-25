import React, { useContext } from "react";
import WeatherDataComponents from "./WeatherDataComponents";
import LandingPage from "./LandingPage";

import { WeatherContext } from "./context/WeatherContext";

export default function PageSwitcher() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <React.Fragment>
      {Object.entries(currentWeather).length > 0 ? (
        <WeatherDataComponents />
      ) : (
        <LandingPage />
      )}
    </React.Fragment>
  );
}
