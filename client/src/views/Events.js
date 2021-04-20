import React from "react";
import Usernavigationbar from "../components/Navbar/UserNavbar.js";

const Events = () => {
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
        Events Calendar
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=am9zZXBoYnJvZHkxMUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Nm1rbXJrYjZpNG5oYzdqZmEwdGcxM210OW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZHJlYW10ZWFtZW5nLm1lbWJlcnNoaXBAZ21haWwuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;color=%23D50000&amp;color=%23A79B8E&amp;showTitle=0&amp;showNav=1&amp;showPrint=1"
          frameBorder="0"
          style={{
            borderColor: "#777",
            borderStyle: "solid",
            borderRadius: "1px",
            width: "100vh",
            height: "75vh",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Events;