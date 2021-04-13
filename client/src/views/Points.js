import React from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";
import "../default.min.css";

const Points = (props) => {
  return (
    <div>
      {/* Create function and run it here that dynamically updates the properties upon loading the points page */}
      <Usernavigationbar />
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
      {/* Create red box with white outline giving the user's name */}
      <div className="pointsForm">
        <h2 className="navbarFont"> {props.name}</h2>
        {/* Can use a similar approach to the forms by creating another div here and have the following left-align in a smaller inner div */}
        <h3 className="navbarFont"> Meeting Points: {props.meetingPoints} </h3>
        <h3 className="navbarFont"> Event Points: {props.eventPoints} </h3>
        <h1 className="navbarFont"> Total Points: {props.totalPoints} </h1>
        <br /> <br />
        <h1 className="navbarFont"> Requirement Status : {props.status}</h1>
        {/* Experimenting with using a list group from bootstrap but likely not work */}
      </div>
    </div>
  );
};

Points.defaultProps = {
  name: "John Doe",
  meetingPoints: "0",
  eventPoints: "0",
  totalPoints: "0",
  // Incomplete if points are below 5
  status: "Incomplete",
};

export default Points;
