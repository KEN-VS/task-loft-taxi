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
        <Route path = "/"element = { < LogIn /> }  />
        <Route path = "/registration"element = { < Registration /> }/> 
        <PrivateRoute path = "/map" element = { < Map /> }/> 
        <PrivateRoute path = "/profile" element = { < Profile /> }/> 
        </Routes> 
        </div> 
        
    );
}

export default App;