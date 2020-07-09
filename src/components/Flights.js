import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Flights.css'
import './App.css'
import axios from 'axios';
const SERVER_URL = 'http://localhost:3001/flights' // location of rails backend

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
                <h3>Flight Table:</h3>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Flight Number</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.flights.map(function(flight){
                            return(
                            <tr>
                                <td >  {flight.id} </td>
                                <td >  {flight.flight_number} </td>
                                <td >  {flight.origin} </td>
                                <td >  {flight.destination} </td>
                                <td >  {flight.date} </td>
                                <td > <Link to ={`/flight/${flight.id}`}> view/edit </Link> </td>

                            </tr>
                            )

                        })}
                    
                    </tbody>
                </table>
    
            </div>
        )
    }
}

export default Flights;