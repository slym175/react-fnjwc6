import React from "react";
import Header from "./partials/Header";
import Navbar from "./partials/Navbar";
import Body from "./Body";
import Footer from "./partials/Footer";

import "./App.scss";
import "./style.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
