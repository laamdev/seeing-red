import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

function App() {
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
    <Router>
      <div className="App page-container">
        <Header toggleHandler={toggleHandler} />

        <Drawer drawerIsOpen={drawerIsOpen} />
        {backdrop}

        <main>
          <Switch>
            <Route path="/" component={Home} exact></Route>

            <Route path="/about" component={About} exact></Route>

            <Route path="/contact" component={Contact} exact></Route>
          </Switch>
        </main>

        <div className="vertical-spacer"></div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
