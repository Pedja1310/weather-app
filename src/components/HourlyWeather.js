import React, { useContext } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { WeatherContext } from "./context/WeatherContext";
import { roundTemperature, formatUnix } from "../helpers/helpers";

const HourlyWeather = styled.section`
  height: 30%;
  width: 90%;
  margin: 0 auto;

  -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
`;

export default function HourlyWeatherComponent() {
  const { hourlyWeather } = useContext(WeatherContext);

  const temepratureData = hourlyWeather
    .filter((item, index) => index < 24)
    .map((item) => roundTemperature(item.temp));

  const temepratureLabels = hourlyWeather
    .filter((item, index) => index < 24)
    .map((item) => `${formatUnix(item.dt, "HH")}h`);

  const chartData = {
    labels: temepratureLabels,
    datasets: [
      {
        label: "24 Hour prediction",
        data: temepratureData,
        fill: false,
        borderColor: "rgba(255, 255, 255, 0.7)",
        pointBackgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    ],
  };

  const chartOpions = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "24 Hour Prediction",
      fontColor: "rgba(255,255,255, 0.5)",
    },
    legend: { display: false },
    scales: {
      xAxes: [
        {
          offset: true,
          gridLines: {
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            fontColor: "rgba(255,255,255, 0.5)",
          },
        },
      ],
      yAxes: [
        {
          offset: true,
          gridLines: {
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            fontColor: "rgba(255,255,255, 0.5)",
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      {hourlyWeather.length === 0 ? null : (
        <HourlyWeather>
          <Line data={chartData} options={chartOpions} />
        </HourlyWeather>
      )}
    </React.Fragment>
  );
}
