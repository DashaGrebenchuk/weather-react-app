import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  const apiKey = `4fb36667f50c716efb0c9e559b5b7ffe`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Wed</div>
          <WeatherIcon code="01d" size={60} />
          <div>
            <span className="Forecast-max-temp">28°</span>/
            <span className="Forecast-min-temp">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
