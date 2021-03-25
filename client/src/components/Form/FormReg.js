import React, { Component } from "react";
import "../../default.min.css";
import axios from 'axios';

export default class FormReg extends Component {
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
    }
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  onChangeFirstName = (e) => {
    this.setState({
      first_name: e.target.value
    });
  };

  onChangeLastName = (e) => {
    this.setState({
      last_name: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault(); 

    // Create a user with the state data
    const user = {
      password: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };


    // Post the request to the backend
    axios.post('http://localhost:5000/users/add', user) // TODO: When deploying need to make this the web address. Can set the address via environment variables.
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });

  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "45%", paddingRight: "2%" }}>
            <label className="text-form">First Name</label>
            <div style={{ paddingBottom: "1%" }} />
            <div>
              <input
                type="text"
                required
                placeholder="John"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                className="text-field" 
              />
            </div>
          </div>

          <div style={{ width: "45%", paddingLeft: "2%" }}>
            <label className="text-form">Last Name</label>
            <div style={{ paddingBottom: "1%" }} />
            <div>
              <input
                type="text"
                required
                placeholder="Doe"
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                className="text-field"
              />
            </div>
            <div style={{ paddingBottom: "10%" }} />
          </div>
        </div>

        <label className="text-form"> Email </label>
        <div style={{ paddingBottom: "1%" }} />
        <div>
          <input
            type="text"
            required
            placeholder="example@gmail.com"
            value={this.state.email}
            onChange={this.onChangeEmail}
            className="text-field"
          />
        </div>

        <div style={{ paddingBottom: "5%" }} />

        <label className="text-form">Password</label>

        <div style={{ paddingBottom: "1%" }} />
        <div>
          <input
            type="text"
            required
            placeholder="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            className="text-field"
          />
        </div>

        <div style={{ paddingBottom: "10%" }} />
        <button className="signIn" type="submit">
          {" "}
          Create Account{" "}
        </button>
      </form>
    );
  }
}