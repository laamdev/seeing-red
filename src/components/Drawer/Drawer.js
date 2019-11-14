import React from "react";
import "./Drawer.scss";

const drawer = ({ drawerIsOpen }) => {
  let drawerClasses = "drawer";

  if (drawerIsOpen) {
    drawerClasses = "drawer show";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Destinations</a>
        </li>

        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default drawer;
