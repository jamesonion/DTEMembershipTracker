import React, { Component } from "react";
import "../css/default.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //will change this to console.log when error is fixed
    alert(
      "firstName: " +
        this.state.firstName +
        " lastName: " +
        this.state.lastName +
        " email:" +
        this.state.email +
        " password: " +
        this.state.password
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "45%", paddingRight: "2%" }}>
            <label
              style={{
                fontFamily: "verdana",
                fontWeight: "italic",
                color: "#990000",
                fontSize: "1rem",
              }}
            >
              First Name
            </label>
            <div style={{ paddingBottom: "1%" }} />
            <div>
              <input
                type="text"
                placeholder="John"
                value={this.state.firstName}
                onChange={this.handleFirstName}
                className="text-field"
              />
            </div>
          </div>

          <div style={{ width: "45%", paddingLeft: "2%" }}>
            <label
              style={{
                fontFamily: "verdana",
                fontWeight: "italic",
                color: "#990000",
                fontSize: "1rem",
              }}
            >
              Last Name
            </label>
            <div style={{ paddingBottom: "1%" }} />
            <div>
              <input
                type="text"
                placeholder="Doe"
                value={this.state.lastName}
                onChange={this.handleLastName}
                className="text-field"
              />
            </div>
            <div style={{ paddingBottom: "10%" }} />
          </div>
        </div>

        <label
          style={{
            fontFamily: "verdana",
            fontWeight: "italic",
            color: "#990000",
            fontSize: "1rem",
          }}
        >
          {" "}
          Email{" "}
        </label>
        <div style={{ paddingBottom: "1%" }} />
        <div>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChange={this.handleEmail}
            className="text-field"
          />
        </div>

        <div style={{ paddingBottom: "5%" }} />

        <label
          style={{
            fontFamily: "verdana",
            fontWeight: "italic",
            color: "#990000",
            fontSize: "1rem",
          }}
        >
          {" "}
          Password{" "}
        </label>
        <div style={{ paddingBottom: "1%" }} />
        <div>
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePassword}
            className="text-field"
          />
        </div>

        <div style={{ paddingBottom: "10%" }} />
        <button className="signIn" type="submit">
          {" "}
          Request Account{" "}
        </button>
      </form>
    );
  }
}

export default Form;
