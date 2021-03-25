import React, { Component } from "react";
import "../default.min.css"
import transparentlogo from "../assets/img/logoTransparent2.png"
import Form from "../components/Form/Form.js"

const Header = () => {
    return (
      <header>
        <div className="bgLayout"></div>
  
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
              backgroundColor: "#FFFFFF85",
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
              <Form />
              {/* Replace this with working react-router and learn to center */}
              <div style={{ paddingBottom: "5%" }} />
              <a href=""> Request An Account </a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  