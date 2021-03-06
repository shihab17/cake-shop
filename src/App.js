import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
import DashBoard from './Components/DashBoard/DashBoard';
import AddService from './Components/DashBoard/AddService/AddService';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import UserDashBoard from './Components/UserDashBoard/UserDashBoard';
import Review from './Components/UserDashBoard/Review/Review';
import BookOrder from './Components/UserDashBoard/BookOrder/BookOrder';
import BookingList from './Components/UserDashBoard/BookingList/BookingList';
import OrderList from './Components/DashBoard/OrderList/OrderList';

export const LoggedInContext = createContext();
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
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/bookingList'>
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/user'>
            <UserDashBoard></UserDashBoard>
          </PrivateRoute>
          <PrivateRoute path='/addBooking'>
            <BookOrder></BookOrder>
          </PrivateRoute>
          <PrivateRoute path='/booking'>
          <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <Review></Review>
          </PrivateRoute>


          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </LoggedInContext.Provider>
  );
}

export default App;
