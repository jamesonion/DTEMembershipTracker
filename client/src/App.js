import React, { Component } from "react";
import "./default.min.css";
import SignIn from "./views/SignIn.js";
import Register from "./views/Register.js";
import Events from "./views/Events.js";
import Points from "./views/Points.js";
import Submit from "./views/Submit.js";

import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="bgLayout">
            <Switch>
              <Route path="/" exact component={Register}></Route>
              <Route path="/Register" exact component={Register}></Route>
              <Route path="/SignIn" exact component={SignIn}></Route>
              <Route path="/Events" exact component={Events}></Route>
              <Route path="/Points" exact component={Points}></Route>
              <Route path="/Submit" exact component={Submit}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
