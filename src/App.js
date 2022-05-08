import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer
        address="123 Fake Street, London, E1 4UD"
        email="hello@fakehotel.com"
        phone="0123 456789"
      />
    </div>
  );
};

export default App;
