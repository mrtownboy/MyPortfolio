import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import MyComponent from "./MyComponent";

ReactDOM.render(
  <React.StrictMode>
    <MyComponent /> {/* Render your custom component here */}
  </React.StrictMode>,
  document.getElementById("root")
);
