import React from "react";

import "./Footer.scss";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__items">
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
    </footer>
  );
};

export default footer;
