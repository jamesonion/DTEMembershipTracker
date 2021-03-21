import Button from "./Button";
import "../css/default.min.css";
import transparentlogo from "../img/logoTransparent2.png";
import Form from "./Form.js";

const Header = () => {
  return (
    <header>
      <div className="bgLayout"></div>

      <div
        className="form"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "35%",
          //hard coded
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF50",
            // width: "150%",
            padding: "5%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "3px solid black",
            borderRadius: 15,
          }}
        >
          <img
            src={transparentlogo}
            alt="logo"
            style={{
              padding: "5%",
            }}
          />
          <Form />
          <div className="text-form">
            {/* <label htmlFor="username">E-mail</label>
            <div style={{ paddingBottom: "1%" }} />
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="example@gmail.com"
                style={{ borderRadius: 6 }}
              ></input>
            </div>
            <div style={{ paddingBottom: "5%" }} /> */}

            {/* <label htmlFor="password"> Password </label>
            <div style={{ paddingBottom: "1%" }} />
            <div className="form-group">
              <input
                type="text"
                id="password"
                placeholder="password"
                style={{ borderRadius: 6 }}
              />
              <div style={{ paddingBottom: "5%" }} /> */}
            {/* </div>
            <Button text="Sign In" name={document.getElementById("name")} /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
