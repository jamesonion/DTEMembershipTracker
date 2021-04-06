import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import transparentlogo from "../../assets/img/logoTransparent2.png";

function Usernavigationbar() {
  return (
    <Navbar className="nav-bk" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ul className="userLinks">
            <li>
              <img
                src={transparentlogo}
                style={{ height: "100%", width: "100%" }}
              />
            </li>
            {/* Style these links */}
            <li>
              <Link
                to="/Points"
                onClick={() => (window.location.href = "/Points")}
              >
                Points
              </Link>
            </li>
            <li>
              <Link
                to="/Events"
                onClick={() => (window.location.href = "/Events")}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/Submit"
                onClick={() => (window.location.href = "/Submit")}
              >
                Submit
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Usernavigationbar;
