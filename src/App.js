import React, { useState, useContext } from "react";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import { Context } from "./Context";



function App() {

  const [currentPage, setPage] = useState("login")



  const navigateTo = (page) => {
    setPage(page)
  }

  return (
    <Context.Provider value={{ navigateTo }}>
      <div className="wrapper">
        {currentPage === "login" && <LogIn />}
        {currentPage === "registration" && <Registration />}
        {currentPage === "map" && <Map />}
        {currentPage === "profile" && <Profile />}
      </div>
    </Context.Provider>
  );
}

export default App;
