import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faArrowLeft,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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

function Navigationbar() {
  return (
    <Navbar className="nav-bk" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
      {/* when resizing page */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="https://www.ufdreamteam.org/"
            style={{ color: "white", fontSize:"16px"}} //{/* need to change font */}
          >
            Not a Member? View the DTE website
          </Nav.Link>
        </Nav>

        <a href="https://www.facebook.com/UFDreamTeam/">
          <FontAwesomeIcon icon={faFacebookSquare} className="social" />
        </a>
        <a href="https://www.instagram.com/ufdreamteam/?hl=en">
          <FontAwesomeIcon icon={faInstagram} className="social" />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
