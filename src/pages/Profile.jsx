import React from "react";
import Header from "../components/Header";
import Payment from "../components/Payment";



function Profile() {

  return (
    <>
      <Header />
      <div className="main-content container profile">
        <section className="profile-section">
          <Payment />
        </section>
      </div>
    </>
  )
}

export default Profile