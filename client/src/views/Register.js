import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import { Link } from "react-router-dom";
import { Form, Button, Nav } from "react-bootstrap";

function Register() {
  return (
    <div className="testbox" >
      <div style={{opacity:"20%"}}></div>
      <Form>
        <body>
          <img src={transparentlogo} />
        </body>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ color: "maroon" }}>First Name</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ color: "maroon" }}>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Joe" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{ color: "maroon" }}>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ color: "maroon" }}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div class="col-md-12 text-center">
          <Button className="btn btn-danger" type="submit">
            Sign Up
          </Button>
        </div>
        <Link to="/signin" onClick={() => (window.location.href = "/signin")}>
          Already have an account? Log in.
        </Link>
      </Form>
    </div>
  );
}

export default Register;
