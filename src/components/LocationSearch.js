import React, { useContext } from "react";
import styled from "styled-components";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-google-places-autocomplete";
import { LoadScript } from "@react-google-maps/api";
import { WeatherContext } from "./context/WeatherContext";

const SearchWrapper = styled.div`
  width: 15rem;
`;

export default function LocationSearch() {
  const { getWeatherData } = useContext(WeatherContext);

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
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        id="script-loader"
        libraries={["geometry", "drawing", "places"]}
        version="3"
      >
        <GooglePlacesAutocomplete
          inputStyle={inputStyle}
          suggestionsStyles={suggestionsStyles}
          onSelect={handleSelect}
          placeholder="Enter location"
        />
      </LoadScript>
    </SearchWrapper>
  );
}
