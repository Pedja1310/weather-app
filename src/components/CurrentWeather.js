import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "./context/WeatherContext";

const CurrentWeather = styled.section`
  height: 35%;
  width: 40%;
  margin: 0 auto;
  padding: 0.5rem;
  padding-top: 2rem;

  & h1 {
    margin: 0;
  }
`;

export default function CurrentWeatherComponent() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <CurrentWeather>
      <div className="outterContainer">
        <div className="topSection">
          <p>{currentWeather.temperature}</p>
        </div>
        <div className="bottomSeciton" />
      </div>
    </CurrentWeather>
  );
}
