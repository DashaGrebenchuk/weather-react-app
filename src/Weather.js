import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";
import { InfinitySpin } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      highest: response.data.main.temp_max,
      lowest: response.data.main.temp_min,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = `4fb36667f50c716efb0c9e559b5b7ffe`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handlePosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const apiKey = `4fb36667f50c716efb0c9e559b5b7ffe`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    });
  }

  if (weatherdata.ready) {
    return (
      <div className="container">
        <form className="input-group mb-3 search-tab" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control shadow"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button
            className="btn btn-outline-light search-button shadow"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
          <button
            className="btn btn-outline-light current-button shadow"
            onClick={handlePosition}
          >
            Current location
          </button>
        </form>
        <div className="card-box">
          <WeatherInfo data={weatherdata} />
          <Forecast coords={weatherdata.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <InfinitySpin width="200" color="#6C6CC2" />
      </div>
    );
  }
}
