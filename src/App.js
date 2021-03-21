import React, { Component } from "react";
import "./Assets/css/default.min.css";
import Navbar from "./Assets/components/Navbar.js";



class App extends Component {
  render() {
    return (

        <div>
          <Navbar />
          <div className="bgLayout"></div>
          
        </div>

    );
  }
}

export default App;
