import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";

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
      <div className="App page-container" stlye={{ height: "100%" }}>
        <Navbar toggleHandler={toggleHandler} />

        <Drawer drawerIsOpen={drawerIsOpen} />
        {backdrop}

        <main>
          <Switch>
            <Route path="/" component={Home} exact></Route>

            <Route path="/about" component={About} exact></Route>

            <Route path="/contact" component={Contact} exact></Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
