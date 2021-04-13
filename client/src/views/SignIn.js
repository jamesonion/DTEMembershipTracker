import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Navigationbar from "../components/Navbar/Navbar.js";
import axios from "axios";

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
  componentDidMount() {
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

  onSubmit = (e) => {
    e.preventDefault();

    const user = this.state.users.find(
      (user) =>
        this.state.email === user.email && this.state.password === user.password
    );
    if (user != undefined) alert("Logged In!");
    else alert("Invalid Email or Password.");

    // axios.get('http://localhost:5000/users/', {email: this.state.email})
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
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
      // <div
      //   className="form"
      //   style={{
      //     position: "absolute",
      //     left: "50%",
      //     top: "50%",
      //     width: "25%",
      //     //hard coded
      //     transform: "translate(-50%, -50%)",
      //   }}
      // >
      //   <div
      //     style={{
      //       // backgroundColor: "white",
      //       // opacity: "85%",
      //       backgroundColor: "#FFFFFF99",
      //       // width: "150%",
      //       padding: "5%",

      //       display: "flex",
      //       flexDirection: "column",
      //       justifyContent: "center",
      //       border: "3px solid black",
      //       borderRadius: 15,
      //     }}
      //   >
      // <img
      //   src={transparentlogo}
      //   alt="logo"
      //   style={{
      //     padding: "5%",
      //   }}
      // />
      //     <div
      //       style={{
      //         paddingRight: "20%",
      //         paddingLeft: "20%",
      //         paddingBottom: "10%",
      //       }}
      //     >
      //       <Form />
      //       {/* Replace this with working react-router and learn to center */}
      //       <Router>
      //         <br></br>
      //         <div>
      //           <Link
      //             to="/Register"
      //             style={{
      //               color: "maroon",
      //               fontFamily: "sans-serif",
      //               fontWeight: "bold",
      //               textDecorationLine: "none",
      //               // paddingTop: '10px'
      //             }}
      //           >
      //             Don't have an account? Sign Up.
      //           </Link>
      //         </div>
      //       </Router>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
