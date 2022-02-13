import React from "react";
import GlobalStyle from "../src/styles/global";
import HomePage from "./pages/HomePage";
export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}
