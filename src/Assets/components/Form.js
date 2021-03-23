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
    };
  }

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

  handleSignIn = (event) => {
    //will change this to console.log when error is fixed
    alert("email:" + this.state.email + " password: " + this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSignIn}>
        <label className="text-form">Email</label>
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

        <label className="text-form">Password</label>

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
          Sign In{" "}
        </button>
      </form>
    );
  }
}

export default Form;
