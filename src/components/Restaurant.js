import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);
  const orderOnePizza = () => {
    setPizzas(pizzas + 1);
  };

  const [salads, setSalads] = useState(0);
  const orderOneSalad = () => {
    setSalads(salads + 1);
  };

  const [cake, setCake] = useState(0);
  const orderOneCake = () => {
    setCake(cake + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order totalOrders={pizzas} orderOne={orderOnePizza} item="Pizza" />
        <Order totalOrders={salads} orderOne={orderOneSalad} item="Salads" />
        <Order
          totalOrders={cake}
          orderOne={orderOneCake}
          item="Chocolate cake"
        />
      </ul>
    </div>
  );
};

export default Restaurant;
