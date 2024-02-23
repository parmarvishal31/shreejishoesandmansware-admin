import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Toaster } from "react-hot-toast";
const baseUrl = process.env.REACT_APP_BASE_URL;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Provider store={store}>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
