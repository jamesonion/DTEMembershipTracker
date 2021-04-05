import React, { Component } from "react";
import "./default.min.css";
import "./components/Navbar/Navbar.js";
import bgimg from "./assets/img/background.png";

class loginpage extends Component {
  render() {
    return (
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
    );
  }
}

export default loginpage;
