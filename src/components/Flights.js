import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Flights.css'
import './App.css'
import axios from 'axios';
const SERVER_URL = 'http://localhost:3001/flights' // location of rails backend

let testNum =3;
class Flights extends Component{
    constructor(){
        super();
        
        this.state={ // seed data
            flights: [],
        }

        const fetchFlights = () => {
            axios.get(SERVER_URL).then((results) => {this.setState({flights: (results.data)});}).then(console.log())
            setTimeout(fetchFlights, 6000); // recursively get new updates
        }
        fetchFlights();
    }
    render(){
        return(
            <div>
                <h2>Boring Airlines</h2>
                <h3>Create a flight</h3>
                <form>
                    <div class='form-group'>
                        <input class='form-control' type='text' id='flightNumber' placeholder='Flight #'></input>
                    </div>
                    <div class='form-group'>
                        <input class='form-control' type='text' id='date' placeholder='Date'></input>
                    </div>
                    <div class='form-group'>
                        <input class='form-control' type='text' id='to' placeholder='to'></input>
                    </div>
                    <div class='form-group'>
                        <input class='form-control' type='text' id='from' placeholder='from'></input>
                    </div>
                    <div class='form-group'>
                        <input class='form-control' type='text' id='plane' placeholder='plane'></input>
                    </div>
                    <button id='cancel' class="btn btn-primary">Cancel</button>
                    <button id='save' class="btn btn-primary">Save</button>
                </form>
                <ul>
                <li>
                    <Link to ={`/flight/${testNum}`}>Flight {testNum}</Link>
                </li>
                </ul>
                <h3>Flight Table:</h3>
                {this.state.flights.map(function(flight){
                    return(
                    <ul>
                        <li><p>{flight.id}</p></li>
                        <li><p>{flight.flight_number}</p></li>
                        <li><p>{flight.origin}</p></li>
                        <li><p>{flight.destination}</p></li>
                        <li><p>{flight.date}</p></li>
                    </ul>
                    )
                })}
    
            </div>
        )
    }
}

export default Flights;