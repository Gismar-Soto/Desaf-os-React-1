import React from "react";
import Cart from "./Cart";
import pizzas from "./Pizzas";

const Home = () => {
  return (
    <div>
      <Cart pizzas={pizzas} />
    </div>
  );
};

export default Home;