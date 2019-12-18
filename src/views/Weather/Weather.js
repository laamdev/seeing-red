import React, { useEffect, useState } from "react";
import { getItem } from "../../methods/generalMethods";
import "./Weather.scss";

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
      <section className="weather">
        {error ? (
          <p>{error.message}</p>
        ) : (
          <>
            <h1 className="weather__today">sol {today}</h1>

            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/spring.svg?alt=media&token=de8eacaf-785d-41ed-8d93-06d5ef8d12bf"
                alt=""
                className="weather__temp-icon"
              />
              <h2 className="weather__season">{weather[today].Season}</h2>
            </div>

            <div className="weather__temp">
              <img
                className="weather__temp-icon"
                src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/min-temp.svg?alt=media&token=9a574ef9-86aa-4e31-b0b0-ce4f14122006"
              />
              <h3 className="weather__temp-min-max">
                min. {weather[today].AT.mn}°C
              </h3>
            </div>

            <div className="weather__temp">
              <img
                className="weather__temp-icon"
                src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/max-temp.svg?alt=media&token=24ca8a50-2cfd-4fc6-a5cd-a864b4a46fa4"
              />
              <h3 className="weather__temp-min-max">
                max. {weather[today].AT.mx}°C
              </h3>
            </div>
          </>
        )}
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Weather;

// https://api.nasa.gov/insight_weather/?api_key=FTxOBfLQCG314D5aXesXFxGafjtCdj3SWlJYCgJ4&feedtype=json&ver=1.0
