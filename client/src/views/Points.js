import { set } from "mongoose";
import React, { Component } from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";
import "../default.min.css";

export default class Points extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "example@gmail.com",
      name: "John Doe",
      meetingPoints: "0",
      eventPoints: "0",
      totalPoints: "0",
      status: "Incomplete",
    };
  }
  // Create function or on component mount that sets the email of the user
  onChangeEmail = (e) => {
    this.setState({
      email: e,
    });
  };

  render() {
    return (
      <>
        <Usernavigationbar />
        <div>
          {/* Create function and run it here that dynamically updates the properties upon loading the points page */}
          <h1
            style={{
              color: "white",
              textAlign: "center",
              padding: "1rem",
              paddingBottom: "2rem",
              fontSize: "50pt",
              textShadow: " 2px 2px 8px #000000",
            }}
          >
            Points
          </h1>
          <div className="pointsForm">
            <h2 className="navbarFont"> {this.state.name}</h2>
            <h3 className="navbarFont">
              Meeting Points: {this.state.meetingPoints}
            </h3>
            <h3 className="navbarFont">
              Event Points: {this.state.eventPoints}
            </h3>
            <h1 className="navbarFont">
              Total Points: {this.state.totalPoints}
            </h1>
            <br /> <br />
            <h1 className="navbarFont">
              Requirement Status : {this.state.status}
            </h1>
          </div>
        </div>
      </>
    );
  }
}
