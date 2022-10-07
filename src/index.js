import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { PostContextProvider } from "./use-context/post-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);
