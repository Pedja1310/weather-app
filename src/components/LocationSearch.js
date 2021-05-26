import React, { useContext } from "react";
import styled from "styled-components";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { WeatherContext } from "./context/WeatherContext";

const SearchWrapper = styled.div`
  width: 15rem;
`;

export default function LocationSearch() {
  const { getWeatherData } = useContext(WeatherContext);

  const handleSelect = async (e) => {
    try {
      const geocode = await geocodeByAddress(e.label);
      const latLng = await getLatLng(geocode[0]);
      getWeatherData(latLng);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchWrapper>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        onSelect={handleSelect}
        placeholder="Enter location"
        selectProps={{
          onChange: handleSelect,
        }}
      />
    </SearchWrapper>
  );
}
