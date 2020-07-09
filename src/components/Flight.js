import axios from 'axios';
import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// Dummy data till we get the GET working
// want to use the function useParams() to get the VREyeParameters, to feed into the GET. 
let flightData = { 
  "id": 1,
  "flight_number": "QF097",
  "origin": "Brisbane",
  "destination": "Sydney",
  "date": "20/02/2020",
  "created_at": "2020-07-08T21:41:10.814Z",
  "updated_at": "2020-07-08T21:41:10.814Z"
  }
function Flight(){
  return(
    <div class ='content'>
      {/* <h1> Welcome to flight {flightId} </h1> */}
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
          <tr>
              <td >  {flightData.id} </td>
              <td >  {flightData.flight_number} </td>
              <td >  {flightData.origin} </td>
              <td >  {flightData.destination} </td>
              <td >  {flightData.date} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Flight;
