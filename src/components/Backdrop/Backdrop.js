import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ backdropClickHandler }) => (
  <div className="backdrop" onClick={backdropClickHandler}></div>
);

export default Backdrop;
