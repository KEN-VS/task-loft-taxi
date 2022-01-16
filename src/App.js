import React from "react";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";



function App() {


    return ( 
        <div className = "wrapper">
        <Routes >
            <Route path = "/" element = { < LogIn /> }  />
            <Route path = "/registration" element = { < Registration /> }/> 
            <Route path = "/map" element = { <PrivateRoute>< Map /></PrivateRoute> }/> 
            <Route path = "/profile" element = { <PrivateRoute>< Profile /></PrivateRoute> }/> 
        </Routes> 
        </div> 
        
    );
}

export default App;