import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);

  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index) {
                if (index < 6) {
                    return (
                      <div className="col" key={index}>
                        <WeatherForecastDay forecast={dailyForecast} />
                      </div>
                    );
                }
            })}
         
        </div>
      </div>
    );
  } else {
    let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
