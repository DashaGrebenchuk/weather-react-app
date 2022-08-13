import React, { useState } from "react";
import axios from "axios";
import icon from "./icons_new/03d.png";
import "./Weather.css";
import { InfinitySpin } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherdata.ready) {
    return (
      <div className="container">
        <form className="input-group mb-3 search-tab">
          <input
            type="text"
            className="form-control shadow"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="on"
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

        <div className="card-box">
          <div className="row">
            <div className="col-6">
              <h1 className="main-city">{weatherdata.city}</h1>
              <h2 className="current-date">
                <FormattedDate date={weatherdata.date} />
              </h2>
              <h3 className="description">{weatherdata.description}</h3>
              <img src={icon} alt={weatherdata.description} className="icon" />
            </div>
            <div className="col-6 main-temp">
              <h2 className="current-temp">
                {Math.round(weatherdata.temperature)}
                <a href="/" className="active celcius-link">
                  °C{" "}
                </a>
              </h2>
              <h4 className="day-temp">
                <strong>{Math.round(weatherdata.temperature)}°</strong>/ 17°
              </h4>
              <p className="forecast-info">
                Wind: {Math.round(weatherdata.wind)} m/s
                <br />
                Humidity: {weatherdata.humidity} %
              </p>
            </div>
          </div>
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
