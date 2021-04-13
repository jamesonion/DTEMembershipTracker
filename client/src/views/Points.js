import React from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";
import { ListGroup } from "react-bootstrap";

const Points = (props) => {
  return (
    <div>
      <Usernavigationbar />
      <h1
        style={{
          color: "white",
          textAlign: "center",
          padding: "1rem",
          paddingBottom: "2rem",
        }}
      >
        Points
      </h1>
      {/* Create red box with white outline giving the user's name */}
      <div className="pointsForm">
        <h2
          style={{
            color: "white",
            padding: "3rem",
            fontWeight: "bold",
          }}
        >
          YOUR NAME
        </h2>

        {/* Can use a similar approach to the forms by creating another div here and have the following left-align in a smaller inner div */}
        <h3 className="pointsField"> Meeting Points: {props.meetingPoints} </h3>
        <h3 className="pointsField"> Event Points: {props.eventPoints} </h3>
        <h3 className="pointsField"> Total Points: {props.totalPoints} </h3>
        <h3 className="pointsField"> Requirement Status : {props.status} </h3>

        {/* Experimenting with using a list group from bootstrap but likely not work */}
        {/*
        <ListGroup>
          <ListGroup.Item> Meeting Points </ListGroup.Item>
        </ListGroup> */}
      </div>
    </div>
  );
};

Points.defaultProps = {
  meetingPoints: "0",
  eventPoints: "0",
  // cannot add meetingPoints + eventPoints because they are not intialized yet, find a way for the database to connect to these and change them
  totalPoints: "0",
  status: "incomplete",
};

export default Points;
