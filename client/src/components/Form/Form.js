import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { Component } from "react";
import "../../default.min.css"

export default class Form extends Component {
    constructor(props) {
      super(props);

      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        email: "",
        password: "",
        users: []
      }
    }

    componentDidMount() {
      axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

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
  
    onSubmit = (e) => {

      e.preventDefault();

      const user = this.state.users.find(user => this.state.email === user.email)
      if(user != undefined)
        alert('Logged In!')
      else
        alert('Incorrect User')
      
      

      
      // axios.get('http://localhost:5000/users/', {email: this.state.email})
      // .then(response => {
      //   console.log(response.data)
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
    }
  
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <label className="text-form">Email</label>
          <div style={{ paddingBottom: "1%" }} />
          <div>
            <input
              type="text"
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
              placeholder="password"
              value={this.state.password}
              onChange={this.onChangePassword}
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
  