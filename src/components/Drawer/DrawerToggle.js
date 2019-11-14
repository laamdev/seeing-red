import React from "react";

import "./DrawerToggle.scss";

const drawerToggle = ({ toggleHandler }) => {
  return (
    <button className="toggle-button" onClick={toggleHandler}>
      <span className="toggle-button__line"></span>
      <span className="toggle-button__line"></span>
      <span className="toggle-button__line"></span>
    </button>
  );
};

export default drawerToggle;
