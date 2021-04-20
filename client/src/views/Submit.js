import React from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";

const Submit = () => {
  return (
    <div>
      <Usernavigationbar />
      <h2
        style={{
          color: "white",
          textAlign: "center",
          padding: "1rem",
          fontSize: "50pt",
          textShadow: " 2px 2px 8px #000000",
        }}
      >
        Google Form
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdWgf_KPdiwolnrgosgbcrGfFvpFEJJZ9tkrLh7sOow-DwFbg/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{
            borderColor: "#FFFFFF",
            borderStyle: "solid",
            borderRadius: "4px",
            width: "100vh",
            height: "75vh",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Submit;