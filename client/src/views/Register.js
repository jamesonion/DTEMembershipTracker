import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import { Link } from "react-router-dom";
import { Form, Button, Nav } from "react-bootstrap";
import Navigationbar from "../components/Navbar/Navbar.js";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeFirstName = (e) => {
    this.setState({
      first_name: e.target.value,
    });
  };

  onChangeLastName = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // Create a user with the state data
    const user = {
      password: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };

    // Post the request to the backend
    axios
      .post("https://dte-app.herokuapp.com/users/add", user) // TODO: When deploying need to make this the web address. Can set the address via environment variables.
      .then(function (response) {
        console.log(response);
        window.location.href = "/Signin";
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  };
  render() {
    return (
      <>
        <Navigationbar></Navigationbar>
        <div className="testbox">
          <Form onSubmit={this.onSubmit}>
            <body>
              <img src={transparentlogo} />
            </body>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "maroon" }}>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "maroon" }}>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                value={this.state.last_name}
                onChange={this.onChangeLastName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "maroon" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "maroon" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </Form.Group>
            <div class="col-md-12 text-center">
              <Button className="btn btn-danger" type="submit">
                Sign Up
              </Button>
            </div>
            <Link
              to="/signin"
              onClick={() => (window.location.href = "/signin")}
            >
              Already have an account? Log in.
            </Link>
          </Form>
        </div>
      </>
    );
  }
}