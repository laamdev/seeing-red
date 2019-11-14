import React from "react";

import DrawerToggle from "../Drawer/DrawerToggle";

import "./Navbar.scss";

const navbar = ({ toggleHandler }) => {
  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="navbar__logo">
          <a href="/">The Logo</a>
        </div>

        <div className="spacer"></div>

        <div className="navbar__navigation-items">
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
        </div>
        <div className="navbar__toggle-button">
          <DrawerToggle toggleHandler={toggleHandler} />
        </div>
      </nav>
    </header>
  );
};

export default navbar;
