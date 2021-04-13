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
import logoWhiteTransparent from "../../assets/img/logoWhiteTransparent.png";
import "../../default.min.css";

function Usernavigationbar() {
  return (
    <Navbar className="nav-bk" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/Register">
            <img
              src={logoWhiteTransparent}
              className="userNavImage"
              alt="dtelogo"
            />
          </Navbar.Brand>

          <Nav.Link
            to="/Events"
            onClick={() => (window.location.href = "/Events")}
          >
            <h3 className="navbarFont">Events</h3>
          </Nav.Link>
          <Nav.Link
            to="/Points"
            onClick={() => (window.location.href = "/Points")}
          >
            <h3 className="navbarFont">Points</h3>
          </Nav.Link>
          <Nav.Link
            to="/Submit"
            onClick={() => (window.location.href = "/Submit")}
          >
            <h3 className="navbarFont">Submit</h3>
          </Nav.Link>
          <Nav.Link
            to="/SignIn"
            onClick={() => (window.location.href = "/SignIn")}
          >
            <h3 className="navbarFont">Logout</h3>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Usernavigationbar;
