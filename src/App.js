import React from "react";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import Context from "./Context";
import { Route, Routes } from 'react-router-dom';



function App() {

  // const [currentPage, setPage] = useState("login")

  const [isLoggedIn, setLoggedIn] = React.useState(false)

  const logIn = (email, password) => {
    if (email !== "valid@email.com" || password !== "correctpassword") {
      return
    }
    setLoggedIn(true)
  }

  const logOut = () => {
    setLoggedIn(false)
  }

  // const navigateTo = (page) => {

  //   setPage(page)

  // }

  return (
    <Context.Provider value={{ logIn, logOut, isLoggedIn }}>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<LogIn />} exact />
          <Route path="/registration" element={<Registration />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* {currentPage === "login" && <LogIn />}
          {currentPage === "registration" && <Registration />}
          {currentPage === "map" && <Map />}
          {currentPage === "profile" && <Profile />} */}

      </div>
    </Context.Provider>
  );
}

export default App;
