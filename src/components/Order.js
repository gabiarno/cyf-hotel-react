import React from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  return (
    <li>
      {props.item}: {props.totalOrders}{" "}
      <RestaurantButton handlClick={props.orderOne} />
    </li>
  );
};

export default Order;
