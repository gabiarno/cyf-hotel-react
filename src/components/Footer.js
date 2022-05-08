import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        <li>{props.email}</li>
        <li>{props.address}</li>
        <li>{props.phone}</li>
      </ul>
    </footer>
  );
};

export default Footer;
