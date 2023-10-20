import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Worke from "./components/Worke";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
    </Router>
    <Banner />
    <Skill />
    <Worke />
  </React.StrictMode>
);
