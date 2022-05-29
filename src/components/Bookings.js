import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

console.log("FakeBookings", FakeBookings);

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const newBooks = bookings.filter(booking => {
      return (
        booking.surname.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(newBooks);
  };
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setBookings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        if (!loading) {<SearchResults results={bookings} />} else{" "}
        {
          <div className="alert alert-primary" role="alert">
            Loading..
          </div>
        }
      </div>
    </div>
  );
};

export default Bookings;
