import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
// import "./index.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Banner />
  </React.StrictMode>
);
