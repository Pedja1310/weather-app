import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "./context/WeatherContext";

const LandingPageComponent = styled.div`
  color: #f2f2f2;
  width: 90%;
  margin: 0 auto;
  padding: 4rem;

  & .mainHeading {
    font-size: 4rem;
    margin: 0;
    margin-bottom: 1.7rem;
  }

  & .subHeading {
    width: 55%;
    font-size: 1.2rem;
  }

  & button {
    margin-top: 6rem;
    padding: 1rem 4rem;
    border-radius: 30px;
    border: none;
    -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  }

  & button:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }

  & button:active {
    outline: none;
  }
`;

export default function LandingPage() {
  const { getWeatherData } = useContext(WeatherContext);

  const getClientLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latLng = {};
      latLng.lat = position.coords.latitude;
      latLng.lng = position.coords.longitude;
      getWeatherData(latLng);
    });
  };

  return (
    <LandingPageComponent>
      <h1 className="mainHeading">WeatherApp</h1>
      <div className="subHeading">
        <p>
          Click on the button and press allow to see local weather, or use
          search box in the top right corner.
        </p>
      </div>
      <button type="button" onClick={getClientLocation}>
        Get Local Weather
      </button>
    </LandingPageComponent>
  );
}
