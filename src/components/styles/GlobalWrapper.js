import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function GlobalWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
