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
import Navbar from "./components/Navbar/Navbar.js";
import SignIn from "./views/SignIn.js";
import Register from "./views/Register.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignIn />
      </div>
    );
  }
}

export default App;
