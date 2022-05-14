import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [items, setItem] = useState(0);
  const orderOneItem = () => {
    setItem(items + 1);
  };
  return (
    <li>
      {props.item}: {items} <RestaurantButton handlClick={orderOneItem} />
    </li>
  );
};

export default Order;
