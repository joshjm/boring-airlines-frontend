import React, {Component} from 'react';

import {Link} from "react-router-dom";
import './Navbar.css'
class Navbar extends Component{

    render(){
        return(


<nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
    <div class="container">
      <a class="navbar-brand" href="/">Boring Airlines ©</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
                                  <ul class="navbar-nav ml-auto ">
                                    <li class="nav-item">
                                      <Link to='/flights' class="nav-link">Flights</Link>
                                    </li>
                                    <li class="nav-item">
                                     <Link to='/users' class="nav-link">Users</Link>
                                    </li>  
                                    <li class="nav-item">
                                      <Link to='/serach' class="nav-link">serach</Link>
                                    </li>  
                                    <li class="nav-item">
                                      <Link to='/airplanes' class="nav-link">airplanes</Link>
                                    </li>  
                                    <li class="nav-item">
                                      <Link to='/about' class="nav-link">About</Link>
                                    </li>
                                  </ul>
                              </div>  
                              </div>
  </nav>
        )
    }
}
export default Navbar;