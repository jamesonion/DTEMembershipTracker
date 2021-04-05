import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import FormReg from "../components/Form/FormReg.js";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

class Register extends Component {
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
            <FormReg />
            {/* Replace this with working react-router and learn to center */}
            <Router>
              <br></br>
              <div>
                <Link
                  to="/SignIn"
                  style={{
                    color: "maroon",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textDecorationLine: "none",
                    // paddingTop: '10px'
                  }}
                >
                  Already have an account? Log in.
                </Link>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
