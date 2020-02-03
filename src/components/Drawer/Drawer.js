import React from "react";
import "./Drawer.scss";
import { Link } from "react-router-dom";

const Drawer = ({ drawerIsOpen, toggleHandler }) => {
  let drawerClasses = "drawer";

  if (drawerIsOpen) {
    drawerClasses = "drawer show";
  }

  return (
    <nav className={drawerClasses}>
      <button onClick={toggleHandler} className="drawer__toggle">
        X
      </button>
      <Link to="/weather" className="drawer__link" onClick={toggleHandler}>
        Weather
      </Link>
      <Link to="/rovers" className="drawer__link" onClick={toggleHandler}>
        Rovers
      </Link>
    </nav>
  );
};

export default Drawer;
