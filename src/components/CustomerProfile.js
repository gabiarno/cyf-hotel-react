import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(result => result.json())
      .then(profile => {
        setCustomer(profile);
      });
  }, [props.id]);

  return (
    <div>
      <h3>Customer Profile:</h3>

      <button onClick={props.onClose} className="btn btn-primary">
        Close profile
      </button>
      <table class="table">
        <thead>
          <th scope="col">Id</th>
          <th scope="col">First name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">VIP</th>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.vip ? "VIP" : "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProfile;
