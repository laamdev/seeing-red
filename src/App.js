import React, { useState } from "react";

import Navbar from "./components/Layout/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Home from "./components/Home/Home";
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
    <div className="App page-container" stlye={{ height: "100%" }}>
      <div id="content-wrap">
        <Navbar toggleHandler={toggleHandler} />

        <Drawer drawerIsOpen={drawerIsOpen} />
        {backdrop}

        <main>
          <Home />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
