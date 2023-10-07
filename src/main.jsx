import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skill from "./components/Skill";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Skill />
  </React.StrictMode>
);
