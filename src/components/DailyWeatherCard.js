import React from "react";
import styled from "styled-components";
import { formatUnix, roundTemperature } from "../helpers/helpers";

const Card = styled.div`
  width: 13%;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;

  -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .average {
    font-size: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & .cels {
      font-size: 1rem;
      align-self: start;
      padding-top: 0.9rem;
      padding-left: 0.1rem;
    }
  }

  & .day {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 1rem;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    & .temperature,
    .day {
      font-size: 1.2rem;
    }
  }
`;

export default function DailyWeatherCard({ item }) {
  const { temp, dt } = item;
  return (
    <Card>
      <div className="day">
        <p>{formatUnix(dt, "ddd")}</p>
      </div>
      <div className="average">
        <p>{roundTemperature(temp.day)}</p>
        <span className="cels">&#8451;</span>
      </div>
      <div className="temperature">
        <p>
          Min: {roundTemperature(temp.min)}
          <span>&#8451;</span>
        </p>
        <p>
          Max: {roundTemperature(temp.max)}
          <span>&#8451;</span>
        </p>
      </div>
    </Card>
  );
}
