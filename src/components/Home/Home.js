import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div class="hero-inner">
          <h1>Seeing Red</h1>
          <h2>Travel to Mars with us!</h2>
          <a href="https://example.com/" class="btn">
            Go ahead...
          </a>
        </div>
      </section>

      <section className="services">
        <img
          className="services__image"
          src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-1.svg?alt=media&token=024575eb-c9ef-4055-8e1c-7a095b6632cc"
        />
        <div className="services__content">
          <h3 className="services__title">
            Fly with our state-of-the-art rocket fleet
          </h3>
          <p>
            We have partenered with Space X to give you the quickest and safest
            alternative in outer space travel.
          </p>
          <button>Learn more</button>
        </div>
      </section>

      <section className="services">
        <div className="services__content">
          <h3 className="services__title">
            Explore the Red Planet any way you want
          </h3>
          <p>
            We offer a series of tour packages that will allow you to travel
            around Mars and its wonders in the fashion that's best adjusted to
            your needs and preferences.
          </p>
          <button>Learn more</button>
        </div>
        <img
          className="services__image"
          src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/planet-1.svg?alt=media&token=ede9fd17-15f6-4a3f-81ca-e72ada512066"
          alt="Rocket ready for launch"
        />
      </section>

      <section className="services">
        <img
          className="services__image"
          src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-1.png?alt=media&token=2677408d-28f4-46d7-9520-3e303614fb30"
          alt="Rocket ready for launch"
        />
        <div className="services__content">
          <h3 className="services__title">
            Fly with our state of the art rocket fleet
          </h3>
          <p>We have partenered with Space X</p>
          <button>Learn more</button>
        </div>
      </section>
    </>
  );
};

export default Home;
