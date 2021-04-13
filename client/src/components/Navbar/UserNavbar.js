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

function Usernavigationbar() {
  return (
    <Navbar className="nav-bk" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            to="/Register"
            onClick={() => (window.location.href = "/Register")}
          >
            <img className="userNavImage" src={logoWhiteTransparent} />
          </Nav.Link>
          <Nav.Link
            to="/Events"
            style={{
              color: "white",
              fontSize: "1.75rem",
              fontWeight: "bold",
              padding: "1.5rem",
            }}
            onClick={() => (window.location.href = "/Events")}
          >
            Events
          </Nav.Link>
          <Nav.Link
            to="/Points"
            style={{
              color: "white",
              fontSize: "1.75rem",
              fontWeight: "bold",
              padding: "1.5rem",
            }}
            onClick={() => (window.location.href = "/Points")}
          >
            Points
          </Nav.Link>
          <Nav.Link
            to="/Submit"
            style={{
              color: "white",
              fontSize: "1.75rem",
              fontWeight: "bold",
              padding: "1.5rem",
            }}
            onClick={() => (window.location.href = "/Submit")}
          >
            Submit
          </Nav.Link>
          <Nav.Link
            to="/SignIn"
            style={{
              color: "white",
              fontSize: "1.75rem",
              fontWeight: "bold",
              padding: "1.5rem",
            }}
            onClick={() => (window.location.href = "/SignIn")}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Usernavigationbar;