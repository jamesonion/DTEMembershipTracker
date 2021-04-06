// import React from 'react';
// import { Route, Switch, Redirect  } from 'react-router-dom';
// import Home from "./views/Home/Home";
// import NotFound from "./views/NotFound";
// import NavBar from "./components/Header/NavBar";

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/">
//           <Redirect to="/Home" />
//         </Route>
//         <Route component={NotFound}/>
//       </Switch>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./default.min.css";
import Navigationbar from "./components/Navbar/Navbar.js";
import Usernavigationbar from "./components/Navbar/UserNavbar.js";
import SignIn from "./views/SignIn.js";
import Register from "./views/Register.js";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="bgLayout">
            <Usernavigationbar />
            <Switch>
              <Route path="/" exact component={Register}></Route>
              <Route path="/Register" exact component={Register}></Route>
              <Route path="/SignIn" exact component={SignIn}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
