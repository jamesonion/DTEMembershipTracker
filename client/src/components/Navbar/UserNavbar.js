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
          <Link
            to="/Register"
            onClick={() => (window.location.href = "/Register")}
          >
            <img
              className="userNavImage"
              src={transparentlogo}
              className="userNavImage"
            />
          </Link>
          <Link
            to="/Events"
            className="userNavLinks"
            style={{
              color: "white",
            }}
            onClick={() => (window.location.href = "/Events")}
          >
            Events
          </Link>
          <Link
            to="/Points"
            className="userNavLinks"
            style={{
              color: "white",
            }}
            onClick={() => (window.location.href = "/Points")}
          >
            Points
          </Link>
          <Link
            to="/Submit"
            className="userNavLinks"
            style={{ color: "white" }}
            onClick={() => (window.location.href = "/Submit")}
          >
            Submit
          </Link>
          <Link
            to="/SignIn"
            className="userNavLinks"
            style={{ color: "white" }}
            onClick={() => (window.location.href = "/SignIn")}
          >
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Usernavigationbar;
