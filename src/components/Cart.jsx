import React, { useState } from "react";
import pizzas from "./Pizzas";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (pizzaId) => {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    setCart((prevCart) => {
      const existingPizza = prevCart.find((p) => p.id === pizzaId);
      if (existingPizza) {
        return prevCart.map((p) =>
          p.id === pizzaId ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
    updateTotal();
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((p) => (p.id === pizzaId ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0);
      return updatedCart;
    });
    updateTotal();
  };

  const updateTotal = () => {
    const newTotal = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    setTotal(newTotal);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - Cantidad: {pizza.quantity} - Precio: ${pizza.price.toFixed(2)}
            <button onClick={() => addToCart(pizza.id)}>Añadir</button>
            <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
