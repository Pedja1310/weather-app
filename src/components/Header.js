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

  -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.45);

  & .logo {
    font-size: 1.4rem;
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
