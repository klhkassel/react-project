import React, { useState, useEffect } from "react";
import "./Weather.css";

function FetchWeather() {
  // State
  const [weatherData, setWeatherData] = useState({});
  const [getState, setGetState] = useState("");
  const [state, setState] = useState("philadelphia");

  // API KEY AND URL
  const apiKey = "67e91b06e0778bf999c653a205a52453";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=imperial`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
    setGetState("Weather in " + getState);
  };

  return (
    <div className="Weather">
      <div className="WeatherInput">
        <input
          type="text"
          id="location-name"
          placeholder="enter your new city"
          onChange={inputHandler}
          value={getState}
        />
        <button className onClick={submitHandler}>
          Search
        </button>
      </div>
      <div className="weatherDescription">
        {weatherData.main ? (
          <ul>
            <li>{weatherData.name} ∙ </li>
            <li>Current temp: {weatherData.main.temp}&deg; F ∙ </li>
            <li>Low of: {weatherData.main.temp_min}&deg; F ∙</li>
            <li>High of: {weatherData.main.temp_max}&deg; F ∙</li>
            <li>{weatherData.weather[0].main}</li>
            <li>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
            </li>
          </ul>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default FetchWeather;
