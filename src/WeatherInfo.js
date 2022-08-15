import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="card-box">
      <div className="row">
        <div className="col-6">
          <h1 className="main-city">{props.data.city}</h1>
          <h2 className="current-date">
            <FormattedDate date={props.data.date} />
          </h2>
          <h3 className="description">{props.data.description}</h3>
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={80} />
          </div>
        </div>
        <div className="col-6 main-temp">
          <h2 className="current-temp">
            {Math.round(props.data.temperature)}
            <a href="/" className="active celcius-link">
              °C{" "}
            </a>
          </h2>
          <h4 className="day-temp">
            <strong>{Math.round(props.data.temperature)}°</strong>/ 17°
          </h4>
          <p className="forecast-info">
            Wind: {Math.round(props.data.wind)} m/s
            <br />
            Humidity: {props.data.humidity} %
          </p>
        </div>
      </div>
    </div>
  );
}
