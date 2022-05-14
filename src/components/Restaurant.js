import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order item="Pizza" />
        <Order item="Salads" />
        <Order item="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
