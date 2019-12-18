import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  duration: 1200,
  once: true
});

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
