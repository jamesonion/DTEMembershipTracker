import React, { Component } from "react";
import "./Assets/css/default.min.css";
import Navbar from "./Assets/components/Navbar.js";
import bgimg from "./Assets/img/background.png";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
        ></div>
      </div>
    );
  }
}

export default App;
