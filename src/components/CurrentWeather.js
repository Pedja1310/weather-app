import React, { useContext } from "react";
import styled from "styled-components";
import Skycons from "react-skycons";
import { WeatherContext } from "./context/WeatherContext";
import { formatIconName, roundTemperature } from "../helpers/helpers";

const CurrentWeather = styled.section`
  height: 25%;
  width: 90%;
  margin: 1rem auto;
  padding: 0.5rem 2rem;
  padding-right: 0;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);

  & .weatherInformation {
    display: flex;
    flex-direction: row;

    & .currentTemp {
      height: 100%;
      width: 150px;
      font-size: 8rem;
      display: flex;
      justify-content: center;
    }

    & .weatherStats {
      padding: 1.6rem;
      font-size: 0.9rem;
      line-height: 1.8;
    }
  }

  & .icon {
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .summary {
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;

export default function CurrentWeatherComponent() {
  const { currentWeather } = useContext(WeatherContext);

  return (
    <>
      <CurrentWeather>
        <div className="weatherInformation">
          <div className="currentTemp">
            <p className="temp">
              {roundTemperature(currentWeather.temperature)}
            </p>
          </div>
          <div className="weatherStats">
            <p>
              Feels Like:               {roundTemperature(currentWeather.apparentTemperature)}
              <span>&#8451;</span>
            </p>
            <p>
Wind Speed:
{' '}
{currentWeather.windSpeed}
{' '}
m/s
{' '}
</p>
            <p>Humidity: {currentWeather.humidity * 100}%                         </p>
            <p>
Pressure:
{' '}
{currentWeather.pressure}
{' '}
mBar
{' '}
</p>
          </div>
        </div>
        <div className="icon">
          <Skycons icon={formatIconName(currentWeather.icon)} color="white" />
          <p className="summary">{currentWeather.summary}</p>
        </div>
      </CurrentWeather>
    </>
  );
}
