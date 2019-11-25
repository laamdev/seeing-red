import React from "react";

import { NavLink } from "react-router-dom";

import DrawerToggle from "../../Drawer/DrawerToggle";

import "./Navbar.scss";

const navbar = ({ toggleHandler }) => {
  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="navbar__logo">
          <NavLink to="/">
            seeing
            <img
              className="navbar__logo-icon"
              src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/mars-icon.svg?alt=media&token=45304e72-ddf7-44f8-bd68-b3005af53638"
            />
            RED
          </NavLink>
        </div>

        <div className="spacer"></div>

        <div className="navbar__navigation-items">
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
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
