import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.info.map(element => (
          <li>element</li>
        ))}
      </ul>
      <div>Footer</div>
    </footer>
  );
};

export default Footer;
