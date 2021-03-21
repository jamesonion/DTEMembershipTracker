import React, { Component } from "react";
import "../css/default.min.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import iglogo from "../img/iglogo.png";
import fblogo from "../img/fblogo.png";
import home from './Mainpage'


class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/Mainpage">Not a member? Create an Account now!</Link>
              
            </li>
            <li>
              <a href="https://www.facebook.com/UFDreamTeam/">
                <img className="fblogo" src={fblogo} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ufdreamteam/?hl=en">
                <img className="inslogo" src={iglogo} />
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
