import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

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
    <div className="App" stlye={{ height: "100%" }}>
      <Navbar toggleHandler={toggleHandler} />
      <Drawer drawerIsOpen={drawerIsOpen} />
      {backdrop}
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;
