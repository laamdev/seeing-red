import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ toggleHandler }) => (
  <div className="backdrop" onClick={toggleHandler}></div>
);

export default Backdrop;
