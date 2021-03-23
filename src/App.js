import React, { Component } from "react";
import "./Assets/css/default.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Assets/components/Navbar.js";
import SignIn from "./Assets/components/SignIn";
import Register from "./Assets/components/Register";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Register />
      </div>
    );
  }
}

export default App;
