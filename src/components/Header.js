import React from "react";
import styled from "styled-components";
import LocationSearch from "./LocationSearch";

const Navbar = styled.nav`
  width: 100%;
  padding: 0 5%;
  margin: 0 auto;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & .logo {
    font-size: 1.2rem;
    color: #fff;
  }
`;

export default function Header() {
  return (
    <Navbar>
      <div className="logo">
        <p>WeatherApp</p>
      </div>
      <LocationSearch />
    </Navbar>
  );
}
