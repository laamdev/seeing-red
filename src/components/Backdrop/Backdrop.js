import React from "react";
import "./Backdrop.scss";

const backdrop = ({ backdropClickHandler }) => (
  <div className="backdrop" onClick={backdropClickHandler}></div>
);

export default backdrop;
