import React, { Component } from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";
import "../default.min.css";
import getPointsByEmail from "../spreadsheet.js";
import './SignIn'
// import SignIn from './SignIn'


export default class Points extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      meetingPoints: "",
      eventPoints: "",
      totalPoints: "",
      status: "",
    };

  }
  // Create function or on component mount that sets the email of the user

  async componentDidMount() {

   // const targetEmail = SignIn.targetEmail;

    // console.log(props.targetEmail)

    var str = document.cookie.substr(document.cookie.indexOf('email=') + 6);

    const targetEmail = str.substring(0, str.indexOf(';'));



    var result;

    try {
    //   console.log("here");
      result = await getPointsByEmail(targetEmail);
    //   console.log("leaving");
    } catch (err) {
      // console.log(err);
      alert(err);
    }

    console.log("result:" + result);

    this.setState({
      email: targetEmail, 
      name: targetEmail,
      meetingPoints: (result.meeting_points == "undefined" ? 0 : result.meeting_points),
      eventPoints: (result.event_points == "undefined" ? 0 : result.meeting_points),
      // meetingPoints: result.meeting_points,
      // eventPoints: result.event_points,
      status: (parseInt(result.total_points) >= 5 ? "Complete" : "Incomplete"),
      totalPoints: result.total_points,
    });
  }

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