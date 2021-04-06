import React, { Component } from "react";
import "../default.min.css";
import transparentlogo from "../assets/img/logoTransparent2.png";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Navigationbar from "../components/Navbar/Navbar.js";

function Signin() {
  return (
    <>
      <Navigationbar />
      <div className="testbox">
        <Form className="blur">
          <img src={transparentlogo} />

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "maroon" }}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ color: "maroon" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div class="col-md-12 text-center">
            <Button className="btn btn-danger" type="submit">
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

export default Signin;
