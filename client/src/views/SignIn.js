import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import Form from "../components/Form/Form.js";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div className="form">
        <div className="formDiv">
          <img
            src={transparentlogo}
            alt="logo"
            style={{
              padding: "5%",
            }}
          />
          <div
            style={{
              paddingRight: "20%",
              paddingLeft: "20%",
              paddingBottom: "10%",
            }}
          >
            <Form />
            {/* Replace this with working react-router and learn to center */}
            <Router>
              <br></br>
              <div>
                <Link
                  to="/Register"
                  style={{
                    color: "maroon",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textDecorationLine: "none",
                  }}
                >
                  Don't have an account? Sign Up.
                </Link>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
