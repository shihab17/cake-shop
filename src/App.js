import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
