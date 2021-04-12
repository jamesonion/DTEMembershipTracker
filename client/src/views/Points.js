import React from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";
import { ListGroup } from "react-bootstrap";

const Points = () => {
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
        <h3 className="pointsField"> Meeting Points: </h3>
        <h3 className="pointsField"> Event Points: </h3>
        <h3 className="pointsField"> Total Points: </h3>
        <h3 className="pointsField"> Requirement Status : </h3>

        {/* Experimenting with using a list group from bootstrap but likely not work */}
        {/*
        <ListGroup>
          <ListGroup.Item> Meeting Points </ListGroup.Item>
        </ListGroup> */}
      </div>
    </div>
  );
};

export default Points;
