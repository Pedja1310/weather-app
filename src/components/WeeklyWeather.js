import React, { useContext } from "react";
import styled from "styled-components";
import DailyWeatherCard from "./DailyWeatherCard";
import { WeatherContext } from "./context/WeatherContext";

const WeeklyWeather = styled.section`
  height: 30%;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function WeeklyWeatherComponent() {
  const { weeklyWeather } = useContext(WeatherContext);

  return (
    <WeeklyWeather>
      {weeklyWeather.map(item => (
        <DailyWeatherCard item={item} key={item.time} />
      ))}
    </WeeklyWeather>
  );
}
