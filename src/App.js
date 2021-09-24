import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cologne" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://modest-lamarr-257cde.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanessa Schade
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/The-Travelling-Colognian/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://competent-almeida-bddaf5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
