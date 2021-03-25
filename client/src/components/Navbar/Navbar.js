import React, { Component } from "react";
import "../../default.min.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
//import iglogo from "../img/iglogo.png";
//import fblogo from "../img/fblogo.png";
import home from "../../views/Mainpage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <ul style={{ width: "23%" }}>
            <li>
              <Link to="/Mainpage">Not a member? Create an Account now!</Link>
            </li>
          </ul>
          <ul
            style={{
              float: "float",
              width: "73%",
            }}
          >
            <li>
              <a href="https://www.facebook.com/UFDreamTeam/">
                <FontAwesomeIcon icon={faFacebookSquare} className="social" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ufdreamteam/?hl=en">
                <FontAwesomeIcon icon={faInstagram} className="social" />
              </a>
            </li>
          </ul>
          <Route path="/Mainpage" component={home} />
        </nav>
      </Router>
    );
  }
}
export default Navbar;
