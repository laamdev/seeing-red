import React from "react";
import "./Drawer.scss";
import { Link } from "react-router-dom";

const drawer = ({ drawerIsOpen }) => {
  let drawerClasses = "drawer";

  if (drawerIsOpen) {
    drawerClasses = "drawer show";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/weather">Weather</Link>
        </li>

        {/* <li>
          <a href="/">Destinations</a>
        </li>

        <li>
          <a href="/">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default drawer;
