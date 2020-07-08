import React from 'react';
import {Link} from "react-router-dom";
import './Flights.css'
import './App.css'
let testNum =3;
let currentFlights = {}
export default function Flights(){
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
            

        </div>
    )
}