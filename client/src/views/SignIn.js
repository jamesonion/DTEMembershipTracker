import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Navigationbar from "../components/Navbar/Navbar.js";
import axios from "axios";

//var targetEmail = "";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      users: [],
    };
  }
  
  /*componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }*/

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

  onSubmit = (e) => {
    e.preventDefault();

    /*const user = this.state.users.find(
      (user) =>
        this.state.email === user.email && this.state.password === user.password
    );*/

    const user = {
      email: this.state.email,
      password: this.state.password
    };

 

    axios.post("https://dte-app.herokuapp.com/users/login", user)
     .then(response => {
       console.log(response)
       //console.log(response.status)
       if(response.data.success){
          window.location.href = "/Points";
          document.cookie = `email=${this.state.email}`;
          //targetEmail = this.state.email;
          console.log("success!");
       }else{
        window.location.href = "/SignIn";
       }
      })
     .catch((error) => {
       console.log(error);
       alert(error);
     })
  };


  render() {
    return (
      <>
        <Navigationbar />
        <div className="testbox">
          <Form onSubmit={this.onSubmit}>
            <img src={transparentlogo} />

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
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div class="col-md-12 text-center">
              <Button
                className="btn btn-danger"
                type="submit"
                onClick={this.onSubmit}
              >
                Sign in
              </Button>
            </div>
            <Link
              to="./register"
              onClick={() => (window.location.href = "/register")}
            >
              Don't have an account? Sign Up
            </Link>
          </Form>
        </div>
      </>
    );
  }


}

// console.log("Export: " + targetEmail)
// export {targetEmail};
