import React, { createContext, useState, useEffect, useRef } from 'react';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Mini-carrito UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Toast state
  const [toast, setToast] = useState({ visible: false, message: '' });
  const toastTimer = useRef(null);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(v => !v);

  useEffect(() => {
    const raw = localStorage.getItem('carrito');
    let storedCart = [];
    try {
      storedCart = raw ? JSON.parse(raw) : [];
    } catch {
      storedCart = [];
    }

    // Normalize legacy shapes to { nombre: string, precio: number, cantidad: number }
    const normalizeItem = (it) => {
      if (!it || typeof it !== 'object') return null;

      // Case: full product shape in English with quantity
      if ('name' in it && 'price' in it) {
        return {
          nombre: String(it.name ?? 'Sin nombre'),
          precio: Number(it.price ?? 0) || 0,
          cantidad: Number(it.quantity ?? it.cantidad ?? 1) || 1,
        };
      }

      // Case: expected shape but nombre accidentally an object
      if (typeof it.nombre === 'object' && it.nombre) {
        return {
          nombre: String(it.nombre.name ?? it.nombre.nombre ?? 'Sin nombre'),
          precio: Number(it.precio ?? it.nombre.price ?? 0) || 0,
          cantidad: Number(it.cantidad ?? it.quantity ?? 1) || 1,
        };
      }

      // Default expected shape in Spanish
      return {
        nombre: String(it.nombre ?? 'Sin nombre'),
        precio: Number(it.precio ?? 0) || 0,
        cantidad: Number(it.cantidad ?? it.quantity ?? 1) || 1,
      };
    };

    const normalized = Array.isArray(storedCart)
      ? storedCart.map(normalizeItem).filter(Boolean)
      : [];

    setCart(normalized);
    localStorage.setItem('carrito', JSON.stringify(normalized));
  }, []);

  // Clear toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('carrito', JSON.stringify(newCart));
  };

  const addToCart = (nombre, precio, imagen) => {
    const newCart = [...cart];
    const idx = newCart.findIndex(item => item.nombre === nombre && item.precio === precio);
    if (idx !== -1) {
      newCart[idx].cantidad += 1;
    } else {
      const entry = { nombre: String(nombre), precio: Number(precio) || 0, cantidad: 1 };
      if (imagen) entry.imagen = imagen;
      newCart.push(entry);
    }
    saveCart(newCart);
    // Abrir mini-carrito al agregar
    setIsCartOpen(true);
    // Mostrar toast
    showToast('Agregado al carrito');
  };

  const removeFromCart = (idx) => {
    const newCart = [...cart];
    newCart.splice(idx, 1);
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
    showToast('Carrito vaciado');
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

  const showToast = (message, duration = 1800) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: true, message });
    toastTimer.current = setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, duration);
  };

  const closeToast = () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: false, message: '' });
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getTotal,
      getQuantity,
      // Mini-carrito state/control
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      // Toast
      toast,
      closeToast,
      // Actions
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
