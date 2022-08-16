import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Wed</div>
          <WeatherIcon code="01d" size="60" />
          <div>
            <span className="Forecast-max-temp">28°</span>/
            <span className="Forecast-min-temp">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
