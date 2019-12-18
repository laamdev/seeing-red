import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Home from "./views/Home/Home";
import Weather from "./views/Weather/Weather";
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
            <Route path="/seeing-red" component={Home} exact />

            <Route path="/weather" component={Weather} exact />

            <Route path="/contact" component={Contact} exact />
          </Switch>
        </main>

        {/* <div className="vertical-spacer"></div> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
