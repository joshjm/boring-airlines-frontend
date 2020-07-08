import React from 'react';
import './App.css';
import Home from './Home'
import Users from './Users'
import About from './About'
import Navbar from './Navbar'
import Airplanes from './Airplanes'
import Search from './Search'
import Flights from './Flights'
import Flight from './Flight'

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Navbar/> {/* navbar always gets rendered */}

        <Switch>
          <Route path="/about" component={About}/>

          <Route path="/users">
            <Users />
          </Route>
          
          <Route path="/airplanes">
            <Airplanes/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/flights">
            <Flights/>
          </Route>

          <Route path="/flight/:flightId"> 
            <Flight/>
          </Route>

          <Route path="/"> {/* KEEP ME AT THE BOTTOM */}
            <Home />
          </Route>
        </Switch>

    </Router>
  );
}
