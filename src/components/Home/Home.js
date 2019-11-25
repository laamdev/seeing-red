import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="hero">
        <section className="hero__image">
          <h1>We are the Martians</h1>
        </section>
      </div>

      <div className="services">
        <section className="service">
          <img
            className="service__image"
            data-aos="fade-right"
            src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-1.svg?alt=media&token=024575eb-c9ef-4055-8e1c-7a095b6632cc"
            alt="rocket launching"
          />

          <div className="service__content" data-aos="fade-left">
            <h2 className="service__content__title">
              Fly with our state-of-the-art rocket fleet
            </h2>
            <p>
              We have partenered with Space X to give you the quickest and
              safest alternative in outer space travel.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
        </section>

        <section className="service">
          <div className="service__content" data-aos="fade-right">
            <h2 className="service__title">
              Explore the Red Planet any way you want
            </h2>
            <p>
              We offer a series of tour packages that will allow you to travel
              around Mars and its wonders in the fashion that's best adjusted to
              your needs and preferences.
            </p>
            <button className="service__btn">Learn more</button>
          </div>

          <img
            className="service__image"
            data-aos="fade-left"
            src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/planet-1.svg?alt=media&token=ede9fd17-15f6-4a3f-81ca-e72ada512066"
            alt="rocket launching"
          />
        </section>

        <section className="service">
          <img
            className="service__image"
            data-aos="fade-right"
            src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-3.svg?alt=media&token=54b2bc9d-15ed-4719-9614-2fbeaab7a65f"
            alt="rocket launching"
          />

          <div className="service__content" data-aos="fade-left">
            <h2 className="service__title">Feel at home like the Jetsons!</h2>
            <p>
              We offer a wide range of luxurious villa-pods, fully equiped with
              high-speed interplanetary internet, insta-food preparation units,
              and an optional robo-maid.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
