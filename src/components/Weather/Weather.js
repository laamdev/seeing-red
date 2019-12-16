import React, { useEffect, useState } from "react";
import { getItem } from "../../methods/generalMethods";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getItem(
      "https://api.nasa.gov/insight_weather/?api_key=FTxOBfLQCG314D5aXesXFxGafjtCdj3SWlJYCgJ4&feedtype=json&ver=1.0"
    )
      .then(res => {
        setWeather(res);
        setLoad(true);
      })
      .catch(err => {
        setError(err);
        setLoad(true);
      });
  }, []);

  if (load) {
    const today = weather.sol_keys[weather.sol_keys.length - 1];

    return (
      <div>
        {error ? (
          <p>{error.message}</p>
        ) : (
          <>
            <p>SOL {today}</p>
            <p>MIN TEMP: {weather[today].AT.mn}°C</p>
            <p>MAX TEMP: {weather[today].AT.mx}°C</p>
          </>
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Weather;

// https://api.nasa.gov/insight_weather/?api_key=FTxOBfLQCG314D5aXesXFxGafjtCdj3SWlJYCgJ4&feedtype=json&ver=1.0
