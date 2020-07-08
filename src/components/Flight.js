import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Flight (){
    let { flightId } = useParams();
    return(
        <h1> Welcome to flight {flightId} </h1>
    );
}
export default Flight;
