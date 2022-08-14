import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import { InfinitySpin } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherdata, setWeatherdata] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = `4fb36667f50c716efb0c9e559b5b7ffe`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    search();
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
          <button className="btn btn-outline-light current-button shadow">
            Current location
          </button>
        </form>
        <WeatherInfo data={weatherdata} />
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
