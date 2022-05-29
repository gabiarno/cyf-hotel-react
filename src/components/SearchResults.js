import React, { useState } from "react";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = props => {
  console.log("props", props.results);
  const [customerId, setCustomerId] = useState(null);

  return (
    <div>
      SearchResults
      <table class="table">
        <thead>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of nights</th>
          <th scope="col" />
        </thead>
        <tbody>
          {props.results.map(result => (
            <SearchResultsRow row={result} setCustomerId={setCustomerId} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
