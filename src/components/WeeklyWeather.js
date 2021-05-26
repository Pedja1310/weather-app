import React, { useContext } from "react";
import styled from "styled-components";
import DailyWeatherCard from "./DailyWeatherCard";
import { WeatherContext } from "./context/WeatherContext";

const WeeklyWeather = styled.section`
  height: 30%;
  width: 90%;
  margin: 0 auto;
  padding: 0 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  width: 90%;
  height: 2rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export default function WeeklyWeatherComponent() {
  const { weeklyWeather } = useContext(WeatherContext);

  return (
    <React.Fragment>
      <Title>
        <p>Weekly Weather Prediction</p>
      </Title>
      <WeeklyWeather>
        {weeklyWeather.map((item, index) =>
          index > 0 ? <DailyWeatherCard item={item} key={item.time} /> : null
        )}
      </WeeklyWeather>
    </React.Fragment>
  );
}
