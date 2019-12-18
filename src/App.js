import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Home from "./views/Home/Home";
import Weather from "./views/Weather/Weather";
import Contact from "./views/Contact/Contact";

const App = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const [backdropIsOpen, setBackdropIsOpen] = useState(false);

  const toggleHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const backdropClickHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  let backdrop;

  if (drawerIsOpen) {
    backdrop = <Backdrop backdropClickHandler={backdropClickHandler} />;
  }

  return (
    <div className="App page-container">
      <Header toggleHandler={toggleHandler} />

      <Drawer drawerIsOpen={drawerIsOpen} />
      {backdrop}

      {children}

      <Footer />
    </div>
  );
};

export default App;
