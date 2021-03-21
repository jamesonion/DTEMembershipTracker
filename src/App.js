import React, { Component } from "react";
import "./Assets/css/default.min.css";
import Navbar from "./Assets/components/Navbar.js";

import home from "./Assets/components/Mainpage.js"

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
