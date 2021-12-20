import React, { useState } from "react";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Header from "./components/Header";
import Registration from "./pages/Registration";



function App() {

  const [currentPage, setPage] = useState("map")

  const navigateTo = (page) => {
    setPage(page)
  }
  return (
    <div className="wrapper">
      <Header navigate={navigateTo} />
      <main>
        {currentPage === "map" && <Map />}
        {currentPage === "profile" && <Profile />}
        {currentPage === "login" && <LogIn navigate={navigateTo} />}
        {currentPage === "registration" && <Registration navigate={navigateTo} />}
      </main>
    </div>
  );
}

export default App;
