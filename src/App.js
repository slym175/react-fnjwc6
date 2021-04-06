import React from "react";
import Header from "./partials/Header";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

import "./style.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app-body">Body</div>
      <Footer />
    </div>
  );
}
