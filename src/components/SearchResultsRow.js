import React from "react";
import moment from "moment";

const SearchResultsRow = props => {
  const checkIn = moment(props.row.checkInDate);
  const checkOut = moment(props.row.checkOutDate);
  const nights = checkOut.diff(checkIn, "days");
  return (
    <tr>
      <td scope="row">{props.row.id}</td>
      <td>{props.row.title}</td>
      <td>{props.row.firstName}</td>
      <td>{props.row.surname}</td>
      <td>{props.row.email}</td>
      <td>{props.row.roomId}</td>
      <td>{props.row.checkInDate}</td>
      <td>{props.row.checkOutDate}</td>
      <td>{nights}</td>
    </tr>
  );
};

export default SearchResultsRow;
