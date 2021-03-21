import React, { Component } from "react";
import "../css/default.min.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/Mainpage">Not a member? Visit the DTE website.</a>
            </li>

            <li>
              <a href="https://www.instagram.com/ufdreamteam/?hl=en">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/UFDreamTeam/">Facebook</a>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default Navbar;
