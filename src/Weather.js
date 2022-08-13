import React from "react";
import icon from "./icons_new/03d.png";
import "./Weather.css";

export default function Weather() {
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
            <h1 className="main-city">Warsaw</h1>
            <p className="current-date">Tueasday 16:21</p>
            <h3 className="description">Cloudy</h3>
            <img src={icon} alt="clear-sky" className="icon" />
          </div>
          <div className="col-6 main-temp">
            <h2 className="current-temp">
              25
              <a href="/" className="active celcius-link">
                °C{" "}
              </a>
            </h2>
            <h4 className="day-temp">
              <strong>25°</strong>/ 17°
            </h4>
            <p className="forecast-info">
              Wind: 18 m/s
              <br />
              Humidity: 80 %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
