import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import FormReg from "../components/Form/FormReg.js";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import signin from "./SignIn"

class Register extends Component {
  render() {
    return (
      <div
        className="form"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "25%",
          //hard coded
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            // backgroundColor: "white",
            // opacity: "65%",
            backgroundColor: "#FFFFFF99",
            // width: "150%",
            padding: "5%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "3px solid black",
            borderRadius: 15,
          }}
        >
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
