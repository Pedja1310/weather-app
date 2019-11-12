import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./components/styles/GlobalStyle";
import App from "./App";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
