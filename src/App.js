import React from "react";
import GlobalWrapper from "./components/styles/GlobalWrapper";
import Header from "./components/Header";
import PageSwitcher from "./components/PageSwitcher";

import { WeatherProvider } from "./components/context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <GlobalWrapper>
        <Header />
        <PageSwitcher />
      </GlobalWrapper>
    </WeatherProvider>
  );
}

export default App;
