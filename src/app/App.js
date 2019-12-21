import React, { useState } from "react";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

import Drawer from "../components/Drawer/Drawer";
import Backdrop from "../components/Backdrop/Backdrop";

import useKeyboardEvent from "../hooks/useKeyboardEvent";

const App = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  // const [backdropIsOpen, setBackdropIsOpen] = useState(false);

  //----------------opens drawer when HAMBURGUER MENU is clicked
  //----------------closes drawer when BACKDROP is clicked
  const toggleHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  //----------------closes drawer when ESC is clicked
  useKeyboardEvent("Escape", () => {
    if (drawerIsOpen) {
      setDrawerIsOpen(!drawerIsOpen);
    }
  });

  //----------------conditional rendering of backdrop

  let backdrop;

  if (drawerIsOpen) {
    backdrop = <Backdrop toggleHandler={toggleHandler} />;
  }

  return (
    <div className="App page-container">
      <Header toggleHandler={toggleHandler} />
      <Drawer drawerIsOpen={drawerIsOpen} toggleHandler={toggleHandler} />

      {backdrop}

      {children}

      <Footer />
    </div>
  );
};

export default App;
