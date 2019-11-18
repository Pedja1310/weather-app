import React, { useContext } from "react";
import styled from "styled-components";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-google-places-autocomplete";
import { WeatherContext } from "./context/WeatherContext";

const SearchWrapper = styled.div`
  width: 15rem;
`;

export default function LocationSearch() {
  const { setCurrentWeather, setWeeklyWeather, setHourlyWeather } = useContext(
    WeatherContext
  );

  const getWeatherData = async ({ lat, lng }) => {
    const darkSkyEndpoint = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/${lat},${lng}?units=si&exclude=minutely,flags,reports,alerts`;
    const response = await fetch(darkSkyEndpoint);
    const weatherReport = await response.json();
    const { currently, hourly, daily } = weatherReport;

    setCurrentWeather(currently);
    setHourlyWeather(hourly.data);
    setWeeklyWeather(daily.data.slice(1));
  };

  const handleSelect = async e => {
    try {
      const geocode = await geocodeByAddress(e.description);
      const latLng = await getLatLng(geocode[0]);
      getWeatherData(latLng);
    } catch (error) {
      console.error(error);
    }
  };

  const inputStyle = {
    width: "100%",
    borderRadius: "4px"
  };

  const suggestionsStyles = {
    container: {
      width: "100%"
    }
  };

  return (
    <SearchWrapper>
      <GooglePlacesAutocomplete
        inputStyle={inputStyle}
        suggestionsStyles={suggestionsStyles}
        onSelect={handleSelect}
        placeholder="Enter location"
      />
    </SearchWrapper>
  );
}
