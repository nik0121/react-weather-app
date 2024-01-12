import React from "react";
import "./Weather.css"

export default function WeatherForecastDay(props){

    function day(){
        let date = new Date(props.forecast.dt*1000);
        let day = date.getDay();

        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }
    return (
      <>
        <div className="WeatherForecast-day">{day()}</div>
        <img
          src={`https://openweathermap.org/img/w/${props.forecast.weather[0].icon}.png`}
          alt={props.forecast.weather[0].description}
        />
        <div className="forecast-temperatures">
          <span className="forecast-temperature-max">
            {Math.round(props.forecast.temp.max)}°{" "}
          </span>
          <span className="forecast-temperature-min">
            {Math.round(props.forecast.temp.min)}°
          </span>
        </div>
      </>
    );
}