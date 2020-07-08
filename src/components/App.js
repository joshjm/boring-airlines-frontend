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
// import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* water.css */}
      {/* bootstrap/ */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
      <Router>
        <Navbar/> {/* navbar always gets rendered */}
      <div class='content'>
        <div class='body'>
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
        </div>
      </div>
      </Router>
        {/* <Footer /> not working right now*/}
    </div>
  );
}
