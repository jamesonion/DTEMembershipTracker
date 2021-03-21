import React, { Component } from "react";

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

  render() {
    return (
      <form>
        <label> E-mail </label>
        <div style={{ paddingBottom: "1%" }} />
        <div>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChange={this.handleEmail}
            style={{ borderRadius: 6 }}
          />
        </div>

        <div style={{ paddingBottom: "5%" }} />

        <label> Password </label>
        <div style={{ paddingBottom: "1%" }} />
        <div>
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePassword}
            style={{ borderRadius: 6 }}
          />
        </div>
      </form>
    );
  }
}

export default Form;
