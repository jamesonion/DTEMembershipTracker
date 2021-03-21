import React, { Component } from "react";
import "./Assets/css/default.min.css";
import "./Assets/components/Navbar.js";
import bgimg from "./Assets/img/background.png";

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
