import React from "react";
import styled from "styled-components";
import Skycons from "react-skycons";
import {
  formatIconName,
  formatUnix,
  roundTemperature
} from "../helpers/helpers";

const Card = styled.div`
  width: 13%;
  padding: 0.3rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #fff;

  -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .day {
    display: flex;
    justify-content: center;
  }
`;

export default function DailyWeatherCard({ item }) {
  const { temperatureLow, temperatureHigh, icon, time } = item;
  // TODO fix indetation before github push
  return (
    <Card>
      <div className="temperature">
        <p>
          Min:           {roundTemperature(temperatureLow)}
          <span>&#8451;</span>
        </p>
        <p>
          Max:           {roundTemperature(temperatureHigh)}
          <span>&#8451;</span>
        </p>
      </div>
      <div className="icon">
        <Skycons icon={formatIconName(icon)} color="white" />
      </div>
      <div className="day">
        <p>{formatUnix(time, "ddd")}</p>
      </div>
    </Card>
  );
}
