import React, { useState } from "react";

import useDocumentScrollThrottled from "../../../hooks/useDocumentScrollThrottled";

import { Link } from "react-router-dom";

import DrawerToggle from "../../Drawer/DrawerToggle";

import "./Header.scss";

function Header({ toggleHandler }) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  //we first call our useDocumentScrollThrottled utility "hook" function
  useDocumentScrollThrottled(callbackData => {
    //we capture the previousScrollTop and currentScrollTop values that will be passed back to us when the callback function is invoked on scroll
    //Did you see how we captured the previous scrollTop value? This is one nice feature of useState hooks; they always give us access to the previously stored value!
    const { previousScrollTop, currentScrollTop } = callbackData;
    //we take these arguments and determine if the user has scrolled down (isScrolledDown)
    const isScrolledDown = previousScrollTop < currentScrollTop;
    //and whether or not the minimum scroll position has been reached (isMinimumScrolled).
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    //We then use these values to pass booleans to our useState functions.
    //Finally, our classNames now get set to the correct values when the setShouldShowShadow and setShouldHideHeader hooks are called!

    setShouldShowShadow(currentScrollTop > 2);

    //we place the setShouldHideHeader function inside of a setTimeout to add a bit of delay effect to the header’s hide/show movement after scrolling
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <header className={`header ${hiddenStyle} ${shadowStyle}`}>
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="" className="header__logo__letters">
            seeing
            <img
              className="header__logo__icon"
              src="https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/mars-icon.svg?alt=media&token=45304e72-ddf7-44f8-bd68-b3005af53638"
              alt="Seeing Red logo"
            />
            RED
          </Link>
        </div>

        <div className="spacer" />

        <div className="header__links">
          <ul>
            <li>
              <Link to="/weather" className="header__links__link">
                Weather
              </Link>
            </li>

            {/* <li>
              <NavLink className="header__links__link" to="/contact">
                Contact
              </NavLink>
            </li> */}
          </ul>
        </div>

        <div className="header__toggle-button">
          <DrawerToggle toggleHandler={toggleHandler} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
