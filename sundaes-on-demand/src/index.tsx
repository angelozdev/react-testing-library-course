import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* Contexts */
import { Order } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Order.Provider>
      <App />
    </Order.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
