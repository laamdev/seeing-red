import React, { useEffect, useState } from "react";
import { getApiCall } from "../../methods/generalMethods";
import "./Weather.scss";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getApiCall(
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

    const season = weather[today].Season;

    let season_icon;

    //! < CONDITIONAL RENDERING OF SEASON ICON ----------
    if (season === "spring") {
      season_icon = (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/spring.svg?alt=media&token=de8eacaf-785d-41ed-8d93-06d5ef8d12bf"
          alt="spring season icon"
          className="weather__season__icon"
        />
      );
    } else if (season === "summer") {
      season_icon = (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/summer.svg?alt=media&token=c1c802db-e89c-4733-87b4-734b95370d09"
          alt="summer season icon"
          className="weather__season__icon"
        />
      );
    } else if (season === "fall") {
      season_icon = (
        <img
          src="https://console.firebase.google.com/u/0/project/seeing-red/storage/seeing-red.appspot.com/files"
          alt="fall season icon"
          className="weather__season__icon"
        />
      );
    } else if (season === "winter") {
      season_icon = (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/winter.svg?alt=media&token=d9095b14-0524-4247-ba4c-93f8b2144f4e"
          alt="winter season icon"
          className="weather__season__icon"
        />
      );
    }
    //!---------- CONDITIONAL RENDERING OF SEASON ICON />

    return (
      <section className="weather">
        {error ? (
          <p>{error.message}</p>
        ) : (
          <>
            <h1 className="weather__day">sol {today}</h1>

            <div className="weather__season">
              {season_icon}
              <h2 className="weather__season__text">{season}</h2>
            </div>

            <div className="weather__temp">
              <div className="weather__temp__max">
                <img
                  className="weather__temp__icon"
                  src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/max-temp.svg?alt=media&token=587ae349-b4e3-438e-b16e-b1657ac2021c"
                  alt="maximum temperature icon"
                />
                <h3 className="weather__temp__text">
                  {weather[today].AT.mx.toFixed(1)}°C
                </h3>
              </div>

              <div className="weather__temp__min">
                <img
                  className="weather__temp__icon"
                  src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/min-temp.svg?alt=media&token=9c136708-306f-4a68-9948-83406aa1ea25"
                  alt="minimum temperature icon"
                />
                <h3 className="weather__temp__text">
                  {weather[today].AT.mn.toFixed(1)}°C
                </h3>
              </div>
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
