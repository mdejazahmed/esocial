import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeContextProvider} from "../src/context/ThemeContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
