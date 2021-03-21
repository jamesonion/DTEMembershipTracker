import React, { Component } from "react";
import "../css/default.min.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
      
            <li>
              <Link to={"/Mainpage"}>Not a member? Sign in</Link>
            </li>
          
        </nav>
      </Router>
    );
  }
}

export default Navbar;
