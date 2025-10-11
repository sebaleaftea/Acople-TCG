import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    setCart(storedCart);
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('carrito', JSON.stringify(newCart));
  };

  const addToCart = (nombre, precio) => {
    const newCart = [...cart];
    const idx = newCart.findIndex(item => item.nombre === nombre && item.precio === precio);
    if (idx !== -1) {
      newCart[idx].cantidad += 1;
    } else {
      newCart.push({ nombre, precio, cantidad: 1 });
    }
    saveCart(newCart);
  };

  const removeFromCart = (idx) => {
    const newCart = [...cart];
    newCart.splice(idx, 1);
    saveCart(newCart);
  };

  const increaseQuantity = (idx) => {
    const newCart = [...cart];
    newCart[idx].cantidad += 1;
    saveCart(newCart);
  };

  const decreaseQuantity = (idx) => {
    const newCart = [...cart];
    if (newCart[idx].cantidad > 1) {
      newCart[idx].cantidad -= 1;
    } else {
      newCart.splice(idx, 1);
    }
    saveCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const getQuantity = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getTotal,
      getQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};
