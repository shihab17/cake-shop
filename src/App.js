import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="">
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/dashboard">

          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
