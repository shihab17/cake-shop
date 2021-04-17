import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

export const LoggedInContext  = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <LoggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
    </LoggedInContext.Provider>
  );
}

export default App;
